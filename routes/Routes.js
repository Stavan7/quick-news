import React from 'react'
import BottomTabs from './BottomTabs';
import NoBottomTabs from './NoBottomTabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName='BottomTab' screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="BottomTab"
                component={BottomTabs}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NoBottomTab"
                component={NoBottomTabs}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default Routes