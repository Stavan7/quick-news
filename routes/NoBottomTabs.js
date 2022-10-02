import React from 'react';
import Science from '../screens/Science';
import Business from '../screens/Business';
import DetailScreen from '../screens/DetailScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const NoBottomTabs = () => {
    return (
        <Stack.Navigator  screenOptions={{ headerShown: false }}>
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
        </Stack.Navigator>
    )
}

export default NoBottomTabs