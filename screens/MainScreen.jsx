import React from 'react'
import {
    Text,
    StatusBar,
    StyleSheet,
    SectionList,
    SafeAreaView,
} from 'react-native';
import COLORS from '../constants/Colors';
import Discover from '../components/Cards/Discover';
import CategoriesCard from '../components/Cards/CategoriesCard';

const MainScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'black'} />
            <SectionList
                sections={[
                    { type: "CATEGORIES_CARD", data: [{}] },
                    { type: "DISCOVER_CARD", data: [{}] }
                ]}
                keyExtractor={index => index}
                renderItem={({ section }) => {
                    switch (section.type) {
                        case "CATEGORIES_CARD":
                            return <CategoriesCard navigation={navigation} />
                        case "DISCOVER_CARD":
                            return <Discover navigation={navigation} />
                    }
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background
    },
    header: {
        fontSize: 21,
        marginVertical: 20,
        marginLeft: 20,
        letterSpacing: 0.5,
        color: COLORS.primary,
        fontFamily: 'Poppins-Bold'
    }
})

export default MainScreen; 
