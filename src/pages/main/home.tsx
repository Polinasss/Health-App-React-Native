import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CalendarSlider, currentDate } from "components";
import { HomeInfo, testCalendarData } from ".";
import { globalStyles, homeInfoStyles } from "styles";
import { IMeasurement } from "types";
import { doublePress } from ".";

interface IHome {
  setUserData: (data: IMeasurement[]) => void;
}

export const Home: React.FC<IHome> = ({setUserData: userData }) => {
  const [mainTitle, setMainTitle] = useState<string>("Сегодня");
  const [mainDateText, setMainDateText] = useState<string>(currentDate);
  const [data, setData] = useState<IMeasurement[]>(testCalendarData);

  const setTitle = (mainTitle: string) => {
      setMainTitle(mainTitle);
  };
  const setTodayDate = (mainDateText: string) => {
    setMainDateText(mainDateText);
  };
  const setMeasurementsData = (measurementsData: IMeasurement[]) => {
    setData(measurementsData);
    userData(data);
  }

  return (
    <SafeAreaView style={globalStyles.safeAreaContainer}>
      <Text style={homeInfoStyles.calendarTitle}>{mainTitle}</Text>
      <Text>{mainDateText}</Text>
      <CalendarSlider
        changeParentsTitle={setTitle}
        changeParentsDateText={setTodayDate}
      />
      <HomeInfo sendAllMeasurementsData={setMeasurementsData} userDate={mainDateText} />
    </SafeAreaView>
  );
};
