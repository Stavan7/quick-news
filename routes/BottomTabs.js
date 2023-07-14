import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native';
import Health from '../screens/Health';
import Sports from '../screens/Sports';
import COLORS from '../constants/Colors';
import Technology from '../screens/Technology';
import MainScreen from '../screens/MainScreen';
import Entertainment from '../screens/Entertainment';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

class BottomTabs extends Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.shadow,
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={MainScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ focused }) => (
                            <>
                                <AntDesign
                                    name="home"
                                    size={23}
                                    color={focused ? COLORS.focusedIcon : COLORS.unFocusedIcon}
                                />
                                {focused ? <Text style={styles.dot}>{'\u2B24'}</Text> : null}
                            </>
                        )
                    }}
                />

                <Tab.Screen
                    name="Technology"
                    component={Technology}
                    options={{
                        tabBarLabel: 'Technology',
                        tabBarIcon: ({ focused }) => (
                            <>
                                <FontAwesome5
                                    name="battle-net"
                                    size={23}
                                    color={focused ? COLORS.focusedIcon : COLORS.unFocusedIcon}
                                />
                                {focused ? <Text style={styles.dot}>{'\u2B24'}</Text> : null}
                            </>
                        )

                    }}
                />

                <Tab.Screen
                    name="Health"
                    component={Health}
                    options={{
                        tabBarLabel: 'Health',
                        tabBarIcon: ({ focused }) => (
                            <>
                                <MaterialCommunityIcons
                                    size={23}
                                    name="hand-heart-outline"
                                    color={focused ? COLORS.focusedIcon : COLORS.unFocusedIcon}
                                />
                                {focused ? <Text style={styles.dot}>{'\u2B24'}</Text> : null}
                            </>
                        )
                    }}
                />

                <Tab.Screen
                    name="Sports"
                    component={Sports}
                    options={{
                        tabBarLabel: 'Sports',
                        tabBarIcon: ({ focused }) => (
                            <>
                                <Ionicons
                                    size={23}
                                    name="football-outline"
                                    color={focused ? COLORS.focusedIcon : COLORS.unFocusedIcon}
                                />
                                {focused ? <Text style={styles.dot}>{'\u2B24'}</Text> : null}
                            </>
                        )
                    }}
                />

                <Tab.Screen
                    name="Entertainment"
                    component={Entertainment}
                    options={{
                        tabBarLabel: 'Entertainment',
                        tabBarIcon: ({ focused }) => (
                            <>
                                <MaterialCommunityIcons
                                    size={23}
                                    name="movie-open-outline"
                                    color={focused ? COLORS.focusedIcon : COLORS.unFocusedIcon}
                                />
                                {focused ? <Text style={styles.dot}>{'\u2B24'}</Text> : null}
                            </>
                        )
                    }}
                />
            </Tab.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    shadow: {
        position: 'absolute',
        ...Platform.select({
            ios: {
                height: 80,
            },
            android: {
                height: 50,
            },
        }),
        backfaceVisibility: 'hidden',
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderTopWidth: 0,
        backgroundColor: COLORS.bottomTabBg,
    },
    dot: {
        color: 'white',
        fontSize: 5,
        marginTop: 3,
    },
    icon: {
        height: 23,
        width: 23,
    }
})

export default BottomTabs;