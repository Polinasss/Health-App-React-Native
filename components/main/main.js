import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "./home";
import { Diary } from "./diary";
import { Charts } from "./charts";

import SvgHome from "../../assets/SvgHome";
import SvgDiary from "../../assets/SvgDiary";
import SvgCharts from "../../assets/SvgCharts";

const Tab = createBottomTabNavigator();

export const Main = () => {
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
