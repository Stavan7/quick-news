import React, { Component } from 'react'
import {
    Text,
    View,
    TextInput,
    StatusBar,
    StyleSheet,
    SafeAreaView,
    FlatList,
} from 'react-native';
import NewsCard from '../components/NewsCard';
import getNewsArticles from '../utils/everything';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

class SearchScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            error: '',
            query: '',
            isLoading: true,
        }
    }

    async getNews() {
        getNewsArticles(this.state.query)
            .then(newsData => {
                this.setState({
                    data: newsData,
                    isLoading: false,
                });
            },
                error => {
                    this.setState({
                        alert: true,
                        isLoading: false
                    });
                    this.setErrorMessage(error);
                }
            )
    }


    componentDidMount() {
        this.getNews()
    }


    render() {

        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor={'black'} />
                <Entypo
                    size={35}
                    name="cross"
                    color="black"
                    style={{ margin: 20 }}
                    onPress={() => this.props.navigation.goBack()}
                />
                <Text style={styles.general}>Search</Text>
                <View style={styles.searchContainer}>
                    <Feather
                        size={25}
                        name="search"
                        color="black"
                        style={{ marginLeft: 10 }}
                    />
                    <TextInput
                        defaultValue={this.state.query}
                        style={styles.input}
                        placeholderTextColor="black"
                        placeholder="Search Articles..."
                        onChangeText={(text) => this.setState({ query: text })}
                        onSubmitEditing={() => this.getNews()}
                    />
                </View>
                <FlatList
                    data={this.state.data}
                    initialNumToRender={8}
                    maxToRenderPerBatch={8}
                    removeClippedSubviews={true}
                    showsVerticalScrollIndicator={false}
                    renderItem={
                        ({ item }) => <NewsCard
                            newsData={item}
                            title={item.title}
                            author={item.author}
                            image={item.urlToImage}
                            source={item.source.name}
                            navigation={this.props.navigation}
                        />
                    }
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    general: {
        fontSize: 25,
        color: 'black',
        marginLeft: 20,
        letterSpacing: 1,
        fontFamily: 'Poppins-Bold'
    },
    searchContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        height: 50,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
        color: 'black',
        fontFamily: 'Poppins-Regular'
    }
})

export default SearchScreen;