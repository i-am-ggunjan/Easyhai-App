import React, { useState, useEffect, useContext } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground, StatusBar, StyleSheet, Image, ScrollView, RefreshControl } from 'react-native'
import { AuthContext } from '../../../context/authContext'
import { GlobalStyles } from '../../../styles/globalStyles'
import ProfileBg from "../../../assets/images/ProfileBackground.png"
import ProfileImage from "../../../assets/images/ProfileImage.png"
import { Color } from '../../../styles/colors'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useWindowDimensions } from 'react-native'
import { BackArrowSvg, BookmarkSvg, EditAddressSvg, InviteFriendSvg, LanguageSvg, LogoutSvg, OrderHistorySvg, PaymentSvg, ProfileSvg, SecuritySvg } from '../../../assets/icons'
import ProfileList from '../../../components/cards/ProfileList'
import LogoutModal from '../../../components/modals/Logout'
import PaymentModal from '../../../components/modals/Payment'

const Profile = (props) => {
    const { width } = useWindowDimensions()
    const { userInfo } = useContext(AuthContext)
    const [refreshing, setRefreshing] = useState(false)
    const [logoutModalVisible, setLogoutModalVisible] = useState(false)
    const [paymentModalVisible, setPaymentModalVisible] = useState(false)

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
                    <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.goBack()}>
                        <BackArrowSvg color={Color.white} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: 500, color: Color.white }}>Profile</Text>
                </View>

                <View style={{ flexDirection: "row", gap: 20, alignItems: "center", paddingLeft: 20, flexWrap: "wrap" }}>
                    <Image source={ProfileImage} resizeMode='cover' style={{ height: 90, width: 90, borderRadius: 100 }} />
                    <View style={{ alignItems: "flex-start", gap: 5, flexBasis: "62%" }}>
                        <Text style={{ fontSize: 18, fontWeight: 500, color: Color.white, textTransform: "capitalize" }}>{userInfo?.name?.firstName} {userInfo?.name?.lastName}</Text>
                        <Text style={{ fontSize: 14, color: Color.white, textTransform: "lowercase" }}>{userInfo?.email}</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('ProfileEdit')} activeOpacity={0.6}>
                            <Text style={{ fontSize: 12, color: Color.secondary, borderBottomWidth: 1, borderBottomColor: Color.secondary, marginTop: 5 }}>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={{ flex: 1, paddingVertical: 30, paddingHorizontal: 35, gap: 30 }}>

                    <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate("ProfileInfo")}>
                        <ProfileList name={'Personal Info'} svg={<ProfileSvg />} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} onPress={() => console.log("Edit Address")}>
                        <ProfileList name={'Edit Address'} svg={<EditAddressSvg />} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate("Security")}>
                        <ProfileList name={'Security'} svg={<SecuritySvg />} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} onPress={() => setPaymentModalVisible(true)}>
                        <ProfileList name={'Payment'} svg={<PaymentSvg />} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate("MyOrder")}>
                        <ProfileList name={'My Order'} svg={<OrderHistorySvg />} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} onPress={() => console.log("Language")}>
                        <ProfileList name={'Language'} svg={<LanguageSvg />} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate("Notification")}>
                        <ProfileList name={'Notification'} svg={<InviteFriendSvg />} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} onPress={() => console.log("Wish List")}>
                        <ProfileList name={'WishList'} svg={<BookmarkSvg />} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} onPress={() => setLogoutModalVisible(true)}>
                        <ProfileList name={'Logout'} svg={<LogoutSvg />} />
                    </TouchableOpacity>

                    {/* Modal */}
                    <LogoutModal modalVisible={logoutModalVisible} setModalVisible={setLogoutModalVisible} />
                    <PaymentModal modalVisible={paymentModalVisible} setModalVisible={setPaymentModalVisible} />
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Profile

const styles = StyleSheet.create({
    profileBg: {
        paddingHorizontal: 15, paddingTop: 25, gap: 35, minHeight: 290, paddingBottom: 85
    }
})