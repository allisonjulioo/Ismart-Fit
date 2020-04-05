import styled from "styled-components";
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
  margin: 0 40px;
`;
export const Label = styled.Text`
  color: ${color.grey};
`;
