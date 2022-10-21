import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    Dimensions
} from 'react-native'
import Lottie from 'lottie-react-native';
import COLORS from '../constants/Colors';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;


const Error = ({ errorText }) => {
    return (
        <View style={styles.container}>
            <Lottie
                autoPlay
                style={styles.lottie}
                source={require('../assets/animations/error.json')}
            />
            <Text style={styles.header}>Oops!</Text>
            <Text style={styles.text}>{errorText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.screenBg
    },
    lottie: {
        width: 350,
        height: 350,
        marginTop: -70
    },
    header: {
        color: 'white',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 28,
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        color: COLORS.focusedIcon,
        fontFamily: 'NotoSans-Regular',
    }
})

export default Error