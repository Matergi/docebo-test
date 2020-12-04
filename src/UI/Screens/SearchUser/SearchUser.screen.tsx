import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {Text, Input, Press} from 'elements';
import {connect} from 'react-redux';
import {searchUsersSE, changeScreenSE} from 'sagaEffects';
import screens from 'router';
import type {State, SearchUser} from 'types';
import type {ScreenName} from 'router';

interface Props {
  users: Array<SearchUser>;
  searchUsers: (username: string) => void;
  changeScreen: (screen: ScreenName, params: any) => void;
}

const SearchUserScreen = ({searchUsers, users, changeScreen}: Props) => (
  <SafeAreaView>
    <Input
      style={styles.search}
      onChange={(username) => {
        searchUsers(username);
      }}
      underlineColor="#000"
      placeholder="search user"
    />
    <ScrollView>
      {users.map((user) => (
        <Press
          key={user.id}
          style={styles.user}
          onPress={() => {
            changeScreen(screens.profile, {
              id: user.id,
            });
          }}>
          <Text>{user.username}</Text>
        </Press>
      ))}
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  search: {
    width: '100%',
    height: 50,
  },
  user: {
    height: 60,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 7,
    padding: 10,
    backgroundColor: '#eaeaea',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const mapStateToProps = (state: State) => ({
  users: state.searchUsers,
});

const mapDispatchToProps = (dispatch: any) => ({
  searchUsers: (username: string) => dispatch(searchUsersSE(username)),
  changeScreen: (screen: ScreenName, params: any) =>
    dispatch(changeScreenSE(screen, params, false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchUserScreen);
