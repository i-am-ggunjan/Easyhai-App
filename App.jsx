import React, { useEffect } from 'react'
import { NavigationContainer } from "@react-navigation/native"
import StackNavigation from './src/navigation/stackNavigation'
import AuthContextProvider from './src/context/authContext'
import SplashScreen from 'react-native-splash-screen'

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer>
      <AuthContextProvider>
        <StackNavigation />
      </AuthContextProvider>
    </NavigationContainer>
  )
}

export default App