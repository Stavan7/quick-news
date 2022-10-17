import React from 'react';
import {
    View,
    Text,
    Share,
    Linking,
    Dimensions,
    ScrollView,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import moment from 'moment';
import COLORS from '../constants/Colors';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const HEIGHT = Dimensions.get('window').height;

const DetailScreen = ({ route, navigation }) => {

    const data = route.params.newsData;
    // console.log(data);

    const image = data.urlToImage
    console.log(image)


    const onShare = async () => {
        try {
            const result = await Share.share({
                message: `Read this article: ${data.newsData.url}`,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log(result.action)
                } else {
                    console.log(result.action)
                }
            } else if (result.action === Share.dismissedAction) {
                console.log(result.action)
            }
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ height: HEIGHT / 2.3, }}>
                    {
                        image !== null ?
                            <FastImage
                                source={{
                                    uri: image,
                                    priority: FastImage.priority.normal,
                                    cache: FastImage.cacheControl.web
                                }}
                                style={styles.image}
                                alt="Alternate Text"
                                resizeMode={"cover"}
                            />
                            :
                            <FastImage
                                source={require('../assets/discover/noImage.jpg')}
                                style={styles.image}
                                alt="Alternate Text"
                                resizeMode={"cover"}
                            />
                    }
                    <Ionicons
                        size={25}
                        color="white"
                        name="ios-chevron-back-sharp"
                        style={styles.iconContainer}
                        onPress={() => navigation.goBack()}
                    />
                    <EvilIcons
                        size={28}
                        color="white"
                        name="share-apple"
                        onPress={onShare}
                        style={styles.shareContainer}
                    />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.time}>Published : {moment(data.publishedAt).format('LLL')}</Text>

                    <Text style={styles.content}>{data.content ?? data.description}</Text>
                    <Text style={styles.urlText}>To read full news, checkout :</Text>
                    <Text style={styles.url} onPress={() => Linking.openURL(data.url)}>{data.url}</Text>

                    <Text style={styles.authorText}>Author: {data.author ?? 'Not Available'}</Text>
                    <Text style={styles.source}>Source: {data.source.name ?? 'Not Available'}</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        flex: 1,
        width: '100%',
        height: 'auto',
    },
    textContainer: {
        flex: 1,
        padding: 20,
        marginTop: -30,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    title: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'Poppins-SemiBold'
    },
    time: {
        fontSize: 14,
        color: 'black',
        marginTop: 10,
        fontFamily: 'NotoSans-SemiBold'
    },
    content: {
        fontSize: 16,
        color: '#1e1e1e',
        marginTop: 10,
        textAlign: 'left',
        fontFamily: 'NotoSans-Regular'
    },
    urlText: {
        fontSize: 16,
        color: 'black',
        marginTop: 10,
        textAlign: 'left',
        fontFamily: 'NotoSans-Regular'
    },
    url: {
        fontSize: 14,
        color: COLORS.focusedIcon,
        textAlign: 'left',
        textDecorationLine: 'underline',
        fontFamily: 'NotoSans-Regular'
    },
    authorText: {
        flex: 1,
        fontSize: 14,
        color: 'black',
        marginTop: 30,
        fontFamily: 'NotoSans-Regular'
    },
    source: {
        fontSize: 14,
        color: 'black',
        marginTop: 5,
        fontFamily: 'NotoSans-Regular'
    },
    shareContainer: {
        position: 'absolute',
        top: 50,
        right: 20,
        height: 40,
        width: 40,
        borderRadius: 30,
        backgroundColor: 'black',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    iconContainer: {
        position: 'absolute',
        top: 50,
        left: 20,
        height: 40,
        width: 40,
        borderRadius: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'black',
    },
    icon: {
        height: 25,
        width: 25,
    }
})

export default DetailScreen 