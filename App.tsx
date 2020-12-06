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
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reducer from 'reducer';
import createSagaMiddleware from 'redux-saga';
import SagaEffects from 'sagaEffects';
import {Platform, NativeModules} from 'react-native';
import Language from 'strings';

const composeEnhancers =
  // @ts-ignore
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // @ts-ignore
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhancer);

sagaMiddleware.run(SagaEffects);

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;

const language = deviceLanguage.split('_')[0];
Language.init(language);

const App = () => (
  <NavigationContainer ref={Dependencies.Navigation.navigationRef}>
    <Provider store={store}>{Router('SearchUser')}</Provider>
  </NavigationContainer>
);

export default App;
