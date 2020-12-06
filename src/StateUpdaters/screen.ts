import type {Action, State} from 'types';
import type {ScreenName} from 'router';

export const ChangeScreenForSideEffect = (screen: ScreenName): Action => {
  return {
    type: 'ChangeScreen',
    updateState: (state: State) => {
      return {...state, screen};
    },
  };
};

export const StartLoading = (id: string): Action => {
  return {
    type: 'StartLoading',
    updateState: (state: State) => {
      return {...state, loadingIds: [...state.loadingIds, id]};
    },
  };
};

export const StopLoading = (id: string): Action => {
  return {
    type: 'StopLoading',
    updateState: (state: State) => {
      return {
        ...state,
        loadingIds: state.loadingIds.filter((loadingId) => loadingId !== id),
      };
    },
  };
};
