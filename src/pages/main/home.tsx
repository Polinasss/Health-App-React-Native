import React, { useState } from "react";
import { Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { globalStyles, homeInfoStyles } from "../../styles/style";

import { AuthStackParamList } from "../../router/navigation";
import { CalendarSlider } from "../../components/calendar";
import { HomeInfo } from "../../components/homeInfo";
import { Feather } from '@expo/vector-icons';

type userNavigationScreenType = StackNavigationProp<AuthStackParamList, "Notifications">;
const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const month = (new Date()).getMonth()
export const Home: React.FC = () => {
  const navigation = useNavigation<userNavigationScreenType>();

  

  const [mainTitle, setMainTitle] = useState("Сегодня");
  const [mainDateText, setMainDateText] = useState((monthNames[month] + " " + (new Date()).getDate() + ", " + (new Date()).getFullYear()));

  const setTitle = (mainTitle: string) => {
    setMainTitle(mainTitle);
  };
  const setTodayDate = (mainDateText: string) => {
    setMainDateText(mainDateText);
  }

  const loadScene = (): void => {
    navigation.navigate("Notifications");
  };

  return (
    <SafeAreaView style={globalStyles.safeAreaContainer}>
      <Pressable
          onPress={loadScene}
          style={homeInfoStyles.bell}
        >
          <Feather name="bell" size={24} color="black" />
        </Pressable>
      <Text style={homeInfoStyles.calendarTitle}>{mainTitle}</Text>
      <Text>{mainDateText}</Text>
      <CalendarSlider changeParentsTitle={setTitle} changeParentsDateText={setTodayDate} />
      <HomeInfo />
    </SafeAreaView>
  );
};
