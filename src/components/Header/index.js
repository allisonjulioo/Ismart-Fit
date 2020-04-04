import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Head, Navigation, Title } from "./styles";
import SubHeader from "../SubHeader/";

const Header = ({ title, subNav, trasnparent, backView, navigation }) => {
  const nav = useNavigation();
  const navigate = () => {
    backView ? nav.navigate(backView) : nav.goBack();
  };
  const isTrasnparent = {
    backgroundColor: "transparent",
    position: "absolute",
    zIndex: 30
  };
  return (
    <Head style={trasnparent ? isTrasnparent : {}}>
      {navigation ? (
        <Navigation>
          <TouchableOpacity onPress={() => navigate()}>
            <Feather name="arrow-left" size={20} color="#fff" />
          </TouchableOpacity>
          <Title>{title}</Title>
        </Navigation>
      ) : null}
      {subNav ? <SubHeader /> : null}
    </Head>
  );
};
export default Header; 
