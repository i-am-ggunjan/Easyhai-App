import React from 'react'
import { ScrollView, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { GlobalStyles } from '../../styles/globalStyles'
import { Color } from '../../styles/colors'
import WelcomeImage from "../../assets/images/Welcome.png"
import AuthEllipse from '../../components/cards/AuthEllipse'
import AuthLine from '../../components/cards/AuthLine'

const Welcome = (props) => {
    return (
        <SafeAreaView style={GlobalStyles.global.authSafeAreaView}>
            <AuthEllipse />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, gap: 50, paddingVertical: 20, paddingTop: 80 }}>
                    <Image source={WelcomeImage} style={{ height: 280, objectFit: "contain", width: "100%" }} />
                    <View style={{ gap: 10 }}>
                        <Text style={{ fontSize: 32, color: Color.primary, fontWeight: 700, paddingRight: 15, textAlign: "center" }}>Discover Your Future here</Text>
                        <Text style={[{ color: Color.paragraph, textAlign: "center", paddingHorizontal: 15 }]}>Lorem ipsum dolor sit amet consectetur. Et condimentum. Arcu nunc faucibus amet sodales tristique.</Text>
                    </View>

                    <View style={{ flexDirection: "row", gap: 20, justifyContent: "center" }} >
                        <TouchableOpacity onPress={() => props.navigation.navigate("Login")} style={{ flexBasis: "45%" }}>
                            <Text style={{ backgroundColor: Color.primary, color: Color.white, textAlign: "center", paddingVertical: 12, borderRadius: 8, fontWeight: 600, fontSize: 16 }}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.navigation.navigate("Signup")} style={{ flexBasis: "45%" }}>
                            <Text style={{ borderColor: Color.primary, color: Color.primary, textAlign: "center", paddingVertical: 12, borderRadius: 6, fontWeight: 600, fontSize: 16, borderWidth: 1 }}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <AuthLine />
        </SafeAreaView>
    )
}

export default Welcome
