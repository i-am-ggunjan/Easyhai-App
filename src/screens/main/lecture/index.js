// import React from 'react'
// import { View, useWindowDimensions } from 'react-native'
// import Web from '../../../components/features/Web'
// import { KeyboardAvoidingView } from 'react-native'

// const Lecture = () => {
//     const liveClass = "Easyhai by Gaurav Gunjan"
//     const { height } = useWindowDimensions()

//     return (
//         <KeyboardAvoidingView style={{ flex: 1 }}>
//             <Web url={`https://meet.easyhaionline.com/${liveClass}`} />
//             <Web url={`https://test-eho.vercel.app`} />
//         </KeyboardAvoidingView>
//     )
// }

// export default Lecture

import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { AuthContext } from '../../../context/authContext'
import AnimatedGifs from "../../../assets/images/AnimatedGifs.gif"
import { Color } from '../../../styles/colors'

const Lecture = () => {

    return (
        <View style={{ flex: 1, justifyContent: "space-around", paddingHorizontal: 15, backgroundColor: Color.white }}>
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
        </View>
    )
}

export default Lecture