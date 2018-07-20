import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class Card extends Component {
  render() {
    const { name, email, phone } = this.props.navigation.state.params.data;
    return (
      <View style={styles.container}>
        <Text>{name}</Text>
        <Text>{email}</Text>
        <Text>{phone}</Text>
      </View>
    );
  }
};

export default Card;