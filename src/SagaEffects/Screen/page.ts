import {put, takeLatest} from 'redux-saga/effects';
import {ChangeScreenForSideEffect} from 'stateUpdaters';
import Dependencies from 'dependencies';
import type {Action} from 'types';
import type {ScreenName} from 'router';

function* actionChangeScreen(action: Action) {
  if (!action.detail) {
    console.error('detail not found');
    return;
  }

  Dependencies.Navigation.navigate(action.detail.screen, action.detail.params);

  if (action.detail.reset) {
    yield put(ChangeScreenForSideEffect(action.detail.screen));
  }
}

export function* sagaChangeScreen(): any {
  yield takeLatest('CHANGE_SCREEN', actionChangeScreen);
}

const changeScreen = (screen: ScreenName, params: any, reset: boolean) => ({
  type: 'CHANGE_SCREEN',
  detail: {
    screen,
    params,
    reset,
  },
});

export default changeScreen;
