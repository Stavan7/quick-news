import React, { Component } from 'react'
import Routes from './routes/Routes'
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

class App extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }
  render() {
    return (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>

    )
  }
}

export default App