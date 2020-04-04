import styled from "styled-components";
import Constants from "expo-constants";
import * as color from "../../../variables";
import * as system from "../../../styles";

export const Banner = styled.View`
  position: relative;
  background-color: ${color.black};
  overflow: hidden;
  height: 280px;
`;
export const BannerButton = styled.TouchableOpacity`
  position: absolute;
  width: 40px;
  height: 40px;
  left: 16px;
  z-index: 12;
  top: ${Constants.statusBarHeight + 20}px;
  z-index: 12;
`;
export const Backdrop = styled.View`
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  background-color: #000;
`;
export const Picture = styled.Image`
  position: absolute;
  z-index: 0;
  height: 100%;
`;
export const Content = styled.View`
  padding-top: ${Constants.statusBarHeight + 10}px;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 2;
  top: 32px;
  left: -10px;
`;
export const Title = styled.Text`
  font-size: 28px;
  color: ${color.primary};
  text-transform: uppercase;
  font-weight: bold;
`;
export const Address = styled.Text`
  color: ${color.white};
  text-align: center;
  margin: 12px;
  width: 70%;
`;
export const Distance = styled.View`
  flex-direction: row;
  margin: 12px 0;
`;
export const Label = styled.Text`
  color: ${color.grey};
  margin-left: 8px;
`;
export const LabelButton = styled.Text`
  color: ${color.black};
  width: 160px;
  text-align: center;
  text-transform: uppercase;
`;
export const Action = styled(system.ButtonSmall)``;
