import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"
import { Color } from '../../styles/colors'
import Home from '../../screens/main/home'
import Course from '../../screens/main/course'
import Profile from '../../screens/main/profile'

const Tab = createBottomTabNavigator()

const BottomNavigation = () => {
    return (
        <>
            <Tab.Navigator
                initialRouteName="Menu"
                screenOptions={{
                    tabBarStyle: { paddingBottom: 10, paddingTop: 5, height: 60 },
                    tabBarActiveTintColor: Color.primary,
                    tabBarInactiveTintColor: Color.black,
                    tabBarLabelStyle: { fontSize: 12 },
                }}
            >
                <Tab.Screen name="Home" component={Home} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="restaurant-outline" size={23} color={color} />
                    ),
                }} />

                <Tab.Screen name="Course" component={Course} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={23} color={color} />
                    ),
                }} />

                <Tab.Screen name="Profile" component={Profile} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={23} color={color} />
                    ),
                }} />
            </Tab.Navigator>
        </>
    )
}

export default BottomNavigation