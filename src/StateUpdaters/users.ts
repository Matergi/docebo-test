import type {Action, State, SearchUser, User, Repository} from 'types';

export const LoadSearchUsers = (
  users: Array<SearchUser>,
  pagination: number = 0,
): Action => {
  return {
    type: 'LoadSearchUsers',
    updateState: (state: State) => {
      const searchUsers =
        pagination > 1 ? [...state.searchUsers, ...users] : users;
      return {
        ...state,
        searchUsers: searchUsers.filter(
          (item, pos) =>
            searchUsers.map((user) => user.id).indexOf(item.id) === pos,
        ),
        searchUsersPagination: pagination,
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
