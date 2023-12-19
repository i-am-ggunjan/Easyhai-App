import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Color } from '../../styles/colors'

const ProfileList = ({ name, svg, minDim = 50, gap = 35 }) => {
    return (
        <View style={{ flexDirection: "row", gap: gap, alignItems: "center" }}>
            <View style={[styles.svgBg, styles.boxShadow, styles.androidShadow, { minWidth: (minDim), minHeight: Number(minDim), }]}>{svg}</View>
            <Text style={{ color: Color.paragraph, fontWeight: 500, fontSize: 16 }}>{name}</Text>
        </View >
    )
}

export default ProfileList

const styles = StyleSheet.create({
    svgBg: {
        backgroundColor: Color.white, borderRadius: 10, justifyContent: "center", alignItems: "center"
    },
    boxShadow: {
        shadowColor: "#6089AA",
        shadowOffset: {
            width: 10, height: 10
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
    androidShadow: {
        elevation: 8
    },
    listName: {
        color: Color.paragraph, fontWeight: 500, fontSize: 16
    }
})