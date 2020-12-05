import type {ScreenName} from 'router';

type REST = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type DetailRequest = {
  url: string;
  params?: any;
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
  detail?: any;
};

export type SearchUser = {
  id: string;
  username: string;
  avatar: string;
  url: string;
  type: string;
};

export type User = {
  id: string;
  username: string;
  avatar: string;
  url: string;
  type: string;
  company: string;
  email: string;
  location: string;
};

export type Repository = {
  id: string;
  name: string;
  fullName: string;
  owner: User;
  description: string;
  star: number;
  language: string;
  url: string;
};

export type State = {
  version: string;
  screen: ScreenName;
  loading: Array<string>;
  searchUsers: Array<SearchUser>;
  userSelectedId?: string;
  userSelected?: User;
  repositories: Array<Repository>;
};
