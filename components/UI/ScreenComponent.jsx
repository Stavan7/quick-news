import React, { useState, useEffect, useCallback } from 'react';
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Error from '../Lottie/Error';
import Loading from '../Lottie/Loading';
import NewsCard from '../Cards/NewsCard';
import COLORS from '../../constants/Colors';
import { getLocalNews, getGlobalNews } from '../../utils/api';

const ScreenComponent = ({ category, keyword, navigation }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [alert, setAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [serverIssues, setServerIssues] = useState(false);

  const getNews = useCallback(async () => {
    try {
      const newsData = await (category ? getLocalNews : getGlobalNews)(keyword);
      if (newsData != null) {
        setData(newsData);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setServerIssues(true);
        setError('Server Side Error, \n Please Try Again In An Hour');
      }
    } catch (err) {
      setAlert(true);
      setIsLoading(false);
      setError(err.message);
    }
  }, [category, keyword]);

  useEffect(() => {
    getNews();
  }, [getNews]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.root}>
      <FlatList
        data={data}
        refreshing={isFetching}
        progressViewOffset={100}
        initialNumToRender={8}
        maxToRenderPerBatch={8}
        removeClippedSubviews={true}
        onRefresh={getNews}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <NewsCard data={item} navigation={navigation} />
        )}
      />
      {alert && (
        <Error
          errorText={`Please check your internet connection ${'\n'}${error}`}
        />
      )}
      {serverIssues && <Error errorText={error} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: COLORS.background,
  }
})
export default ScreenComponent;
