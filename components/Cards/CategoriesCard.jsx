import React from 'react'
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import { Categories } from '../../data/data';
import COLORS from '../../constants/Colors';
import { Icon } from 'react-native-elements';
import FastImage from 'react-native-fast-image';

const CategoriesCard = ({ navigation }) => {

    const noBtmNav = name => {
        navigation.navigate('NoBottomTab', { screen: name })
    }

    const handleRouteName = index => {
        switch (index) {
            case 1:
                noBtmNav('Sports');
                break;
            case 2:
                noBtmNav('Technology');
                break;
            case 3:
                noBtmNav('Health');
                break;
            case 4:
                noBtmNav('Business');
                break;
            case 5:
                noBtmNav('Science');
                break;
            case 6:
                noBtmNav('Entertainment');
                break;
            default:
                // No action for undefined index
                break;
        }
    };

    const Card = ({ item, index }) => {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => handleRouteName(index)}>
                <View style={styles.container} >
                    <FastImage
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
                            color={COLORS.accent}
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
                data={Categories}
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
        marginTop: 10,
        color: COLORS.secondary,
        fontFamily: 'Poppins-SemiBold',
    },
    container: {
        flex: 1,
        width: 140,
        height: 260,
        marginTop: 10,
        marginRight: 10,
        overflow: 'hidden',
    },
    image: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
        resizeMode: 'contain',
    },
    cardTitle: {
        color: COLORS.secondary,
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
        fontSize: 12,
        marginLeft: 8,
        color: COLORS.secondary,
        fontFamily: 'Poppins-Regular'
    }
})

export default CategoriesCard