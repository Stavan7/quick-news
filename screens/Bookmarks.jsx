import React from 'react'
import {
	Text,
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
		<>
			<Image source={require('../assets/nulldata.png')} style={styles.image} />
			<Text style={styles.nullText}>No news saved till now</Text>
		</>
	)
	return (
		< SafeAreaView style={styles.root} >

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
		backgroundColor: COLORS.background
	},
	image: {
		marginTop: 50,
		height: 300,
		width: 300,
		alignSelf: 'center',
		resizeMode: 'contain'
	},
	nullText: {
		fontSize: 16,
		color: COLORS.text,
		textAlign: 'center',
		fontFamily: 'Poppins-SemiBold'
	}
})