import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import Navigator from './src/navigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Navigator />
    </>
  );
};

export default App;
