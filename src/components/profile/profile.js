import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import { connect } from "react-redux";
import { dispatch } from '../../store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  username: {
    fontSize: 16,
    fontWeight: "bold"
  }
});

const Profile = ({ navigation, user }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={require("./img/avatar.jpg")} />
    <Text style={styles.username}>{user.profile.username}</Text>
    <Button
      title="Logout"
      onPress={() => {
        dispatch.user.logout();
        navigation.navigate("Login")
      }}
    />
  </View>
);

const mapState = ({ user }) => ({ user });

export default connect(mapState)(Profile);
