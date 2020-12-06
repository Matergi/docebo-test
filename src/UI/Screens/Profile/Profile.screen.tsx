import React, {useEffect, useContext} from 'react';
import {View, Image, StyleSheet, Linking, ScrollView} from 'react-native';
import {ScreenWithHeader, Text, Press} from 'elements';
import {Repository, State, User} from 'types';
import {connect} from 'react-redux';
import {userInfoSE, repositoriesSE} from 'sagaEffects';
import ThemeContext from 'themes';

interface Props {
  userSelected?: User;
  repositories: Array<Repository>;
  getUserInfo: () => void;
  getRepository: () => void;
}

const Profile = ({
  userSelected,
  getUserInfo,
  getRepository,
  repositories,
}: Props) => {
  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    getUserInfo();
    getRepository();
  }, []);

  return (
    <ScreenWithHeader title={userSelected ? userSelected.username : 'Profile'}>
      {userSelected && (
        <ScrollView>
          <View style={styles.page}>
            <View style={[styles.sectionProfile, theme.shadow]}>
              <Image
                style={styles.avatar}
                source={{uri: userSelected.avatar}}
              />
              <View style={styles.infoUser}>
                <Text style={theme.text.h6}>{userSelected.username}</Text>
                {userSelected.email && (
                  <Text
                    style={[styles.spaceTextInfoUser, theme.text.subtitle2]}>
                    {userSelected.email}
                  </Text>
                )}
                <Text style={[styles.spaceTextInfoUser, theme.text.subtitle2]}>
                  {userSelected.location}
                </Text>
                <Press
                  onPress={() => {
                    Linking.openURL(userSelected.url);
                  }}>
                  <Text style={[styles.profileUrl, theme.text.subtitle2]}>
                    Open on Github
                  </Text>
                </Press>
              </View>
            </View>
            {repositories.length > 0 && (
              <>
                <Text
                  style={[
                    styles.sectionTitle,
                    theme.text.sectionTitle,
                    {color: theme.label},
                  ]}>
                  Repositories
                </Text>
                <View style={[styles.sectionRepositories, theme.shadow]}>
                  {repositories.map((repository) => (
                    <Press
                      key={repository.id}
                      style={styles.repository}
                      onPress={() => {
                        Linking.openURL(repository.url);
                      }}>
                      <Text style={theme.text.h6}>{repository.name}</Text>
                      <Text style={theme.text.body2}>
                        {repository.description ?? 'no description'}
                      </Text>
                      <Text style={[theme.text.body2, styles.repositoryInfo]}>
                        {`${repository.language}   ${repository.star} ⭐`}
                      </Text>
                    </Press>
                  ))}
                </View>
              </>
            )}
          </View>
        </ScrollView>
      )}
    </ScreenWithHeader>
  );
};

const styles = StyleSheet.create({
  page: {
    margin: 15,
  },
  sectionProfile: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 13,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 13,
  },
  infoUser: {
    flexDirection: 'column',
    marginLeft: 15,
  },
  spaceTextInfoUser: {
    marginTop: 2,
  },
  profileUrl: {
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  sectionTitle: {
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 2,
  },
  sectionRepositories: {
    flexDirection: 'column',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 13,
  },
  repository: {
    marginBottom: 20,
  },
  repositoryInfo: {
    fontWeight: '600',
  },
});

const mapStateToProps = (state: State) => ({
  userSelected: state.userSelected,
  repositories: state.repositories,
});

const mapDispatchToProps = (dispatch: any) => ({
  getUserInfo: () => dispatch(userInfoSE()),
  getRepository: () => dispatch(repositoriesSE()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
