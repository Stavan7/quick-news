import React from 'react'
import {
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import COLORS from '../../constants/Colors';

const Loading = () => {
    return <ActivityIndicator size='large' color={COLORS.text} style={styles.container} />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '50%',
        alignSelf: 'center'
    }
})

export default Loading;
