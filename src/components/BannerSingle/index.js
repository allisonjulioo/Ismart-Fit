import React from "react";
import { Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Banner,
  BannerButton,
  Content,
  Backdrop,
  Picture,
  Title,
  Address,
  Distance,
  Label,
  LabelButton,
  Action
} from "./styles";
import * as color from "../../../variables";

const BannerSingle = ({ gym }) => {
  const navigation = useNavigation();

  return (
    <Banner>
      <BannerButton onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={20} color="#fff" />
      </BannerButton>
      <Backdrop />
      <Picture source={gym.picture} />
      <Content>
        <Title>{gym.name}</Title>
        <Address>{gym.address}</Address>
        <Distance>
          <Feather name="map-pin" color={color.primary} />
          <Label>{gym.distance}</Label>
        </Distance>
        <Action onPress={() => navigation.navigate("Auth")}>
          <LabelButton>tour 360</LabelButton>
        </Action>
      </Content>
    </Banner>
  );
};
export default BannerSingle;
