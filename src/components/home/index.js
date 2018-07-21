import { createStackNavigator } from 'react-navigation';
import Home from './home';
import Card from './card';

export default createStackNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      // headerBackTitle: null,
      // headerStyle: {
      //   backgroundColor: 'blue'
      // },
      // headerTitleStyle: {
      //   color: 'red'
      // },
      // headerTransparent: true,
    }
  },
  CardScreen: {
    screen: Card,
    navigationOptions: {
      title: 'Card',
      // headerBackTitleStyle: {
      //   color: 'black'
      // },
      // headerTintColor: 'black'
      // gesturesEnabled: false
    }
  }
}, {
  // mode: 'modal',
  // headerMode: 'float',
  // headerTransitionPreset: 'uikit'
})
