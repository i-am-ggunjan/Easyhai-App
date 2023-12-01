import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Color } from '../../styles/colors'
import { GlobalStyles } from '../../styles/globalStyles'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const AuthSocial = () => {
    return (
        <View style={{ gap: 14, alignItems: "center" }}>
            <Text style={[GlobalStyles.auth.textBtn]}>Or Continue with</Text>
            <View style={{ gap: 10, flexDirection: "row" }}>
                <TouchableOpacity style={GlobalStyles.auth.iconBg}>
                    <MaterialCommunityIcons name="google" size={22} color={Color.primary} />
                </TouchableOpacity>
                <TouchableOpacity style={GlobalStyles.auth.iconBg}>
                    <MaterialCommunityIcons name="facebook" size={22} color={Color.primary} />
                </TouchableOpacity>
                <TouchableOpacity style={GlobalStyles.auth.iconBg}>
                    <MaterialCommunityIcons name="apple" size={22} color={Color.primary} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AuthSocial