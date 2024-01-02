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
import ProfileEdit from '../../screens/main/profile/profileEdit'
import ProfileInfo from '../../screens/main/profile/profileInfo'
import MyOrder from '../../screens/main/profile/myOrder'
import OrderDetail from '../../screens/main/profile/myOrder/orderDetail'
import Notification from '../../screens/main/profile/notification'
import Security from '../../screens/main/profile/security'
import DeactivateAccount from '../../screens/main/profile/security/deactivateAccount'
import Wallet from '../../screens/main/profile/payment/wallet'
import OpenWallet from '../../screens/main/profile/payment/wallet/openWallet'
import EMI from '../../screens/main/profile/payment/emi'
import Transaction from '../../screens/main/profile/payment/transaction'
import Address from '../../screens/main/profile/address'
import AddAddress from '../../screens/main/profile/address/addAddress'
import EditAddress from '../../screens/main/profile/address/editAddress'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
    const { userInfo, splashLoading, userToken } = useContext(AuthContext)

    return (
        <Stack.Navigator initialRouteName="Onboarding">
            {
                splashLoading ?
                    <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                    :
                    userToken && userInfo !== null && Object.keys(userInfo).length > 0 ?
                        <Stack.Group screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="Main" component={BottomNavigation} />
                            <Stack.Screen name="ProfileInfo" component={ProfileInfo} />
                            <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
                            <Stack.Screen name="Address" component={Address} />
                            <Stack.Screen name="AddAddress" component={AddAddress} />
                            <Stack.Screen name="EditAddress" component={EditAddress} />

                            <Stack.Screen name="MyOrder" component={MyOrder} />
                            <Stack.Screen name="OrderDetail" component={OrderDetail} />
                            <Stack.Screen name="Notification" component={Notification} />
                            <Stack.Screen name="Security" component={Security} />
                            <Stack.Screen name="DeactivateAccount" component={DeactivateAccount} />
                            <Stack.Screen name="Wallet" component={Wallet} />
                            <Stack.Screen name="OpenWallet" component={OpenWallet} />
                            <Stack.Screen name="EMI" component={EMI} />
                            <Stack.Screen name="Transaction" component={Transaction} />
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