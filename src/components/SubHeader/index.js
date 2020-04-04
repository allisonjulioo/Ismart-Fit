import React from "react";
import { Feather } from "@expo/vector-icons";
import { Locale, Content, Address, Small, Bold, Pin, PinText } from "./styles";
import { primary } from "../../../variables";

const SubHeader = () => {
  return (
    <Locale>
      <Address>
        <Small>Academias próximas a:</Small>
        <Bold>Rua Brasil, 100</Bold>
        <Small>Centro, Belo Horizonte, Minas Gerais</Small>
      </Address>
      <Content>
        <Pin onPress={() => alert("Pra que voce vai mudar?")}>
          <Feather name="map-pin" size={20} color={primary} />
          <PinText>MUDAR</PinText>
        </Pin>
      </Content>
    </Locale>
  );
};
export default SubHeader;
