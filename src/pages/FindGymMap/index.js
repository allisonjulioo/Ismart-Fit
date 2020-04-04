import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";
import MapView from "react-native-maps";
import Tabs from "../../components/Tabs";
import Header from "../../components/Header";

export default class FindGymMap extends Component {
  render = () => {
    return (
      <View style={styles.container}>
        <Header title="Escolha uma unidade no mapa" subNav={true} />
        <MapView style={styles.mapStyle} />
        <Tabs props={this.props.navigation} />
      </View>
    );
  };
}
