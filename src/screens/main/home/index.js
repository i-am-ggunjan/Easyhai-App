import { View, Text, TextInput, SafeAreaView, Image, TouchableOpacity, FlatList, ScrollView, useWindowDimensions, Platform, PermissionsAndroid } from 'react-native'
import React, { useState, useContext, useEffect, useRef } from 'react'
import { Color } from '../../../styles/colors'
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"
import { AuthContext } from '../../../context/authContext'
import ProfileImage from "../../../assets/images/ProfileImage.png"
import { AskDoubtSvg, AssisgmentSvg, AttendenceSvg, LiveClassSvg, ProgressSvg, ReportSvg, StudyMaterialSvg, TestSvg } from '../../../assets/icons'
import CarouselOne from "../../../assets/images/CarouselOne.png"
import CarouselTwo from "../../../assets/images/CarouselTwo.png"

const Home = () => {
    const { width } = useWindowDimensions()
    const { userInfo } = useContext(AuthContext)
    const [searchTerm, setSearchTerm] = useState('')
    const flatListRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const handleSearch = (text) => {
        setSearchTerm(text)
    }

    const categoryItems = [
        { name: "Study Material", icon: < StudyMaterialSvg /> },
        { name: "Assignment", icon: < AssisgmentSvg /> },
        { name: "Ask Doubt", icon: < AskDoubtSvg /> },
        { name: "Attendence", icon: < AttendenceSvg /> },
        { name: "Live Class", icon: < LiveClassSvg /> },
        { name: "Progress", icon: < ProgressSvg /> },
    ]

    const carouselSlide = [
        { id: 1, image: CarouselOne },
        { id: 2, image: CarouselOne },
        { id: 3, image: CarouselOne },
        { id: 4, image: CarouselOne },
        { id: 5, image: CarouselOne },
        { id: 6, image: CarouselOne }
    ]

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextIndex = (currentIndex + 1) % carouselSlide.length;
            setCurrentIndex(nextIndex)
            // Check if the next index is within the bounds of the data array
            if (nextIndex < carouselSlide.length) {
                // Scroll to the next index
                flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
            }
        }, 3000)
        return () => clearInterval(intervalId);
    }, [carouselSlide])

    useEffect(() => {
        const requestPermissions = async () => {
            try {
                if (Platform.OS === 'android') {
                    const grantedCamera = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
                    const grantedMicrophone = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO)
                    const grantedGallery = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)

                    const grantedCalender = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CALENDAR)
                    const grantedCallLogs = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CALL_LOG)
                    const grantedBodySensor = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.BODY_SENSORS)
                    const grantedContacts = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS)

                    const grantedPhone = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CALL_PHONE)
                    const grantedSms = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_SMS)

                    // const grantedLocation = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION)

                    // const grantedWriteCallLogs = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_CALL_LOG)
                    // const grantedWriteContacts = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS)
                    // const grantedWriteCalender = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_CALENDAR)

                    // const grantedNearByDevice = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
                    // const grantedPhysicalActivity = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)

                    if (
                        grantedCamera === PermissionsAndroid.RESULTS.GRANTED &&
                        grantedMicrophone === PermissionsAndroid.RESULTS.GRANTED &&
                        grantedGallery === PermissionsAndroid.RESULTS.GRANTED &&
                        grantedCalender === PermissionsAndroid.RESULTS.GRANTED &&
                        grantedCallLogs === PermissionsAndroid.RESULTS.GRANTED &&
                        grantedBodySensor === PermissionsAndroid.RESULTS.GRANTED &&
                        grantedContacts === PermissionsAndroid.RESULTS.GRANTED &&
                        grantedPhone === PermissionsAndroid.RESULTS.GRANTED &&
                        grantedSms === PermissionsAndroid.RESULTS.GRANTED
                    ) {
                        console.log('Permissions granted successfully');
                    } else {
                        console.log('Permissions denied');
                    }
                }
            } catch (error) {
                console.error('Error requesting permissions:', error);
            }
        };

        requestPermissions();
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white, paddingHorizontal: 15, paddingTop: 10, paddingBottom: 10, gap: 20 }}>

            <View style={{ flexDirection: "row", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
                <Image source={ProfileImage} resizeMode='cover' style={{ height: 50, width: 50, borderRadius: 100 }} />
                <View style={{ alignItems: "flex-start", gap: 1, flexBasis: "62%" }}>
                    <Text style={{ fontSize: 18, fontWeight: 500, color: Color.primary }}>{userInfo?.name?.firstName} {userInfo?.name?.lastName}</Text>
                    <Text style={{ fontSize: 13, color: Color.primary }}>Welcome to Easyhaionline</Text>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, rowGap: 15 }}>
                    <View style={{ gap: 7 }}>
                        {/* Search Field */}
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: 10, borderRadius: 8, backgroundColor: Color.lightBackground }}>
                            <Ionicons name="search-outline" size={20} color={Color.primary} />
                            <TextInput onChangeText={handleSearch} placeholder="Search" underlineColorAndroid="transparent" style={{ flex: 1 }} />
                            <View style={{ borderLeftWidth: 1, paddingLeft: 10, borderColor: Color.primary }}>
                                <Feather name="mic" size={18} color={Color.primary} />
                            </View>
                        </View>

                        {/* Carousel */}
                        <View>
                            <FlatList
                                ref={flatListRef}
                                data={carouselSlide} renderItem={({ item, index }) => (
                                    <Image source={item.image} style={{ width: width - 30, objectFit: "contain", marginBottom: -10 }} />
                                )}
                                keyExtractor={(item) => item?.id}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                pagingEnabled
                            />
                        </View>
                    </View>

                    <View style={{ rowGap: 20 }}>
                        {/* Category */}
                        <View style={{ gap: 5 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ color: Color.heading, fontWeight: 500, fontSize: 17 }}>Category</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: Color.seeAll, fontSize: 14, fontWeight: 500 }}>see all</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: "row", columnGap: 10, rowGap: 5, flexWrap: "wrap", justifyContent: "space-between" }}>
                                {categoryItems?.map((value, index) => (
                                    <TouchableOpacity activeOpacity={0.6} key={index} style={{ alignItems: "center" }} >
                                        <>{value.icon}</>
                                        <Text style={{ color: Color.heading, fontWeight: 500, marginTop: -5 }}>{value?.name}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                        {/* <View style={{ gap: 10 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ color: Color.heading, fontWeight: 500, fontSize: 17 }}>Most Popular Courses</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: Color.seeAll, fontSize: 14, fontWeight: 500 }}>see all</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ gap: 10 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ color: Color.heading, fontWeight: 500, fontSize: 17 }}>Top Mentors</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: Color.seeAll, fontSize: 14, fontWeight: 500 }}>see all</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ gap: 10 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ color: Color.heading, fontWeight: 500, fontSize: 17 }}>Top Mentors</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: Color.seeAll, fontSize: 14, fontWeight: 500 }}>see all</Text>
                                </TouchableOpacity>
                            </View>
                        </View> */}

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home