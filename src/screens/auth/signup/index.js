import React, { useState, useEffect, useRef, useContext } from 'react'
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
import { AuthContext } from '../../../context/authContext'
import Spinner from 'react-native-loading-spinner-overlay'

const Signup = (props) => {
    const { signupApi, isLoading } = useContext(AuthContext)
    const form = useForm();
    const { control, handleSubmit, formState: { errors } } = form;
    const [passwordSecure, setPasswordSecure] = useState(false)
    const [isNumberFocused, setIsNumberFocused] = useState(false)
    const [isEmailFocused, setIsEmailFocused] = useState(false)
    const [isPasswordFocused, setIsPasswordFocused] = useState(false)
    // const inputRef = useRef(null)

    const onSubmit = async (data) => {
        console.log("Signup Page :: ", data)
        signupApi(data.number, data.email, data.password)
    }

    // props.navigation.navigate("OtpVerification")
    // useEffect(() => {
    //     inputRef.current.focus();
    // }, [inputRef])

    return (
        <SafeAreaView style={GlobalStyles.global.authSafeAreaView}>
            <Spinner visible={isLoading} />
            <AuthEllipse />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={[GlobalStyles.auth.container, { gap: 40 }]}>
                    <AuthHeading heading={`Let's create your Account`} subHeading={`Create an account to get started our services`} />

                    <View style={{ gap: 10 }}>
                        <View>
                            <Controller
                                name="number" control={control}
                                render={({ field: { onChange, value } }) => <TextInput
                                    // ref={inputRef}
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
                            <Text style={{ color: Color.error, textAlign: "left" }}>{errors.number?.message}</Text>
                        </View>

                        <View>
                            <Controller
                                name="email" control={control}
                                render={({ field: { onChange, value } }) => <TextInput
                                    onFocus={() => setIsEmailFocused(true)}
                                    onBlur={() => setIsEmailFocused(false)}
                                    placeholder="Email" value={value} onChangeText={onChange} underlineColorAndroid="transparent" style={[GlobalStyles.auth.inputField, { borderColor: isEmailFocused ? Color.primary : "transparent", }]} />}
                                rules={{
                                    required: { value: true, message: "Email is Mandatory" },
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Please Enter Valid Email",
                                    },
                                }}
                            />
                            <Text style={{ color: Color.error, textAlign: "left" }}>{errors.email?.message}</Text>
                        </View>

                        <View>
                            <Controller
                                name="password" control={control}
                                render={({ field: { onChange, value } }) => <TextInput
                                    onFocus={() => setIsPasswordFocused(true)}
                                    onBlur={() => setIsPasswordFocused(false)}
                                    placeholder="Password" value={value} onChangeText={onChange} underlineColorAndroid="transparent" secureTextEntry={passwordSecure} style={[GlobalStyles.auth.inputField, { borderColor: isPasswordFocused ? Color.primary : "transparent" }]} />}
                                rules={{
                                    required: { value: true, message: "Password is Mandatory" },
                                    // pattern: {
                                    //     value:
                                    //         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    //     message: "Please Enter Valid Password",
                                    // }
                                }}
                            />
                            <TouchableOpacity onPress={() => setPasswordSecure(!passwordSecure)} style={{ position: "absolute", right: 10, top: 13, paddingHorizontal: 10 }} >
                                {passwordSecure ? <Ionicons name="eye-outline" size={20} color="black" /> : <Ionicons name="eye-off-outline" size={20} color="black" />}
                            </TouchableOpacity>
                            <Text style={{ color: Color.error, textAlign: "left" }}>{errors.password?.message}</Text>
                        </View>

                        <TouchableOpacity onPress={handleSubmit(onSubmit)} >
                            <PrimaryBtn name={`Signup`} />
                        </TouchableOpacity>
                    </View>

                    <AuthSocial />

                    <AuthAccount para={`Already have an account ?`} name={`Login`} nav={`Login`} />
                </View>
            </ScrollView>
            <AuthLine />
        </SafeAreaView >
    )
}

export default Signup
