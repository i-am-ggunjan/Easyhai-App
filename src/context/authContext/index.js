import { createContext, useState, useEffect } from "react";
import { ToastAndroid } from "react-native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URLS } from "../../utils/apiUrls";
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const navigation = useNavigation()
    const [isLoading, setIsLoading] = useState(false)
    const [splashLoading, setSplashLoading] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    const [userToken, setUserToken] = useState(null)

    const loginApi = async (phoneNumber, password) => {
        console.log("Context Login Page :: ", phoneNumber, password)
        setIsLoading(true)
        try {
            const { data } = await axios.post(API_URLS.login, { phoneNumber, password })
            console.log("Login Res ::: ", data)
            if (data.status === 200) {
                console.log("Login Status ::: ", data?.status)
                setUserToken(data.data.token)
                ToastAndroid.show('Logged In Successfully', ToastAndroid.LONG);
                AsyncStorage.setItem("studentAuthKey", JSON.stringify(data.data.token));
                setIsLoading(false)
                console.log("Full Run")
            } else {
                ToastAndroid.show('Status Not Equal to 200', ToastAndroid.LONG);
                setIsLoading(false)
            }
        } catch (error) {
            console.log("Login Error ::: ", error)
            setIsLoading(false)
            ToastAndroid.show('Request Failed', ToastAndroid.LONG)
        }
    }

    const signupApi = async (phoneNumber, email, password) => {
        console.log("Context Signup Page :: ", phoneNumber, email, password)
        setIsLoading(true)
        try {
            const { data } = await axios.post(API_URLS.signup, { phoneNumber, email, password })
            console.log("Signup Res ::: ", data)
            if (data?.status == 201) {
                ToastAndroid.show('User Created Successfully', ToastAndroid.LONG)
                navigation.navigate("OtpVerification", { phoneNumber, email })
                setIsLoading(false)
                console.log("Full Run")
            } else {
                ToastAndroid.show('Status Not Equal to 201', ToastAndroid.LONG);
                setIsLoading(false)
            }
        } catch (error) {
            console.log("Signup Error ::: ", error)
            setIsLoading(false)
            ToastAndroid.show('Request Failed', ToastAndroid.LONG)
        }
    }

    const otpVerificationApi = async (phoneNumber, email, otpCode) => {
        console.log("Context Otp Verification Page :: ", phoneNumber, email, otpCode)
        setIsLoading(true)
        try {
            const { data } = await axios.post(API_URLS.otpVerification, { phoneNumber, email, otpCode })
            console.log("Otp Verification Res ::: ", data)
            if (data?.status == 200) {
                ToastAndroid.show('OTP Verified Successfully', ToastAndroid.LONG)
                navigation.navigate("Login")
                setIsLoading(false)
                console.log("Full Run")
            } else {
                ToastAndroid.show('Status Not Equal to 200', ToastAndroid.LONG);
                setIsLoading(false)
            }
        } catch (error) {
            console.log("Otp Verification Error ::: ", error)
            setIsLoading(false)
            ToastAndroid.show('Request Failed', ToastAndroid.LONG)
        }
    }

    const forgotPassOTPApi = async (phoneNumber) => {
        console.log("Context Forgot Password Page :: ", phoneNumber)
        setIsLoading(true)
        try {
            const { data } = await axios.put(API_URLS.forgotPassOTP, { phoneNumber })
            console.log("Forgot Password Res ::: ", data)
            if (data?.status == 200) {
                ToastAndroid.show('Otp Sent To Your Mobile', ToastAndroid.LONG)
                navigation.navigate("CreateNewPassword", { phoneNumber })
                setIsLoading(false)
                console.log("Full Run")
            } else {
                ToastAndroid.show('Status Not Equal to 200', ToastAndroid.LONG);
                setIsLoading(false)
            }
        } catch (error) {
            console.log("Forgot Password Error ::: ", error)
            setIsLoading(false)
            ToastAndroid.show('Request Failed', ToastAndroid.LONG)
        }
    }

    const changePasswordApi = async (phoneNumber, otpCode, password) => {
        console.log("Context Create New Password Page :: ", phoneNumber, otpCode, password)
        setIsLoading(true)
        try {
            const { data } = await axios.put(API_URLS.changePassword, { phoneNumber, otpCode, password })
            console.log("Create New Password Res ::: ", data)
            if (data?.status == 200) {
                ToastAndroid.show('Password Updated Successfully', ToastAndroid.LONG)
                navigation.navigate("SuccessFull")
                setIsLoading(false)
                console.log("Full Run")
            } else {
                ToastAndroid.show('Status Not Equal to 200', ToastAndroid.LONG);
                setIsLoading(false)
            }
        } catch (error) {
            console.log("Create New Password Error ::: ", error)
            setIsLoading(false)
            ToastAndroid.show('Request Failed', ToastAndroid.LONG)
        }
    }

    const logoutApi = async () => {
        setIsLoading(true)
        try {
            const response = await axios.post(API_URLS.logout, {}, { headers: { "eh-auth-token": userToken } })
            console.log("Logout Res ::: ", response)
            if (response?.status === 200) {
                AsyncStorage.removeItem("studentAuthKey");
                console.log("Logout Status ::: ", response?.status)
                setUserToken(null)
                setIsLoading(false)
                console.log("Logout Response ::: ", response.data)
                ToastAndroid.show('Logout Successfully', ToastAndroid.LONG)
            }
        } catch (error) {
            console.log("Logout Error", error)
            ToastAndroid.show('Logout Failed', ToastAndroid.LONG)
            setIsLoading(false)
        }
    }

    const isLoggedIn = async () => {
        setSplashLoading(true)
        try {
            let userToken = await AsyncStorage.getItem("studentAuthKey")
            userToken = JSON.parse(userToken)
            setUserToken(userToken)
            console.log("Logged In ::::::", userToken)
            console.log("Logged In User Info ::::::", userInfo)

            if (userToken) {
                try {
                    const { data } = await axios.post(API_URLS.loggedIn, {},
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'eh-auth-token': userToken,
                            }
                        }
                    )
                    if (data?.status == 200) {
                        setUserInfo(data?.data)
                    } else {
                        setUserInfo(null)
                    }
                } catch (error) {
                    setUserInfo(null)
                }
            }
            setSplashLoading(false)
        } catch (error) {
            console.log("Get User Info Error", error)
            setSplashLoading(false)
        }
    }

    useEffect(() => {
        isLoggedIn()
    }, [userToken])

    const authData = { loginApi, signupApi, otpVerificationApi, forgotPassOTPApi, changePasswordApi, logoutApi, isLoading, userToken, userInfo, splashLoading }

    return <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider