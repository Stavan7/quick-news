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

const Favorites = ({ navigation }) => {
	const bookmarks = useSelector((state) => state.bookmark.bookmarks)
	return (
		< SafeAreaView style={styles.root} >
			{
				bookmarks && bookmarks.length === 0 ?
					<>
						<Image source={require('../assets/nulldata.png')} style={styles.image} />
						<Text style={styles.nullText}>No news saved till now</Text>
					</>
					:
					<FlatList
						data={bookmarks}
						progressViewOffset={100}
						initialNumToRender={8}
						maxToRenderPerBatch={8}
						removeClippedSubviews={true}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => <NewsCard data={item} navigation={navigation} />}
					/>
			}
		</SafeAreaView >
	)
}

export default Favorites

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