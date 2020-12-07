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
import LottieView from 'lottie-react-native';
import {loading} from 'lottiefiles';
import strings from 'strings';
import {Screen} from 'dimensions';

interface Props {
  users: Array<SearchUser>;
  loadingIds: Array<string>;
  searchUsers: (username: string, withPagination?: boolean) => void;
  changeScreen: (screen: ScreenName, idUser: string) => void;
}

const isCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}: any) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

const SearchUserScreen = ({
  searchUsers,
  users,
  changeScreen,
  loadingIds,
}: Props) => {
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
          style={[styles.search, theme.shadow]}
          onChange={setUsername}
          underlineColor="#ddd"
          placeholder={strings.get().searchUser.searchPlaceHolder}
        />
        <ScrollView
          style={styles.users}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={400}
          onScroll={({nativeEvent}) => {
            if (isCloseToBottom(nativeEvent)) {
              searchUsers(username, true);
            }
          }}>
          {loadingIds.includes('searchUsers') && (
            <View style={styles.containerSearchUsersLoading}>
              <LottieView
                autoPlay
                autoSize
                style={styles.loadingIcon}
                source={loading}
              />
            </View>
          )}
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
          {loadingIds.includes('searchUsersPagination') && (
            <View style={styles.containerSearchUsersLoading}>
              <LottieView
                autoPlay
                autoSize
                style={styles.loadingIcon}
                source={loading}
              />
            </View>
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
    padding: 10,
  },
  search: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    top: Screen.heightNavigationBar + 10,
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
  users: {
    marginTop: Screen.heightNavigationBar + 40,
  },
  bottomSpace: {
    height: 30,
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
    height: 40,
  },
  loadMoreText: {
    color: '#fff',
  },
  containerSearchUsersLoading: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingIcon: {
    height: 30,
  },
});

const mapStateToProps = (state: State) => ({
  users: state.searchUsers,
  loadingIds: state.loadingIds,
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
