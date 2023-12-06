import { View, Text, TextInput, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useContext } from 'react'
import { Color } from '../../../styles/colors'
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { AuthContext } from '../../../context/authContext'
import ProfileImage from "../../../assets/images/ProfileImage.png"
import { AskDoubtSvg, AssisgmentSvg, AttendenceSvg, EasyhaiSvg, LiveClassSvg, ProgressSvg, ReportSvg, StudyMaterialSvg, TestSvg } from '../../../assets/icons'
import CarouselOne from "../../../assets/images/CarouselOne.png"
import CarouselTwo from "../../../assets/images/CarouselTwo.png"
import { useWindowDimensions } from 'react-native'
import { ScrollView } from 'react-native'

const Home = () => {
    const { width } = useWindowDimensions()
    const { userInfo } = useContext(AuthContext)
    const [searchTerm, setSearchTerm] = useState('')
    console.log("Search Term ::: ", searchTerm)
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
        { id: 2, image: CarouselTwo },
        { id: 3, image: CarouselOne },
        { id: 4, image: CarouselTwo },
        { id: 5, image: CarouselOne },
        { id: 6, image: CarouselTwo }
    ]

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
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: 10, borderRadius: 8, borderColor: Color.border, backgroundColor: Color.lightBackground, borderColor: Color.primary, borderWidth: 1 }}>
                            <Ionicons name="search-outline" size={20} color={Color.primary} />
                            <TextInput onChangeText={handleSearch} placeholder="Search" underlineColorAndroid="transparent" style={{ flex: 1 }} />
                            <View style={{ borderLeftWidth: 1, paddingLeft: 10, borderColor: Color.primary }}>
                                <Feather name="mic" size={18} color={Color.primary} />
                            </View>
                        </View>

                        {/* Carousel */}
                        <View>
                            <FlatList
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
                                    <TouchableOpacity key={index} style={{ alignItems: "center" }} >
                                        <>{value.icon}</>
                                        <Text style={{ color: Color.heading, fontWeight: 500, marginTop: -5 }}>{value?.name}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                        {/* Most Popular Courses */}
                        <View style={{ gap: 10 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ color: Color.heading, fontWeight: 500, fontSize: 17 }}>Most Popular Courses</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: Color.seeAll, fontSize: 14, fontWeight: 500 }}>see all</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Top Mentors */}
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
                        </View>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home