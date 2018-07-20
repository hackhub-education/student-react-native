import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import Login from './account/login';
import Profile from './profile/profile';
import Home from './home';

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