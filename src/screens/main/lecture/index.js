// import React from 'react'
// import { View, useWindowDimensions } from 'react-native'
// import Web from '../../../components/features/Web'
// import { KeyboardAvoidingView } from 'react-native'

// const Lecture = () => {
//     const liveClass = "Easyhai by Gaurav Gunjan"
//     const { height } = useWindowDimensions()

//     return (
//         <KeyboardAvoidingView style={{ flex: 1 }}>
//             {/* <Web url={`http://192.168.29.32:3001`} /> */}
//             <Web url={`https://meet.easyhaionline.com/${liveClass}`} />
//         </KeyboardAvoidingView>
//     )
// }

// export default Lecture

{/* <View style={{ flex: 1, justifyContent: "space-around", paddingHorizontal: 15, backgroundColor: Color.white }}>
    <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
            style={{ height: 200, width: "100%" }}
            source={AnimatedGifs}
        />
    </View>

    <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
            style={{ height: 200, width: "100%" }}
            source={AnimatedGifs}
        />
    </View>
</View> */}

import React from 'react'
import { View, Text } from 'react-native'
import { Color } from '../../../styles/colors'

const Lecture = () => {

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Color.light }}>
            <Text>Lecture Coming Soon ...</Text>
        </View>
    )
}

export default Lecture