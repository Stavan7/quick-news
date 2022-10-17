import React from 'react';
import {
    Text,
    View,
    Share,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import FastImage from 'react-native-fast-image';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const NewsCard = ({ image, title, source, navigation, newsData, time, url }) => {

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

    return (
        <TouchableOpacity activeOpacity={0.8}
            onPress={() => navigation.navigate('NoBottomTab', {
                screen: "DetailsScreen",
                params: { newsData }
            })}>

            <View style={styles.dataContainer}>
                {
                    image !== null ? (
                        <FastImage
                            source={{ uri: image }}
                            style={styles.image}
                            alt="Alternate Text"
                            resizeMode={"cover"}
                        />
                    ) :
                        <FastImage
                            source={require('../assets/discover/noImage.jpg')}
                            style={styles.image}
                            alt="Alternate Text"
                            resizeMode={"cover"}
                        />
                }
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <View style={styles.bottomContainer}>
                    <View flexDirection='row'>
                        <Text style={styles.source}>Source : {source ?? 'Not Available'}</Text>
                        <Text style={styles.time}>{time}</Text>
                    </View>
                    <EvilIcons
                        name="share-google"
                        size={28}
                        color={'black'}
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
        backgroundColor: '#fff',

        shadowColor: '#000',
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
        color: 'black',
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
        color: '#0a0908',
        fontFamily: 'Poppins-Regular'
    },
    time: {
        fontSize: 13,
        color: '#0a0908',
        marginLeft: 10,
        fontFamily: 'Poppins-Regular'
    }
})

export default NewsCard; 
