import React from 'react';

import {SearchUser, Profile} from 'screens';

import screens from './index';

interface Screen {
  router: string;
  ui: React.ComponentType;
  navigationOptions?: any;
  sharedElementsConfig?: any;
}

const routerScreens: Array<Screen> = [
  {
    router: screens.searchUser,
    ui: SearchUser,
  },
  {
    router: screens.profile,
    ui: Profile,
  },
];

export default routerScreens;
