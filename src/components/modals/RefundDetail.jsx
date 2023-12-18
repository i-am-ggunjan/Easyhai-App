import React, { useContext } from 'react'
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import { AuthContext } from '../../context/authContext'
import { Color } from '../../styles/colors'
import { BankIconSvg, CrossSvg, InfoSvg } from '../../assets/icons'

const RefundDetail = ({ modalVisible, setModalVisible }) => {
    const { logoutApi } = useContext(AuthContext)

    return (
        <View>
            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(!modalVisible) }} >
                <View style={{ flex: 1, justifyContent: "flex-end" }} >
                    <View style={[styles.modalView]}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Text style={{ color: Color.heading, fontWeight: 500, fontSize: 17 }}>Refund details</Text>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ backgroundColor: "#F3F3F3", padding: 10, borderRadius: 50 }}>
                                <CrossSvg w='10' h='10' />
                            </TouchableOpacity>
                        </View>

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
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 25,
        paddingVertical: 30,
        gap: 25,
    }
});

export default RefundDetail