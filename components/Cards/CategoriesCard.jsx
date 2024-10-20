import React from 'react'
import {
    Text,
    View,
    FlatList,
    StyleSheet,
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
            <TouchableOpacity activeOpacity={0.7} onPress={() => handleRouteName(index)} style={styles.container}>
                <FastImage
                    source={item.image}
                    style={styles.image}
                    priority={FastImage.priority.high}
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
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1, marginLeft: 16 }}>
            <Text style={styles.header}>Top Headlines</Text>
            <FlatList
                horizontal={true}
                data={Categories}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Card item={item} index={item.id} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 16,
        marginTop: 10,
        color: COLORS.primary,
        fontFamily: 'Poppins-SemiBold',
    },
    container: {
        width: 140,
        height: 200,
        marginTop: 10,
        marginRight: 12,
        borderRadius: 8,
        backgroundColor: COLORS.white
    },
    image: {
        height: '70%',
        width: '100%',
        borderRadius: 8,
        resizeMode: 'contain',
    },
    cardTitle: {
        fontSize: 12,
        marginTop: 5,
        marginLeft: 5,
        color: COLORS.text,
        fontFamily: 'Poppins-Regular'
    },
    btmContainer: {
        marginTop: 5,
        marginLeft: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    tag: {
        fontSize: 10,
        marginLeft: 8,
        color: COLORS.text,
        fontFamily: 'Poppins-Regular'
    }
})

export default CategoriesCard