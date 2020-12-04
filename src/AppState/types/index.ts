import type {ScreenName} from 'router';

type REST = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type SearchUser = {
  id: string;
  username: string;
  avatar: string;
  url: string;
  type: string;
};

export type DetailRequest = {
  url: string;
  query?: any;
  method: REST;
  dispatch: any;
  loadingId: string;
  debug?: boolean;
  headers?: any;
};

export type Action = {
  type: string;
  updateState: (state: State) => State;
  request?: DetailRequest;
};

export type State = {
  version: string;
  screen: ScreenName;
  loading: Array<string>;
  searchUsers: Array<SearchUser>;
};
