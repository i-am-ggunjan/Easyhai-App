import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Profile from "../../screens/main/profile"
import MyOrder from "../../screens/main/profile/MyOrder"
import OrderDetail from "../../screens/main/profile/MyOrder/OrderDetail"
import Notification from "../../screens/main/profile/Notification"
import Security from "../../screens/main/profile/Security"
import DeactivateAccount from "../../screens/main/profile/Security/DeactivateAccount"

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
                </Stack.Group>
            }
        </Stack.Navigator >
    )
}

export default ProfileStackNavigation