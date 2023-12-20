import React, { useState, useContext } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground, StatusBar, StyleSheet, Image, ScrollView, RefreshControl, TextInput } from 'react-native'
import { AuthContext } from '../../../../context/authContext'
import { Color } from '../../../../styles/colors'
import { ProfileSvg, BackArrowSvg, EditAddressSvg, } from '../../../../assets/icons'
import ProfileList from '../../../../components/cards/ProfileList'
import ProfileBg from "../../../../assets/images/ProfileViewBg.png"
import ProfileImage from "../../../../assets/images/ProfileImage.png"
import { Dropdown } from 'react-native-element-dropdown'

const ProfileEdit = (props) => {
    const { userInfo } = useContext(AuthContext)

    const [profileData, setProfileData] = useState({ name: '', email: '', phoneNumber: '', grade: '', gender: '', dateOfBirth: '' })
    console.log(profileData)

    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000)
    }

    const genderData = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' },
    ]

    const gradeData = [
        { label: '9th Class', value: '9th Class' },
        { label: '10th Class', value: '10th Class' },
        { label: '12th Class', value: '12th Class' },
    ]

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
            <ImageBackground source={ProfileBg} style={{ paddingHorizontal: 15, paddingTop: 35, gap: 25, minHeight: 300, paddingBottom: 85, marginTop: -10 }}>
                <View style={{ flexDirection: "row", gap: 10, alignItems: "center", justifyContent: "space-between" }}>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.goBack()}>
                        <BackArrowSvg color={Color.white} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Text style={{ fontSize: 16, fontWeight: 500, color: Color.secondary, borderWidth: 1, borderColor: Color.secondary, paddingVertical: 4, paddingHorizontal: 10, borderRadius: 7 }}>Save</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ paddingBottom: 40, alignItems: "center", gap: 15 }}>
                    <Image source={ProfileImage} resizeMode='cover' style={{ height: 90, width: 90, borderRadius: 100 }} />
                </View>
            </ImageBackground>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={{ flex: 1, paddingVertical: 30, paddingHorizontal: 25, gap: 30 }}>

                    <View style={{ borderBottomWidth: 1, borderColor: '#B6B3BF', paddingBottom: 5, gap: 4 }}>
                        <Text style={{ color: Color.paragraph }}>Name*</Text>
                        <TextInput onChangeText={(item) => setProfileData({ ...profileData, name: item })} placeholder='Name Kumar' style={{ paddingVertical: 1, color: Color.paragraph }} />
                    </View>

                    <View style={{ borderBottomWidth: 1, borderColor: '#B6B3BF', paddingBottom: 5, gap: 4 }}>
                        <Text style={{ color: Color.paragraph }}>Email Id*</Text>
                        <TextInput onChangeText={(item) => setProfileData({ ...profileData, email: item })} placeholder='Name Kumar' style={{ paddingVertical: 1, color: Color.paragraph }} />
                    </View>

                    <View style={{ borderBottomWidth: 1, borderColor: '#B6B3BF', paddingBottom: 5, gap: 4 }}>
                        <Text style={{ color: Color.paragraph }}>Mobile*</Text>
                        <TextInput onChangeText={(item) => setProfileData({ ...profileData, phoneNumber: item })} placeholder='Name Kumar' style={{ paddingVertical: 1, color: Color.paragraph }} />
                    </View>

                    <View style={{ borderBottomWidth: 1, borderColor: '#B6B3BF', paddingBottom: 5, gap: 4 }}>
                        <Text style={{ color: Color.paragraph }}>Grade/Course*</Text>
                        <Dropdown
                            style={{ flex: 1.15 }}
                            placeholderStyle={{ fontSize: 14 }}
                            selectedTextStyle={{ fontSize: 14 }}
                            itemTextStyle={{ fontSize: 13, color: Color.paragraph }}
                            data={gradeData}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder="Grade"
                            value={profileData?.grade}
                            onChange={item => {
                                setProfileData({ ...profileData, grade: item?.value })
                            }}
                        />
                    </View>

                    <View style={{ borderBottomWidth: 1, borderColor: '#B6B3BF', paddingBottom: 5, gap: 4 }}>
                        <Text style={{ color: Color.paragraph }}>Gender*</Text>
                        <Dropdown
                            style={{ flex: 1.15 }}
                            placeholderStyle={{ fontSize: 14 }}
                            selectedTextStyle={{ fontSize: 14 }}
                            itemTextStyle={{ fontSize: 13, color: Color.paragraph }}
                            data={genderData}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder="Gender"
                            value={profileData?.gender}
                            onChange={item => {
                                setProfileData({ ...profileData, gender: item?.value })
                            }}
                        />
                    </View>

                    <View style={{ borderBottomWidth: 1, borderColor: '#B6B3BF', paddingBottom: 5, gap: 4 }}>
                        <Text style={{ color: Color.paragraph }}>Date of Birth*</Text>
                        <TextInput placeholder='Name Kumar' style={{ paddingVertical: 1, color: Color.paragraph }} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default ProfileEdit

const styles = StyleSheet.create({
    profileBg: {
        paddingHorizontal: 15, paddingTop: 25, gap: 35, minHeight: 290, paddingBottom: 85
    }
})