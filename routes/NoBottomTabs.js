import React from 'react';
import Science from '../screens/Science';
import Business from '../screens/Business';
import Education from '../shared/Education'
import DetailScreen from '../screens/DetailScreen';
import Finance from '../shared/Finance';
import Food from '../shared/Food';
import Israel from '../shared/Israel';
import Politics from '../shared/Politics';
import Gaming from '../shared/Gaming'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';


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