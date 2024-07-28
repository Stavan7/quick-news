import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
    TextInput,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import COLORS from '../constants/Colors';
import { getGlobalNews } from '../utils/api';
import NewsCard from '../components/Cards/NewsCard';
import Feather from 'react-native-vector-icons/Feather';

const SearchScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const getNews = async () => {
        try {
            const newsData = await getGlobalNews(query);
            setData(newsData);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getNews();
    }, [query]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <Feather
                    size={25}
                    name="search"
                    color={COLORS.highlight}
                    style={{ marginLeft: 10 }}
                />
                <TextInput
                    style={styles.input}
                    value={query}
                    placeholderTextColor={COLORS.text}
                    placeholder="Search articles..."
                    onChangeText={(text) => setQuery(text)}
                    onSubmitEditing={getNews}
                />
            </View>
            {!data ? (
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/discover/Search.png')}
                        style={styles.searchImage}
                    />
                </View>
            ) : (
                <FlatList
                    data={data}
                    initialNumToRender={8}
                    maxToRenderPerBatch={8}
                    removeClippedSubviews={true}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <NewsCard data={item} navigation={navigation} />}
                />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background
    },
    searchContainer: {
        flexDirection: 'row',
        height: 50,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: COLORS.border
    },
    input: { 
        fontSize: 14,
        marginLeft: 10,
        color: COLORS.text,
        fontFamily: 'Poppins-Regular'
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchImage: {
        width: 260,
        height: 300,
    },
});

export default SearchScreen;