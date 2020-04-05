import styled from "styled-components/native";
import * as color from "../../constants/colors";

export const Container = styled.View`
  flex: 1;
`;
export const SubHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 28px 20px 20px;
`;
export const TitleHeader = styled.Text`
  color: ${color.grey};
  font-size: 20px;
`;
export const Delete = styled.TouchableOpacity``;
export const Empty = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;
export const EmptyText = styled.Text`
  color: ${color.grey};
  font-size: 28px;
`;
export const EmptyPicture = styled.Image`
  width: 30%;
  height: 30%;
  resize-mode: contain;
  margin: 20px 0;
`;

export const Title = styled.Text`
  color: ${color.white};
  font-size: 20px;
  font-weight: bold;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  background: ${color.black};
  height: 60px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 16px 20px 0;
`;
export const Media = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 16px 20px;
  margin: 2px 0;
`;
export const MediaLeft = styled.View`
  width: 60px;
  height: 60px;
  margin-right: 12px;
  background: ${color.black};
  align-items: center;
  justify-content: center;
`;
export const Picture = styled.Image`
  resize-mode: contain;
  width: 40px;
`;
export const MediaBody = styled.View``;
export const MediaTitle = styled.Text`
  color: ${color.black};
  font-size: 16px;
  font-weight: bold;
`;
export const Description = styled.Text`
  color: ${color.black};
  flex: 1;
  max-width: 90%;
`;
