import {select, put, takeLatest} from 'redux-saga/effects';
import {LoadUser} from 'stateUpdaters';
import Dependencies from 'dependencies';
import type {Action, State} from 'types';

function* actionUserInfo(action: Action) {
  try {
    if (!action.request) {
      console.error('request not found');
      return;
    }
    const state: State = yield select();
    const user = yield Dependencies.Request({
      ...action.request,
      params: {
        id: state.userSelectedId,
      },
    });

    yield put(
      LoadUser({
        id: user.id,
        username: user.login,
        avatar: user.avatar_url,
        url: user.url,
        type: user.type,
        company: user.company,
        email: user.email,
        location: user.location,
      }),
    );
  } catch (e) {
    console.error(e);
  }
}

export function* sagaUserInfo(): any {
  yield takeLatest('USER_INFO', actionUserInfo);
}

const userInfo = () => ({
  type: 'USER_INFO',
  request: {
    url: 'https://api.github.com/users/{id}',
    method: 'GET',
    headers: {
      Authorization: `token ${Dependencies.githubToken}`,
    },
  },
});

export default userInfo;
