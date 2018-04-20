import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    height: 180,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 1
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  email: {
    fontSize: 18,
    paddingBottom: 5
  },
  phone: {
    fontSize: 18,
  },
  logo: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 0,
    right: 10
  }
});

class Card extends Component {
  render() {
    const { data } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.email}>{data.email}</Text>
          <Text style={styles.phone}>{data.phone}</Text>
          <Image
            style={styles.logo}
            source={require('./img/logo.png')}
          />
        </View>
      </View>
    );
  }
};

export default Card;