import styled from "styled-components/native";
import { Dimensions } from "react-native";
import MapView from "react-native-maps";
import * as color from "../../constants/colors";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;
export const Header = styled.View``;
export const Map = styled(MapView)`
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
`;
export const MarkerPin = styled.View`
  background: ${color.black};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
export const MarkerIcon = styled.Image``;
