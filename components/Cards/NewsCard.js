import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import moment from 'moment';
import share from '../UI/NewsShare';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const NewsCard = ({ data, navigation }) => {

  const ImgCheck = () => {
    if (data.urlToImage !== null) {
      return (
        <Image
          style={styles.image}
          source={{ uri: data.urlToImage }}
        />
      );
    } else if (data.source.name === 'Google News') {
      return (
        <Image
          style={styles.image}
          source={require('../../assets/discover/google-news.png')}
        />
      );
    } else {
      return (
        <Image
          style={styles.image}
          source={require('../../assets/discover/noImage.jpg')}
        />
      );
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('NoBottomTab', {
          screen: 'DetailsScreen',
          params: { data }
        })
      }
    >
      <View style={styles.cardContainer}>
        <ImgCheck />
        <Text style={styles.title} numberOfLines={1}>{data.title}</Text>
        <View style={styles.bottomContainer}>
          <View flexDirection="row">
            <Text style={styles.source}>Source: {data.source.name ?? 'Not Available'}</Text>
            <Text style={styles.time}>{moment(data.publishedAt).format('LT')}</Text>
          </View>
          <EvilIcons
            name="share-google"
            size={28}
            color="white"
            onPress={() => share(data.url)}
            style={{ marginRight: 15 }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 300,
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  image: {
    flex: 1,
    width: '100%',
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 14,
    color: 'white',
    margin: 10,
    fontFamily: 'Poppins-SemiBold',
  },
  bottomContainer: {
    marginTop: 5,
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  source: {
    fontSize: 13,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  time: {
    fontSize: 13,
    color: '#fff',
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
  },
});

export default NewsCard;
