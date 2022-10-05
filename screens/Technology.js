import React, { Component } from 'react'
import {
    Text,
    Alert,
    StatusBar,
    FlatList,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import Header from '../components/Header';
import Loading from '../components/Loading';
import NewsCard from '../components/NewsCard';
import getNewsArticlesByCategory from '../utils/services';

class Technology extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            error: '',
            isLoading: true,
            isFetching: false
        }
    }

    async getNews() {
        getNewsArticlesByCategory('Technology')
            .then(newsData => {
                this.setState({
                    data: newsData,
                    isLoading: false,
                });
                console.log(newsData)
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
        const { data, isLoading, isFetching } = this.state;

        if (isLoading) {
            return <Loading />
        }

        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor={'black'} />
                <Header header="Technology" />
                {data != undefined ?
                    <FlatList
                        data={data}
                        refreshing={isLoading}
                        progressViewOffset={100}
                        onRefresh={() => this.getNews()}
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
                    /> : <Text >internet issues</Text>
                }

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 80,
        backgroundColor: '#fff'
    }
})

export default Technology; 