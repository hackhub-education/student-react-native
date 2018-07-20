import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import Login from './account/login';
import Home from './home/home';
import Profile from './profile/profile';

const tabNavigation = createBottomTabNavigator({
  HomeTab: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      // tabBarIcon: <Icon name="home" />
    }
  },
  ProfileTab: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile'
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: 'red',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'blue',
    },
  }
});

export default createSwitchNavigator({
  Login: {
    screen: Login
  },
  Main: {
    screen: tabNavigation
  }
});