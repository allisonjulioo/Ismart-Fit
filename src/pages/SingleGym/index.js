import React from "react";
import { useRoute } from "@react-navigation/native";
import { Animated, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

import { HEADER_SCROLL_DISTANCE, renderScrollViewContent } from "./helpers";

import {
  Container,
  Navigation,
  NavigationContent,
  NavigationTextSmall,
  NavigationButton,
  NavigationText,
  ContentBanner,
  Header,
  Content,
  Bar,
  Promo
} from "./styles";

import Banner from "../../components/BannerSingle";
import ContentSingle from "../../components/ContentSingle";
import BannerPromo from "../../components/BannerPromo";

const SingleGym = state => {
  const route = useRoute();
  const gym = route.params.gym;
  const navigation = useNavigation();

  state = {
    scrollY: new Animated.Value(0)
  };
  const scrollY = Animated.add(state.scrollY, 0);

  const headerTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: "clamp"
  });

  const bannerOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: "clamp"
  });
  const titleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, 1],
    extrapolate: "clamp"
  });
  const bannerTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: "clamp"
  });
  const promoTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE + 150],
    outputRange: [0, 150],
    extrapolate: "clamp"
  });

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0.8],
    extrapolate: "clamp"
  });
  const titleTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, -8],
    extrapolate: "clamp"
  });
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Content
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: state.scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        <ContentSingle />
      </Content>
      <Header style={{ transform: [{ translateY: headerTranslate }] }}>
        <ContentBanner
          style={{
            opacity: bannerOpacity,
            transform: [{ translateY: bannerTranslate }]
          }}
        >
          <Banner gym={gym} />
        </ContentBanner>
      </Header>
      <Bar
        style={{
          transform: [{ scale: titleScale }, { translateY: titleTranslate }]
        }}
      >
        <Navigation
          style={{
            opacity: titleOpacity,
            transform: [{ scale: titleScale }, { translateY: titleTranslate }]
          }}
        >
          <NavigationContent>
            <NavigationButton
              onPress={() => navigation.navigate("FindGymList")}
            >
              <Feather name="arrow-left" size={28} color="#fff" />
            </NavigationButton>

            <NavigationText>
              {gym.name} - {gym.distance}
            </NavigationText>
          </NavigationContent>
          <NavigationTextSmall>{gym.address}</NavigationTextSmall>
        </Navigation>
      </Bar>
      <Promo
        style={{
          transform: [{ translateY: promoTranslate }]
        }}
      >
        <BannerPromo />
      </Promo>
    </Container>
  );
};
export default SingleGym;
