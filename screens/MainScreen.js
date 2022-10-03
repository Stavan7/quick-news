import React, { Component } from 'react'
import {
    View,
    Text,
    StatusBar,
    Pressable,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import CategoriesCard from '../components/CategoriesCard';
import Discover from '../components/Discover';
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
        this.getNews()
    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor={'black'} />
                <ScrollView>
                    <View style={styles.header}>
                        <Text style={styles.general}> General</Text>
                        <Pressable hitSlop={20} onPress={() => console.log('search clicked')}>
                            <FastImage source={require('../assets/icons/search.png')} style={styles.icon} />
                        </Pressable>
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
    }
})

export default MainScreen; 