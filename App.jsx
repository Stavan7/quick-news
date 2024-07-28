import React, { useEffect } from 'react'
import AppNavigator from './routes/AppNavigator';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>

  )
}

export default App