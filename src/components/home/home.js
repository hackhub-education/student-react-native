import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  inputField: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'grey',
    width: 150
  }
});

class Home extends Component {
  state={
    name: '',
    email: '',
    phone: ''
  }

  render() {
    const { name, email, phone } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.inputRow}>
          <Text>Name</Text>
          <TextInput
            style={styles.inputField}
            placeholder="type name..."
            value={name}
            onChangeText={(name) => this.setState({ name })}
          />
        </View>
        <View style={styles.inputRow}>
          <Text>Email</Text>
          <TextInput
            style={styles.inputField}
            placeholder="type email..."
            value={email}
            onChangeText={(email) => this.setState({ email })}
          />
        </View>
        <View style={styles.inputRow}>
          <Text>Cell Phone</Text>
          <TextInput
            style={styles.inputField}
            placeholder="type phone..."
            value={phone}
            onChangeText={(phone) => this.setState({ phone })}
          />
        </View>
        <Button
          title="Generate"
          onPress={() => this.props.navigation.navigate('Card', { data: this.state })}
        />
      </View>
    );
  }
};

export default Home;