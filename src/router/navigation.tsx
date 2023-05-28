import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Main, Notifications, UserAge, UserGender, UserWeight } from "pages";

export type AuthStackParamList = {
  UserAge: undefined; //React.ReactNode
  Main: undefined;
  UserWeight: undefined;
  Notifications: undefined;
};

const Stack = createStackNavigator();

export const AuthNavigation = () => {
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
};
