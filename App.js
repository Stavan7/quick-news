import React, { Component } from 'react'
import AppNavigator from './routes/AppNavigator';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';

class App extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }
  render() {
    return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>

    )
  }
}

export default App