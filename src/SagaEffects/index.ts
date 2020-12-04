import {all} from 'redux-saga/effects';
import {
  searchUsers as searchUsersSE,
  sagaSearchUsers,
  userInfo as userInfoSE,
  sagaUserInfo,
  repositories as repositoriesSE,
  sagaRepositories,
} from './Github';

import {
  changeScreen as changeScreenSE,
  sagaChangeScreen,
  backScreen as backScreenSE,
  sagaBackScreen,
} from './Screen';

export {
  searchUsersSE,
  changeScreenSE,
  backScreenSE,
  userInfoSE,
  repositoriesSE,
};

function* watchAll(): any {
  yield all([
    sagaSearchUsers(),
    sagaChangeScreen(),
    sagaBackScreen(),
    sagaUserInfo(),
    sagaRepositories(),
  ]);
}

export default watchAll;
