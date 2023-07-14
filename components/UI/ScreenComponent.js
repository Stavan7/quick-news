import React, { Component } from 'react';
import {
  StatusBar,
  FlatList,
  SafeAreaView
} from 'react-native';
import Header from './Header'
import Error from '../Lottie/Error';
import Loading from '../Lottie/Loading';
import NewsCard from '../Cards/NewsCard';
import COLORS from '../../constants/Colors';
import { getLocalNews, getGlobalNews } from '../../utils/api';

class ScreenComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: '',
      alert: false,
      isLoading: true,
      isFetching: false,
      serverIssues: false,
    };
  }

  async getNews() {
    (this.props.category ? getLocalNews : getGlobalNews)(
      this.props.keyword,
    ).then(
      newsData => {
        if (newsData != null) {
          this.setState({
            data: newsData,
            isLoading: false,
          });
        } else {
          this.setState({
            isLoading: false,
            serverIssues: true,
            error: 'Server Side Error, \n Please Try Again In An Hour',
          });
        }
      },
      error => {
        this.setState({
          alert: true,
          isLoading: false,
        });
        this.setErrorMessage(error);
      },
    );
  }

  setErrorMessage(err) {
    this.setState({ error: err.message });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.data !== nextState.data;
  }

  componentDidMount() {
    this.getNews();
  }

  render() {
    const { data, isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    }

    return (
      <SafeAreaView
        style={{
          flex: 1,
          paddingBottom: this.props.paddingBtm,
          backgroundColor: COLORS.screenBg,
        }}>
        <StatusBar backgroundColor={'black'} />
        <Header
          header={this.props.keyword}
          BackBtn={this.props.headerBtn}
          navigation={this.props.navigation}
        />
        <FlatList
          data={data}
          refreshing={isLoading}
          progressViewOffset={100}
          initialNumToRender={8}
          maxToRenderPerBatch={8}
          removeClippedSubviews={true}
          onRefresh={() => this.getNews()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <NewsCard data={item} navigation={this.props.navigation} />
          )}
        />

        {this.state.alert && (
          <Error
            errorText={`Please check your internet connection ${'\n'}${this.state.error
              }`}
          />
        )}

        {this.state.serverIssues && <Error errorText={this.state.error} />}
      </SafeAreaView>
    );
  }
}

export default ScreenComponent;
