import React from 'react'
import {
    View,
    StyleSheet,
} from 'react-native';
import Lottie from 'lottie-react-native';

const Loading = () => {
    return (
        <View style={styles.container}>
            <Lottie
                autoPlay
                cacheComposition={false}
                hardwareAccelerationAndroid={true}
                enableMergePathsAndroidForKitKatAndAbove={true}
                source={require('../assets/animations/loading.json')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '50%',
        alignSelf: 'center'
    }
})

export default Loading; 