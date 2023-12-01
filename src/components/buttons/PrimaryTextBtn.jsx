import React from 'react'
import { Text } from 'react-native'
import { GlobalStyles } from '../../styles/globalStyles'

const PrimaryTextBtn = ({ name }) => {
    return (
        <Text style={GlobalStyles.auth.textBtn}>{name}</Text>
    )
}

export default PrimaryTextBtn