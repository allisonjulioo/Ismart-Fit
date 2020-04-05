import React, { Component } from "react";
import { View, Image } from "react-native";
import { Marker } from "react-native-maps";
import Tabs from "../../components/Tabs";
import Header from "../../components/Header";

import { Container, Map, MarkerPin, MarkerIcon } from "./styles";

import pin from "../../assets/img/pin.png";
import mini from "../../assets/img/mini.png";

const FindGymMap = (props) => {
  const map = {
    latitude: -19.9192439,
    longitude: -43.9392882,
  };
  const markers = [
    {
      latitude: -19.918595,
      longitude: -43.937674,
      description: "Av amazonas 303",
      title: "Smart Fit centro",
    },
    {
      latitude: -19.936597,
      longitude: -43.938135,
      description: "R. Sergipe, 1257-1101 - Funcionários",
      title: "Academia Smart Fit - Rua Sergipe",
    },
    {
      latitude: -19.930196,
      longitude: -43.941834,
      description: "R. Rio de Janeiro, 1893 - Lourdes",
      title: "Academia Smart Fit - Rua Rio de Janeiro",
    },
    {
      latitude: -19.93852,
      longitude: -43.936521,
      description: "R. Fernandes Tourinho, 195 - Funcionários",
      title: "Academia Smart Fit - Savassi",
    },
  ];
  return (
    <Container>
      <Header title="Escolha uma unidade no mapa" subNav={true} />
      <Map
        initialRegion={{
          latitude: map.latitude,
          longitude: map.longitude,
          latitudeDelta: 0.0421,
          longitudeDelta: 0.0421,
        }}
      >
        {markers &&
          markers.map((location, index) => {
            const { latitude, longitude, description, title } = location;
            return (
              <Marker
                style={{ height: 55, width: 55 }}
                key={index}
                coordinate={{ latitude, longitude }}
                title={title}
                description={description}
              >
                <MarkerPin>
                  <MarkerIcon source={mini} />
                </MarkerPin>
              </Marker>
            );
          })}
      </Map>
      <Tabs props={props.navigation} />
    </Container>
  );
};
export default FindGymMap;
