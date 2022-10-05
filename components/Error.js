import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View
} from 'react-native'
import Lottie from 'lottie-react-native';
import COLORS from '../constants/Colors';

const Error = () => {
    return (
        <View style={styles.container}>
            <Lottie
                autoPlay
                style={styles.lottie}
                source={require('../assets/animations/error.json')}
            />
            <Text style={styles.header}>Oops!</Text>
            <Text style={styles.text}>Please check your internet connection or try again in an hour</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    lottie: {
        width: 350,
        height: 350,
    },
    header: {
        color: 'black',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 28,
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        margin: 20,
        textAlign: 'center',
        color: COLORS.focusedIcon,
        fontFamily: 'NotoSans-Regular',
    }
})

export default Error