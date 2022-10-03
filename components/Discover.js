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
import { everythingsData } from '../data/everythingsData';

const Discover = ({ navigation }) => {

    const handleRouteName = index => {
        index === 0 ? navigation.navigate('Sports') :
            index === 1 ? navigation.navigate('Technology') :
                index === 2 ? navigation.navigate('Health') :
                    index === 3 ? navigation.navigate('NoBottomTab', { screen: 'Business' }) :
                        index === 4 ? navigation.navigate('NoBottomTab', { screen: 'Science' }) :
                            index === 5 ? navigation.navigate('Entertainment')
                                : null;
    };

    const Card = ({ item }) => {
        return (
            <TouchableOpacity
                key={item.id}
                activeOpacity={0.7}
                style={styles.box}
            //onPress={() => handleRouteName(index)}
            >
                <FastImage
                    resizeMode='cover'
                    source={item.image}
                    style={styles.image}
                />
                <View style={styles.tagView}>
                    <Text style={styles.tag}>{item.tag}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView>
            <Text style={styles.header}>Discover</Text>
            <FlatList
                data={everythingsData}
                numColumns={2}
                nestedScrollEnabled={true}
                removeClippedSubviews={true}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={styles.columnWrapper}
                renderItem={({ item }) => <Card item={item} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        marginTop: 20,
        marginHorizontal: 20,
        color: COLORS.bottomTabBg,
        fontFamily: 'Poppins-SemiBold',
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    box: {
        width: '47%',
        height: 230,
    },
    image: {
        resizeMode: 'cover',
        width: 'auto',
        height: '100%',
        borderRadius: 10,
        opacity: 0.7
    },
    tagView: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    tag: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'Poppins-Bold'
    }
})

export default Discover