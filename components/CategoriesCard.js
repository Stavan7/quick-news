import React, { Component } from 'react'
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import COLORS from '../constants/Colors';
import FastImage from 'react-native-fast-image';
import { categoriesData } from '../data/categoriesData';

const CategoriesCard = ({ navigation }) => {

    const handleRouteName = index => {
        index === 1 ? navigation.navigate('Sports') :
            index === 2 ? navigation.navigate('Technology') :
                index === 3 ? navigation.navigate('Health') :
                    index === 4 ? navigation.navigate('NoBottomTab', { screen: 'Business' }) :
                        index === 5 ? navigation.navigate('NoBottomTab', { screen: 'Science' }) :
                            index === 6 ? navigation.navigate('Entertainment')
                                : null;
    };

    const Card = ({ item, index }) => {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => handleRouteName(index)}>

                <View style={styles.container} >
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

            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, marginLeft: 20 }}>
            <Text style={styles.header}>Top Headlines</Text>
            <FlatList
                horizontal={true}
                data={categoriesData}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Card item={item} index={item.id} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 14,
        color: COLORS.focusedIcon,
        fontFamily: 'Poppins-SemiBold',
    },
    container: {
        flex: 1,
        marginTop: 10,
        marginRight: 10,
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