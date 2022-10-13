import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import FastImage from 'react-native-fast-image';

const dummyImg = 'https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2F404-found-internet-information-concept-glitch-style-white-background-trendy-glitched-vector-illustration_549897-1168.jpg%3Fw%3D2000&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Fno-data-found&tbnid=q_3KFwYQuPbeDM&vet=12ahUKEwiwp7K2ydv6AhVfi9gFHaPFCoQQMyhkegUIARDOAQ..i&docid=zShRaUhr1zcCHM&w=2000&h=1286&q=no%20image%20ailable%20illustration&hl=en&ved=2ahUKEwiwp7K2ydv6AhVfi9gFHaPFCoQQMyhkegUIARDOAQ'

const NewsCard = ({ image, title, source, author, navigation, newsData }) => {
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