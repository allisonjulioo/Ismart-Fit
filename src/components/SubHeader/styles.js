import styled from "styled-components";
import * as color from "../../constants/colors";

export const Locale = styled.View`
  padding: 12px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Content = styled.View``;
export const Address = styled.View``;
export const Small = styled.Text`
  color: ${color.grey};
`;
export const Bold = styled.Text`
  padding: 4px 0;
  font-size: 16px;
  font-weight: bold;
  color: ${color.white};
`;
export const Pin = styled.TouchableOpacity`
  margin-top: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const PinText = styled.Text`
  color: ${color.grey};
  padding: 8px 0;
`;
