import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native'
import Header from '../components/Header';
import { WebView } from 'react-native-webview';

const DetailScreen = ({ route, navigation }) => {
    const data = route.params.data;

    const DetailData = () => {
        return <WebView source={{ uri: data.url }} style={{ color: 'blue', fontSize: 12 }} />
    }

    return (
        <View style={{ flex: 1 }}>
            <Header header="Details Screen" />
            <DetailData />
        </View>
    )
}

const styles = StyleSheet.create({})

export default DetailScreen