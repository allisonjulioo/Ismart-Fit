import React, { Component } from "react";
import { StatusBar } from "react-native";
import Routes from "./src/routes";
import { black } from "./variables";

export default class App extends Component {
  render = () => (
    <>
      <StatusBar
        backgroundColor={black}
        barStyle="light-content" 
      />
      <Routes />
    </>
  );
}
