import styled from "styled-components";
import { Feather } from "@expo/vector-icons";
import * as color from "../../constants/colors";

export const MyTabs = styled.View`
  position: absolute;
  bottom: 0;
  height: 50px;
  padding: 0 16px;
  width: 100%;
  background-color: ${color.white};
  border-top-width: 1px;
  border-top-color: #eee;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Tab = styled.TouchableOpacity`
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const TabCenter = styled.TouchableOpacity`
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${color.primary};
  padding: 12px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin: -40px 0 0;
  z-index: 2;
  position: relative;
`;
export const BeforeTabCenter = styled.View`
  background: ${color.primary};
  position: absolute;
  top: -10px;
  z-index: 0;
  opacity: 0.5;
  width: 70px;
  height: 70px;
  border-radius: 100px;
`;
export const IconTabCenter = styled(Feather)`
  color: ${color.black};
  z-index: 2;
`;

export const Label = styled.Text`
  color: ${color.grey};
  z-index: 2;
`;
