import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native'
import COLORS from '../constants/Colors';

const Header = ({ header }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{header}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        backgroundColor: COLORS.bottomTabBg,
    },
    headerText: {
        fontSize: 17,
        letterSpacing: 1,
        fontFamily: 'NotoSans-Bold',
        color: COLORS.unFocusedIcon
    },
})

export default Header;