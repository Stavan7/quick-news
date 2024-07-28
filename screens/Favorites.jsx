import React from 'react'
import {
	Text,
	StyleSheet,
	SafeAreaView,
	Image,
} from 'react-native'
import COLORS from '../constants/Colors'

const Favorites = () => {
	return (
		<SafeAreaView style={styles.root}>
			<Image source={require('../assets/nulldata.png')} style={styles.image} />
			<Text style={styles.nullText}>No news saved till now</Text>
		</SafeAreaView>
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