import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native'
import COLORS from '../../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({ header, BackBtn, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{header}</Text>
            <View style={styles.bakcBtnContainer}>
                {
                    BackBtn === true ?
                        <Ionicons
                            size={25}
                            color="white"
                            name="ios-chevron-back-sharp"
                            onPress={() => navigation.goBack()}
                        />
                        : null
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 10,
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: COLORS.bottomTabBg,
    },
    headerText: {
        fontSize: 17,
        letterSpacing: 1,
        fontFamily: 'NotoSans-Bold',
        color: COLORS.unFocusedIcon
    },
    bakcBtnContainer: {
        left: 14,
        position: 'absolute',
    },
})

export default Header;