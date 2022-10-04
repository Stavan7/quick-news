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
import getNewsArticlesByCategory from '../utils/services';

class Entertainment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            error: '',
            isLoading: true,
        }
    }

    async getNews() {
        getNewsArticlesByCategory('Entertainment')
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
                <Header header="Entertainment" />
                {
                    isLoading ? <ActivityIndicator size={'large'} style={{ flex: 1 }} /> : (
                        <FlatList
                            data={data}
                            refreshing={isLoading}
                            progressViewOffset={100}
                            onRefresh={() => this.getNews()}
                            showsVerticalScrollIndicator={false}
                            renderItem={
                                ({ item }) => <NewsCard
                                    title={item.title}
                                    author={item.author}
                                    image={item.urlToImage}
                                    source={item.source.name}
                                    newsData={item}
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
        paddingBottom: 80,
        backgroundColor: '#fff'
    },
})

export default Entertainment; 