import { View, Text } from 'react-native'
import React from 'react'
import { Color } from '../../../styles/colors'

const Course = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Color.light }}>
            <Text>Course Coming Soon ...</Text>
        </View>
    )
}

export default Course