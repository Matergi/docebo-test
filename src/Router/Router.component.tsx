import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routerScreens from './config.router';
import {fromRight} from './transitions';
import {Platform} from 'react-native';
import type {ScreenName} from './index';

const SYSTEM_ANIMATION = undefined;

const DEFAULT_ANIMATION_ANDROID = fromRight;
const DEFAULT_ANIMATION_IOS = SYSTEM_ANIMATION;

export default (defaultScreen: ScreenName) => {
  const ScreenStack = createStackNavigator();
  return (
    <ScreenStack.Navigator initialRouteName={defaultScreen} headerMode="none">
      {routerScreens.map((screen) => (
        <ScreenStack.Screen
          key={screen.router}
          name={screen.router}
          component={screen.ui}
          options={
            screen.navigationOptions
              ? screen.navigationOptions
              : Platform.OS === 'android'
              ? DEFAULT_ANIMATION_ANDROID
              : DEFAULT_ANIMATION_IOS
          }
        />
      ))}
    </ScreenStack.Navigator>
  );
};

export const durationTransition = 200;
