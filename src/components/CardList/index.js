import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Card,
  Picture,
  Content,
  Infos,
  Ads,
  Distance,
  Address,
  Name,
  Promo,
  CTA,
  CTAText,
  Footer,
  Differentials,
  DifferentialsPicture,
  DifferentialsList,
  Data,
  Plan,
  Value,
  Currency,
  Title,
  Small,
  PriceLg,
  PriceSm
} from "./styles";
import * as color from "../../constants/colors";

import peso from "../../assets/img/peso.png";
import anilha from "../../assets/img/anilha.png";
import estacione from "../../assets/img/estacione.png";

const CardList = ({ data }) => {
  const navigation = useNavigation();
  const navigate = gym => navigation.navigate("SingleGym", { gym });

  return (
    <Card onPress={() => navigate(data)} activeOpacity={0.8}>
      <Content>
        <Picture source={data.picture} />
        <Infos>
          <Distance>{data.distance}</Distance>
          <Name>{data.name}</Name>
          <Address>{data.address}</Address>
          <Promo>{data.promo}</Promo>
        </Infos>
        <Ads>
          <Plan
            style={{
              borderBottomWidth: 1,
              borderBottomColor: color.grey
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
      </Content>
      <Footer>
        <Differentials>
          <Text>Difernciais</Text>
          <DifferentialsList>
            <DifferentialsPicture source={estacione} />
            <DifferentialsPicture source={anilha} />
            <DifferentialsPicture source={peso} />
          </DifferentialsList>
        </Differentials>
        <Data>
          <Text>
            Área de treinos funcionais da Ismart fiti conta com os mais modernos
            equipamentos para trabalhar o corpo de maneira completa
          </Text>
        </Data>
      </Footer>
    </Card>
  );
};
export default CardList;
/*
 <CTA onPress={() => navigate(data)}>
            <CTAText>Comprar</CTAText>
          </CTA>
*/
