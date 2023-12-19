import React, { useContext } from 'react'
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import { AuthContext } from '../../context/authContext'
import { Color } from '../../styles/colors'
import { BankIconSvg, CrossSvg, InfoSvg, OrderHistorySvg } from '../../assets/icons'
import ProfileList from '../cards/ProfileList'
import { useNavigation } from '@react-navigation/native'

const PaymentModal = ({ modalVisible, setModalVisible }) => {
    const nav = useNavigation()

    const handleNavigation = (path) => {
        nav.navigate(path)
        setModalVisible(!modalVisible)
    }

    const paymentPath = [
        { id: 1, name: 'Wallet', path: 'Wallet' },
        { id: 2, name: 'EMI', path: 'EMI' },
        { id: 3, name: 'Transaction', path: 'Transaction' },
    ]

    return (
        <>
            <Modal animationType="none" transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(!modalVisible) }} >
                <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: "#00000060", }} >
                    <View style={[styles.modalView]}>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Text style={{ color: Color.primary, fontWeight: 500, fontSize: 19 }}>Payment</Text>

                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ backgroundColor: "#F3F3F3", padding: 10, borderRadius: 50 }}>
                                <CrossSvg w='10' h='10' />
                            </TouchableOpacity>
                        </View>

                        {
                            paymentPath.map((value, index) => (
                                <TouchableOpacity key={index} activeOpacity={0.7} onPress={() => handleNavigation(value?.path)}>
                                    <ProfileList name={value?.name} svg={<OrderHistorySvg h='22' />} minDim={43} gap={20} />
                                </TouchableOpacity>
                            ))
                        }

                    </View>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 25,
        paddingVertical: 30,
        gap: 15,
    }
});

export default PaymentModal