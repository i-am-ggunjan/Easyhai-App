import { View, Animated, useWindowDimensions } from 'react-native'
import React from 'react'
import { Color } from '../../styles/colors'

const OnboardingPaginator = ({ data, scrollX }) => {
    const { width } = useWindowDimensions()
    return (
        <View style={{ flexDirection: "row", height: 10, }}>
            {
                data.map((value, index) => {
                    const inputRange = [(index - 1) * width, index * width, (index + 1) * width]
                    const dotWidth = scrollX.interpolate({
                        inputRange, outputRange: [10, 30, 10],
                        extrapolate: "clamp"
                    })
                    const opacity = scrollX.interpolate({
                        inputRange, outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp"
                    })
                    return <Animated.View key={index.toString()} style={[{ height: 10, borderRadius: 5, backgroundColor: Color.primary, marginHorizontal: 5 }, { width: dotWidth, opacity }]} />
                })
            }
        </View>
    )
}

export default OnboardingPaginator
