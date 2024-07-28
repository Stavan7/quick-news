import React from 'react';
import {
    Text,
    Image,
    StyleSheet
} from 'react-native';
import COLORS from '../constants/Colors';
import Favorites from '../screens/Favorites';
import MainScreen from '../screens/MainScreen';
import SearchScreen from '../screens/SearchScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    const nav = useNavigation()
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: styles.bottomTab,
                //header
                headerShadowVisible: true,
                headerTitleAlign: "left",
                headerStyle: { backgroundColor: COLORS.background },
                headerTintColor: COLORS.primary,
                headerTitleStyle: { ...styles.headerTitle },
                headerLeft: () => (
                    <Ionicons
                        size={25}
                        onPress={() => nav.navigate('Home')}
                        color={COLORS.accent}
                        style={{ marginLeft: 10 }}
                        name="arrow-back-outline"
                    />
                )
            }}
        >
            <Tab.Screen
                name="Home"
                component={MainScreen}
                options={{
                    headerLeft: () => (<Image source={require('../assets/icon.png')} style={styles.logo} />),
                    tabBarLabel: 'Home',
                    headerTitle: 'Quick News',
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Feather
                                name="home"
                                size={21}
                                color={focused ? COLORS.secondary : COLORS.text}
                            />
                            {focused ? <Text style={styles.dot}>{'\u2B24'}</Text> : null}
                        </>
                    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    headerTitle: 'Search News',
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Ionicons
                                name="search-outline"
                                size={23}
                                color={focused ? COLORS.secondary : COLORS.text}
                            />
                            {focused ? <Text style={styles.dot}>{'\u2B24'}</Text> : null}
                        </>
                    )
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    headerTitle: 'Saved News',
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Ionicons
                                name="bookmark-outline"
                                size={21}
                                color={focused ? COLORS.secondary : COLORS.text}
                            />
                            {focused ? <Text style={styles.dot}>{'\u2B24'}</Text> : null}
                        </>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 21,
        letterSpacing: 0.3,
        color: COLORS.primary,
        fontFamily: 'Poppins-Bold'
    },
    bottomTab: {
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderTopWidth: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    dot: {
        color: COLORS.highlight,
        fontSize: 5,
        marginTop: 3,
    },
    icon: {
        height: 23,
        width: 23,
    },
    logo: {
        height: 48,
        width: 48,
        marginLeft: 10,
        resizeMode: 'contain',
    }
})

export default BottomTabs;