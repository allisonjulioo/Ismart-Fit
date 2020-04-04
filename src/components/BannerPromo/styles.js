import styled from "styled-components";
import * as color from "../../../variables";
import { ButtonSmall } from "../../../styles";

export const Container = styled.View`
  background-color: ${color.black};
  width: 100%;
`;
export const Ads = styled.View`
  margin-top: 12px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${color.black};
  width: 100%;
`;
export const Plan = styled.View`
  padding: 0 24px;
`;
export const Value = styled.View`
  margin: 0 0 4px;
  flex-direction: row;
`;
export const Currency = styled.View`
  flex-direction: row;
  margin-left: 8px;
`;
export const Title = styled.Text`
  color: ${color.white};
`;
export const Small = styled.Text`
  color: ${color.grey};
`;
export const PriceLg = styled.Text`
  color: ${color.primary};
  font-size: 24px;
`;
export const PriceSm = styled.Text`
  color: ${color.primary};
`;
export const Action = styled(ButtonSmall)`
  background-color: ${color.secondary};
  width: 160px;
  margin: 12px auto;
`;
