import styled from "styled-components";
import Constants from "expo-constants";

export const Container = styled.View`
  flex: 1;
  padding: ${Constants.statusBarHeight + 60}px 24px 0;
`;

export const Content = styled.View`
  margin: 40px 0;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Picture = styled.Image`
  margin: 0 auto;
  width: 300px;
`;
