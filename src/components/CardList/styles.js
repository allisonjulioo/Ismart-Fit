import styled from "styled-components";
import * as color from  "../../constants/colors";

export const Card = styled.TouchableOpacity`
  padding: 12px 0 4px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  margin-bottom: 8px;
`;
export const Picture = styled.Image`
  width: 135px;
  height: 135px;
  border-radius: 8px;
  margin-right: 8px;
  box-shadow: 0px 3px 6px ${color.grey};
`;
export const Content = styled.View`
  flex-direction: row;
  width: 95%;
  justify-content: flex-start;
  margin-left: -8px;
`;
export const Infos = styled.View`
  max-width: 40%;
`;

export const Distance = styled.Text`
  color: ${color.grey};
  margin: 8px 0 4px;
`;
export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${color.black};
  margin: 0px 0 4px;
`;
export const Address = styled.Text`
  color: ${color.grey};
  margin: 0px 0 4px;
`;
export const Promo = styled.Text`
  color: ${color.black};
  background: ${color.primary};
  text-align: center;
  padding: 6px 4px;
`;
export const CTA = styled.TouchableOpacity`
  background: ${color.red};
  width: 100%;
  text-align: center;
  margin-top: 12px;
  padding: 8px 28px;
  justify-content: center;
`;
export const CTAText = styled.Text`
  color: ${color.white};
  text-align: center;
  justify-content: center;
`;
export const Footer = styled.View`
  padding: 12px;
  color: ${color.grey};
  flex-direction: row;
  align-items: flex-start;
`;
export const Differentials = styled.View`
  flex-direction: column;
  text-align: left;
  width: 145px;
`;
export const DifferentialsList = styled.View`
  flex-direction: row;
  padding: 8px 0 12px;
  flex: 1;
`;
export const DifferentialsPicture = styled.Image`
  margin: 0 4px;
`;
export const Data = styled.View`
  flex: 1;
`;
export const Ads = styled.View`
  background-color: ${color.black};
  width: 25%;
  border-radius: 8px;
  margin: 0 8px;
  padding: 0 8px;
`;
export const Plan = styled.View``;
export const Value = styled.View`
  margin: 8px 0 4px;
  padding: 0px 0 4px;
  flex-direction: row;
`;
export const Currency = styled.View`
  flex-direction: row;
  margin-left: 8px;
`;
export const Title = styled.Text`
  margin: 4px 0 0;
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
