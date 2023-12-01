import React, { useContext, useState } from 'react'
import { ScrollView, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { Color } from '../../../../styles/colors'
import { GlobalStyles } from '../../../../styles/globalStyles'
import OTPTextInput from "react-native-otp-textinput"
import AuthEllipse from '../../../../components/cards/AuthEllipse'
import AuthHeading from '../../../../components/cards/AuthHeading'
import AuthLine from '../../../../components/cards/AuthLine'
import PrimaryBtn from '../../../../components/buttons/PrimaryBtn'
import PrimaryTextBtn from '../../../../components/buttons/PrimaryTextBtn'
import Spinner from 'react-native-loading-spinner-overlay'
import { AuthContext } from '../../../../context/authContext'

const OtpVerification = (props) => {
    const { otpVerificationApi, isLoading } = useContext(AuthContext)
    const [otp, setOtp] = useState('')
    // console.log("Props ::: ", props.route)
    const { phoneNumber, email } = props.route.params
    // console.log(phoneNumber, email)

    const onSubmit = async () => {
        console.log("Otp Verification Page :: ", { phoneNumber, email, otp })
        otpVerificationApi(phoneNumber, email, otp)
    }

    return (
        <SafeAreaView style={GlobalStyles.global.authSafeAreaView}>
            <Spinner visible={isLoading} />
            <AuthEllipse />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={GlobalStyles.auth.container}>
                    <AuthHeading heading={`Otp Verification`} subHeading={`Enter the verification code we just sent on your email address`} />

                    <View style={{ gap: 30 }}>
                        <View style={{}}>
                            <OTPTextInput
                                textInputStyle={{ borderColor: 'gray', borderWidth: 1, borderRadius: 4, fontSize: 16, height: 45, width: 40 }}
                                handleTextChange={(otp) => setOtp(otp)}
                                inputCount={6}
                                tintColor={Color.primary}
                                offTintColor={Color.iconBg}
                            />
                        </View>

                        <TouchableOpacity onPress={() => onSubmit()} >
                            <PrimaryBtn name={`Verify`} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Text style={{ color: Color.paragraph }}>Didn't recieved code? </Text>
                        <TouchableOpacity>
                            <PrimaryTextBtn name={`Resend`} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <AuthLine />
        </SafeAreaView>
    )
}

export default OtpVerification
