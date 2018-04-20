import { SwitchNavigator, TabNavigator } from 'react-navigation';

import Login from './account/login';
import Home from './home/home';
import Profile from './profile/profile';

const tabNavigation = TabNavigator({
  Home: {
    screen: Home
  },
  Profile: {
    screen: Profile
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