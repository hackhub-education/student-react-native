import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const Login = props => (
  <View style={styles.container}>
    <Button
      title="Login"
      onPress={() => props.navigation.navigate('Home', { username: 'Michael' })}
    />
  </View>
);

export default Login;