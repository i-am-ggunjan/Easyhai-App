import React, { useState, useContext } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, ToastAndroid } from 'react-native'
import { Color } from '../../../../styles/colors'
import { GlobalStyles } from '../../../../styles/globalStyles'
import { useForm, Controller } from 'react-hook-form'
import Ionicons from "react-native-vector-icons/Ionicons"
import AuthEllipse from '../../../../components/cards/AuthEllipse'
import AuthHeading from '../../../../components/cards/AuthHeading'
import AuthLine from '../../../../components/cards/AuthLine'
import PrimaryBtn from '../../../../components/buttons/PrimaryBtn'
import Spinner from 'react-native-loading-spinner-overlay'
import { AuthContext } from '../../../../context/authContext'

const CreateNewPassword = (props) => {
    const { phoneNumber } = props.route.params
    const { changePasswordApi, isLoading } = useContext(AuthContext)
    const form = useForm();
    const { control, handleSubmit, formState: { errors } } = form;
    const [passwordSecure, setPasswordSecure] = useState(false)
    const [confirmPasswordSecure, setConfirmPasswordSecure] = useState(false)
    const [isOtpFocused, setIsOtpFocused] = useState(false)
    const [isPasswordFocused, setIsPasswordFocused] = useState(false)
    const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false)

    const onSubmit = async (data) => {
        console.log("Create New Password Page :: ", data)
        if (data.password !== data.confirmPassword) {
            ToastAndroid.show(`Password Didn't Match`, ToastAndroid.LONG)
            return
        }
        changePasswordApi(phoneNumber, data.otp, data.password)
    }

    return (
        <SafeAreaView style={GlobalStyles.global.authSafeAreaView}>
            <Spinner visible={isLoading} />
            <AuthEllipse />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={GlobalStyles.auth.container}>
                    <AuthHeading heading={`Create New Paasword`} subHeading={`Your New password must be unique from those previously used`} />

                    <View style={{ gap: 10 }}>
                        <View>
                            <Controller
                                name="otp" control={control}
                                render={({ field: { onChange, value } }) => <TextInput
                                    onFocus={() => setIsOtpFocused(true)}
                                    onBlur={() => setIsOtpFocused(false)}
                                    placeholder="OTP" value={value} onChangeText={onChange} underlineColorAndroid="transparent" style={[GlobalStyles.auth.inputField, { borderColor: isOtpFocused ? Color.primary : "transparent", }]} />}
                                rules={{ required: { value: true, message: "Otp is Mandatory" } }}
                            />
                            <Text style={GlobalStyles.auth.error}>{errors.otp?.message}</Text>
                        </View>

                        <View>
                            <Controller
                                name="password" control={control}
                                render={({ field: { onChange, value } }) => <TextInput
                                    onFocus={() => setIsPasswordFocused(true)}
                                    onBlur={() => setIsPasswordFocused(false)}
                                    placeholder="Password" value={value} onChangeText={onChange} underlineColorAndroid="transparent" secureTextEntry={passwordSecure} style={[GlobalStyles.auth.inputField, { borderColor: isPasswordFocused ? Color.primary : "transparent" }]} />}
                                rules={{ required: { value: true, message: "Password is Mandatory" } }}
                            />
                            <TouchableOpacity onPress={() => setPasswordSecure(!passwordSecure)} style={{ position: "absolute", right: 10, top: 13, paddingHorizontal: 10 }} >
                                {passwordSecure ? <Ionicons name="eye-outline" size={20} color="black" /> : <Ionicons name="eye-off-outline" size={20} color="black" />}
                            </TouchableOpacity>
                            <Text style={GlobalStyles.auth.error}>{errors.password?.message}</Text>
                        </View>

                        <View>
                            <Controller
                                name="confirmPassword" control={control}
                                render={({ field: { onChange, value } }) => <TextInput
                                    onFocus={() => setIsConfirmPasswordFocused(true)}
                                    onBlur={() => setIsConfirmPasswordFocused(false)}
                                    placeholder="Confirm Password" value={value} onChangeText={onChange} underlineColorAndroid="transparent" secureTextEntry={confirmPasswordSecure} style={[GlobalStyles.auth.inputField, { borderColor: isConfirmPasswordFocused ? Color.primary : "transparent" }]} />}
                                rules={{ required: { value: true, message: "Confirm Password is Mandatory" } }}
                            />
                            <TouchableOpacity onPress={() => setConfirmPasswordSecure(!confirmPasswordSecure)} style={{ position: "absolute", right: 10, top: 13, paddingHorizontal: 10 }} >
                                {confirmPasswordSecure ? <Ionicons name="eye-outline" size={20} color="black" /> : <Ionicons name="eye-off-outline" size={20} color="black" />}
                            </TouchableOpacity>
                            <Text style={GlobalStyles.auth.error}>{errors.confirmPassword?.message}</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={handleSubmit(onSubmit)} >
                        <PrimaryBtn name={`Reset Password`} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <AuthLine />
        </SafeAreaView>
    )
}

export default CreateNewPassword
