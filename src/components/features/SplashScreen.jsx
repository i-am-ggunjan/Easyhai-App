import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import { Color } from '../../styles/colors'

const SplashScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
            <ActivityIndicator size='large' color={Color.primary} />
        </View>
    )
}

export default SplashScreen