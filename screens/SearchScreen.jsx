import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import { debounce } from 'lodash';
import COLORS from '../constants/Colors';
import { getGlobalNews } from '../utils/api';
import { TextInput } from 'react-native-paper';
import Loading from '../components/Lottie/Loading';
import NewsCard from '../components/Cards/NewsCard';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {

    const navigation = useNavigation()
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [searchText, setSearchtext] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => {
                return (
                    <View style={styles.searchContainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Feather name='arrow-left' size={25} color={COLORS.accent} />
                            <Text style={styles.headerTitle}>Search News</Text>
                        </View>
                        <TextInput
                            value={searchText}
                            mode='outlined'
                            placeholder={'Search Here'}
                            theme={{ roundness: 8 }}
                            onChangeText={(text) => setSearchtext(text)}
                            //auto props
                            autoFocus={false}
                            autoCorrect={false}
                            autoCapitalize='none'
                            //styles 
                            outlineColor={COLORS.primary}
                            style={styles.textInputStyle}
                            contentStyle={styles.contentStyle}
                            activeOutlineColor={COLORS.primary}
                            activeUnderlineColor={COLORS.secondary}
                            //icon 
                            right={<TextInput.Icon icon={'magnify'} color={COLORS.secondary} onPress={() => { }} />}
                        />
                    </View>
                )
            }
        })
    }, [searchText])

    useEffect(() => {
        getNews()
    }, [searchText])

    const getNews = debounce(async () => {
        setIsLoading(true)
        try {
            const newsData = await getGlobalNews(searchText);
            setData(newsData);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false)
        }
    }, 800)

    if (isLoading) {
        return <Loading />
    }

    const NullComponent = () => (
        <Image
            resizeMode='contain'
            style={styles.nullImage}
            source={require('../assets/discover/Search.png')}
        />
    )

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                initialNumToRender={8}
                maxToRenderPerBatch={8}
                removeClippedSubviews={true}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<NullComponent />}
                renderItem={({ item }) => <NewsCard data={item} navigation={navigation} />}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background
    },
    searchContainer: {
        padding: 10,
        backgroundColor: COLORS.white
    },
    headerTitle: {
        fontSize: 18,
        marginLeft: 20,
        color: COLORS.primary,
        fontFamily: 'Poppins-Bold'
    },
    contentStyle: {
        fontSize: 14,
        color: COLORS.text,
        fontFamily: 'Poppins-Medium',
    },
    textInputStyle: {
        height: 41,
        width: '100%',
        marginVertical: 10,
        alignSelf: 'center',
        borderColor: COLORS.text,
        backgroundColor: COLORS.background
    },
    nullImage: {
        width: 260,
        height: 300,
        marginTop: 20,
        alignSelf: 'center'
    }
})

export default SearchScreen;