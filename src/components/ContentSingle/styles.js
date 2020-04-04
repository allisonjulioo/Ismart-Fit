import styled from "styled-components";
import * as color from "../../../variables";

export const Container = styled.View`
  margin: 280px auto 120px;
  padding: 12px;
  width: 90%;
  flex-direction: column;
  justify-content: center;
  border-left-width: 1px;
  border-left-color: #eee;
  border-right-width: 1px;
  border-right-color: #eee;
`;
export const Content = styled.View`
  margin-bottom: 24px;
  position: relative;
  min-height: 200px;
`;
export const Title = styled.Text`
  padding: 20px 0 16px;
  color: ${color.grey};
  font-weight: bold;
  font-size: 20px;
`;
export const Picture = styled.Image`
  border-radius: 8px;
  height: 200px;
  width: 100%;
`;

export const Pagination = styled.View`
  flex-direction: row;
  position: absolute;
  left: 0;
  right: 0;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  bottom: 0px;
`;
export const DotPagination = styled.TouchableOpacity`
  border-radius: 50px;
  margin: 0 8px;
  height: 60px;
  width: 60px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const DotImage = styled.Image`
  height: 30px;
`;
export const Differentials = styled.Text`
  color: ${color.black};
  margin: 24px 0 0;
  font-size: 16px;
  padding: 0 20px;
  text-align: center;
`;

export const ConainerOthers = styled.ScrollView`
  margin: 0 -10%;
`;
export const ContentOthers = styled.TouchableOpacity`
  width: 240px;
  height: 190px;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
`;
export const PictureOther = styled.Image`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
export const FooterOthers = styled.View`
  position: absolute;
  bottom: -1px;
  background-color: ${color.primary};
  width: 100%;
`;
export const TitleOthers = styled.View`
  width: 100%;
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const LabelOthers = styled.Text``;
