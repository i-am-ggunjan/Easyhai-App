import React, { useState } from 'react'
import { View, Text, SafeAreaView, RefreshControl, ScrollView, SectionList, TouchableOpacity, Image } from 'react-native'
import ArrowHeading from '../../../../../components/cards/ArrowHeading'
import { Color } from '../../../../../styles/colors'
import { BackArrowSvg } from '../../../../../assets/icons'
import { useNavigation } from '@react-navigation/native'
import TwoCircle from "../../../../../assets/images/TwoCircle.png"

const paidEmiHistory = [
    {
        title: 'Paid EMI',
        data: [
            { title: "CA/CS/CMA Foundation", amount: 500, status: "received" },
            { title: "CA/CS/CMA Foundation", amount: 500, status: "received" },
            { title: "CA/CS/CMA Foundation", amount: 500, status: "deduct" },
            { title: "Doubt Solving", amount: 500, status: "deduct" }
        ],
    }
]

const notPaidEmiHistory = [
    {
        title: 'Not Paid',
        data: [
            { title: "Doubt Solving", amount: 500, status: "deduct" },
            { title: "Doubt Solving", amount: 500, status: "deduct" }
        ],
    }
]

const EMI = (props) => {
    const nav = useNavigation()
    const [activeTab, setActiveTab] = useState(0)

    const [refreshing, setRefreshing] = useState(false)
    console.log(activeTab)
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000)
    }



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
            <View style={{ backgroundColor: Color.primaryTwo, minHeight: 200, paddingTop: 35 }}>
                <View style={{ flexDirection: "row", gap: 20, alignItems: "center", paddingVertical: 15, paddingHorizontal: 15 }}>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => nav.goBack()}>
                        <BackArrowSvg color={Color.light} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: 500, color: Color.light }}>EMI Status</Text>
                </View>
                <Image source={TwoCircle} style={{ position: "absolute", right: 0, height: 200 }} />
            </View>

            <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 15, gap: 25, borderTopRightRadius: 30, borderTopLeftRadius: 30, marginTop: -50, backgroundColor: Color.light }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={() => setActiveTab(0)}>
                        <Text style={{ color: activeTab == 0 ? Color.primaryTwo : Color.paragraph, fontSize: 16, fontWeight: 500, borderBottomColor: activeTab == 0 ? Color.primaryTwo : Color.light, borderBottomWidth: 2, paddingBottom: 4, paddingHorizontal: 4 }}>Overview</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setActiveTab(1)}>
                        <Text style={{ color: activeTab == 1 ? Color.primaryTwo : Color.paragraph, fontSize: 16, fontWeight: 500, borderBottomColor: activeTab == 1 ? Color.primaryTwo : Color.light, borderBottomWidth: 2, paddingBottom: 4, paddingHorizontal: 10 }}>Paid</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setActiveTab(2)}>
                        <Text style={{ color: activeTab == 2 ? Color.primaryTwo : Color.paragraph, fontSize: 16, fontWeight: 500, borderBottomColor: activeTab == 2 ? Color.primaryTwo : Color.light, borderBottomWidth: 2, paddingBottom: 4, paddingHorizontal: 4 }}>Upcoming</Text>
                    </TouchableOpacity>
                </View>

                <EMISwitchTab activeTab={activeTab} />
            </View>
        </SafeAreaView>
    )
}

export default EMI

