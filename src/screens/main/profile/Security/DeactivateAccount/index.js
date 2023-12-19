import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, RefreshControl, ScrollView } from 'react-native'
import { Color } from '../../../../../styles/colors'
import { BackArrowSvg, ProtectionSvg } from '../../../../../assets/icons'
import ArrowHeading from '../../../../../components/cards/ArrowHeading'

const DeactivateAccount = (props) => {
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
            <ArrowHeading heading={'Deactivate Account'} />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={{ flex: 1, paddingBottom: 20, gap: 15, paddingHorizontal: 15 }}>
                    <View style={{ justifyContent: "center", alignItems: "center", gap: 25, padding: 40 }}>
                        <ProtectionSvg />
                        <Text style={{ color: "#6089AA", fontWeight: 500, fontSize: 16, textAlign: "center" }}>Are You Sure You want to deactivate Account?</Text>
                    </View>

                    <View style={{ justifyContent: "space-between", flex: 1 }}>
                        <View style={{ gap: 20 }}>
                            <Text style={{ color: Color.paragraph, fontSize: 14, textAlign: "justify" }}>If There is anything we can help you, Please <Text style={{ color: "#6089AA", fontWeight: 500 }}>contact us.</Text></Text>
                            <Text style={{ color: Color.paragraph, fontSize: 14, textAlign: "justify" }}>Onc its closed you want be able to use the easyhaionline after 45 days it can be re-opened.</Text>
                            <Text style={{ color: Color.paragraph, fontSize: 14, textAlign: "justify" }}>If you’d like , you can ask us to <Text style={{ color: "#6089AA", fontWeight: 500 }}>Delete your Data</Text> before Closing the account.</Text>
                        </View>

                        <TouchableOpacity activeOpacity={0.6}>
                            <Text style={{ backgroundColor: Color.primary, color: Color.light, textAlign: "center", paddingVertical: 12, borderRadius: 8, fontWeight: 600, fontSize: 16 }}>Deactivate account</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default DeactivateAccount