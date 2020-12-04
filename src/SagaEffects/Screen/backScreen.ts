import {takeLatest} from 'redux-saga/effects';
import Dependencies from 'dependencies';

function* actionBackScreen() {
  Dependencies.Navigation.pop();
}

export function* sagaBackScreen(): any {
  yield takeLatest('BACK_SCREEN', actionBackScreen);
}

const backScreen = () => ({
  type: 'BACK_SCREEN',
});

export default backScreen;
