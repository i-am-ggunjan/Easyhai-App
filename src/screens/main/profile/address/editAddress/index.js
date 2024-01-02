import React, { useState } from 'react'
import { View, Text, SafeAreaView, RefreshControl, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import ArrowHeading from '../../../../../components/cards/ArrowHeading'
import { Color } from '../../../../../styles/colors'

const EditAddress = (props) => {
    const [addressData, setAddressData] = useState({ name: '', phoneNumber: '', pincode: '', state: '', address: '', locality: '', city: '' })
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.light }}>
            <ArrowHeading heading={'Address'} />

            <View style={{ borderBottomWidth: 1, paddingVertical: 10, borderColor: "#BAB6C9" }}>
                <Text style={{ color: "#231F40", paddingHorizontal: 15, fontWeight: 500 }}>EDIT ADDRESS</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 20, gap: 30 }}>
                    <View style={{ borderBottomWidth: 1, borderColor: '#B6B3BF', paddingBottom: 5, gap: 4 }}>
                        <Text style={{ color: Color.paragraph }}>Name*</Text>
                        <TextInput onChangeText={(item) => setAddressData({ ...addressData, name: item })} placeholder='Name ...' style={{ paddingVertical: 1, color: Color.paragraph }} />
                    </View>

                    <View style={{ borderBottomWidth: 1, borderColor: '#B6B3BF', paddingBottom: 5, gap: 4 }}>
                        <Text style={{ color: Color.paragraph }}>Mobile*</Text>
                        <TextInput onChangeText={(item) => setAddressData({ ...addressData, phoneNumber: item })} placeholder='Mobile ...' style={{ paddingVertical: 1, color: Color.paragraph }} />
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ borderBottomWidth: 1, borderColor: '#B6B3BF', paddingBottom: 5, gap: 4, flexBasis: '43%' }}>
                            <Text style={{ color: Color.paragraph }}>Pincode*</Text>
                            <TextInput onChangeText={(item) => setAddressData({ ...addressData, phoneNumber: item })} placeholder='Pincode ...' style={{ paddingVertical: 1, color: Color.paragraph }} />
                        </View>
                        <View style={{ borderBottomWidth: 1, borderColor: '#B6B3BF', paddingBottom: 5, gap: 4, flexBasis: '43%' }}>
                            <Text style={{ color: Color.paragraph }}>State*</Text>
                            <TextInput onChangeText={(item) => setAddressData({ ...addressData, phoneNumber: item })} placeholder='State ...' style={{ paddingVertical: 1, color: Color.paragraph }} />
                        </View>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderColor: '#B6B3BF', paddingBottom: 5, gap: 4 }}>
                        <Text style={{ color: Color.paragraph }}>Address ( House no, building,Street,area)*</Text>
                        <TextInput onChangeText={(item) => setAddressData({ ...addressData, phoneNumber: item })} placeholder='House no, building,Street,area ...' style={{ paddingVertical: 1, color: Color.paragraph }} />
                    </View>

                    <View style={{ borderBottomWidth: 1, borderColor: '#B6B3BF', paddingBottom: 5, gap: 4 }}>
                        <Text style={{ color: Color.paragraph }}>Locality/Town*</Text>
                        <TextInput onChangeText={(item) => setAddressData({ ...addressData, phoneNumber: item })} placeholder='Locality/Town ...' style={{ paddingVertical: 1, color: Color.paragraph }} />
                    </View>

                    <View style={{ borderBottomWidth: 1, borderColor: '#B6B3BF', paddingBottom: 5, gap: 4 }}>
                        <Text style={{ color: Color.paragraph }}>City/district*</Text>
                        <TextInput onChangeText={(item) => setAddressData({ ...addressData, phoneNumber: item })} placeholder='City/district ...' style={{ paddingVertical: 1, color: Color.paragraph }} />
                    </View>


                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                        <TouchableOpacity style={{ flexBasis: '35%' }}>
                            <Text style={{ backgroundColor: "#6089AA30", color: "#6089AA", paddingVertical: 10, textAlign: "center", fontWeight: 500, fontSize: 15, borderRadius: 8 }}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexBasis: '35%' }}>
                            <Text style={{ backgroundColor: '#6089AA', color: Color.light, paddingVertical: 10, textAlign: "center", fontWeight: 500, fontSize: 15, borderRadius: 8 }}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default EditAddress