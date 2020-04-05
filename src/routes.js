import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as opt from "./utils/routes/";

import Auth from "./pages/Auth";
import FindGymMap from "./pages/FindGymMap";
import FindGymList from "./pages/FindGymList";
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import SingleGym from "./pages/SingleGym";
import Splash from "./pages/Splash";

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer headerMode="none">
      <AppStack.Navigator>
        <AppStack.Screen
          name="Splash"
          component={Splash}
          options={opt.common}
        />
        <AppStack.Screen
          name="FindGymMap"
          component={FindGymMap}
          options={opt.common}
        />
        <AppStack.Screen
          name="FindGymList"
          component={FindGymList}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="SingleGym"
          component={SingleGym}
          options={opt.common}
        />
        <AppStack.Screen name="Auth" component={Auth} options={opt.common} />
        <AppStack.Screen name="Home" component={Home} options={opt.common} />
        <AppStack.Screen name="Notifications" component={Notifications} options={opt.common} />
        <AppStack.Screen name="Profile" component={Profile} options={opt.common} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
