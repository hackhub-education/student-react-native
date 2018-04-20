import React from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const Login = () => (
  <View style={styles.container}>
    <Button title="Login" />
  </View>
);

export default Login;