import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Text>Welcome, {this.props.navigation.getParam('username', '')} !</Text>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Card')}
        />
      </View>
    );
  }
};

export default Home;