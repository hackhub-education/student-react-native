import React from 'react';
import { SwitchNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Login from './account/login';
import Profile from './profile/profile';
import Home from './home';

const tabNavigation = TabNavigator({
  HomeTab: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="home"
          color={tintColor}
        />
      ),
    }
  },
  ProfileTab: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="account-circle"
          color={tintColor}
        />
      ),
    }
  }
});

export default SwitchNavigator({
  Login: {
    screen: Login
  },
  Main: {
    screen: tabNavigation
  }
});