import React from 'react';
import RootNavigation from './app/navigations/RootNavigation'
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const App = () => {
  return (
    <RootNavigation />
  )
}

export default App