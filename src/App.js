import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import RootNavigation from './components';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class App extends Component {
  render() {
    return (
      <RootNavigation />
    );
  }
}