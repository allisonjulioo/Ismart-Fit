import React from "react";
import { Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

import TrainingFrequency from "../../components/TrainingFrequency";
import HomeTabs from "../../components/HomeTabs";

import {
  Container,
  Todo,
  Header,
  Content,
  Small,
  Title,
  Banner,
  Picture,
  Row,
  RowContent,
  RowTitle,
  RowDescription,
  Element,
  TitleElement,
  Flow,
  Square,
  Icon,
  SubText,
} from "./styles";
import image from "../../assets/img/banner.png";
import image2 from "../../assets/img/banner_desktop.jpg";

import bike from "../../assets/img/bike.png";
import shirt from "../../assets/img/shirt.png";
import pin from "../../assets/img/pin.png";
import friends from "../../assets/img/friends.png";

import * as color from "../../constants/colors";

const Home = () => {
  const bonus = [
    { image: bike, description: "Área de musculação e aeróbicos" },
    { image: shirt, description: "Brinde Exclusivo" },
    { image: friends, description: "Treinar com um amigo na sua unidade***" },
    {
      image: pin,
      description: "Acesso Ilimitado às demais unidades da rede**",
    },
  ];
  const screenWidth = Dimensions.get("window").width;
  return (
    <Container>
      <Header>
        <Content>
          <Small>Boa Tarde</Small>
          <Title>Allison</Title>
        </Content>
        <Content>
          <Small style={{ textAlign: "right" }}>Cliente</Small>
          <Title style={{ textAlign: "right" }}>Black</Title>
        </Content>
      </Header>
      <Banner style={{ elevation: 10 }}>
        <Carousel
          style={{ height: 180 }}
          data={[image, image2]}
          renderItem={({ item: img }) => <Picture source={img} />}
          sliderWidth={screenWidth - 40}
          itemWidth={screenWidth - 40}
        />
      </Banner>
      <Todo showsVerticalScrollIndicator={false}> 
        <Element>
          <Row>
            <RowContent>
              <RowTitle>Situação</RowTitle>
              <RowDescription
                style={{ backgroundColor: color.green, color: color.white }}
              >
                Ativo
              </RowDescription>
            </RowContent>
            <RowContent>
              <RowTitle style={{ textAlign: "center" }}>
                Sua unidade principal é:
              </RowTitle>
              <RowDescription>Savassi</RowDescription>
            </RowContent>
            <RowContent>
              <RowTitle style={{ textAlign: "center" }}>
                Convites Black até 31/03/2020:
              </RowTitle>
              <RowDescription>0/5</RowDescription>
            </RowContent>
          </Row>
        </Element>
        <Element>
          <TrainingFrequency />
        </Element>
        <Element>
          <TitleElement>Como aluno Black, você pode</TitleElement>
          <Flow horizontal={true} showsHorizontalScrollIndicator={false}>
            {bonus.map((item, index) => (
              <Square key={index} style={{ elevation: 2 }} activeOpacity={0.9}>
                <Icon source={item.image} style={{}} />
                <SubText>{item.description}</SubText>
              </Square>
            ))}
          </Flow>
        </Element>
      </Todo>
      <HomeTabs />
    </Container>
  );
};

export default Home;
