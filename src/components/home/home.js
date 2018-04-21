import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';
import { Button, Input } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
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
        <Input
          label="Name"
          placeholder="type name..."
          value={name}
          onChangeText={(name) => this.setState({ name })}
          shake
        />
        <Input
          autoCapitalize="none"
          label="Email"
          placeholder="type email..."
          value={email}
          onChangeText={(email) => this.setState({ email })}
          shake
        />
        <Input
          label="Cell Phone"
          placeholder="type phone..."
          value={phone}
          onChangeText={(phone) => this.setState({ phone })}
          shake
        />
        <Button
          title="Generate"
          onPress={() => this.props.navigation.navigate('Card', { data: this.state })}
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",
            width: 300,
            height: 45,
            borderRadius: 5
          }}
          containerStyle={{ marginTop: 20 }}
        />
      </View>
    );
  }
};

export default Home;