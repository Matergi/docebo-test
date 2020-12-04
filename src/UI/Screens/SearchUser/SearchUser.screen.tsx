import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View} from 'react-native';
import {Text, Input} from 'elements';
import {connect} from 'react-redux';
import type {State, SearchUser} from 'types';
import {searchUsersSE} from 'sagaEffects';

interface Props {
  users: Array<SearchUser>;
  searchUsers: (username: string) => void;
}

const SearchUserScreen = ({searchUsers, users}: Props) => (
  <SafeAreaView>
    <Text>SearchUser</Text>
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
        <View key={user.id}>
          <Text>{user.username}</Text>
        </View>
      ))}
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  search: {
    width: '100%',
    height: 50,
  },
});

const mapStateToProps = (state: State) => ({
  users: state.searchUsers,
});

const mapDispatchToProps = (dispatch: any) => ({
  searchUsers: (username: string) => dispatch(searchUsersSE(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchUserScreen);
