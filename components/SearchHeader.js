import React from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const SearchHeader = ({ navigation }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.general}>General</Text>
            <Feather
                size={25}
                name="search"
                color="white"
                style={{ marginLeft: 10 }}
                onPress={() => navigation.navigate('NoBottomTab', { screen: 'SearchScreen' })}
            />
        </View>
    )
}

export default SearchHeader

const styles = StyleSheet.create({
    header: {
        padding: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    general: {
        fontSize: 23,
        color: 'white',
        marginLeft: -3,
        letterSpacing: 1,
        fontFamily: 'Poppins-Bold'
    },
})
