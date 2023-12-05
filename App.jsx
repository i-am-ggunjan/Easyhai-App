import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import StackNavigation from './src/navigation/stackNavigation'
import AuthContextProvider from './src/context/authContext'
import SplashScreen from 'react-native-splash-screen'

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 2000);
  }, [])

  return (
    <NavigationContainer>
      <AuthContextProvider>
        <StackNavigation />
      </AuthContextProvider>
      <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
    </NavigationContainer>
  )
}

export default App