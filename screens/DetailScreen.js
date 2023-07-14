import React from 'react';
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
import COLORS from '../constants/Colors';
import share from '../components/UI/NewsShare';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const HEIGHT = Dimensions.get('screen').height;

const DetailScreen = ({ route, navigation }) => {

  const data = route.params.data;
  const image = data.urlToImage;

  const ImgCheck = () => {
    if (image !== null) {
      return <Image
        source={{ uri: image }}
        style={styles.image}
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
        <View style={styles.imageContainer}>
          <ImgCheck />
          <Ionicons
            size={25}
            color="white"
            name="ios-chevron-back-sharp"
            onPress={() => navigation.goBack()}
            style={[styles.iconContainer, { left: 20 }]}
          />
          <EvilIcons
            size={28}
            color="white"
            name="share-apple"
            onPress={() => share(data.url)}
            style={[styles.iconContainer, { right: 20 }]}
          />
        </View>
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
    backgroundColor: COLORS.screenBg,
  },
  cardContainer: {
    height: HEIGHT / 3,
    overflow: 'hidden'
  },
  imageContainer: {
    height: '100%',
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  textContainer: {
    flexGrow: 1,
    marginTop: 20,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#222222'
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
  time: {
    fontSize: 14,
    color: 'white',
    marginTop: 10,
    fontFamily: 'NotoSans-SemiBold',
  },
  content: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
    textAlign: 'left',
    fontFamily: 'NotoSans-Regular',
  },
  urlText: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
    textAlign: 'left',
    fontFamily: 'NotoSans-Regular',
  },
  url: {
    fontSize: 14,
    color: COLORS.focusedIcon,
    textAlign: 'left',
    textDecorationLine: 'underline',
    fontFamily: 'NotoSans-Regular',
  },
  authorText: {
    flex: 1,
    fontSize: 14,
    color: 'white',
    marginTop: 10,
    fontFamily: 'NotoSans-Regular',
  },
  source: {
    fontSize: 14,
    color: 'white',
    marginTop: 5,
    fontFamily: 'NotoSans-Regular',
  },
  iconContainer: {
    position: 'absolute',
    top: 30,
    height: 40,
    width: 40,
    borderRadius: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default DetailScreen;