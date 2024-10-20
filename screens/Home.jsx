import React from 'react'
import {
    SectionList,
    SafeAreaView,
} from 'react-native';
import COLORS from '../constants/Colors';
import Discover from '../components/Cards/Discover';
import CategoriesCard from '../components/Cards/CategoriesCard';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
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

export default Home; 
