import React, { useState } from 'react'
import { View, Text, SafeAreaView, RefreshControl, ScrollView, SectionList, TouchableOpacity, Image } from 'react-native'
import ArrowHeading from '../../../../../components/cards/ArrowHeading'
import { Color } from '../../../../../styles/colors'
import { BackArrowSvg } from '../../../../../assets/icons'
import { useNavigation } from '@react-navigation/native'
import TwoCircle from "../../../../../assets/images/TwoCircle.png"

const Transaction = (props) => {
    const nav = useNavigation()
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000)
    }

    const walletTransactionHistory = [
        {
            title: 'Today',
            data: [
                { title: "Wallet Recharge", amount: +500, status: "received" },
                { title: "Wallet Recharge", amount: +500, status: "received" },
                { title: "Wallet Recharge", amount: -500, status: "deduct" },
                { title: "Doubt Solving", amount: -500, status: "deduct" }
            ],
        },
        {
            title: '20 Dec 2023',
            data: [
                { title: "Wallet Recharge", amount: -500, status: "deduct" },
                { title: "Doubt Solving", amount: -500, status: "deduct" }
            ],
        },
        {
            title: '19 Dec 2023',
            data: [
                { title: "Wallet Recharge", amount: +500, status: "received" },
                { title: "Wallet Recharge", amount: -500, status: "deduct" },
                { title: "Wallet Recharge", amount: -500, status: "deduct" },
                { title: "Doubt Solving", amount: +500, status: "received" }
            ],
        },
        {
            title: '18 Dec 2023',
            data: [
                { title: "Wallet Recharge", amount: +500, status: "received" },
                { title: "Doubt Solving", amount: -500, status: "deduct" }
            ],
        },
    ]

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
            <View style={{ backgroundColor: "rgba(11, 64, 93,0.8)", minHeight: 200, paddingTop: 35 }}>
                <View style={{ flexDirection: "row", gap: 20, alignItems: "center", paddingVertical: 15, paddingHorizontal: 15 }}>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => nav.goBack()}>
                        <BackArrowSvg color={Color.light} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: 500, color: Color.light }}>Transaction</Text>
                </View>
                <Image source={TwoCircle} style={{ position: "absolute", right: 0, height: 200 }} />
            </View>

            <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 15, gap: 15, borderTopRightRadius: 30, borderTopLeftRadius: 30, marginTop: -50, backgroundColor: Color.light }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ color: Color.heading, fontSize: 17, fontWeight: 500 }}>Transaction</Text>
                    <Text style={{ color: Color.paragraph }}>Sort by <Text style={{ fontWeight: 500, color: Color.primary }}>Date</Text></Text>
                </View>

                <SectionList
                    sections={walletTransactionHistory}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <View style={{ paddingHorizontal: 20, paddingVertical: 4, marginVertical: 8, flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <Text style={{ color: Color.primary, fontWeight: 500 }}>{item?.title}</Text>
                                <Text style={{ color: Color.paragraph, fontSize: 12 }}>Just Now</Text>
                            </View>
                            <Text style={{ color: item?.status === 'received' ? Color.success : Color.error, fontWeight: 500 }}>{item?.amount}</Text>
                        </View>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={{ color: Color.paragraph, fontSize: 15, fontWeight: 500 }}>{title}</Text>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}

export default Transaction