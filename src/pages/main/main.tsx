import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Charts, Diary, Home } from ".";

const Tab = createBottomTabNavigator();

export const Main: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return focused ? <Ionicons name="home" size={24} color="orange" /> : <Ionicons name="home-outline" size={24} color="black" />
          } else if (route.name === "Diary") {
            return focused ? <Ionicons name="book" size={24} color="orange" /> : <Ionicons name="book-outline" size={24} color="black" /> 
          } else if (route.name === "Charts") {
            return focused ? <Ionicons name="bar-chart" size={24} color="orange" /> : <Ionicons name="bar-chart-outline" size={24} color="black" />
          }
        },
        headerShown: false,
        tabBarActiveTintColor: 'orange',
        tabBarStyle: {height: 80, paddingBottom: 17, paddingTop: 17}
      })}
    >
      <Tab.Screen name={"Home"} component={Home}/>
      <Tab.Screen name={"Diary"} component={Diary} />
      <Tab.Screen name={"Charts"} component={Charts} />
    </Tab.Navigator>
  );
};
