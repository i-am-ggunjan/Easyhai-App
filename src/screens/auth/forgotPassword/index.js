import React, { useContext, useState } from 'react'
import { Text, View, TextInput, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { GlobalStyles } from '../../../styles/globalStyles'
import { Color } from '../../../styles/colors'
import { useForm, Controller } from "react-hook-form"
import AuthEllipse from '../../../components/cards/AuthEllipse'
import AuthHeading from '../../../components/cards/AuthHeading'
import AuthLine from '../../../components/cards/AuthLine'
import PrimaryBtn from '../../../components/buttons/PrimaryBtn'
import Spinner from 'react-native-loading-spinner-overlay'
import { AuthContext } from '../../../context/authContext'

const ForgotPassword = () => {
    const { forgotPassOTPApi, isLoading } = useContext(AuthContext)
    const form = useForm();
    const { control, handleSubmit, formState: { errors } } = form;
    const [isNumberFocused, setIsNumberFocused] = useState(false)

    const onSubmit = async (data) => {
        console.log("Forgot Password Page :: ", data)
        forgotPassOTPApi(data.number)
    }

    return (
        <SafeAreaView style={GlobalStyles.global.authSafeAreaView}>
            <Spinner visible={isLoading} />
            <AuthEllipse />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={GlobalStyles.auth.container}>
                    <AuthHeading heading={`Forgot Password`} subHeading={`To reset your password, we need your email or mobile number that can be authenticated`} />

                    <View style={{ gap: 30 }}>
                        <View>
                            <Controller
                                name="number" control={control}
                                render={({ field: { onChange, value } }) => <TextInput
                                    onFocus={() => setIsNumberFocused(true)}
                                    onBlur={() => setIsNumberFocused(false)}
                                    placeholder="Mobile Number" value={value} onChangeText={onChange} underlineColorAndroid="transparent" style={[GlobalStyles.auth.inputField, { borderColor: isNumberFocused ? Color.primary : "transparent", }]} />}
                                rules={{
                                    maxLength: { value: 10, message: "You have Exceed the Length" },
                                    required: { value: true, message: "Number is Mandatory" },
                                    pattern: {
                                        value: /^\d+$/, // Allow Only Positive Integer
                                        message: "Please Enter Valid Number",
                                    },
                                }}
                            />
                            <Text style={GlobalStyles.auth.error}>{errors.number?.message}</Text>
                        </View>

                        <TouchableOpacity onPress={handleSubmit(onSubmit)} >
                            <PrimaryBtn name={`Get OTP`} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <AuthLine />
        </SafeAreaView>
    )
}

export default ForgotPassword
