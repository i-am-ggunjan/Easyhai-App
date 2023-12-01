import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import PrimaryBtn from '../../../components/buttons/PrimaryBtn'
import { AuthContext } from '../../../context/authContext'
import Spinner from 'react-native-loading-spinner-overlay'
import { GlobalStyles } from '../../../styles/globalStyles'

const Profile = () => {
    const { logoutApi, isLoading } = useContext(AuthContext)
    return (
        <View style={{ flex: 1, justifyContent: "space-around", paddingHorizontal: 25, gap: 20 }}>
            <Spinner visible={isLoading} />
            <Text style={GlobalStyles.auth.heading}>Profile</Text>
            <TouchableOpacity onPress={() => logoutApi()}>
                <PrimaryBtn name={`Logout`} />
            </TouchableOpacity>
        </View>
    )
}

export default Profile