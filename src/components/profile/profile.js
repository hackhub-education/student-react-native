import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Button, Icon, Avatar } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
        <Avatar
          size="large"
          rounded
          source={require('./img/avatar.jpg')}
        />
        <Text style={styles.username}>WebDxD</Text>
        <Button
          icon={
            <Icon
              name='exit-to-app'
              color='white'
            />
          }
          iconRight
          title="Logout"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
};

export default Profile;