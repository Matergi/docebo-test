import {all} from 'redux-saga/effects';
import {searchUsers as searchUsersSE, sagaSearchUsers} from './Github';

export {searchUsersSE};

function* watchAll(): any {
  yield all([sagaSearchUsers()]);
}

export default watchAll;
