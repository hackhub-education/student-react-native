import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const Home = props => (
  <View style={styles.container}>
    <Text>Welcome, {props.navigation.getParam('username', '')} !</Text>
    <Button
      title="Go to Card"
      onPress={() => props.navigation.navigate('CardScreen')}
    />
  </View>
);

export default Home;