import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import { StatusBar, View } from "react-native";

const CustomStatusBar = ({ backgroundColor }) => {
    const isFocused = useIsFocused();

    useEffect(() => {
        StatusBar.setBarStyle('light-content');
        StatusBar.setBackgroundColor(backgroundColor);
    }, [isFocused, backgroundColor]);

    return (
        <View style={{ backgroundColor }} />
    );
}

export default CustomStatusBar
