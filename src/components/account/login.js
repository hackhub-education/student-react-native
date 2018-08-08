import React, { Component } from "react";
import { StyleSheet, View, Button, TextInput, Text, Alert } from "react-native";
import { withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { connect } from "react-redux";
import { dispatch } from '../../store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const enhancer = withFormik({
  validationSchema: Yup.object().shape({
    username: Yup.string().required("username is required !"),
    password: Yup.string()
      .min(6, "Please enter at least 6 digits")
      .max(32, "Please enter less than 32 digits")
      .required("Password is required !")
  }),
  mapPropsToValues: () => ({
    username: "",
    password: ""
  }),
  handleSubmit: (values, { props }) => {
    axios({
      method: "POST",
      url: "https://tweet-api.webdxd.com/auth/login",
      data: values
    }).then(({ data }) => {
      if (data.success) {
        dispatch.user.login(data);
        return props.navigation.navigate("Home", { username: data.profile.username });
      }
      return Alert.alert("Wrong username and password combination");
    });
  }
});

class Login extends Component {
  async componentDidMount() {
    const { user, navigation } = this.props;

    if (user.token) {
      await dispatch.user.fetchProfile();
      navigation.navigate("Home", {
        username: user.profile.username
      });
    }
  }

  render() {
    const {
      values: { username, password },
      navigation,
      handleChange,
      handleSubmit,
      errors
    } = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          placeholder="username"
          value={username}
          onChangeText={handleChange("username")}
        />
        {errors.username && <Text>{errors.username}</Text>}
        <TextInput
          style={styles.inputField}
          placeholder="password"
          value={password}
          onChangeText={handleChange("password")}
        />
        {errors.password && <Text>{errors.password}</Text>}
        <Button title="Login" onPress={handleSubmit} />
        <Text>
          Don't have account ?{" "}
          <Text onPress={() => navigation.navigate("Signup")}>Signup</Text>
        </Text>
      </View>
    );
  }
}

const mapState = ({ user }) => ({ user });

export default connect(mapState)(enhancer(Login));
