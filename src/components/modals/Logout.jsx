import React, { useContext } from 'react'
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import { AuthContext } from '../../context/authContext'
import { Color } from '../../styles/colors'

const Logout = ({ modalVisible, setModalVisible }) => {
    const { logoutApi } = useContext(AuthContext)

    return (
        <View>
            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(!modalVisible) }} >
                <View style={{ flex: 1, justifyContent: "flex-end" }} >
                    <View style={[styles.modalView]}>
                        <View style={{ display: "flex", gap: 25 }}>
                            <Text style={{ color: Color.primary, fontSize: 20, fontWeight: "500", textAlign: "center", }} >Logout</Text>

                            <View style={{ borderWidth: 0.3, borderColor: Color.paragraph, flex: 1 }} />

                            <Text style={{ fontSize: 16, fontWeight: "500", textAlign: "center", color: Color.heading }}>Are you sure you want to logout?</Text>
                        </View>

                        <View style={{ flexDirection: "row", gap: 20, justifyContent: "center" }} >
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ flex: 1 }}>
                                <Text style={{ backgroundColor: "#6089AA30", color: Color.primary, textAlign: "center", paddingVertical: 12, borderRadius: 6, fontWeight: 500, fontSize: 16 }}>No</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={logoutApi} style={{ flex: 1 }}>
                                <Text style={{ backgroundColor: Color.primary, color: Color.light, textAlign: "center", paddingVertical: 12, borderRadius: 6, fontWeight: 500, fontSize: 16 }}>Yes</Text>
                            </TouchableOpacity>
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
        padding: 35,
        gap: 25,
        borderTopColor: Color.primary,
        borderWidth: 1,
        borderBottomWidth: 0
    }
});

export default Logout