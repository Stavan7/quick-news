import React, { Component } from 'react'
import {
    StatusBar,
    FlatList,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import Error from '../components/Error';
import Header from '../components/Header';
import Loading from '../components/Loading';
import NewsCard from '../components/NewsCard';
import getNewsArticles from '../utils/everything'

class Politics extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            error: '',
            isLoading: true,
        }
    }

    async getNews() {
        getNewsArticles('government')
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

        if (isLoading) {
            return <Loading />
        }

        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor={'black'} />
                <Header navigation={this.props.navigation} header="Politics" BackBtn />
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
                    /> : <Error />
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

export default Politics; 