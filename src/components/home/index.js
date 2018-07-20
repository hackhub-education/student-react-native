import { createStackNavigator } from 'react-navigation';
import Home from './home';
import Card from './card';

export default createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },
  Card: {
    screen: Card,
    navigationOptions: {
      title: 'Card'
    }
  }
})
