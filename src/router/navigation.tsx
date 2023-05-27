import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { UserGender } from "../pages/auth/UserGender";
import { UserAge } from "../pages/auth/UserAge";
import { UserWeight } from "../pages/auth/UserWeight";
import { Main } from "../pages/main/main";
import { Notifications } from "../pages/main/notifications";

export type AuthStackParamList = {
  UserAge: undefined; //React.ReactNode
  Main: undefined;
  UserWeight: undefined;
  Notifications: undefined;
};

const Stack = createStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserGender"
        component={UserGender}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserAge"
        component={UserAge}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserWeight"
        component={UserWeight}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
