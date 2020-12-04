import {all} from 'redux-saga/effects';
import {searchUsers as searchUsersSE, sagaSearchUsers} from './Github';
import {changeScreen as changeScreenSE, sagaChangeScreen} from './Screen';

export {searchUsersSE, changeScreenSE};

function* watchAll(): any {
  yield all([sagaSearchUsers(), sagaChangeScreen()]);
}

export default watchAll;
