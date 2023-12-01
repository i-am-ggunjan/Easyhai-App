import React from 'react'
import { View, Text } from 'react-native'
import { GlobalStyles } from '../../styles/globalStyles'

const AuthHeading = ({ heading, subHeading }) => {
    return (
        <View style={{ gap: 10 }}>
            <Text style={GlobalStyles.auth.heading}>{heading}</Text>
            <Text style={GlobalStyles.auth.subHeading}>{subHeading}</Text>
        </View>
    )
}

export default AuthHeading