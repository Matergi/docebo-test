import {all} from 'redux-saga/effects';
import {searchUsers as searchUsersSE, sagaSearchUsers} from './Github';
import {
  changeScreen as changeScreenSE,
  sagaChangeScreen,
  backScreen as backScreenSE,
  sagaBackScreen,
} from './Screen';

export {searchUsersSE, changeScreenSE, backScreenSE};

function* watchAll(): any {
  yield all([sagaSearchUsers(), sagaChangeScreen(), sagaBackScreen()]);
}

export default watchAll;
