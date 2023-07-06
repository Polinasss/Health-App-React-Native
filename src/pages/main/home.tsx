import React, { useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CalendarSlider, currentDate } from "components";
import { HomeInfo } from ".";
import { globalStyles, homeInfoStyles } from "styles";

export const Home: React.FC = () => {
  const [mainTitle, setMainTitle] = useState<string>("Сегодня");
  const [mainDateText, setMainDateText] = useState<string>(currentDate);

  const setTitle = (mainTitle: string) => {
    setMainTitle(mainTitle);
  };
  const setTodayDate = (mainDateText: string) => {
    setMainDateText(mainDateText);
  };

  return (
    <SafeAreaView style={globalStyles.safeAreaContainer}>
      <Text style={homeInfoStyles.calendarTitle}>{mainTitle}</Text>
      <Text>{mainDateText}</Text>
      <CalendarSlider
        changeParentsTitle={setTitle}
        changeParentsDateText={setTodayDate}
      />
      <HomeInfo userDate={mainDateText} />
    </SafeAreaView>
  );
};
