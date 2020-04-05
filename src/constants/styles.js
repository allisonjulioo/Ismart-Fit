import styled from "styled-components";
import * as color from "./colors";

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  margin: 10px;
  background-color: ${color.primary};
`;

export const ButtonSmall = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin: 10px;
  background-color: ${color.primary};
`;
export const ButtonSecondary = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  margin: 10px;
`;
export const TextPrimary = styled.Text`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  color: ${color.black};
`;
export const TextSecondary = styled.Text`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  color: ${color.black};
  text-decoration: underline;
`;
