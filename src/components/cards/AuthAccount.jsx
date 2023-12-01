import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Color } from '../../styles/colors'
import PrimaryTextBtn from '../buttons/PrimaryTextBtn'
import { useNavigation } from '@react-navigation/native';

const AuthAccount = ({ para, name, nav }) => {
    const navigation = useNavigation()

    return (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ color: Color.paragraph }}>{para} </Text>
            <TouchableOpacity onPress={() => navigation.navigate(nav)}>
                <PrimaryTextBtn name={name} />
            </TouchableOpacity>
        </View>
    )
}

export default AuthAccount