import React from 'react';
import Food from '../screens/Food';
import Israel from '../screens/Israel';
import Politics from '../screens/Politics';
import Finance from '../screens/Finance';
import Gaming from '../screens/Gaming'
import Science from '../screens/Science';
import Business from '../screens/Business';
import Education from '../screens/Education';
import DetailScreen from '../screens/DetailScreen';
import SearchScreen from '../screens/SearchScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const NoBottomTabs = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="DetailsScreen"
                component={DetailScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Science"
                component={Science}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Business"
                component={Business}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Education"
                component={Education}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Finance"
                component={Finance}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Food"
                component={Food}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Israel"
                component={Israel}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Politics"
                component={Politics}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Gaming"
                component={Gaming}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default NoBottomTabs