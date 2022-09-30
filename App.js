import React, { Component } from 'react'
import Routes from './routes/Routes'
import { NavigationContainer } from '@react-navigation/native';

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>

    )
  }
}

export default App