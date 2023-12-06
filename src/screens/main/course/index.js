import React from 'react'
import { View, Text } from 'react-native'
import Web from '../../../components/features/Web'

const Course = () => {
    return (
        <View style={{ flex: 1 }}>
            <Web url={`https://test-eho.vercel.app/courses`} />
        </View>
    )
}

export default Course