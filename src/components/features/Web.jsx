import { View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const Web = ({ liveClass }) => {
  return (
    <WebView source={{ uri: `https://meet.easyhaionline.com/${liveClass}` }} />
  )
}

export default Web