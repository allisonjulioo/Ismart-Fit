import styled from "styled-components/native";
import Speedometer from "react-native-speedometer-chart";
import * as color from "../../constants/colors";

export const Container = styled.View``;
export const Slide = styled.View`
  flex-direction: row;
  margin: 0 0 20px;
  justify-content: center;
`;
export const Label = styled.Text`
  color: ${color.black};
  font-weight: bold;
  font-size: 15px;
`;
export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
export const ButtonWeek = styled.TouchableOpacity`
  flex: 1;
  padding: 12px 16px;
  border-radius: 12px;
  margin: 0 4px;
`;
export const TextButton = styled.Text`
  color: ${color.grey};
  text-align: center;
`;
export const Small = styled.Text`
  color: ${color.grey};
  text-align: center;
`;
export const RowChart = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin: 20px 0 0;
  text-align: center;
`;
export const Gauge = styled(Speedometer)`
  margin: 0 auto;
  background: transparent;
`;
export const TitleElement = styled.Text`
  color: ${color.grey};
  margin: 12px 0;
  text-align: center;
  flex-direction: row;
  justify-content: space-between;
`;
export const TitleElementBold = styled.Text`
  font-weight: bold; 
  font-size: 20px;
  color: ${color.black};
`;
