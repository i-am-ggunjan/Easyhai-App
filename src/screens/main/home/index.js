import { View, Text, TextInput, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import { Color } from '../../../styles/colors'
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { AuthContext } from '../../../context/authContext'
import ProfileImage from "../../../assets/images/ProfileImage.png"

const Home = () => {
    const { userInfo } = useContext(AuthContext)
    const [searchTerm, setSearchTerm] = useState('')
    console.log("Search Term ::: ", searchTerm)
    const handleSearch = (text) => {
        setSearchTerm(text)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white, paddingHorizontal: 15, paddingTop: 10, paddingBottom: 25, gap: 20 }}>

            <View style={{ flexDirection: "row", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
                <Image source={ProfileImage} resizeMode='cover' style={{ height: 50, width: 50, borderRadius: 100 }} />
                <View style={{ alignItems: "flex-start", gap: 1, flexBasis: "62%" }}>
                    <Text style={{ fontSize: 18, fontWeight: 500, color: Color.primary }}>{userInfo?.name?.firstName} {userInfo?.name?.lastName}</Text>
                    <Text style={{ fontSize: 13, color: Color.primary }}>Welcome to Easyhaionline</Text>
                </View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: 10, borderRadius: 8, borderColor: Color.border, backgroundColor: Color.lightBackground, borderColor: Color.primary, borderWidth: 1 }}>
                <Ionicons name="search-outline" size={20} color={Color.primary} />
                <TextInput onChangeText={handleSearch} placeholder="Search" underlineColorAndroid="transparent" style={{ flex: 1 }} />
                <View style={{ borderLeftWidth: 1, paddingLeft: 10, borderColor: Color.primary }}>
                    <Feather name="mic" size={18} color={Color.primary} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home