import {select, put, takeLatest} from 'redux-saga/effects';
import {LoadSearchUsers} from 'stateUpdaters';
import Dependencies from 'dependencies';
import type {Action, SearchUser, State} from 'types';

function* actionSearchUsers(action: Action) {
  try {
    if (action.detail.skipRequest) {
      yield put(LoadSearchUsers([]));
      return;
    }
    if (!action.request) {
      console.error('request not found');
      return;
    }
    const state: State = yield select();
    const newPagination = action.detail.reset
      ? 1
      : state.searchUsersPagination + 1;
    const users = yield Dependencies.Request({
      ...action.request,
      params: {
        page: newPagination,
      },
    });
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
    yield put(LoadSearchUsers(userForState, newPagination));
  } catch (e) {
    console.error(e);
    yield put(LoadSearchUsers([]));
  }
}

export function* sagaSearchUsers(): any {
  yield takeLatest('SEARCH_USERS', actionSearchUsers);
}

const searchUsers = (user: string, reset: boolean) => ({
  type: 'SEARCH_USERS',
  request: {
    url: 'https://api.github.com/search/users',
    method: 'GET',
    query: {
      q: user.trim(),
      per_page: 10,
      params: ['page'],
    },
    headers: {
      Authorization: `token ${Dependencies.githubToken}`,
    },
    debug: true,
  },
  detail: {
    reset,
    skipRequest: user.trim().length === 0,
  },
});

export default searchUsers;
