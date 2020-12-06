import React, {useState, useEffect, useContext} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Image, View} from 'react-native';
import {Text, Input, Press} from 'elements';
import {connect} from 'react-redux';
import {searchUsersSE, changeScreenSE} from 'sagaEffects';
import {SelectUser} from 'stateUpdaters';
import screens from 'router';
import type {State, SearchUser} from 'types';
import type {ScreenName} from 'router';
import ThemeContext from 'themes';
import {SvgXml} from 'react-native-svg';
import ArrowRight from 'images/arrowRight';

interface Props {
  users: Array<SearchUser>;
  searchUsers: (username: string, withPagination?: boolean) => void;
  changeScreen: (screen: ScreenName, idUser: string) => void;
}

const SearchUserScreen = ({searchUsers, users, changeScreen}: Props) => {
  const {theme} = useContext(ThemeContext);

  const [username, setUsername] = useState('');

  useEffect(() => {
    searchUsers(username, false);
  }, [username]);

  return (
    <View
      style={[styles.page, {backgroundColor: theme.screen.backgroundColor}]}>
      <SafeAreaView>
        <Input
          style={styles.search}
          onChange={setUsername}
          underlineColor="#000"
          placeholder="search user"
        />
        <ScrollView>
          {users.map((user) => (
            <Press
              key={user.id}
              style={[styles.user, theme.listShadow]}
              onPress={() => {
                changeScreen(screens.profile, user.username);
              }}>
              <View style={styles.row}>
                <Image style={styles.avatar} source={{uri: user.avatar}} />
                <Text style={[theme.text.subtitle1]}>{user.username}</Text>
              </View>
              <SvgXml style={styles.arrow} xml={ArrowRight} />
            </Press>
          ))}
          {users.length > 0 && (
            <Press
              style={styles.loadMoreContainer}
              onPress={() => {
                searchUsers(username, true);
              }}>
              <View style={styles.loadMore}>
                <Text style={styles.loadMoreText}>Load More</Text>
              </View>
            </Press>
          )}
          <View style={styles.bottomSpace} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    width: '100%',
    height: '100%',
  },
  search: {
    width: '100%',
    height: 50,
  },
  user: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    transform: [{scale: 1.4}],
    marginRight: 10,
  },
  bottomSpace: {
    height: 50,
  },
  loadMoreContainer: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadMore: {
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadMoreText: {
    color: '#fff',
  },
});

const mapStateToProps = (state: State) => ({
  users: state.searchUsers,
});

const mapDispatchToProps = (dispatch: any) => ({
  searchUsers: (username: string, withPagination: boolean = false) =>
    dispatch(searchUsersSE(username, !withPagination)),
  changeScreen: (screen: ScreenName, idUser: string) => {
    dispatch(SelectUser(idUser));
    dispatch(changeScreenSE(screen, {}, false));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchUserScreen);
