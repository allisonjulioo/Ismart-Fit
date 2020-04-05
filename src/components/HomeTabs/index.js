import React, { useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  MyTabs,
  Tab,
  TabCenter,
  BeforeTabCenter,
  IconTabCenter,
  Label,
} from "./styles";
import * as color from "../../constants/colors";

const HomeTabs = () => { 
  const navigation = useNavigation();
  const navigate = (route) => navigation.navigate(route);

  return (
    <MyTabs>
      <Tab onPress={() => navigate("FindGymMap")}>
        <Feather name="box" size={20} color={color.grey} />
        <Label>Modalidades</Label>
      </Tab>
      <Tab onPress={() => navigate("FindGymMap")}>
        <Feather name="dollar-sign" size={20} color={color.grey} />
        <Label>Financeiro</Label>
      </Tab>
      <TabCenter onPress={() => navigate("Home")}>
        <IconTabCenter name="home" size={24} />
        <BeforeTabCenter></BeforeTabCenter>
      </TabCenter>
      <Tab onPress={() => navigate("Notifications")}>
        <Feather name="bell" size={20} color={color.grey} />
        <Label>Notificaçoes</Label>
      </Tab>
      <Tab onPress={() => navigate("Profile")}>
        <Feather name="user" size={20} color={color.grey} />
        <Label>Perfil</Label>
      </Tab>
    </MyTabs>
  );
};
export default HomeTabs;
