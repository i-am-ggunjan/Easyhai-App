import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, RefreshControl, ScrollView, StyleSheet, Image } from 'react-native'
import { Color } from '../../../../../styles/colors'
import { BackArrowSvg, BankIconSvg, BoxCheckSvg, ClickArrowSvg, DollarSvg, EmailSvg, HelpMicSvg, InfoSvg, OrderPurchaseSvg, PhoneSvg, StartEmptySvg, StartFilledSvg, TimeSvg } from '../../../../../assets/icons'
import OrderImage from "../../../../../assets/images/OrderImage.png"
import ArrowHeading from '../../../../../components/cards/ArrowHeading'

const OrderDetail = (props) => {
    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState([{}, {}, {}])

    const { id, title, tag } = props.route.params

    // console.log("Route Data ::: ", routeData)

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
            <ArrowHeading heading={'Item Details'} />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={{ flex: 1, paddingBottom: 20, gap: 15 }}>
                    <View style={{ justifyContent: "center", alignItems: "center", gap: 10, padding: 15, backgroundColor: Color.lightBackground }}>
                        <View style={{ flexDirection: "row", gap: 10, alignSelf: "flex-end", alignItems: "center", paddingEnd: 5 }}>
                            <Text style={{ fontSize: 13, color: Color.heading, fontWeight: 500 }}>Help</Text>
                            <TouchableOpacity style={{ backgroundColor: Color.white, padding: 10, borderRadius: 50 }}>
                                <HelpMicSvg />
                            </TouchableOpacity>
                        </View>
                        <Image source={OrderImage} style={{ height: 150, width: 155, }} />
                        <Text style={{ fontSize: 15, color: Color.heading, fontWeight: 500, marginTop: 10 }}>{title}</Text>
                        <Text style={{ fontSize: 13, color: Color.paragraph, width: "85%", textAlign: "center" }}>Lorem ipsum dolor sit amet consectetur. Tortor posuere lectus praesent. Ac non ut risus felis rhoncus.</Text>
                        <Text style={{ fontSize: 13, color: Color.paragraph }}>Level : Basic</Text>
                    </View>

                    {tag && tag === "refund" ?
                        <View style={{ paddingHorizontal: 20, gap: 12 }}>
                            <View style={{ backgroundColor: "#03A785", flexDirection: "row", gap: 20, paddingVertical: 10, paddingHorizontal: 15, flexWrap: "wrap" }}>
                                <BoxCheckSvg />
                                <View style={{ flex: 1, gap: 5 }}>
                                    <Text style={{ color: Color.light, fontSize: 15, fontWeight: 500 }}>Refund Credited</Text>
                                    <Text style={{ color: Color.light, fontSize: 10 }}>Refund Of Rs1290 Credited to Your Account On  3 Nov If there is any issue, Please Contact to our bank.ARN 239012879654</Text>
                                </View>
                            </View>

                            <Text style={{ color: Color.heading, fontWeight: 500, fontSize: 17, marginTop: 5 }}>Refund details</Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
                                <Text style={{ color: Color.heading, fontWeight: 500, fontSize: 13 }}>Total Refund Amount</Text>
                                <Text style={{ color: Color.heading, fontWeight: 500, fontSize: 13 }}>Rs 1290.00</Text>
                            </View>

                            <View style={{ backgroundColor: Color.lightBackground, flexDirection: "row", gap: 20, paddingVertical: 10, paddingHorizontal: 15, flexWrap: "wrap" }}>
                                <Text style={{ color: Color.heading, fontWeight: 500, fontSize: 13 }}>Rs 1290.00</Text>
                                <View style={{ flex: 1, gap: 5 }}>
                                    <Text style={{ fontSize: 13, color: Color.paragraph }}>Added to Canara Bank Account Ending in xxxx9763</Text>
                                    <Text style={{ fontSize: 13, color: Color.paragraph }}>Credit by Fri, 3 Nov</Text>
                                </View>
                                <View style={{ padding: 8, backgroundColor: Color.light, borderRadius: 50, alignSelf: "flex-start" }}>
                                    <BankIconSvg />
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", gap: 15, flexWrap: "wrap" }}>
                                <InfoSvg />
                                <Text style={{ fontSize: 13, color: Color.paragraph, flex: 1 }}>Contact your bank with refund transaction reference Number 33061876918</Text>
                            </View>
                        </View>
                        :
                        <View style={{ paddingHorizontal: 20, gap: 12 }}>
                            <View style={{ backgroundColor: "#03A785", flexDirection: "row", gap: 20, paddingVertical: 10, paddingHorizontal: 15, flexWrap: "wrap" }}>
                                <BoxCheckSvg />
                                <View style={{ flex: 1, gap: 5 }}>
                                    <Text style={{ color: Color.light, fontSize: 15, fontWeight: 500 }}>Purchased</Text>
                                    <Text style={{ color: Color.light, fontSize: 10 }}>On Tue, 12 jan</Text>
                                </View>
                            </View>

                            <View style={{ gap: 15 }}>
                                <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                                    <View style={{ backgroundColor: Color.paragraph, padding: 3, borderRadius: 50 }}></View>
                                    <Text style={{ fontSize: 13, color: Color.paragraph, flex: 1 }}>Return window closed on 2 nov</Text>
                                </View>

                                <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                                    <DollarSvg w="20" />
                                    <Text style={{ fontSize: 13, color: Color.paragraph, flex: 1 }}>3 super Coins Collected</Text>
                                </View>
                            </View>
                        </View>
                    }

                    <View style={{ flexDirection: "row", gap: 25, flexWrap: "wrap", paddingHorizontal: 25, alignItems: "center", paddingVertical: 8, backgroundColor: Color.light, elevation: 5, shadowColor: '#6089AA' }}>
                        <Image source={OrderImage} style={{ height: 60, width: 60, borderRadius: 100 }} />
                        <View style={{ gap: 10 }}>
                            <Text style={{ color: Color.heading, fontWeight: 500, fontSize: 14 }}>Rate this product</Text>
                            <View style={{ flexDirection: "row", gap: 7 }}>
                                <StartFilledSvg />
                                <StartEmptySvg />
                                <StartEmptySvg />
                                <StartEmptySvg />
                                <StartEmptySvg />
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", gap: 25, flexWrap: "wrap", paddingHorizontal: 20, paddingVertical: 8, justifyContent: "space-between", backgroundColor: Color.light, elevation: 5, shadowColor: '#6089AA' }}>
                        <View style={{ gap: 5 }}>
                            <Text style={{ color: Color.heading, fontWeight: 500, fontSize: 14 }}>Total Item Price</Text>
                            <Text style={{ fontSize: 13, color: Color.paragraph }}>Rs 1400</Text>
                        </View>
                        <View style={{ gap: 5 }}>
                            <Text style={{ color: Color.heading, fontWeight: 500, fontSize: 14 }}>Purchased Price</Text>
                            <Text style={{ fontSize: 13, color: Color.paragraph, textAlign: "right" }}>Rs 1300</Text>
                            <Text style={{ fontSize: 11, color: Color.paragraph, textAlign: "right" }}>You Saved Rs 100</Text>
                        </View>
                    </View>

                    <View style={{ gap: 10, paddingHorizontal: 20, paddingVertical: 8, backgroundColor: Color.light, elevation: 5, shadowColor: '#6089AA' }}>
                        <Text style={{ color: Color.paragraph }}>Sold by: Harshly Education and skill Technologies pvt ltd</Text>
                        <TouchableOpacity activeOpacity={0.6} style={{ borderWidth: 1, borderColor: Color.paragraph, paddingVertical: 10, borderRadius: 5 }}>
                            <Text style={{ color: Color.paragraph, textAlign: "center", fontWeight: 500 }}>Get Invoice</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ gap: 10, paddingHorizontal: 20, paddingVertical: 8, backgroundColor: Color.light }}>
                        <Text style={{ color: Color.heading, fontWeight: 500, fontSize: 17 }}>Update Sent On</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <EmailSvg />
                            <Text style={{ color: Color.paragraph, fontSize: 13 }}>rawatsimran789@gmail.com</Text>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <PhoneSvg />
                            <Text style={{ color: Color.paragraph, fontSize: 13 }}>1237987645</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default OrderDetail

const styles = StyleSheet.create({
    boxShadow: {
        paddingHorizontal: 15, paddingVertical: 10, gap: 10,
        shadowColor: "#6089AA",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.6,
        shadowRadius: 5,
        elevation: 10,
        borderRadius: 5,
        backgroundColor: Color.white
    }
})