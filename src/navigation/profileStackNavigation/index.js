import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Profile from "../../screens/main/profile"
import MyOrder from "../../screens/main/profile/MyOrder"
import OrderDetail from "../../screens/main/profile/MyOrder/OrderDetail"

const Stack = createNativeStackNavigator()

const ProfileStackNavigation = () => {
    return (
        <Stack.Navigator>
            {
                <Stack.Group screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="MyOrder" component={MyOrder} />
                    <Stack.Screen name="OrderDetail" component={OrderDetail} />
                </Stack.Group>
            }
        </Stack.Navigator >
    )
}

export default ProfileStackNavigation