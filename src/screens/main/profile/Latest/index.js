import { View, Text } from 'react-native'
import React from 'react'
import { Color } from '../../../../styles/colors'
import ArrowHeading from '../../../../components/cards/ArrowHeading'

const Security = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.light }}>
            <ArrowHeading heading={'Securtiy'} />


        </SafeAreaView>
    )
}

export default Security