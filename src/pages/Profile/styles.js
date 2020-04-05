import styled from "styled-components/native";
import * as color from "../../constants/colors";
import { Button, TextPrimary } from "../../constants/styles";

export const Container = styled.View`
  align-items: center;
  flex: 1;
  width: 100%;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  background: ${color.black};
  width: 100%;
  height: 300px;
`;
export const Avatar = styled.Image`
  resize-mode: cover;
  width: 100px;
  height: 100px;
  border-radius: 200px;
`;
export const Name = styled.Text`
  color: ${color.white};
  margin-top: 12px;
  font-size: 20px;
  font-weight: bold;
`;
export const Quit = styled(Button)`
  width: 80%;
  flex-direction: row;
  align-items: center;
  padding: 16px 20px;
  margin: 2px 0;
`;
export const TextButton = styled(TextPrimary)``;
