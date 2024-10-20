import React from 'react'
import { Provider } from 'react-redux';
import AppNavigator from './routes/AppNavigator';
import BookmarkStore from './redux/BookmarkStore';
import { PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <Provider store={BookmarkStore}>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </Provider>

  )
}

export default App
