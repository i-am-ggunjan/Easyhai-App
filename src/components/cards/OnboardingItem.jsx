import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions, Animated, TouchableOpacity } from 'react-native'
import { Color } from '../../styles/colors'
import { useNavigation } from '@react-navigation/native'

const OnboardingItems = ({ item, index, scrollX }) => {
    const navigation = useNavigation()
    const { width } = useWindowDimensions()
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width]
    console.log("Input Range :: ", inputRange)
    const opacity = scrollX.interpolate({
        inputRange, outputRange: [0, 1, 0],
        extrapolate: "clamp"
    })
    // const translateY = scrollX.interpolate({
    //     inputRange, outputRange: [100, 0, 100],
    //     extrapolate: "clamp"
    // })
    return (
        <Animated.View style={[styles.container, { width }]}>
            <View style={{ width: width, justifyContent: "flex-end", alignItems: "flex-end", paddingEnd: 15, paddingTop: 20 }}>
                <TouchableOpacity onPress={() => navigation.replace("Welcome")}>
                    <Text style={{ color: Color.white, borderWidth: 1, borderColor: Color.white, paddingHorizontal: 15, paddingVertical: 3, borderRadius: 15 }}>Skip</Text>
                </TouchableOpacity>
            </View>
            <Animated.Image source={item?.image} style={[styles.image, { width: width - 50, height: width, resizeMode: "contain", opacity, }]} />
            <View style={{ flex: 0.3, backgroundColor: Color.white, justifyContent: "center", borderTopRightRadius: 40, borderTopLeftRadius: 40, width: width }}>
                <Text style={styles?.title}>{item?.title}</Text>
                <Text style={styles?.description}>{item?.description}</Text>
            </View>
        </Animated.View>
    )
}

export default OnboardingItems

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.primary
    },
    image: {
        flex: 0.7,
    },
    title: {
        fontWeight: '800',
        fontSize: 22,
        marginBottom: 10,
        color: Color.primary,
        textAlign: "center",
    },
    description: {
        fontWeight: '400',
        color: Color.paragraph,
        textAlign: "center",
        paddingHorizontal: 64,
        fontSize: 15,
    }
})