import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import PrimaryBtn from '../../../components/buttons/PrimaryBtn'
import { AuthContext } from '../../../context/authContext'
import Spinner from 'react-native-loading-spinner-overlay'
import { GlobalStyles } from '../../../styles/globalStyles'
import AnimatedGifs from "../../../assets/images/AnimatedGifs.gif"

const Profile = () => {
    const { userInfo, logoutApi, isLoading } = useContext(AuthContext)
    console.log("User Name ::: ", userInfo?.name?.firstName + " " + userInfo?.name?.lastName)

    return (
        <View style={GlobalStyles.global.authSafeAreaView}>
            <Spinner visible={isLoading} />
            <View style={{ flex: 1, justifyContent: "space-between", gap: 20, paddingVertical: 50 }}>
                <View>
                    <Text style={GlobalStyles.auth.heading}>Profile</Text>
                    <Text>Name : {userInfo?.name?.firstName} {userInfo?.name?.lastName}</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image
                        style={styles.logo}
                        source={{
                            uri: 'https://i.gifer.com/embedded/download/OKEq.gif',
                        }}
                    />
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image
                        style={styles.logo}
                        source={AnimatedGifs}
                    />
                </View>
                <TouchableOpacity onPress={() => logoutApi()}>
                    <PrimaryBtn name={`Logout`} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 200,
        height: 200,
    },
});