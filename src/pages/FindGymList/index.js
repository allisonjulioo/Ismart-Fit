import React, { Component } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";
import data from "./data";

import CardList from "../../components/CardList";
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";

export default class FindGymList extends Component {
  render = () => {
    return (
      <Container>
        <Header title="Escolha uma unidade na lista" subNav={true} />
        <FlatList
          data={data}
          keyExtractor={gym => String(gym.id)}
          onEndReached={() => {}}
          onEndReachedThreshold={0.2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: gym }) => <CardList data={gym} />}
        />
        <Tabs />
      </Container>
    );
  };
}
