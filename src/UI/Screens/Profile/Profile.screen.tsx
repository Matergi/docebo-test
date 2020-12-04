import React, {useEffect} from 'react';
import {View} from 'react-native';
import {ScreenWithHeader, Text} from 'elements';
import {State, User} from 'types';
import {connect} from 'react-redux';
import {userInfoSE, repositoriesSE} from 'sagaEffects';

interface Props {
  userSelected?: User;
  getUserInfo: () => void;
  getRepository: () => void;
}

const Profile = ({userSelected, getUserInfo, getRepository}: Props) => {
  useEffect(() => {
    getUserInfo();
    getRepository();
  }, []);

  if (!userSelected) {
    return <View />;
  }

  return (
    <ScreenWithHeader title="Profile">
      <Text>{userSelected.username}</Text>
    </ScreenWithHeader>
  );
};

const mapStateToProps = (state: State) => ({
  userSelected: state.userSelected,
});

const mapDispatchToProps = (dispatch: any) => ({
  getUserInfo: () => dispatch(userInfoSE()),
  getRepository: () => dispatch(repositoriesSE()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
