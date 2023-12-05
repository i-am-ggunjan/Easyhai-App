import React, { useState, useEffect, useContext } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground, StatusBar, StyleSheet, Image, ScrollView, RefreshControl } from 'react-native'
import { AuthContext } from '../../../context/authContext'
import { GlobalStyles } from '../../../styles/globalStyles'
import ProfileBg from "../../../assets/images/ProfileBackground.png"
import ProfileImage from "../../../assets/images/ProfileImage.png"
import { Color } from '../../../styles/colors'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useWindowDimensions } from 'react-native'
import { BookmarkSvg, EditAddressSvg, InviteFriendSvg, LanguageSvg, LogoutSvg, OrderHistorySvg, PaymentSvg, ProfileSvg, SecuritySvg } from '../../../assets/icons'
import ProfileList from '../../../components/cards/ProfileList'
import LogoutModal from '../../../components/modals/Logout'

const Profile = (props) => {
    const { width } = useWindowDimensions()
    const { userInfo } = useContext(AuthContext)
    const [refreshing, setRefreshing] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
            <ImageBackground source={ProfileBg} style={[styles.profileBg]}>
                <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                    <MaterialCommunityIcons name='arrow-left' color={Color.white} size={25} />
                    <Text style={{ fontSize: 22, fontWeight: 500, color: Color.white }}>Profile</Text>
                </View>

                <View style={{ flexDirection: "row", gap: 20, alignItems: "center", paddingLeft: 20, flexWrap: "wrap" }}>
                    <Image source={ProfileImage} resizeMode='cover' style={{ height: 90, width: 90, borderRadius: 100 }} />
                    <View style={{ alignItems: "flex-start", gap: 5, flexBasis: "62%" }}>
                        <Text style={{ fontSize: 20, fontWeight: 500, color: Color.white }}>{userInfo?.name?.firstName} {userInfo?.name?.lastName}</Text>
                        <Text style={{ fontSize: 14, color: Color.white }}>{userInfo?.email}</Text>
                        <TouchableOpacity onPress={() => console.log("Edit Profile")}>
                            <Text style={{ fontSize: 12, color: Color.secondary, borderBottomWidth: 1, borderBottomColor: Color.secondary, marginTop: 5 }}>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

            <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ flexGrow: 1 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={{ flex: 1, paddingVertical: 30, paddingHorizontal: 35, gap: 30 }}>

                    <TouchableOpacity activeOpacity={0.7} onPress={() => console.log("Help Center")}>
                        <ProfileList name={'Personal Info'} svg={<ProfileSvg />} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} onPress={() => console.log("Help Center")}>
                        <ProfileList name={'Edit Address'} svg={<EditAddressSvg />} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} onPress={() => console.log("Security")}>
                        <ProfileList name={'Security'} svg={<SecuritySvg />} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} onPress={() => console.log("Payment")}>
                        <ProfileList name={'Payment'} svg={<PaymentSvg />} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} onPress={() => console.log("About Easyhaionline")}>
                        <ProfileList name={'Order History'} svg={<OrderHistorySvg />} />
                    </TouchableOpacity>


                    <TouchableOpacity activeOpacity={0.7} onPress={() => console.log("Language")}>
                        <ProfileList name={'Language'} svg={<LanguageSvg />} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} onPress={() => console.log("Invite Friends")}>
                        <ProfileList name={'Invite Friends'} svg={<InviteFriendSvg />} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} onPress={() => console.log("Invite Friends")}>
                        <ProfileList name={'Bookmark'} svg={<BookmarkSvg />} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} onPress={() => setModalVisible(true)}>
                        <ProfileList name={'Logout'} svg={<LogoutSvg />} />
                    </TouchableOpacity>

                    {/* Modal */}
                    <LogoutModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Profile

const styles = StyleSheet.create({
    profileBg: {
        paddingHorizontal: 15, paddingTop: 25, gap: 35, minHeight: 280, paddingBottom: 85
    }
})