import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SvgCharts, SvgDiary, SvgHome } from "assets";
import { Charts, Diary, Home } from ".";

const Tab = createBottomTabNavigator();

export const Main: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName={"Home"}>
      <Tab.Screen
        name={"Home"}
        component={Home}
        options={{ tabBarIcon: ({}) => <SvgHome />, headerShown: false }}
      />
      <Tab.Screen
        name={"Diary"}
        component={Diary}
        options={{ tabBarIcon: ({}) => <SvgDiary />, headerShown: false }}
      />
      <Tab.Screen
        name={"Charts"}
        component={Charts}
        options={{ tabBarIcon: ({}) => <SvgCharts />, headerShown: false }}
      />
    </Tab.Navigator>
  );
};
