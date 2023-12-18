import React, { useState } from 'react';

import { View, TouchableOpacity, StyleSheet, Animated } from 'react-native';



const CustomSwitch = () => {

    const [isChecked, setIsChecked] = useState(false);

    const translateValue = new Animated.Value(0);



    const toggleSwitch = () => {

        setIsChecked(previousState => !previousState);

        Animated.timing(translateValue, {

            toValue: isChecked ? 0 : 1,

            duration: 300,

            useNativeDriver: false,

        }).start();

    };



    const translateX = translateValue.interpolate({

        inputRange: [0, 1],

        outputRange: [0, 32],

    });



    return (

        <TouchableOpacity style={styles.switch} onPress={toggleSwitch}>

            <View style={[styles.slider, isChecked ? styles.sliderChecked : null]}>

                <Animated.View style={[styles.sliderButton, { transform: [{ translateX }] }]} />

            </View>

        </TouchableOpacity>

    );

};



const styles = StyleSheet.create({

    switch: {

        width: 70,

        height: 40,

        borderRadius: 20,

        borderWidth: 1,

        borderColor: '#d4acfb',

        overflow: 'hidden',

    },

    slider: {

        flex: 1,

        flexDirection: 'row',

        borderRadius: 20,

        backgroundColor: 'white',

        borderWidth: 1,

        borderColor: '#d4acfb',

    },

    sliderChecked: {

        backgroundColor: '#b84fce',

    },

    sliderButton: {

        width: 36,

        height: 36,

        borderRadius: 18,

        backgroundColor: 'white',

        borderWidth: 1,

        borderColor: '#d4acfb',

    },

});



export default CustomSwitch;