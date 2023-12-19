import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, RefreshControl, ScrollView, Image } from 'react-native'
import ArrowHeading from '../../../../../../components/cards/ArrowHeading'
import { Color } from '../../../../../../styles/colors'
import { WalletImageSvg } from '../../../../../../assets/icons'
import WalletLogo from "../../../../../../assets/images/WalletLogo.png"

const OpenWallet = (props) => {
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
            <ArrowHeading heading={'Wallet'} />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={{ flex: 1, paddingBottom: 20, gap: 15, paddingHorizontal: 15 }}>
                    <View style={{ justifyContent: "center", alignItems: "center", gap: 25, padding: 40 }}>
                        {/* <WalletImageSvg /> */}
                        <Image source={WalletLogo} style={{ objectFit: "contain" }} />
                        <Text style={{ color: "#6089AA", fontWeight: 500, fontSize: 16, textAlign: "center" }}>Oh! Oh! It Seems Your Wallet is Empty</Text>
                    </View>

                    <View style={{ justifyContent: "space-around", flex: 1 }}>
                        <Text style={{ color: Color.paragraph, fontSize: 15, textAlign: "center" }}>Please add money to enjoy our service</Text>

                        <TouchableOpacity activeOpacity={0.6}>
                            <Text style={{ backgroundColor: Color.primary, color: Color.light, textAlign: "center", paddingVertical: 12, borderRadius: 8, fontWeight: 600, fontSize: 16 }}>+Add Money</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default OpenWallet