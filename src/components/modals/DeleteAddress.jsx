import React from 'react'
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import { Color } from '../../styles/colors'

const DeleteAddress = ({ modalVisible, setModalVisible }) => {

    return (
        <View>
            <Modal animationType="none" transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(!modalVisible) }} >
                <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: "#00000060", }} >
                    <View style={[styles.modalView]}>
                        <View style={{ display: "flex", gap: 10 }}>
                            <Text style={{ color: Color.primary, fontSize: 18, fontWeight: "500", textAlign: "left", }} >Delete Confirmation</Text>

                            <Text style={{ fontSize: 15, fontWeight: "500", textAlign: "left", color: '#6F6B80' }}>Are You sure you want to delete this  address?</Text>
                        </View>
                        <View style={{ borderWidth: 0.3, borderColor: Color.paragraph, flex: 1 }} />

                        <View style={{ flexDirection: "row", gap: 20, justifyContent: "space-around" }} >
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ flexBasis: '40%' }}>
                                <Text style={{ backgroundColor: "#6089AA30", color: '#396382', textAlign: "center", paddingVertical: 12, borderRadius: 6, fontWeight: 500, fontSize: 16 }}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexBasis: '40%' }}>
                                <Text style={{
                                    backgroundColor: '#6089AA', color: Color.light, textAlign: "center", paddingVertical: 12, borderRadius: 6, fontWeight: 500, fontSize: 16
                                }}>Delete</Text>
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
        paddingHorizontal: 25,
        paddingVertical: 30,
        gap: 25,
    }
});

export default DeleteAddress