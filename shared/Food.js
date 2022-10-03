import React, { Component } from 'react'
import {
    StatusBar,
    FlatList,
    StyleSheet,
    SafeAreaView,
    ActivityIndicator,
} from 'react-native';
import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import getNewsArticles from '../utils/everything'

class Food extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            error: '',
            isLoading: true,
        }
    }

    async getNews() {
        getNewsArticles('food')
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
        const { data, isLoading } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor={'black'} />
                <Header header="Food" />
                {
                    isLoading ? <ActivityIndicator size={'large'} style={{ flex: 1 }} /> : (
                        <FlatList
                            data={data}
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
                    )
                }
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

export default Food; 