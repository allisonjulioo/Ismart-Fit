import styled from "styled-components/native";
import * as color from "../../constants/colors";

export const Container = styled.View`
  align-items: center;
  flex: 1;
  padding-bottom: 28px;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background: ${color.black};
  height: 150px;
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
  padding: 16px 20px 0;
`;
export const Content = styled.View``;
export const Small = styled.Text`
  color: ${color.grey};
`;
export const Title = styled.Text`
  color: ${color.white};
  font-size: 20px;
  font-weight: bold;
`;
export const Banner = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: center;
  width: 90%;
  height: 152px;
  max-height: 152px;
  min-height: 152px;
  border-radius: 20px;
  margin-top: -18%;
  overflow: hidden;
  z-index: 12;
`;

export const Todo = styled.ScrollView`
  width: 100%;
`;

export const Picture = styled.Image`
  height: 100%;
  width: 100%;
`;
export const Row = styled.View`
  width: 100%;
  flex-direction: row;
`;
export const RowContent = styled.View`
  background: #f9f9f9;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 12px 2px 0;
  padding: 8px;
`;
export const RowTitle = styled.Text`
  color: ${color.grey};
  min-height: 28px;
`;
export const RowDescription = styled.Text`
  color: ${color.black};
  font-weight: bold;
  font-size: 16px;
  margin: 16px 0;
  padding: 8px 24px;
`;

export const Element = styled.View`
  padding: 8px 24px;
  width: 100%;
`;
export const TitleElement = styled.Text`
  flex-direction: row;
  align-items: flex-start;
  color: ${color.black};
  font-size: 16px;
  text-align: left;
`;
export const Flow = styled.ScrollView`
  padding: 0px 0 24px;
`;
export const Square = styled.TouchableOpacity`
  flex: 1;
  background: ${color.white};
  padding: 4px 12px;
  width: 140px;
  margin: 12px 8px;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled.Image`
  width: 26px;
  resize-mode: contain;
`;
export const SubText = styled.Text`
  text-align: center;
  margin: 4px 0;
`;
