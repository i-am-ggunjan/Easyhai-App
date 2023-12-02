import { Animated, TouchableOpacity, View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Svg, { G, Circle } from 'react-native-svg'
import Ionicons from "react-native-vector-icons/Ionicons"
import { Color } from '../../styles/colors'
import { useNavigation } from '@react-navigation/native'

const OnboardingNextBtn = ({ percentage, scrollTo, currentIndex, lastLength }) => {
    const navigation = useNavigation()
    const size = 70
    const strokeWidth = 2
    const center = size / 2
    const radius = size / 2 - strokeWidth / 2
    const circumference = 2 * Math.PI * radius

    const progressAnimation = useRef(new Animated.Value(0)).current
    const progressRef = useRef(null)

    const animation = (toValue) => {
        return Animated.timing(progressAnimation, {
            toValue, duration: 250, useNativeDriver: true
        }).start()
    }

    useEffect(() => {
        animation(percentage)
    }, [percentage])

    useEffect(() => {
        progressAnimation.addListener(
            (value) => {
                const strokeDashoffset = circumference - (circumference * value.value) / 100

                if (progressRef?.current) {
                    progressRef.current.setNativeProps({ strokeDashoffset })
                }
            }, [percentage])

        return () => {
            progressAnimation.removeAllListeners()
        }
    }, [])

    return (
        <>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Svg width={size} height={size}>
                    <G rotation="-90" origin={center}>
                        <Circle stroke={Color.iconBg} cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />
                        <Circle ref={progressRef} stroke={Color.primary} cx={center} cy={center} r={radius} strokeWidth={strokeWidth}
                            strokeDasharray={circumference}
                            // strokeDashoffset={circumference - (circumference * percentage) / 100}
                            fill="white" />
                    </G>
                </Svg>

                <TouchableOpacity onPress={currentIndex === lastLength ? () => navigation.navigate("Welcome") : scrollTo} style={{ position: "absolute", backgroundColor: Color.primary, borderRadius: 50, height: 58, width: 58, justifyContent: 'center', alignItems: 'center' }} activeOpacity={0.6}>
                    {currentIndex === lastLength ? <Text style={{ color: Color.white, fontWeight: 500, fontSize: 18 }}>Go</Text> : <Ionicons name="arrow-forward" size={30} color={Color.white} />}
                </TouchableOpacity>
            </View>
        </>
    )
}

export default OnboardingNextBtn
