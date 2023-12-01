import React, { useState, useContext } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { Color } from '../../../styles/colors'
import { GlobalStyles } from '../../../styles/globalStyles'
import { useForm, Controller } from 'react-hook-form'
import Ionicons from "react-native-vector-icons/Ionicons"
import AuthEllipse from '../../../components/cards/AuthEllipse'
import AuthHeading from '../../../components/cards/AuthHeading'
import AuthSocial from '../../../components/cards/AuthSocial'
import AuthAccount from '../../../components/cards/AuthAccount'
import AuthLine from '../../../components/cards/AuthLine'
import PrimaryBtn from '../../../components/buttons/PrimaryBtn'
import PrimaryTextBtn from '../../../components/buttons/PrimaryTextBtn'
import { AuthContext } from '../../../context/authContext'
import Spinner from 'react-native-loading-spinner-overlay'

const Login = (props) => {
    const { loginApi, isLoading } = useContext(AuthContext)
    const form = useForm();
    const { control, handleSubmit, formState: { errors } } = form;
    const [passwordSecure, setPasswordSecure] = useState(false)
    const [isNumberFocused, setIsNumberFocused] = useState(false)
    const [isPasswordFocused, setIsPasswordFocused] = useState(false)

    const onSubmit = async (data) => {
        console.log("Login Page :: ", data)
        loginApi(data.number, data.password)
    }

    return (
        <SafeAreaView style={GlobalStyles.global.authSafeAreaView}>
            <Spinner visible={isLoading} />
            <AuthEllipse />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={GlobalStyles.auth.container}>
                    <AuthHeading heading={'Login to your Account'} subHeading={'Welcome back, you’ve been missed!'} />

                    <View style={{ gap: 10 }}>
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

                        <TouchableOpacity onPress={() => props.navigation.navigate("ForgotPassword")} style={{ alignItems: "flex-end", marginBottom: 14 }}>
                            <PrimaryTextBtn name={`Forgot your password?`} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleSubmit(onSubmit)} >
                            <PrimaryBtn name={`Login`} />
                        </TouchableOpacity>
                    </View>

                    <AuthSocial />

                    <AuthAccount para={`Don't have an account ?`} name={`Sign up`} nav={`Signup`} />
                </View>
            </ScrollView>
            <AuthLine />
        </SafeAreaView>
    )
}

export default Login
