import { StackNavigator } from 'react-navigation';
import Home from './home';
import Card from './card';

export default StackNavigator({
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
