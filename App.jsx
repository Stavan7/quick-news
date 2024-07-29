import React, { useEffect } from 'react'
import { Provider } from 'react-redux';
import AppNavigator from './routes/AppNavigator';
import BookmarkStore from './redux/BookmarkStore';
import SplashScreen from 'react-native-splash-screen';

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <Provider store={BookmarkStore}>
      <AppNavigator />
    </Provider>

  )
}

export default App