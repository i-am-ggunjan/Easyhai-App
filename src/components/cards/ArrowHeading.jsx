import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { BackArrowSvg } from '../../assets/icons'
import { Color } from '../../styles/colors'
import { useNavigation } from '@react-navigation/native'

const ArrowHeading = ({ heading }) => {
    const nav = useNavigation()
    return (
        <View style={{ flexDirection: "row", gap: 20, alignItems: "center", paddingVertical: 15, paddingHorizontal: 15 }}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => nav.goBack()}>
                <BackArrowSvg color={Color.heading} />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: 500, color: Color.heading }}>{heading}</Text>
        </View>
    )
}

export default ArrowHeading