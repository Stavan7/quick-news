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

    const data = route.params;

    const pubishedTime = data.publishedAt;
    const time = moment(pubishedTime).format("ll");

    const onShare = async () => {
        try {
            const result = await Share.share({
                message: data.newsData.title,
                url: data.newsData.url,
                title: `Read this article by :${data.newsData.author ?? data.newsData.source.name}`
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
                    <FastImage source={{ uri: data.newsData.urlToImage ?? 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.houseandgarden.co.uk%2Fphotos%2F618942d70a583de660124c63%2F3%3A4%2Fw_1803%2Ch_2404%2Cc_limit%2Fbuckingham.jpg&imgrefurl=https%3A%2F%2Fwww.houseandgarden.co.uk%2Fgallery%2Fbuckingham-palace-interiors&tbnid=x5nz_1I4lwHwXM&vet=12ahUKEwjpg8nep736AhUKidgFHewgDKwQMygIegUIARDzAQ..i&docid=0XSRP8jMmeQQYM&w=1803&h=2404&q=buckingham%20palace&ved=2ahUKEwjpg8nep736AhUKidgFHewgDKwQMygIegUIARDzAQ' }} style={styles.image} />
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
                    <Text style={styles.title}>{data.newsData.title}</Text>
                    <Text style={styles.time}>Published : {time}</Text>

                    <Text style={styles.content}>{data.newsData.content ?? data.newsData.description}</Text>
                    <Text style={styles.urlText}>To read full news, checkout :</Text>
                    <Text style={styles.url} onPress={() => Linking.openURL(data.newsData.url)}>{data.newsData.url}</Text>

                    <Text style={styles.authorText}>Author: {data.newsData.author ?? 'Not Available'}</Text>
                    <Text style={styles.source}>Source: {data.newsData.source.name ?? 'Not Available'}</Text>
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
        fontFamily: 'NotoSans-Bold'
    },
    time: {
        fontSize: 14,
        color: 'black',
        marginTop: 10,
        fontFamily: 'NotoSans-SemiBold'
    },
    content: {
        fontSize: 16,
        color: 'black',
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