import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import Login from './account/login';
import Home from './home/home';
import Profile from './profile/profile';

const tabNavigation = createBottomTabNavigator({
  Home: {
    screen: Home
  },
  Profile: {
    screen: Profile
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