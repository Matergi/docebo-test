/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import Router from 'router/Router.component';
import Dependencies from 'dependencies';
import {NavigationContainer} from '@react-navigation/native';

const App = () => (
  <NavigationContainer ref={Dependencies.Navigation.navigationRef}>
    {Router('SearchUser')}
  </NavigationContainer>
);

export default App;
