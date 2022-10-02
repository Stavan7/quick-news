import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import FastImage from 'react-native-fast-image';

const NewsCard = ({ image, title, source, author, navigation, newsData }) => {
    return (
        <TouchableOpacity activeOpacity={0.8}
            onPress={() => navigation.navigate('NoBottomTab', {
                screen: "DetailsScreen",
                params: { newsData }
            })}>

            <View style={styles.dataContainer}>
                <FastImage
                    source={{
                        uri: image
                            ?? 'https://idata.urlToImagemages.cnbctv18.com/wp-content/uploads/2022/08/jupiter-nasa-twitter-image-1019x573.jpg'
                    }}
                    style={styles.image}
                    alt="Alternate Text"
                    resizeMode={"cover"}
                />
                <View style={{ margin: 10 }}>
                    <Text style={styles.title} numberOfLines={2}>{title}</Text>
                    <Text style={styles.source}>Source: {source ?? 'Not Available'}</Text>
                    <Text style={styles.author} numberOfLines={1}>Author: {author ?? 'Not Available'}</Text>
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
        height: '65%',
        width: '100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    title: {
        fontSize: 14,
        color: 'black',
        fontFamily: 'Poppins-SemiBold'
    },
    source: {
        fontSize: 12,
        color: 'black',
        marginTop: 5,
        fontFamily: 'Poppins-Medium'
    },
    author: {
        fontSize: 12,
        color: 'black',
        marginTop: 3,
        fontFamily: 'Poppins-Medium'
    }
})

export default NewsCard;