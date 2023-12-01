import React from 'react'
import { Image } from 'react-native'
import AuthEllipseImage from "../../assets/images/AuthEllipse.png"

const AuthEllipse = () => {
    return (
        <Image source={AuthEllipseImage} resizeMode='cover' style={{ position: "absolute", right: -50, top: -10 }} />
    )
}

export default AuthEllipse