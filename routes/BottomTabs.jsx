import React from 'react';
import {
    Text,
    Image,
    StyleSheet
} from 'react-native';
import COLORS from '../constants/Colors';
import Bookmarks from '../screens/Bookmarks';
import MainScreen from '../screens/Home';
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
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                //header
                headerShadowVisible: true,
                headerTitleAlign: "left",
                headerStyle: { backgroundColor: COLORS.white },
                headerTintColor: COLORS.primary,
                headerTitleStyle: { ...styles.headerTitle },
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home': iconName = 'home';
                            break;
                        case 'Search': iconName = 'search'
                            break
                        case 'Bookmarks': iconName = 'bookmark'
                            break
                        default:
                            break;
                    }
                    return (
                        <>
                            <Feather
                                size={23}
                                name={iconName}
                                color={focused ? COLORS.secondary : COLORS.text}
                            />
                            {focused ? <Text style={styles.dot}>{'\u2B24'}</Text> : null}
                        </>
                    )
                },
                headerLeft: () => (
                    <Ionicons
                        size={25}
                        onPress={() => nav.navigate('Home')}
                        color={COLORS.accent}
                        style={{ marginLeft: 10 }}
                        name="arrow-back-outline"
                    />
                )
            })}
        >
            <Tab.Screen
                name="Home"
                component={MainScreen}
                options={{
                    headerLeft: () => <Image source={require('../assets/icon.png')} style={styles.logo} />,
                    tabBarLabel: 'Home',
                    headerTitle: 'Quick News'
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    headerTitle: 'Search News',
                    tabBarLabel: 'Search'
                }}
            />
            <Tab.Screen
                name="Bookmarks"
                component={Bookmarks}
                options={{
                    headerTitle: 'Saved News',
                    tabBarLabel: 'Bookmarks',
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
        </Tab.Navigator >
    )
}

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 18,
        fontFamily: 'Poppins-Bold'
    },
    dot: {
        color: COLORS.accent,
        fontSize: 5,
        marginTop: 3,
    },
    icon: {
        height: 23,
        width: 23,
    },
    logo: {
        height: 41,
        width: 41,
        marginLeft: 15,
        resizeMode: 'cover',
    }
})

export default BottomTabs;