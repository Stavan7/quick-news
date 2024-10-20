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
        activeOpacity={1}
        style={styles.container}
        onPress={() => handleRouteName(index)}>
        <FastImage
          source={item.image}
          style={styles.image}
          priority={FastImage.priority.high}
        />
        <Text style={styles.tag}>{item.tag}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, marginLeft: 16 }}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    marginTop: 25,
    color: COLORS.primary,
    fontFamily: 'Poppins-SemiBold',
  },
  columnWrapper: {
    marginRight: 16,
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  container: {
    width: '48%',
    height: 210,
    borderRadius: 8,
    backgroundColor: COLORS.white
  },
  image: {
    height: '80%',
    width: '100%',
    borderRadius: 8,
    resizeMode: 'contain',
  },
  tag: {
    fontSize: 14,
    marginTop: 5,
    marginLeft: 10,
    color: COLORS.text,
    fontFamily: 'NotoSans-Medium',
  },
});

export default Discover;
