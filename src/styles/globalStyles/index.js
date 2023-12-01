import { Platform, StatusBar, StyleSheet } from "react-native";
import { Color } from "../colors";

export const GlobalStyles = StyleSheet.create({
    global: {
        authSafeAreaView: {
            flex: 1,
            paddingTop: Platform.OS === "android" ? 0 : 0,
            backgroundColor: Color.white,
            paddingHorizontal: 15,
        },
        button: {
            backgroundColor: Color.primary,
            color: Color.white,
            borderRadius: 5,
            textAlign: "center",
            fontWeight: "bold",
            paddingVertical: 12,
            fontSize: 16
        },
        activeButton: {
            backgroundColor: Color.primary,
            color: Color.white,
            borderRadius: 5,
            textAlign: "center",
            fontWeight: "500",
            paddingVertical: 12,
            fontSize: 16
        },
        inActiveButton: {
            backgroundColor: Color.white,
            color: Color.black,
            borderRadius: 5,
            textAlign: "center",
            fontWeight: "500",
            paddingVertical: 11,
            fontSize: 16,
            borderWidth: 0.5
        }
    },
    auth: {
        container: {
            flex: 1, gap: 50, paddingVertical: 20, paddingTop: 80
        },
        heading: {
            fontSize: 32, color: Color.primary, fontWeight: 700, paddingRight: 15
        },
        subHeading: {
            color: Color.paragraph, paddingEnd: 42
        },
        inputField: {
            paddingHorizontal: 10, borderRadius: 8, paddingVertical: 8, backgroundColor: Color.lightBackground, borderWidth: 1
        },
        error: {
            color: Color.error
        },
        iconBg: {
            backgroundColor: Color.iconBg, paddingVertical: 8, paddingHorizontal: 15, borderRadius: 10
        },
        textBtn: {
            color: Color.primary, fontWeight: 600
        }
    }
})