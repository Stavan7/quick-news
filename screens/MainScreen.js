import React, { Component } from 'react'
import {
    StatusBar,
    StyleSheet,
    SectionList,
    SafeAreaView,
} from 'react-native';
import Discover from '../components/Cards/Discover';
import SearchHeader from '../components/UI/SearchHeader';
import CategoriesCard from '../components/Cards/CategoriesCard';

class MainScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor={'black'} />
                <SectionList
                    sections={[
                        { type: "HEADER", data: [{}] },
                        { type: "CATEGORIES_CARD", data: [{}] },
                        { type: "DISCOVER_CARD", data: [{}] }
                    ]}
                    keyExtractor={index => index}
                    renderItem={({ section }) => {
                        switch (section.type) {
                            case "HEADER":
                                return <SearchHeader navigation={this.props.navigation} />
                            case "CATEGORIES_CARD":
                                return <CategoriesCard navigation={this.props.navigation} />
                            case "DISCOVER_CARD":
                                return <Discover navigation={this.props.navigation} />
                        }
                    }}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 70,
        backgroundColor: '#1b1b1b'
    },
})

export default MainScreen; 