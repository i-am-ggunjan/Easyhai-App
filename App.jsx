import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import StackNavigation from './src/navigation/stackNavigation'
import AuthContextProvider from './src/context/authContext'

const App = () => {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <StackNavigation />
      </AuthContextProvider>
    </NavigationContainer>
  )
}

export default App