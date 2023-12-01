import React, { useContext } from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import OnBoarding from '../../screens/onboarding'
import Welcome from '../../screens/welcome'
import Login from '../../screens/auth/login'
import Signup from '../../screens/auth/signup'
import BottomNavigation from '../bottomNavigation'
import OtpVerification from '../../screens/auth/signup/otpVerification'
import CreateNewPassword from '../../screens/auth/forgotPassword/createNewPassword'
import ForgotPassword from '../../screens/auth/forgotPassword'
import SuccessFull from '../../screens/auth/forgotPassword/successFull'
import SplashScreen from '../../components/features/SplashScreen'
import { AuthContext } from '../../context/authContext'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
    const { userInfo, splashLoading, userToken } = useContext(AuthContext)

    return (
        <Stack.Navigator initialRouteName="Welcome" >
            {
                splashLoading ?
                    <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                    :
                    userToken && Object.keys(userInfo).length > 0 ?
                        <Stack.Group screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="Main" component={BottomNavigation} />
                        </Stack.Group>
                        :
                        <Stack.Group screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="Onboarding" component={OnBoarding} />
                            <Stack.Screen name="Welcome" component={Welcome} />
                            <Stack.Screen name="Login" component={Login} />
                            <Stack.Screen name="Signup" component={Signup} />
                            <Stack.Screen name="OtpVerification" component={OtpVerification} />
                            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                            <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
                            <Stack.Screen name="SuccessFull" component={SuccessFull} />
                        </Stack.Group>
            }
        </Stack.Navigator >
    )
}

export default StackNavigation