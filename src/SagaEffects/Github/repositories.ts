import {select, put, takeLatest} from 'redux-saga/effects';
import Dependencies from 'dependencies';
import {LoadRepositories} from 'stateUpdaters';
import type {Action, State, Repository} from 'types';

function* actionRepositories(action: Action) {
  try {
    if (!action.request) {
      console.error('request not found');
      return;
    }
    const state: State = yield select();

    const repositories = yield Dependencies.Request({
      ...action.request,
      params: {
        id: state.userSelectedId,
      },
    });

    const repositoriesForState: Array<Repository> = repositories
      ? repositories.map((repository: any) => ({
          id: repository.id,
          name: repository.name,
          fullName: repository.full_name,
          owner: {
            username: repository.owner.login,
            avatar: repository.owner.avatar_url,
          },
          description: repository.description,
        }))
      : [];

    yield put(LoadRepositories(repositoriesForState));
  } catch (e) {
    console.error(e);
  }
}

export function* sagaRepositories(): any {
  yield takeLatest('REPOSITORIES', actionRepositories);
}

const repositories = () => ({
  type: 'REPOSITORIES',
  request: {
    url: 'https://api.github.com/users/{id}/repos',
    method: 'GET',
    headers: {
      Authorization: `token ${Dependencies.githubToken}`,
    },
    debug: true,
  },
});

export default repositories;
