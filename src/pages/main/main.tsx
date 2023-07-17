import React, {useState} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Charts, Diary, Home, testCalendarData } from ".";
import { IMeasurement } from "types";
import { monthRus, arrayOfAllDays, indicesOfDays } from "data";
import { getCurrentWeek, currentDate } from "components";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

export let doublePress: boolean = false;

export const Main: React.FC = () => {
  const [data, setData] = useState<IMeasurement[]>(testCalendarData);

  const setUserData = (userData: IMeasurement[]) => {
    setData(userData);
    console.log(data);
  };

  const tap = Gesture.Tap()
  .numberOfTaps(1)
  .onStart(() => {
    console.log("doublePress");
  });

  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return focused ? <GestureDetector gesture={tap}><Ionicons name="home" size={24} color="orange" /></GestureDetector> : <Ionicons name="home-outline" size={24} color="black" />
          } else if (route.name === "Diary") {
            return focused ? <Ionicons name="book" size={24} color="orange" /> : <Ionicons name="book-outline" size={24} color="black" /> 
          } else if (route.name === "Charts") {
            return focused ? <Ionicons name="bar-chart" size={24} color="orange" /> : <Ionicons name="bar-chart-outline" size={24} color="black" />
          }
        },
        headerShown: false,
        tabBarActiveTintColor: 'orange',
        tabBarStyle: {height: 80, paddingBottom: 17, paddingTop: 17},
      })}
    >
      <Tab.Screen name={"Home"}>{() => <Home setUserData={setUserData}/>}</Tab.Screen>
      <Tab.Screen name={"Diary"}>{() => <Diary allDataDiary={data}/>}</Tab.Screen>
      <Tab.Screen name={"Charts"}>{() => <Charts/>}</Tab.Screen>
    </Tab.Navigator>
  );
};
