import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={require('./img/avatar.jpg')}
        />
        <Text style={styles.username}>WebDxD</Text>
        <Button
          title="Logout"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
};

export default Profile;