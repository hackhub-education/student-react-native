import { createSwitchNavigator } from 'react-navigation';

import Login from './account/login';
import Home from './home/home';

export default createSwitchNavigator({
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  }
});