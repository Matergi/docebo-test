type searchUser = 'SearchUser';
type profile = 'Profile';

export type ScreenName = searchUser | profile;

type ScreensType = {
  [key: string]: ScreenName;
};

const screens: ScreensType = {
  searchUser: 'SearchUser',
  profile: 'Profile',
};

export default screens;
