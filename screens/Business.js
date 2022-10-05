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
import getNewsArticlesByCategory from '../utils/services';

class Business extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            error: '',
            isLoading: true,
        }
    }

    async getNews() {
        getNewsArticlesByCategory('Business')
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
                <Header header="Business" navigation={this.props.navigation} BackBtn />
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

export default Business; 