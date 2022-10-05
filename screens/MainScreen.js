import React, { Component } from 'react'
import {
    View,
    Text,
    LogBox,
    StatusBar,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import Discover from '../components/Discover';
import Feather from 'react-native-vector-icons/Feather';
import CategoriesCard from '../components/CategoriesCard';
import getNewsArticlesByCategory from '../utils/services';

class MainScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            error: '',
            isLoading: true,
        }
    }

    async getNews() {
        getNewsArticlesByCategory('general')
            .then(newsData => {
                this.setState({
                    data: newsData,
                    isLoading: false
                });
            },
                error => {
                    Alert.alert('Error', 'Something went wrong!', error);
                }
            )
    }

    componentDidMount() {
        this.getNews();
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor={'black'} />
                <ScrollView>
                    <View style={styles.header}>
                        <Text style={styles.general}> General</Text>
                        <Feather
                            size={25}
                            name="search"
                            color="black"
                            style={{ marginLeft: 10 }}
                            onPress={() => this.props.navigation.navigate('NoBottomTab', { screen: 'SearchScreen' })}
                        />
                    </View>
                    <CategoriesCard navigation={this.props.navigation} />
                    <Discover navigation={this.props.navigation} />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 80,
        backgroundColor: '#fff'
    },
    header: {
        padding: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    general: {
        fontSize: 25,
        color: 'black',
        marginLeft: -8,
        letterSpacing: 1,
        fontFamily: 'Poppins-Bold'
    },
    icon: {
        height: 25,
        width: 25,
        marginRight: 10
    },
    iconsContainer: {
        height: 35,
        width: 35,
        borderRadius: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'white',
    }
})

export default MainScreen; 