import React from "react";
import { StyleSheet, View, Button, TextInput, Text } from "react-native";
import { withFormik } from "formik";
import * as Yup from "yup";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const enhancer = withFormik({
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Must be a valid email').required('Email is required !'),
    password: Yup.string()
      .min(6, 'Please enter at least 6 digits')
      .max(32, 'Please enter less than 32 digits')
      .required('Password is required !')
  }),
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),
  handleSubmit: (values, { props }) => {
    props.navigation.navigate("Home", { username: "Michael" })
  }
});

const Signup = ({ values: { email, password }, navigation, handleChange, handleSubmit, errors }) => (
  <View style={styles.container}>
    <TextInput
      placeholder="email"
      value={email}
      onChangeText={handleChange("email")}
    />
    {errors.email && <Text>{errors.email}</Text>}
    <TextInput
      style={styles.inputField}
      placeholder="password"
      value={password}
      onChangeText={handleChange("password")}
    />
    {errors.password && <Text>{errors.password}</Text>}
    <Button
      title="Signup"
      onPress={handleSubmit}
    />
    <Text>Already have account ? <Text onPress={() => navigation.navigate('Login')}>Login</Text></Text>
  </View>
);

export default enhancer(Signup);
