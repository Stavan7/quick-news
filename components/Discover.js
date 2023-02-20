import React from 'react'
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

    const navigating = name => {
        navigation.navigate('NoBottomTab', { screen: name })
    }

    const handleRouteName = index => {
        index === 1 ? navigating('Israel') :
            index === 2 ? navigating('Politics') :
                index === 3 ? navigating('Finance') :
                    index === 4 ? navigating('Education') :
                        index === 5 ? navigating('Gaming') :
                            index === 6 ? navigating('Food')
                                : null;
    };

    const Card = ({ item, index }) => {
        return (
            <TouchableOpacity
                key={item.id}
                activeOpacity={0.7}
                style={styles.box}
                onPress={() => handleRouteName(index)}
            >
                <FastImage
                    resizeMode='cover'
                    source={item.image}
                    style={styles.image}
                    priority={FastImage.priority.normal}
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
                renderItem={({ item }) => <Card item={item} index={item.id} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 18,
        marginTop: 25,
        marginHorizontal: 20,
        color: COLORS.focusedIcon,
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
        opacity: 0.5
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
        color: 'white',
        fontSize: 22,
        fontFamily: 'NotoSans-ExtraBold'
    }
})

export default Discover