import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import PrimaryBtn from '../../../components/buttons/PrimaryBtn'
import { AuthContext } from '../../../context/authContext'
import Spinner from 'react-native-loading-spinner-overlay'

const Home = () => {
    const { logoutApi, isLoading } = useContext(AuthContext)
    return (
        <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 25, gap: 20 }}>
            <Spinner visible={isLoading} />
            <Text>Home</Text>
            <TouchableOpacity onPress={() => logoutApi()}>
                <PrimaryBtn name={`Logout`} />
            </TouchableOpacity>
        </View>
    )
}

export default Home