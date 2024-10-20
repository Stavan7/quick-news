import React from 'react'
import BottomTabs from './BottomTabs';
import NoBottomTabs from './NoBottomTabs';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={'#081A82'} />
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
        </NavigationContainer>
    )
}

export default AppNavigator
