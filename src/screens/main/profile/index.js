import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import PrimaryBtn from '../../../components/buttons/PrimaryBtn'
import { AuthContext } from '../../../context/authContext'
import Spinner from 'react-native-loading-spinner-overlay'
import { GlobalStyles } from '../../../styles/globalStyles'

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
                <TouchableOpacity onPress={() => logoutApi()}>
                    <PrimaryBtn name={`Logout`} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile