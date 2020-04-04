import React, { useState } from "react";
import Carousel from "react-native-snap-carousel";
import { BarChart } from "react-native-chart-kit";
import { ScrollView, View } from "react-native";
import DotsPagination from "../DotsPagination";

import { data, chartConfig, screenWidth, galery, differentials } from "./data";

import {
  Container,
  Content,
  Title,
  Picture,
  Pagination,
  DotPagination,
  Differentials,
  DotImage,
  ConainerOthers,
  ContentOthers,
  PictureOther,
  FooterOthers,
  TitleOthers,
  LabelOthers
} from "./styles";

import image from "../../assets/img/gym.jpg";

const ContentSingle = () => {
  const [active, setActive] = useState(0);
  const [activeDifferential, setActiveDifferential] = useState(0);

  const imageSlide = ({ item }) => <Picture source={item.image} />;

  return (
    <Container>
      <Content>
        <Title>Galeria</Title>
        <Carousel
          data={galery}
          renderItem={imageSlide}
          sliderWidth={screenWidth - 70}
          itemWidth={screenWidth - 70}
          onSnapToItem={index => setActive(index)}
        />
        <DotsPagination items={galery} activeIndex={active} />
      </Content>
      <Content>
        <Title>Horários da unidade</Title>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <BarChart
            yAxisInterval={1}
            data={data}
            width={screenWidth}
            height={240}
            yAxisSuffix=" h"
            chartConfig={chartConfig}
            verticalLabelRotation={0}
          />
        </ScrollView>
      </Content>
      <Content>
        <Title>Diferenciais da unidade</Title>
        <Content>
          <Differentials>
            {differentials[activeDifferential].description}
          </Differentials>
          <Pagination>
            {differentials.map((item, i) => (
              <DotPagination
                onPress={() => setActiveDifferential(i)}
                style={{
                  elevation: activeDifferential == i ? 1 : 0,
                  backgroundColor: activeDifferential == i ? "#f9f9f9" : "#fff"
                }}
              >
                <DotImage
                  key={i}
                  source={item.image}
                  style={{ width: 40, resizeMode: "contain" }}
                />
              </DotPagination>
            ))}
          </Pagination>
        </Content>
      </Content>
      <Content>
        <Title>Outras unidades próximas a você</Title>
        <ConainerOthers
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {[1, 2, 3].map((_, i) => (
            <ContentOthers key={i} style={{ elevation: 3 }} activeOpacity={0.8}>
              <PictureOther source={image} />
              <FooterOthers>
                <TitleOthers>
                  <LabelOthers>Minas Shopping</LabelOthers>
                  <LabelOthers>4km</LabelOthers>
                </TitleOthers>
              </FooterOthers>
            </ContentOthers>
          ))}
        </ConainerOthers>
      </Content>
    </Container>
  );
};
export default ContentSingle;

/*
{data.map((_, i) => (
  <Content key={i}>
    <Title>Galeria</Title>
    <Picture
      source={image}
      style={{ height: 152, resizeMode: "contain" }}
    />
    <Title>{i}</Title>
  </Content>
))}
*/
