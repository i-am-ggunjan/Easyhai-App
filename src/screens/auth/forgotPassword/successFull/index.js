import React, { useEffect } from 'react'
import { ScrollView, Text, View, Image, SafeAreaView } from 'react-native'
import { Color } from '../../../../styles/colors'
import { GlobalStyles } from '../../../../styles/globalStyles'
import SuccessfullImage from "../../../../assets/images/Successfull.png"
import AuthEllipse from '../../../../components/cards/AuthEllipse'
import AuthLine from '../../../../components/cards/AuthLine'

const SuccessFull = (props) => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate("Login")
        }, 2000);
    }, [])
    return (
        <SafeAreaView style={GlobalStyles.global.authSafeAreaView}>
            <AuthEllipse />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, gap: 50, paddingVertical: 20, paddingTop: 150 }}>
                    <Image source={SuccessfullImage} style={{ height: 270, objectFit: "contain", width: "100%" }} />

                    <View style={{ gap: 20 }}>
                        <Text style={{ fontSize: 32, color: Color.primary, fontWeight: 700, paddingRight: 15, textAlign: "center" }}>Successful</Text>
                        <Text style={[{ color: Color.paragraph, textAlign: "center", paddingHorizontal: 15 }]}>Your password has been updated, please change your password regularly to avoid this happening</Text>
                    </View>
                </View>
            </ScrollView>
            <AuthLine />
        </SafeAreaView>
    )
}

export default SuccessFull
