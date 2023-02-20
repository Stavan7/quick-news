import React from 'react'
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import COLORS from '../constants/Colors';
import { Icon } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import { categoriesData } from '../data/categoriesData';

const CategoriesCard = ({ navigation }) => {

    const nav = name => {
        navigation.navigate(name)
    }

    const noBtmNav = name => {
        navigation.navigate('NoBottomTab', { screen: name })
    }

    const handleRouteName = index => {
        index === 1 ? nav('Sports') :
            index === 2 ? nav('Technology') :
                index === 3 ? nav('Health') :
                    index === 4 ? noBtmNav('Business') :
                        index === 5 ? noBtmNav('Science') :
                            index === 6 ? nav('Entertainment')
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
                        priority={FastImage.priority.normal}
                    />
                    <Text style={styles.cardTitle}>{item.subTitle}</Text>
                    <View style={styles.btmContainer}>
                        <Icon
                            size={16}
                            type={item.type}
                            name={item.icon}
                            color={COLORS.focusedIcon}
                        />
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
        fontSize: 18,
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
        color: 'white',
        fontSize: 12.6,
        marginTop: 5,
        marginLeft: 5,
        fontFamily: 'Poppins-Regular'
    },
    btmContainer: {
        marginTop: 5,
        marginLeft: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    tag: {
        color: 'white',
        fontSize: 12,
        marginLeft: 8,
        fontFamily: 'Poppins-Regular'
    }
})

export default CategoriesCard