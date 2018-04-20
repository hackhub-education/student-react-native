import { SwitchNavigator } from 'react-navigation';

import Login from './account/login';
import Home from './home/home';

export default SwitchNavigator({
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  }
});