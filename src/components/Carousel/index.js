import React from "react";
import { Dimensions } from "react-native";
import Carousel from "react-native-anchor-carousel";
import { Item, Title, Description, Picture } from "./styles";
import data from "./data";

const { width } = Dimensions.get("window");

const SplashCarousel = () => {
  const renderItem = ({ item, index }) => {
    const { title, description, image } = item;
    return (
      <Item activeOpacity={0.95} onPress={() => {}}>
        <Picture source={image} />
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Item>
    );
  };

  return (
    <Carousel
      style={{ flex: 1 }}
      data={data}
      renderItem={renderItem}
      itemWidth={width - 60}
      containerWidth={width - 60}
    />
  );
};

export default SplashCarousel;