const EMISwitchTab = ({ activeTab }) => {

    switch (activeTab) {
        case 0:
            return (
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ paddingVertical: 12, gap: 10, paddingHorizontal: 5 }}>
                        {([0, 1]).map(value => (
                            <View>
                                <Text style={{ fontWeight: 500, marginBottom: 15 }}>Course Name</Text>
                                <View style={{ gap: 15, elevation: 5, shadowColor: "#6089AA", backgroundColor: Color.light, paddingHorizontal: 10, paddingVertical: 15, borderRadius: 8, shadowOpacity: 0.6 }}>
                                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                                        <View style={{ height: 40, width: 40, borderRadius: 50, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(11, 64, 93,0.8)" }}>
                                        </View>

                                        <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1 }}>
                                            <View style={{ gap: 3 }}>
                                                <Text style={{ color: Color.paragraph, fontSize: 13 }}>EHO-3/05-97461792124 </Text>
                                                <Text style={{ color: Color.paragraph, fontSize: 13 }}>xyz singh</Text>
                                            </View>
                                            <View style={{ gap: 3 }}>
                                                <Text style={{ fontSize: 13, color: Color.paragraph }}>Purchased Date</Text>
                                                <Text style={{ fontSize: 10, color: Color.primary }}>Mon, 4 Dec 2023</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={{ borderBottomWidth: 1, borderColor: '#BAB6C9' }} />

                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <View style={{ gap: 3 }}>
                                            <Text style={{ fontSize: 13, color: Color.paragraph }}>EMI Amount</Text>
                                            <Text style={{ fontSize: 12, color: Color.heading }}>Rs 1000</Text>
                                        </View>

                                        <View style={{ gap: 3 }}>
                                            <Text style={{ fontSize: 13, color: Color.paragraph }}>EMI Remaining</Text>
                                            <Text style={{ fontSize: 12, color: Color.heading }}>5/6 Months</Text>
                                        </View>

                                        <View style={{ gap: 3 }}>
                                            <Text style={{ fontSize: 13, color: Color.paragraph }}>Next EMI Date</Text>
                                            <Text style={{ fontSize: 12, color: Color.heading }}>4 june 2024</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={{ marginVertical: 20, paddingHorizontal: 10, elevation: 5, shadowColor: "#6089AA", backgroundColor: Color.light, borderRadius: 8, paddingVertical: 10, shadowOpacity: 0.6 }}>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 12, borderBottomWidth: 1, borderColor: '#BAB6C9' }}>
                                        <Text style={{ color: Color.heading, fontWeight: 500 }}>Programme Price</Text>
                                        <Text>Rs 12000</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 12, borderBottomWidth: 1, borderColor: '#BAB6C9' }}>
                                        <Text style={{ color: Color.heading, fontWeight: 500 }}>Offered Price</Text>
                                        <Text>Rs 10000</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 12, borderBottomWidth: 1, borderColor: '#BAB6C9' }}>
                                        <Text style={{ color: Color.heading, fontWeight: 500 }}>Down Payment</Text>
                                        <Text>Rs 4000</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 12, borderBottomWidth: 1, borderColor: '#BAB6C9' }}>
                                        <Text style={{ color: Color.heading, fontWeight: 500 }}>Principal</Text>
                                        <Text>Rs 6000</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 12, borderBottomWidth: 1, borderColor: '#BAB6C9' }}>
                                        <Text style={{ color: Color.heading, fontWeight: 500 }}>Paid</Text>
                                        <Text>Rs 5000</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 12, borderBottomWidth: 1, borderColor: '#BAB6C9' }}>
                                        <Text style={{ color: Color.error, fontWeight: 500 }}>Outstanding</Text>
                                        <Text style={{ color: Color.error }}>Rs 10000</Text>
                                    </View>
                                </View>
                            </View>
                        ))}

                        <TouchableOpacity activeOpacity={0.6}>
                            <Text style={{ backgroundColor: Color.primary, color: Color.light, textAlign: "center", paddingVertical: 12, borderRadius: 8, fontWeight: 600, fontSize: 16 }}>+Add Pre Payment</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            )

        case 1:
            return (
                <SectionList
                    sections={paidEmiHistory}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <View style={{ paddingHorizontal: 12, paddingVertical: 12, marginVertical: 8, marginHorizontal: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: '#f9f9ff', borderRadius: 12 }}>
                            <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
                                <View style={{ height: 40, width: 40, borderRadius: 50, justifyContent: "center", alignItems: "center", backgroundColor: Color.primaryTwo }}>
                                    <Text style={{ color: Color.light, fontSize: 12 }}>4 Jan</Text>
                                </View>
                                <Text style={{ color: Color.primaryTwo, fontWeight: 500 }}>{item?.title}</Text>
                            </View>
                            <Text style={{ color: Color.success, fontWeight: 500 }}>{item?.amount}</Text>
                        </View>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={{ color: Color.paragraph, fontSize: 15, fontWeight: 500 }}>{title}</Text>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            )

        case 2:
            return (
                <View style={{ flex: 1 }}>
                    <SectionList
                        sections={notPaidEmiHistory}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => (
                            <View style={{ paddingHorizontal: 12, paddingVertical: 12, marginVertical: 8, marginHorizontal: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: '#f9f9ff', borderRadius: 12 }}>
                                <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
                                    <View style={{ height: 40, width: 40, borderRadius: 50, justifyContent: "center", alignItems: "center", backgroundColor: Color.primaryTwo }}>
                                        <Text style={{ color: Color.light, fontSize: 12 }}>4 Jan</Text>
                                    </View>
                                    <Text style={{ color: Color.primaryTwo, fontWeight: 500 }}>{item?.title}</Text>
                                </View>

                                <Text style={{ color: Color.error, fontWeight: 500 }}>{item?.amount}</Text>
                            </View>
                        )}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={{ color: Color.paragraph, fontSize: 15, fontWeight: 500 }}>{title}</Text>
                        )}
                        showsVerticalScrollIndicator={false}
                    />

                    <TouchableOpacity activeOpacity={0.6}>
                        <Text style={{ backgroundColor: Color.primary, color: Color.light, textAlign: "center", paddingVertical: 12, borderRadius: 8, fontWeight: 600, fontSize: 16 }}>+Add Pre Payment</Text>
                    </TouchableOpacity>
                </View>
            )
    }
}