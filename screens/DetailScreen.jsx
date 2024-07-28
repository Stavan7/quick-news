import React, { useLayoutEffect } from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import moment from 'moment';
import COLORS from '../constants/Colors.jsx';
import share from '../components/UI/NewsShare.jsx';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HEIGHT = Dimensions.get('screen').height;

const DetailScreen = ({ route }) => {

  const data = route.params.data;
  const image = data.urlToImage;

  const nav = useNavigation()
  useLayoutEffect(() => {
    nav.setOptions({
      headerTitleStyle: {
        fontSize: 16,
        fontFamily: 'NotoSans-Bold',
      },
      headerTitleAlign: 'left',
      headerTitle: data.title,
      headerRight: () => (
        <Ionicons
          size={25}
          color={COLORS.primary}
          name="share-social-outline"
          onPress={() => share(data.url)}
        />
      )
    })
  }, [])


  const ImgCheck = () => {
    if (image !== null) {
      return <Image
        style={styles.image}
        source={{ uri: image }}
      />
    } else {
      return <Image
        style={styles.image}
        source={require('../assets/discover/noImage.jpg')}
      />
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardContainer}>
        <ImgCheck />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.time}>Published : {moment(data.publishedAt).format('LLL')}</Text>
        <Text style={styles.content}>{data.content ?? data.description}</Text>
        <Text style={styles.urlText}>To read full news, checkout :</Text>
        <Text style={styles.url} onPress={() => Linking.openURL(data.url)}>{data.url}</Text>
        <Text style={styles.authorText}>Author: {data.author ?? 'Not Available'}</Text>
        <Text style={styles.source}>Source: {data.source.name ?? 'Not Available'}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  cardContainer: {
    flex: 1,
    height: HEIGHT / 3
  },
  image: {
    flex: 1,
    height: 'auto',
    width: '100%',
    resizeMode: 'contain',
  },
  textContainer: {
    flexGrow: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    color: COLORS.primary,
    fontFamily: 'Poppins-SemiBold',
  },
  time: {
    fontSize: 14,
    marginTop: 10,
    color: COLORS.secondary,
    fontFamily: 'NotoSans-SemiBold',
  },
  content: {
    fontSize: 14,
    marginTop: 10,
    textAlign: 'left',
    color: COLORS.text,
    fontFamily: 'NotoSans-Regular',
  },
  urlText: {
    fontSize: 14,
    marginTop: 10,
    textAlign: 'left',
    color: COLORS.text,
    fontFamily: 'NotoSans-Regular',
  },
  url: {
    fontSize: 14,
    color: COLORS.accent,
    textAlign: 'left',
    textDecorationLine: 'underline',
    fontFamily: 'NotoSans-Regular',
  },
  authorText: {
    flex: 1,
    fontSize: 14,
    marginTop: 10,
    color: COLORS.text,
    fontFamily: 'NotoSans-Regular',
  },
  source: {
    fontSize: 14,
    marginTop: 5,
    color: COLORS.text,
    fontFamily: 'NotoSans-Regular',
  },
  iconContainer: {
    position: 'absolute',
    top: 20,
    height: 40,
    width: 40,
    borderRadius: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default DetailScreen;