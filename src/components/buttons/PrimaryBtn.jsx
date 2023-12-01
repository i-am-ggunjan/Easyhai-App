import React from 'react'
import { View, Text } from 'react-native'
import { Color } from '../../styles/colors'

const PrimaryBtn = ({ name }) => {
    return (
        <Text style={{ backgroundColor: Color.primary, color: Color.white, textAlign: "center", paddingVertical: 12, borderRadius: 8, fontWeight: 600, fontSize: 16 }}>{name}</Text>
    )
}

export default PrimaryBtn