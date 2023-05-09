import React from "react";

import { UserGender } from "./UserGender";
import { UserAge } from "./UserAge";
import { UserWeight } from "./UserWeight";
import { Main } from "../main/main";

import { createStackNavigator } from "@react-navigation/stack";

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
    </Stack.Navigator>
  );
}
