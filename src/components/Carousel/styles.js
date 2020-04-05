import styled from "styled-components";
import * as color from "../../constants/colors";

export const Item = styled.TouchableOpacity`
  text-align: center;
  border-width: 2px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: transparent;
`;
export const Title = styled.Text`
  padding: 32px 0;
  font-size: 32px;
  color: ${color.primary};
  font-weight: bold;
`;
export const Description = styled.Text`
  text-align: center;
  font-size: 16px;
  padding: 12px;
`;
export const Picture = styled.Image`
  width: 120px;
  height: 120px;
`;
