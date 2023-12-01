import React from 'react'
import { Image } from 'react-native'
import AuthLineImage from "../../assets/images/AuthLine.png"

const AuthLine = () => {
    return (
        <Image source={AuthLineImage} resizeMode='cover' style={{ position: "absolute", left: -20, bottom: -20, zIndex: -1, }} />
    )
}

export default AuthLine