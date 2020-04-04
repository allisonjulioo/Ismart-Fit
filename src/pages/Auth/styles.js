import styled from "styled-components";
import Constants from "expo-constants";
import * as color from "../../../variables";
import { Feather } from "@expo/vector-icons";
import { TextInputMask } from "react-native-masked-text";
import { Button, TextPrimary } from "../../../styles";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${Constants.statusBarHeight + 40}px 24px 20px;
`;
export const Picture = styled.Image`
  margin: 0 auto;
  width: 300px;
`;

export const Header = styled.View``;
export const Content = styled.View`
  margin: 40px 0;
`;
export const Label = styled.View`
  position: relative;
`;

export const Input = styled(TextInputMask).attrs({
  placeholderTextColor: color.grey,
  placeholderTextAlign: "center"
})`
  color: ${color.black};
  border-bottom-width: 2px;
  border-bottom-color: transparent;
  text-align: center;
  min-width: 90%;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 0;
`;
export const Input2 = styled.TextInput.attrs({
  placeholderTextColor: color.grey,
  placeholderTextAlign: "center"
})`
  color: ${color.black};
  border-bottom-width: 2px;
  border-bottom-color: transparent;
  text-align: center;
  min-width: 90%;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 0;
`;

export const Icon = styled(Feather)`
  font-size: 20px;
  position: absolute;
  right: 12px;
  top: 16px;
`;
export const TextButton = styled(TextPrimary)``;
export const Submit = styled(Button)`
  min-width: 90%;
`;

export const Preamble = styled.Text`
  text-align: center;
  width: 80%;
  color: ${color.grey};
`;
export const ModalBody = styled.View`
  flex: 1;
  justify-content: space-between;
  margin: 60px 0;
  align-items: center;
`;
export const ModalHeader = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
export const ModalPicture = styled.Image`
  transform: scale(0.5);
`;
export const ModalText = styled.Text`
  text-align: center;
  width: 80%;
  color: ${color.grey};
`;
export const ModalIcon = styled(Feather)`
  text-align: center;
  color: transparent;
  width: 80%;
`;
