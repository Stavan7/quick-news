import React from 'react'
import {
	Text,
	View,
	Image,
	FlatList,
	StyleSheet,
	SafeAreaView,
} from 'react-native'
import COLORS from '../constants/Colors'
import { useSelector } from 'react-redux'
import NewsCard from '../components/Cards/NewsCard'

const Bookmarks = ({ navigation }) => {

	const bookmarks = useSelector((state) => state.bookmark.bookmarks)

	const NullComponent = () => (
		<View style={styles.nullView}>
			<Image source={require('../assets/nulldata.png')} resizeMode='contain' />
			<Text style={styles.nullText}>No news saved till now</Text>
		</View>
	)
	return (
		<SafeAreaView style={styles.root}>
			<FlatList
				data={bookmarks}
				progressViewOffset={100}
				initialNumToRender={8}
				maxToRenderPerBatch={8}
				removeClippedSubviews={true}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={<NullComponent />}
				renderItem={({ item }) => <NewsCard data={item} navigation={navigation} />}
			/>
		</SafeAreaView >
	)
}

export default Bookmarks

const styles = StyleSheet.create({
	root: {
		flex: 1,
		paddingTop: 10,
		backgroundColor: COLORS.background
	},
	nullView: {
		flex: 1,
		marginTop: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
	nullText: {
		fontSize: 16,
		color: COLORS.text,
		fontFamily: 'Poppins-SemiBold'
	}
})