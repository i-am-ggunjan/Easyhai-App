import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, RefreshControl, ImageBackground, SectionList, StyleSheet, StatusBar } from 'react-native'
import { Color } from '../../../../../styles/colors'
import ArrowHeading from '../../../../../components/cards/ArrowHeading'
import WalletBG from "../../../../../assets/images/WalletBG.png"
import { Dropdown } from 'react-native-element-dropdown'

const Wallet = (props) => {
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
            <ArrowHeading heading={'Wallet'} />

            <ImageBackground source={WalletBG} style={{ objectFit: "contain", minHeight: 162.5, paddingHorizontal: 25, gap: 20, justifyContent: "center", marginVertical: 25, marginHorizontal: 30, paddingTop: 15 }}>
                <Text style={{ color: Color.light, fontSize: 18 }}>My Wallet</Text>
                <Text style={{ color: Color.light, fontSize: 20, fontWeight: 500 }}>Rs 2221112.55</Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={{ color: Color.light, fontSize: 15 }}>Available balance</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("OpenWallet")} activeOpacity={0.6}>
                        <Text style={{ fontSize: 14, color: Color.light, borderBottomWidth: 1, borderBottomColor: Color.light, marginTop: 5 }}>Open Wallet</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>



            <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 15, gap: 15 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ color: Color.heading, fontSize: 17, fontWeight: 500, flex: 4 }}>Transaction</Text>

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

export default Wallet
