import React, { Component } from 'react'
import {
    StatusBar,
    FlatList,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import moment from 'moment';
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
            alert: false,
            isLoading: true,
            isFetching: false,
            serverIssues: false,
        }
    }

    async getNews() {
        getNewsArticlesByCategory('Business')
            .then(newsData => {
                if (newsData != null) {
                    this.setState({
                        data: newsData,
                        isLoading: false,
                    });
                } else {
                    this.setState({
                        isLoading: false,
                        serverIssues: true,
                        error: '\n Server Side Error, \n Please Try Again In An Hour'
                    })
                }
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

    setErrorMessage(err) {
        this.setState({ error: err.message });
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
                <Header header="Business" BackBtn navigation={this.props.navigation} />
                <FlatList
                    data={data}
                    refreshing={isLoading}
                    progressViewOffset={100}
                    onRefresh={() => this.getNews()}
                    showsVerticalScrollIndicator={false}
                    renderItem={
                        ({ item }) => <NewsCard
                            url={item.url}
                            newsData={item}
                            title={item.title}
                            author={item.author}
                            image={item.urlToImage}
                            source={item.source.name}
                            navigation={this.props.navigation}
                            time={moment(item.publishedAt).format('LT')}

                        />
                    }
                />

                {
                    this.state.alert &&
                    <Error errorText={`Please check your internet connection ${'\n'}${this.state.error}`} />
                }

                {
                    this.state.serverIssues &&
                    <Error errorText={this.state.error} />
                }

            </SafeAreaView >
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

export default Business; 