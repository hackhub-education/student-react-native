import { SwitchNavigator, TabNavigator } from 'react-navigation';

import Login from './account/login';
import Profile from './profile/profile';
import Home from './home';

const tabNavigation = TabNavigator({
  HomeTab: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home'
    }
  },
  ProfileTab: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile'
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