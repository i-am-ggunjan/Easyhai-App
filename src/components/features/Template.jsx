import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, RefreshControl, ScrollView } from 'react-native'
import { Color } from '../../../../styles/colors'
import { BackArrowSvg } from '../../../../assets/icons'

const Template = (props) => {
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
            <View style={{ flexDirection: "row", gap: 20, alignItems: "center", paddingVertical: 15, paddingHorizontal: 15 }}>
                <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.goBack()}>
                    <BackArrowSvg color={Color.heading} />
                </TouchableOpacity>
                <Text style={{ fontSize: 22, fontWeight: 500, color: Color.heading }}>Template</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={{ flex: 1, paddingBottom: 20, gap: 15, paddingHorizontal: 15 }}>
                    <Text>hffiudhui</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Template