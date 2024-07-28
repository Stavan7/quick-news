import React from 'react';
import Food from '../screens/Food';
import Israel from '../screens/Israel';
import Politics from '../screens/Politics';
import Finance from '../screens/Finance';
import Gaming from '../screens/Gaming'
import COLORS from '../constants/Colors';
import Science from '../screens/Science';
import Business from '../screens/Business';
import Education from '../screens/Education';
import DetailScreen from '../screens/DetailScreen';
import SearchScreen from '../screens/SearchScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sports from '../screens/Sports';
import Technology from '../screens/Technology';
import Health from '../screens/Health';
import Entertainment from '../screens/Entertainment';


const Stack = createNativeStackNavigator();

const NoBottomTabs = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShadowVisible: true,
            headerStyle: {
                backgroundColor: COLORS.highlight,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
            },
            headerTintColor: COLORS.primary,
            headerTitleAlign: "center",
            headerTitleStyle: {
                fontSize: 18,
                fontFamily: 'NotoSans-Bold',
            }
        }}>
            <Stack.Screen name="DetailsScreen" component={DetailScreen} />
            <Stack.Screen name="Science" component={Science} />
            <Stack.Screen name="Business" component={Business} />
            <Stack.Screen name="Education" component={Education} />
            <Stack.Screen name="Finance" component={Finance} />
            <Stack.Screen name="Food" component={Food} />
            <Stack.Screen name="Israel" component={Israel} />
            <Stack.Screen name="Politics" component={Politics} />
            <Stack.Screen name="Gaming" component={Gaming} />
            <Stack.Screen name="Sports" component={Sports} />
            <Stack.Screen name="Technology" component={Technology} />
            <Stack.Screen name="Health" component={Health} />
            <Stack.Screen name="Entertainment" component={Entertainment} />
            <Stack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default NoBottomTabs