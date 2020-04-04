import styled from "styled-components"; 
import { black, grey } from "../../../variables";

// padding-top: ${Constants.statusBarHeight}px;
// padding-bottom: ${Constants.statusBarHeight}px;

export const Head = styled.View`
  padding: 0 16px;
  background-color: ${black};
  min-height: 50px;
`;
export const Navigation = styled.View`
  width: 100%;
  flex-direction: row;
  display: flex;
  align-items: center;
`;
export const Title = styled.Text`
  margin-left: 16px;
  font-size: 16px;
  color: ${grey};
`;
