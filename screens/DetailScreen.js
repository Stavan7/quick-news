import React from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    Linking,
    Pressable,
} from 'react-native';
import moment from 'moment';
import FastImage from 'react-native-fast-image';
import COLORS from '../constants/Colors';

const HEIGHT = Dimensions.get('window').height;

const DetailScreen = ({ route, navigation }) => {

    const data = route.params.data;

    const pubishedTime = data.publishedAt;
    const time = moment(pubishedTime).format("ll");

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ height: HEIGHT / 2.3, }}>
                    <FastImage source={{ uri: data.urlToImage ?? 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.houseandgarden.co.uk%2Fphotos%2F618942d70a583de660124c63%2F3%3A4%2Fw_1803%2Ch_2404%2Cc_limit%2Fbuckingham.jpg&imgrefurl=https%3A%2F%2Fwww.houseandgarden.co.uk%2Fgallery%2Fbuckingham-palace-interiors&tbnid=x5nz_1I4lwHwXM&vet=12ahUKEwjpg8nep736AhUKidgFHewgDKwQMygIegUIARDzAQ..i&docid=0XSRP8jMmeQQYM&w=1803&h=2404&q=buckingham%20palace&ved=2ahUKEwjpg8nep736AhUKidgFHewgDKwQMygIegUIARDzAQ' }} style={styles.image} />

                    <Pressable style={styles.iconContainer} onPress={() => navigation.goBack()}>
                        <FastImage
                            source={require('../assets/icons/back-arrow.png')}
                            style={styles.icon}
                            resizeMode={"contain"}
                        />
                    </Pressable>
                    <Pressable style={styles.shareContainer}>
                        <FastImage
                            source={require('../assets/icons/share.png')}
                            tintColor="white"
                            style={styles.icon}
                            resizeMode={"contain"}
                        />
                    </Pressable>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.time}>Published : {time}</Text>

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
        alignItems: 'center',
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    iconContainer: {
        position: 'absolute',
        top: 50,
        left: 20,
        height: 40,
        width: 40,
        borderRadius: 30,
        alignItems: 'center',
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    icon: {
        height: 25,
        width: 25,
    }
})

export default DetailScreen