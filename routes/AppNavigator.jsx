import React from 'react'
import BottomTabs from './BottomTabs';
import NoBottomTabs from './NoBottomTabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import COLORS from '../constants/Colors';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='BottomTab' screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="BottomTab"
                component={BottomTabs}
            />
            <Stack.Screen
                name="NoBottomTab"
                component={NoBottomTabs}
            />
        </Stack.Navigator>
    )
}

export default AppNavigator