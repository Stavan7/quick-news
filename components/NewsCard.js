import React from 'react';
import {
    Text,
    View,
    Share,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import moment from 'moment';
import FastImage from 'react-native-fast-image';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const NewsCard = ({ data, navigation }) => {

    const onShare = async () => {
        try {
            const result = await Share.share({
                message: `Read this article: ${url}`,
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

    const ImgCheck = () => {
        if (data.urlToImage !== null) {
            return (
                <FastImage
                    source={{ uri: data.urlToImage }}
                    style={styles.image}
                    alt="Alternate Text"
                    resizeMode={"cover"}
                />
            )
        } else if (data.source.name === 'Google News') {
            return (
                <FastImage
                    source={require('../assets/discover/google-news.png')}
                    style={styles.image}
                    alt="Alternate Text"
                    resizeMode={"cover"}
                />
            )
        } else {
            return (
                <FastImage
                    source={require('../assets/discover/noImage.jpg')}
                    style={styles.image}
                    alt="Alternate Text"
                    resizeMode={"cover"}
                />
            )
        }
    }

    return (
        <TouchableOpacity activeOpacity={0.8}
            onPress={() => navigation.navigate('NoBottomTab', {
                screen: "DetailsScreen",
                params: { data }
            })}>

            <View style={styles.dataContainer}>
                <ImgCheck />
                <Text style={styles.title} numberOfLines={1}>{data.title}</Text>
                <View style={styles.bottomContainer}>
                    <View flexDirection='row'>
                        <Text style={styles.source}>Source : {data.source.name ?? 'Not Available'}</Text>
                        <Text style={styles.time}>{moment(data.publishedAt).format('LT')}</Text>
                    </View>
                    <EvilIcons
                        name="share-google"
                        size={28}
                        color={'white'}
                        onPress={onShare}
                        style={{ marginRight: 15 }}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    dataContainer: {
        borderRadius: 10,
        marginBottom: 20,
        marginHorizontal: 20,
        height: 320,
        backgroundColor: '#191919',
        shadowColor: '#121212',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    image: {
        height: '73%',
        width: '100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    title: {
        fontSize: 14,
        color: 'white',
        margin: 10,
        fontFamily: 'Poppins-SemiBold'
    },
    bottomContainer: {
        marginTop: 5,
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'space-between',
    },
    source: {
        fontSize: 13,
        color: '#fff',
        fontFamily: 'Poppins-Regular'
    },
    time: {
        fontSize: 13,
        color: '#fff',
        marginLeft: 10,
        fontFamily: 'Poppins-Regular'
    }
})

export default NewsCard; 
