import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import moment from 'moment';
import share from '../UI/NewsShare.jsx';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import COLORS from '../../constants/Colors';

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
        <View style={styles.imgView}>
          <Image
            style={{ resizeMode: 'contain' }}
            source={require('../../assets/discover/google-news.png')}
          />
        </View>
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
      style={styles.cardContainer}
    >
      <ImgCheck />
      <Text style={styles.title} numberOfLines={1}>{data.title}</Text>
      <View style={styles.bottomContainer}>
        <View flexDirection="row">
          <Text style={styles.source}>Source: {data.source.name ?? 'Not Available'}</Text>
          <Text style={[styles.source, { color: COLORS.accent }]}>{moment(data.publishedAt).format('LT')}</Text>
        </View>
        <EvilIcons
          name="share-google"
          size={25}
          color="black"
          onPress={() => share(data.url)}
          style={{ marginRight: 15 }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 280,
    marginHorizontal: 16,
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 14,
    margin: 10,
    color: COLORS.text,
    fontFamily: 'Poppins-Medium',
  },
  bottomContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  source: {
    fontSize: 12,
    marginRight: 10,
    color: COLORS.secondary,
    fontFamily: 'Poppins-Regular',
  },
  //google news
  imgView: {
    height: 200,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: COLORS.white
  }
});

export default NewsCard;
