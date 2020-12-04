import type {Action, State, SearchUser} from 'types';

export const LoadSearchUsers = (users: Array<SearchUser>): Action => {
  console.log(users);
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
