import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Profile from "../../screens/main/profile"
import MyOrder from "../../screens/main/profile/myOrder"
import OrderDetail from "../../screens/main/profile/myOrder/orderDetail"
import Notification from "../../screens/main/profile/notification"
import Security from "../../screens/main/profile/security"
import DeactivateAccount from "../../screens/main/profile/security/deactivateAccount"
import Wallet from "../../screens/main/profile/payment/wallet"
import EMI from "../../screens/main/profile/payment/emi"
import Transaction from "../../screens/main/profile/payment/transaction"
import OpenWallet from "../../screens/main/profile/payment/wallet/openWallet"
import DropdownComponent from "../../screens/main/profile/Latest"

const Stack = createNativeStackNavigator()

const ProfileStackNavigation = () => {
    return (
        <Stack.Navigator>
            {
                <Stack.Group screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="MyOrder" component={MyOrder} />
                    <Stack.Screen name="OrderDetail" component={OrderDetail} />
                    <Stack.Screen name="Notification" component={Notification} />
                    <Stack.Screen name="Security" component={Security} />
                    <Stack.Screen name="DeactivateAccount" component={DeactivateAccount} />
                    <Stack.Screen name="Wallet" component={Wallet} />
                    <Stack.Screen name="EMI" component={EMI} />
                    <Stack.Screen name="Transaction" component={Transaction} />
                    <Stack.Screen name="OpenWallet" component={OpenWallet} />
                    <Stack.Screen name="Latest" component={DropdownComponent} />
                </Stack.Group>
            }
        </Stack.Navigator >
    )
}

export default ProfileStackNavigation