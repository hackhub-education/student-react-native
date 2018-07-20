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

const Login = props => (
  <View style={styles.container}>
    <Button
      title="Login"
      onPress={() => props.navigation.navigate('HomeTab')}
    />
  </View>
);

export default Login;