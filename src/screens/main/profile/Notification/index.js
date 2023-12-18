import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, RefreshControl, ScrollView, Switch } from 'react-native'
import { Color } from '../../../../styles/colors'
import { BackArrowSvg } from '../../../../assets/icons'
import ArrowHeading from '../../../../components/cards/ArrowHeading'

const Notification = (props) => {
    const [refreshing, setRefreshing] = useState(false)
    const [isEnabled, setIsEnabled] = useState([false, false])
    console.log(isEnabled[0], isEnabled[1], isEnabled[6])
    const [notificationHead, setNotificationHead] = useState([
        { id: 1, title: 'General Notification' },
        { id: 2, title: 'Special Offer' },
        { id: 3, title: 'Sound' },
        { id: 4, title: 'App Updates' },
        { id: 5, title: 'Promo & Discount' },
        { id: 6, title: 'Payment' },
        { id: 7, title: 'Vibrate' },
    ])

    const toggleSwitch = (index) => {
        console.log(index)
        setIsEnabled((prevStates) => {
            const newStates = [...prevStates]
            newStates[index] = !newStates[index]
            return newStates
        })
    }

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
            <ArrowHeading heading={'Notification'} />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={{ flex: 1, paddingBottom: 20, gap: 25, paddingHorizontal: 15, paddingTop: 15 }}>

                    {notificationHead?.map((value, index) => (
                        <View key={index} style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={{ color: Color.heading }}>{value?.title}</Text>
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled[index] ? '#fff' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => toggleSwitch(index)}
                                value={isEnabled[index]}
                            />
                        </View>
                    ))}

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Notification