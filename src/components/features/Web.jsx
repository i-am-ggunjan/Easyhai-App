import { View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const Web = ({ url }) => {
  return (
    <WebView source={{ uri: url }} />
  )
}

export default Web