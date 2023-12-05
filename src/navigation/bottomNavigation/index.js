import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Color } from '../../styles/colors'
import Home from '../../screens/main/home'
import Course from '../../screens/main/course'
import Profile from '../../screens/main/profile'
import Lecture from '../../screens/main/lecture'
import { AccountTabSvg, CourseTabSvg, HomeTabSvg, LectureTabSvg, LogoutSvg } from '../../assets/icons'
import { View } from 'react-native'

const Tab = createBottomTabNavigator()

const BottomNavigation = () => {
    return (
        <>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    tabBarHideOnKeyboard: true,
                    tabBarActiveTintColor: Color.primary,
                    tabBarInactiveTintColor: Color.paragraph,
                    tabBarLabelStyle: { fontSize: 12, fontWeight: 500 },
                    tabBarStyle: { height: 55, paddingBottom: 5, paddingTop: 5 },
                    // tabBarActiveBackgroundColor: Color.white,
                    // tabBarInactiveBackgroundColor: Color.primary,
                    // tabBarItemStyle: { borderTopLeftRadius: 20, borderTopRightRadius: 20 },
                }}
            >
                <Tab.Screen name="Home" component={Home} options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <HomeTabSvg color={color} />
                    )
                }} />

                <Tab.Screen name="Course" component={Course} options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <CourseTabSvg color={color} />
                    )
                }} />

                <Tab.Screen name="Lecture" component={Lecture} options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <LectureTabSvg color={color} />
                    )
                }} />

                <Tab.Screen name="Account" component={Profile} options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <AccountTabSvg color={color} />
                    )
                }} />
            </Tab.Navigator>
        </>
    )
}

export default BottomNavigation