import React, { useEffect } from 'react'
import { Provider } from 'react-redux';
import AppNavigator from './routes/AppNavigator';
import BookmarkStore from './redux/BookmarkStore';

const App = () => {
  return (
    <Provider store={BookmarkStore}>
      <AppNavigator />
    </Provider>

  )
}

export default App