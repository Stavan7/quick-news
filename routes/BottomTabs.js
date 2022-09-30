import React, { Component } from 'react';
import {
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import Health from '../screens/Health';
import Sports from '../screens/Sports';
import MainScreen from '../screens/MainScreen';
import Entertainment from '../screens/Entertainment';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import COLORS from '../constants/Colors';
import Technology from '../screens/Technology';

const Tab = createBottomTabNavigator();

class BottomTabs extends Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: { ...styles.shadow },
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={MainScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ focused }) => (
                            <>
                                <Image
                                    source={require('../assets/icons/Home.png')}
                                    resizeMode={'contain'}
                                    style={styles.icon}
                                    tintColor={focused ? COLORS.focusedIcon : COLORS.unFocusedIcon}
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
                                <Image
                                    source={require('../assets/icons/Entertainment.png')}
                                    resizeMode={'contain'}
                                    style={styles.icon}
                                    tintColor={focused ? COLORS.focusedIcon : COLORS.unFocusedIcon}
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
                                <Image
                                    source={require('../assets/icons/Health.png')}
                                    resizeMode={'contain'}
                                    style={styles.icon}
                                    tintColor={focused ? COLORS.focusedIcon : COLORS.unFocusedIcon}
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
                                <Image
                                    source={require('../assets/icons/Sports.png')}
                                    resizeMode={'contain'}
                                    style={styles.icon}
                                    tintColor={focused ? COLORS.focusedIcon : COLORS.unFocusedIcon}
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
                        tabBarLabel: 'Business',
                        tabBarIcon: ({ focused }) => (
                            <>
                                <Image
                                    source={require('../assets/icons/Technology.png')}
                                    resizeMode={'contain'}
                                    style={styles.icon}
                                    tintColor={focused ? COLORS.focusedIcon : COLORS.unFocusedIcon}
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
                height: 90,
            },
            android: {
                height: 70,
            },
        }),
        backgroundColor: COLORS.bottomTabBg,
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: 'black',
        elevation: 5
    },
    dot: {
        color: 'white',
        fontSize: 7,
        marginTop: 3,
    },
    icon: {
        height: 23,
        width: 23,
    }
})

export default BottomTabs;