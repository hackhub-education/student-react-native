import React, { Component } from "react";
import { YellowBox } from "react-native";
import { Provider } from "react-redux";
import { getPersistor } from "@rematch/persist";
import { PersistGate } from "redux-persist/es/integration/react";
import RootNavigation from "./components";
import store from "./store";

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={getPersistor()}>
          <RootNavigation />
        </PersistGate>
      </Provider>
    );
  }
}
