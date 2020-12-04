import type {Action, State, SearchUser, User, Repository} from 'types';

export const LoadSearchUsers = (users: Array<SearchUser>): Action => {
  return {
    type: 'LoadSearchUsers',
    updateState: (state: State) => {
      return {
        ...state,
        searchUsers: users,
      };
    },
  };
};

export const SelectUser = (id: string): Action => {
  return {
    type: 'SelectUser',
    updateState: (state: State) => {
      return {
        ...state,
        userSelectedId: id,
        userSelected: undefined,
        repositories: [],
      };
    },
  };
};

export const LoadUser = (user: User): Action => {
  return {
    type: 'LoadUser',
    updateState: (state: State) => {
      return {
        ...state,
        userSelected: user,
      };
    },
  };
};

export const LoadRepositories = (repositories: Array<Repository>): Action => {
  return {
    type: 'LoadRepositories',
    updateState: (state: State) => {
      return {
        ...state,
        repositories,
      };
    },
  };
};
