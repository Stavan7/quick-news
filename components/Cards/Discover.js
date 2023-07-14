import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { DiscoverList } from '../../data/data';
import COLORS from '../../constants/Colors';
import FastImage from 'react-native-fast-image';

const Discover = ({ navigation }) => {

  const navigating = name => {
    navigation.navigate('NoBottomTab', { screen: name });
  };

  const handleRouteName = index => {
    index === 1
      ? navigating('Israel')
      : index === 2
        ? navigating('Politics')
        : index === 3
          ? navigating('Finance')
          : index === 4
            ? navigating('Education')
            : index === 5
              ? navigating('Gaming')
              : index === 6
                ? navigating('Food')
                : null;
  };

  const Card = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={item.id}
        activeOpacity={0.5}
        style={styles.container}
        onPress={() => handleRouteName(index)}>
        <FastImage
          source={item.image}
          style={styles.image}
          priority={FastImage.priority.high}
        />
        <View style={styles.tagView}>
          <Text style={styles.tag}>{item.tag}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <Text style={styles.header}>Discover</Text>
      <FlatList
        numColumns={2}
        data={DiscoverList}
        nestedScrollEnabled={true}
        removeClippedSubviews={true}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => <Card item={item} index={item.id} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    marginTop: 25,
    marginHorizontal: 20,
    color: COLORS.focusedIcon,
    fontFamily: 'Poppins-SemiBold',
  },
  columnWrapper: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  container: {
    width: '48%',
    height: 210,
    overflow: 'hidden'
  },
  image: {
    flex: 1,
    opacity: 0.5,
    width: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  tagView: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  tag: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'NotoSans-ExtraBold',
  },
});

export default Discover;
