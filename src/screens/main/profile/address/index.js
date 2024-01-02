import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, RefreshControl, ScrollView } from 'react-native'
import { Color } from '../../../../styles/colors'
import ArrowHeading from '../../../../components/cards/ArrowHeading'
import DeleteAddress from '../../../../components/modals/DeleteAddress'

const Address = (props) => {
    const [refreshing, setRefreshing] = useState(false)
    const [deleteAddressModalVisible, setDeleteAddressModalVisible] = useState(false)

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
            <ArrowHeading heading={'Address'} />

            <TouchableOpacity activeOpacity={0.6} style={{ paddingVertical: 15, paddingHorizontal: 15 }} onPress={() => props.navigation.navigate('AddAddress')}>
                <Text style={{ color: '#80A1BB', fontWeight: 500 }}>+ Add New Addresss</Text>
            </TouchableOpacity>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={{ flex: 1, paddingBottom: 20, gap: 25, paddingHorizontal: 15, paddingTop: 15 }}>

                    <Text style={{ color: '#231F40', fontWeight: 500, fontSize: 16 }}>Default address</Text>
                    <View style={{ gap: 10 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontWeight: 500, fontSize: 15, color: '#6F6B80' }}>Simran Rawat</Text>
                            <Text style={{ fontWeight: 500, fontSize: 15, color: '#6F6B80', backgroundColor: "#F3F3F3", paddingVertical: 4, paddingHorizontal: 12, borderRadius: 15 }}>Home 1</Text>
                        </View>

                        <Text style={{ color: '#6F6B80', width: '60%' }}>B-83 Indira vihar Khora Colony Near by SBI ATM Noida - 201309 Uttar Pradesh</Text>
                        <Text style={{ color: '#6F6B80' }}>Mobile : 8190876423</Text>

                        <View style={{ flexDirection: "row", borderTopColor: '#6F6B80', borderTopWidth: 1, paddingVertical: 10 }}>
                            <TouchableOpacity activeOpacity={0.6} style={{ flexBasis: '50%' }} onPress={() => props.navigation.navigate('EditAddress')}>
                                <Text style={{ fontSize: 15, fontWeight: 500, color: '#80A1BB', paddingVertical: 8, textAlign: "center", borderRightWidth: 0.5 }}>Edit</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.6} style={{ flexBasis: '50%' }} onPress={() => setDeleteAddressModalVisible(true)}>
                                <Text style={{ fontSize: 15, fontWeight: 500, color: '#80A1BB', paddingVertical: 8, textAlign: "center", borderLeftWidth: 0.5 }}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={{ color: '#231F40', fontWeight: 500, fontSize: 16 }}>Other address</Text>
                    <View style={{ gap: 10 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontWeight: 500, fontSize: 15, color: '#6F6B80' }}>Simran Rawat</Text>
                            <Text style={{ fontWeight: 500, fontSize: 15, color: '#6F6B80', backgroundColor: "#F3F3F3", paddingVertical: 4, paddingHorizontal: 12, borderRadius: 15 }}>Home 2</Text>
                        </View>

                        <Text style={{ color: '#6F6B80', width: '60%' }}>B-83 Indira vihar Khora Colony Near by SBI ATM Noida - 201309 Uttar Pradesh</Text>
                        <Text style={{ color: '#6F6B80' }}>Mobile : 88888888888</Text>
                    </View>

                    <View style={{ gap: 10 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontWeight: 500, fontSize: 15, color: '#6F6B80' }}>Simran Rawat</Text>
                            <Text style={{ fontWeight: 500, fontSize: 15, color: '#6F6B80', backgroundColor: "#F3F3F3", paddingVertical: 4, paddingHorizontal: 12, borderRadius: 15 }}>Home 3</Text>
                        </View>

                        <Text style={{ color: '#6F6B80', width: '60%' }}>B-83 Indira vihar Khora Colony Near by SBI ATM Noida - 201309 Uttar Pradesh</Text>
                        <Text style={{ color: '#6F6B80' }}>Mobile : 999999999</Text>
                    </View>
                </View>
            </ScrollView>

            <DeleteAddress modalVisible={deleteAddressModalVisible} setModalVisible={setDeleteAddressModalVisible} />
        </SafeAreaView >
    )
}

export default Address