import React, { useState, useContext } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground, StatusBar, StyleSheet, Image, ScrollView, RefreshControl } from 'react-native'
import { AuthContext } from '../../../../context/authContext'
import { Color } from '../../../../styles/colors'
import { ProfileSvg, BackArrowSvg, EditAddressSvg, } from '../../../../assets/icons'
import ProfileList from '../../../../components/cards/ProfileList'
import ProfileBg from "../../../../assets/images/ProfileViewBg.png"
import ProfileImage from "../../../../assets/images/ProfileImage.png"

const ProfileInfo = (props) => {
    const { userInfo } = useContext(AuthContext)
    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
            <ImageBackground source={ProfileBg} style={{ paddingHorizontal: 15, paddingTop: 35, gap: 25, minHeight: 300, paddingBottom: 85, marginTop: -10 }}>
                <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.goBack()}>
                        <BackArrowSvg color={Color.white} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: 500, color: Color.white }}>Personal Info</Text>
                </View>

                <View style={{ paddingBottom: 40, alignItems: "center", gap: 15 }}>
                    <Image source={ProfileImage} resizeMode='cover' style={{ height: 90, width: 90, borderRadius: 100 }} />
                    <View style={{ gap: 5, alignItems: "center" }}>
                        <Text style={{ fontSize: 18, fontWeight: 500, color: Color.white, textTransform: "capitalize" }}>{userInfo?.name?.firstName} {userInfo?.name?.lastName}</Text>
                        <Text style={{ fontSize: 14, color: Color.white, textTransform: "lowercase" }}>{userInfo?.email}</Text>
                    </View>
                </View>
            </ImageBackground>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 25, gap: 30 }}>

                    <View style={{ borderBottomWidth: 1, borderColor: '#B6B3BF', paddingBottom: 5, gap: 4 }}>
                        <Text style={{ color: Color.paragraph }}>Mobile*</Text>
                        <Text style={{ color: Color.paragraph, fontWeight: 500, fontSize: 15 }}>{userInfo?.phoneNumber}</Text>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderColor: '#B6B3BF', paddingBottom: 5, gap: 4 }}>
                        <Text style={{ color: Color.paragraph }}>Grade/Course*</Text>
                        <Text style={{ color: Color.paragraph, fontWeight: 500, fontSize: 15 }}>10th Grade</Text>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderColor: '#B6B3BF', paddingBottom: 5, gap: 4 }}>
                        <Text style={{ color: Color.paragraph }}>Gender*</Text>
                        <Text style={{ color: Color.paragraph, fontWeight: 500, fontSize: 15 }}>{userInfo?.gender}</Text>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderColor: '#B6B3BF', paddingBottom: 5, gap: 4 }}>
                        <Text style={{ color: Color.paragraph }}>Date of Birth*</Text>
                        <Text style={{ color: Color.paragraph, fontWeight: 500, fontSize: 15 }}>{new Date(userInfo?.dateOfBirth).toLocaleDateString('en-GB')}</Text>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default ProfileInfo

const styles = StyleSheet.create({
    profileBg: {
        paddingHorizontal: 15, paddingTop: 25, gap: 35, minHeight: 290, paddingBottom: 85
    }
})