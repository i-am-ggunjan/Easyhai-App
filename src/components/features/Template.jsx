import React, { useState } from 'react'
import { View, Text, SafeAreaView, RefreshControl, ScrollView } from 'react-native'
import { Color } from '../../../../styles/colors'
import ArrowHeading from '../cards/ArrowHeading'

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
            <ArrowHeading heading={'Template'} />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={{ flex: 1, paddingBottom: 20, gap: 15, paddingHorizontal: 15 }}>
                    <Text>Template</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Template