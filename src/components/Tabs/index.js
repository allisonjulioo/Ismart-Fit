import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MyTabs, Tab, Label } from "./styles";
import * as color from "../../constants/colors";

const Tabs = () => {
  const navigation = useNavigation();
  const navigate = route => navigation.navigate(route);

  return (
    <MyTabs>
      <Tab onPress={() => navigate("FindGymMap")}>
        <Feather name="map-pin" size={20} color={color.grey} />
        <Label>Mapa</Label>
      </Tab>
      <Tab onPress={() => navigate("FindGymList")}>
        <Feather name="list" size={20} color={color.grey} />
        <Label>Lista</Label>
      </Tab>
    </MyTabs>
  );
};
export default Tabs;
