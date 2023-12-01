import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Color } from '../../styles/colors'

const OnBoarding = (props) => {
    return (
        <View>
            <Text>OnBoarding</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                <Text style={{ color: Color.primary, textAlign: "center", fontWeight: 600, fontSize: 14, marginBottom: 14 }}>Sign up</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OnBoarding