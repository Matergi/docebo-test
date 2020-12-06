import type {State} from './Types';

let state: State = {
  version: '0.1',
  screen: 'SearchUser',
  loadingIds: [],
  searchUsers: [],
  repositories: [],
  searchUsersPagination: 1,
};

export default state;
