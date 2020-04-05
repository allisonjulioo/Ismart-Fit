import { Animated, Platform } from "react-native";
import * as color from "../../constants/colors";
import styled from "styled-components";

export const Container = styled(Animated.View)`
  flex: 1;
`;
export const Content = styled(Animated.ScrollView)`
  flex: 1;
`;
export const ContentBanner = styled(Animated.View)`
  flex: 1;
`;
export const Promo = styled(Animated.View)`
  position: absolute;
  bottom: 0;
  z-index: 22;
  width: 100%;
`;
export const Navigation = styled(Animated.View)`
  align-items: flex-start;
  flex: 1;
  width: 130%;
  margin: 18px -13% 0;
  padding: 0 40px;
`;
export const NavigationContent = styled.View`
  flex-direction: row;
`;
export const NavigationTextSmall = styled.Text`
  color: ${color.white};
  font-size: 16px;
  margin: 12px 40px;
`;
export const NavigationText = styled.Text`
  color: ${color.grey};
  font-size: 32px;
  margin-left: 16px;
  font-weight: bold;
`;
export const NavigationButton = styled.TouchableOpacity``;

export const Bar = styled(Animated.View)`
  height: 32px;
  width: 130%;
  margin: ${Platform.OS === "ios" ? 28 : 38}px -13% 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const Header = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${color.black};
  overflow: hidden;
  height: 280px;
`;
export const Row = styled.View`
  margin: 16px;
  align-items: center;
  justify-content: center;
`;
