import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, RefreshControl, ScrollView, Switch } from 'react-native'
import { Color } from '../../../../styles/colors'
import { BackArrowSvg } from '../../../../assets/icons'
import ArrowHeading from '../../../../components/cards/ArrowHeading'

const Security = (props) => {
    const [refreshing, setRefreshing] = useState(false)
    const [isEnabled, setIsEnabled] = useState([false, false, false])
    console.log(isEnabled[0], isEnabled[1], isEnabled[2])
    const [securityHead, setSecurityHead] = useState([
        { id: 1, title: 'Remember Me' },
        { id: 2, title: 'Finger Id' },
        { id: 3, title: 'Face Id' },
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
            <ArrowHeading heading={'Security'} />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={{ flex: 1, paddingBottom: 20, gap: 25, paddingHorizontal: 15, paddingTop: 15 }}>
                    {securityHead?.map((value, index) => (
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

                    <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate('DeactivateAccount')} style={{ paddingVertical: 4 }}>
                        <Text style={{ color: Color.primary, fontWeight: 500 }}>Deactivate Account</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.6}>
                        <Text style={{ backgroundColor: "#6089AA30", color: "#6089AA", textAlign: "center", paddingVertical: 12, borderRadius: 8, fontWeight: 600, fontSize: 16 }}>Change Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Text style={{ backgroundColor: "#6089AA30", color: "#6089AA", textAlign: "center", paddingVertical: 12, borderRadius: 8, fontWeight: 600, fontSize: 16 }}>Change Pin</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Security