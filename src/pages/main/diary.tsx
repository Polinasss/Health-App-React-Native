import React, { useState } from "react";
import { Text, View, SafeAreaView, Pressable, TouchableOpacity } from "react-native";
import { chartsStyles, measurementsStyles, homeInfoStyles } from "styles";
import { dataChartsDate, arrayOfAllDays, monthRus } from "data";
import { currentDate, getCurrentWeek, monthNames } from "components";
import { AntDesign } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { testCalendarData } from "./HomeInfo";
import { IMeasurement } from "types";

interface IDiary {
  allDataDiary: IMeasurement[]
}

export const Diary: React.FC<IDiary> = ( { allDataDiary } ) => {
  const [userOption, setUserOption] = useState<string>("день");
  const [numberOfElement, setNumberOfElement] = useState<number>(
    arrayOfAllDays.indexOf(currentDate, 0)
  );

    function getWeek () {
      let filteredDays: IMeasurement[][] = [];
      let result: IMeasurement[] = [];

      for(let i = 0; i < 7; i++) {
        filteredDays.push(allDataDiary.filter((obj) => obj.date === getCurrentWeek(numberOfElement)[i]))
      }
      filteredDays.forEach((el) => el.length !== 0 ? result.push(...el) : el)

      console.log(result);
      return result;
    }


  return (
    <SafeAreaView style={[measurementsStyles.container, { marginTop: 22 }]}>
      <Text style={homeInfoStyles.calendarTitle}>Дневник</Text>
      <View style={chartsStyles.radiBtncontainer}>
        {dataChartsDate.map((item) => {
          return (
            <Pressable
              key={item.id}
              onPress={() => setUserOption(item.value)}
              style={[
                item.value === userOption
                  ? chartsStyles.selected
                  : chartsStyles.unselected,
              ]}
            >
              <Text>{item.value}</Text>
            </Pressable>
          );
        })}
      </View>

      <View style={chartsStyles.dateChangerContainer}>
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => {
            setNumberOfElement((prev) =>
              userOption === "день" ? prev - 1 :(userOption === "неделя" ? prev - 7 : prev - 1)
            );
          }}
        >
          <AntDesign name="caretleft" size={24} color="black" />
        </TouchableOpacity>
        <View>
          {userOption === "день" ? (
            <Text>{arrayOfAllDays[numberOfElement]}</Text>
          ) : (
            <Text>
              {getCurrentWeek(numberOfElement)[0]} - {getCurrentWeek(numberOfElement)[6]}
            </Text>
          )}
        </View>
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => {
            setNumberOfElement((prev) =>
              userOption === "день" ? prev + 1 : (userOption === "неделя" ? prev + 7 : prev + 1)
            );
          }}
        >
          <AntDesign name="caretright" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={userOption === "день" ? testCalendarData.filter((obj) => obj.date === arrayOfAllDays[numberOfElement]) : getWeek()}
          renderItem={({ item }) => (
            <View style={homeInfoStyles.importantCard}>
              <View style={homeInfoStyles.importantCardBlock}>
                <View style={homeInfoStyles.importantCardBlock}>
                  <Text
                    style={[
                      homeInfoStyles.importantCardText,
                      { marginRight: 8 },
                    ]}
                  >
                    Давление
                  </Text>
                  <Text style={homeInfoStyles.importantCardMeasurements}>
                    {item.pressureS}
                  </Text>
                  <Text
                    style={[
                      homeInfoStyles.importantCardText,
                      { marginHorizontal: 3 },
                    ]}
                  >
                    |
                  </Text>
                  <Text style={homeInfoStyles.importantCardMeasurements}>
                    {item.pressureD}
                  </Text>
                </View>
                <View style={homeInfoStyles.importantCardBlock}>
                  <Text
                    style={[
                      homeInfoStyles.importantCardText,
                      { marginRight: 8 },
                    ]}
                  >
                    Пульс
                  </Text>
                  <Text style={homeInfoStyles.importantCardMeasurements}>
                    {item.pulse}
                  </Text>
                </View>
                <View style={homeInfoStyles.importantCardSideBlockTwo}>
                  <Text style={homeInfoStyles.importantCardMeasurements}>
                    {item.rangePreasure}
                  </Text>
                  <Text style={homeInfoStyles.importantCardText}>
                    {item.date}
                  </Text>
                </View>
              </View>

              <View style={homeInfoStyles.importantCardSideBlock}>
                <Text
                  style={
                    item.additionalDataOne === ""
                      ? { display: "none" }
                      : homeInfoStyles.importantCardAditionalInfo
                  }
                >
                  {item.additionalDataOne}
                </Text>
                <Text
                  style={
                    item.additionalDataTwo === ""
                      ? { display: "none" }
                      : homeInfoStyles.importantCardAditionalInfo
                  }
                >
                  {item.additionalDataTwo}
                </Text>
                <Text
                  style={
                    item.additionalDataThree === ""
                      ? { display: "none" }
                      : homeInfoStyles.importantCardAditionalInfo
                  }
                >
                  {item.additionalDataThree}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
