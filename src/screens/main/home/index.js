import React, { useContext } from 'react'
import { AuthContext } from '../../../context/authContext'
import Spinner from 'react-native-loading-spinner-overlay'
import Web from '../../../components/features/Web'

const Home = () => {
    const { userInfo, isLoading } = useContext(AuthContext)
    console.log("User Name ::: ", userInfo?.name?.firstName + " " + userInfo?.name?.lastName)
    const liveClass = "Easyhai by Gaurav Gunjan"

    return (
        <>
            <Spinner visible={isLoading} />
            <Web url={`https://meet.easyhaionline.com/${liveClass}`} />
        </>
    )
}

export default Home