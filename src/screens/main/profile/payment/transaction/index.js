import React, { useState } from 'react'
import { View, Text, SafeAreaView, RefreshControl, ScrollView, SectionList, TouchableOpacity, Image } from 'react-native'
import ArrowHeading from '../../../../../components/cards/ArrowHeading'
import { Color } from '../../../../../styles/colors'
import { BackArrowSvg } from '../../../../../assets/icons'
import { useNavigation } from '@react-navigation/native'
import TwoCircle from "../../../../../assets/images/TwoCircle.png"
import { Dropdown } from 'react-native-element-dropdown'

const Transaction = (props) => {
    const nav = useNavigation()
    const [refreshing, setRefreshing] = useState(false)
    const [value, setValue] = useState(null)

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

    const data = [
        { label: 'Date', value: '1' },
        { label: 'Month', value: '2' },
        { label: 'Year', value: '3' },
    ]

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
            <View style={{ backgroundColor: '#396382', minHeight: 200, paddingTop: 35 }}>
                <View style={{ flexDirection: "row", gap: 20, alignItems: "center", paddingVertical: 15, paddingHorizontal: 15 }}>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => nav.goBack()}>
                        <BackArrowSvg color={Color.light} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: 500, color: Color.light }}>Transaction</Text>
                </View>
                <Image source={TwoCircle} style={{ position: "absolute", right: 0, height: 200 }} />
            </View>

            <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 15, gap: 15, borderTopRightRadius: 30, borderTopLeftRadius: 30, marginTop: -50, backgroundColor: Color.light }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ color: Color.heading, fontSize: 17, fontWeight: 500, flex: 4 }}>Transaction List</Text>

                    <Dropdown
                        style={{ flex: 1.15 }}
                        placeholderStyle={{ fontSize: 13, fontWeight: 500 }}
                        selectedTextStyle={{ fontSize: 13, fontWeight: 500 }}
                        itemTextStyle={{ fontSize: 13, color: Color.paragraph }}
                        data={data}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Sort by "
                        value={value}
                        onChange={item => {
                            setValue(item.value);
                        }}
                    />
                </View>

                <SectionList
                    sections={walletTransactionHistory}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <View style={{ marginHorizontal: 10, paddingHorizontal: 15, paddingVertical: 12, marginVertical: 8, flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: '#f9f9ff', borderRadius: 12 }}>
                            <View style={{ gap: 3 }}>
                                <Text style={{ color: '#396382', fontWeight: 500 }}>{item?.title}</Text>
                                <Text style={{ color: Color.paragraph, fontSize: 12 }}>Just Now</Text>
                            </View>
                            <Text style={{ color: item?.status === 'received' ? Color.success : Color.error, fontWeight: 500 }}>{item?.amount}</Text>
                        </View>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={{ color: Color.paragraph, fontSize: 15, fontWeight: 500, marginVertical: 10 }}>{title}</Text>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}

export default Transaction