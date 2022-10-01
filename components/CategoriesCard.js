import React, { Component } from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    SafeAreaView,
} from 'react-native'
import COLORS from '../constants/Colors';
import FastImage from 'react-native-fast-image';
import { categoriesData } from '../categoriesData';

class CategoriesCard extends Component {
    render() {
        return (
            <SafeAreaView>
                <Text style={styles.header}>Top Headlines</Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ marginLeft: 10 }}>
                    {
                        categoriesData.map((item, index) => {
                            return (
                                <View style={styles.container} key={index}>
                                    <FastImage
                                        resizeMode='cover'
                                        source={item.image}
                                        style={styles.image}
                                    />
                                    <Text style={styles.cardTitle}>{item.subTitle}</Text>
                                    <View style={styles.btmContainer}>
                                        <FastImage source={item.icon} style={styles.icon} />
                                        <Text style={styles.tag}>{item.tag}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }

                </ScrollView>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 14,
        marginHorizontal: 20,
        color: COLORS.focusedIcon,
        fontFamily: 'Poppins-SemiBold',
    },
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 5,
    },
    image: {
        width: 140,
        height: 210,
        borderRadius: 10
    },
    cardTitle: {
        color: 'black',
        fontSize: 12,
        marginTop: 5,
        marginLeft: 5,
        fontFamily: 'Poppins-Regular'
    },
    btmContainer: {
        marginTop: 5,
        marginLeft: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    icon: {
        height: 16,
        width: 16,
    },
    tag: {
        color: 'black',
        fontSize: 13,
        marginLeft: 5,
        fontFamily: 'Poppins-Regular'
    }
})

export default CategoriesCard