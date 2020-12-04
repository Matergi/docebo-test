import {put, takeLatest} from 'redux-saga/effects';
import {LoadSearchUsers} from 'stateUpdaters';
import Dependencies from 'dependencies';
import type {Action, SearchUser} from 'types';

function* actionSearchUsers(action: Action) {
  try {
    if (!action.request) {
      console.error('request not found');
      return;
    }
    const users = yield Dependencies.Request(action.request);
    const userForState: Array<SearchUser> =
      users && users.items
        ? users.items.map((user: any) => ({
            id: user.id,
            username: user.login,
            avatar: user.avatar_url,
            url: user.url,
            type: user.type,
          }))
        : [];
    yield put(LoadSearchUsers(userForState));
  } catch (e) {
    console.error(e);
    yield put(LoadSearchUsers([]));
  }
}

export function* sagaSearchUsers(): any {
  yield takeLatest('SEARCH_USERS', actionSearchUsers);
}

const searchUsers = (user: string) => ({
  type: 'SEARCH_USERS',
  request: {
    url: 'https://api.github.com/search/users',
    method: 'GET',
    query: {
      q: user,
    },
    headers: {
      Authorization: `token ${Dependencies.githubToken}`,
    },
    debug: true,
  },
});

export default searchUsers;
