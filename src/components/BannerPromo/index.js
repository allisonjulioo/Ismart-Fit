import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Ads,
  Plan,
  Currency,
  Title,
  Small,
  Value,
  PriceLg,
  PriceSm,
  Action
} from "./styles";
import { grey } from "../../constants/colors";

const BannerPromo = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Ads>
        <Plan
          style={{
            borderRightWidth: 1,
            borderRightColor: grey
          }}
        >
          <Title>Plano Smart</Title>
          <Value>
            <Small>por:</Small>
            <Currency>
              <PriceLg>14</PriceLg>
              <PriceSm>,90*</PriceSm>
            </Currency>
          </Value>
        </Plan>
        <Plan>
          <Title>Plano Black</Title>
          <Value>
            <Small>por:</Small>
            <Currency>
              <PriceLg>14</PriceLg>
              <PriceSm>,90*</PriceSm>
            </Currency>
          </Value>
        </Plan>
      </Ads>
      <Action onPress={() => navigation.navigate("Auth")}>
        <Small>COMPRE AGORA</Small>
      </Action>
    </Container>
  );
};

export default BannerPromo;
