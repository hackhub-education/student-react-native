import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  inputField: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "grey",
    width: 150
  }
});

const enhancer = withFormik({
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required !'),
    email: Yup.string().email('Must be a valid email').required('Email is required !'),
    phone: Yup.string().required('Phone is required !')
  }),
  mapPropsToValues: () => ({
    name: '',
    email: '',
    phone: ''
  }),
  handleSubmit: (values, { props }) => {
    props.navigation.navigate("Card", { data: values })
  }
});

const Home = ({ values: { name, email, phone }, navigation, handleChange, handleSubmit, errors }) => (
  <View style={styles.container}>
    <Text>Welcome, {navigation.getParam("username", "")} !</Text>
    <View style={styles.inputRow}>
      <Text>Name</Text>
      <TextInput
        style={styles.inputField}
        placeholder="type name..."
        value={name}
        onChangeText={handleChange('name')}
      />
    </View>
    {errors.name && <Text>{errors.name}</Text>}
    <View style={styles.inputRow}>
      <Text>Email</Text>
      <TextInput
        style={styles.inputField}
        placeholder="type email..."
        value={email}
        onChangeText={handleChange('email')}
      />
    </View>
    {errors.email && <Text>{errors.email}</Text>}
    <View style={styles.inputRow}>
      <Text>Cell Phone</Text>
      <TextInput
        style={styles.inputField}
        placeholder="type phone..."
        value={phone}
        onChangeText={handleChange('phone')}
      />
    </View>
    {errors.phone && <Text>{errors.phone}</Text>}
    <Button
      title="Generate"
      onPress={handleSubmit}
    />
  </View>
);

export default enhancer(Home);
