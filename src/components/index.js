import React from 'react';
import { Icon } from 'react-native-elements';
import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import Login from './account/login';
import Profile from './profile/profile';
import Home from './home';

const tabNavigation = createBottomTabNavigator({
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
}, {
  // tabBarOptions: {
  //   activeTintColor: 'red',
  //   labelStyle: {
  //     fontSize: 12,
  //   },
  //   style: {
  //     backgroundColor: 'blue',
  //   },
  // }
});

export default createSwitchNavigator({
  Login: {
    screen: Login
  },
  Main: {
    screen: tabNavigation
  }
});