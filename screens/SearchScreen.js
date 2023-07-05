import React, { PureComponent } from 'react'
import {
    Text,
    View,
    Image,
    FlatList,
    TextInput,
    StatusBar,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import COLORS from '../constants/Colors';
import { getGlobalNews } from '../utils/api';
import NewsCard from '../components/NewsCard';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

class SearchScreen extends PureComponent {

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
        getGlobalNews(this.state.query)
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
        const { data, query } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor={'black'} />
                <Entypo
                    size={35}
                    color="white"
                    name="cross"
                    style={{ margin: 20 }}
                    onPress={() => this.props.navigation.goBack()}
                />
                <Text style={styles.general}>Search</Text>
                <View style={styles.searchContainer}>
                    <Feather
                        size={25}
                        color="white"
                        name="search"
                        style={{ marginLeft: 10 }}
                    />
                    <TextInput
                        style={styles.input}
                        defaultValue={query}
                        placeholderTextColor="white"
                        placeholder="Search Articles..."
                        onSubmitEditing={() => this.getNews()}
                        onChangeText={(text) => this.setState({ query: text })}
                    />
                </View>
                {
                    !data ? (
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
                            renderItem={({ item }) => (
                                <NewsCard data={item} navigation={this.props.navigation} />
                            )}
                        />
                    )
                }
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.screenBg
    },
    general: {
        fontSize: 25,
        color: 'white',
        marginLeft: 20,
        letterSpacing: 1,
        fontFamily: 'Poppins-Bold'
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
        borderColor: 'white'
    },
    input: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
        color: 'white',
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
})

export default SearchScreen;