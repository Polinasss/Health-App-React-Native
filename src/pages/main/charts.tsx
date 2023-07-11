import { dataChartsDate, monthRus } from "data";
import React, { useState } from "react";
import { Pressable, Text, View, Dimensions, SafeAreaView, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { BarChart } from "react-native-chart-kit";
import { homeInfoStyles, measurementsStyles, chartsStyles } from "styles";
import { measurementIndicators, arrayOfAllDays } from "data";
import { currentDate } from "components";
import { testCalendarData } from ".";

export const Charts: React.FC = () => {
  const [userOption, setUserOption] = useState<string>("день");
  const [numberOfElement, setNumberOfElement] = useState<number>(
    arrayOfAllDays.indexOf(currentDate, 0)
  );

  const preasureS = testCalendarData.find((el) => el.date === arrayOfAllDays[numberOfElement])?.pressureS;
  const preasureD = testCalendarData.find((el) => el.date === arrayOfAllDays[numberOfElement])?.pressureD;
  const pulse = testCalendarData.find((el) => el.date === arrayOfAllDays[numberOfElement])?.pulse;
  const resultDataOfTheDay = [Number(preasureS), Number(preasureD), Number(pulse)]

  const data = {
    labels: measurementIndicators,
    datasets: [
      {
        data: isNaN(resultDataOfTheDay[0]) ? [0, 0, 0] : resultDataOfTheDay,
        colors: [() => "orange", () => `#FFC755`, () => `#EE8012`],
      },
    ],
  };

  return (
    <SafeAreaView style={[measurementsStyles.container, { marginTop: 22 }]}>
      <View style={chartsStyles.settings}>
        <MaterialCommunityIcons
          name="settings-helper"
          size={40}
          color="black"
        />
      </View>

      <Text style={homeInfoStyles.calendarTitle}>Графики</Text>

      <View style={chartsStyles.radiBtncontainer}>
        {dataChartsDate.map((item) => {
          return (
            <Pressable
              style={
                item.value === userOption
                  ? chartsStyles.selected
                  : chartsStyles.unselected
              }
              key={item.id}
              onPress={() => setUserOption(item.value)}
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
            setNumberOfElement((prev) => prev - 1);
          }}
        >
          <AntDesign name="caretleft" size={24} color="black" />
        </TouchableOpacity>
        <View>
          <Text>{arrayOfAllDays[numberOfElement]}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => {
            setNumberOfElement((prev) => prev + 1);
          }}
        >
          <AntDesign name="caretright" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={chartsStyles.container}>
        <BarChart
          data={data}
          width={Dimensions.get("window").width * 0.83}
          withCustomBarColorFromData={true}
          showBarTops={false}
          height={300}
          yAxisLabel={""}
          yAxisSuffix={""}
          segments={4}
          yAxisInterval={0}
          flatColor={true}
          fromZero={true}
          showValuesOnTopOfBars={true}
          chartConfig={{
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            labelColor: () => `black`,
            decimalPlaces: 0,
            color: () => `rgba(0, 0, 0, 0.15)`,
            barPercentage: 1,
          }}
        />
      </View>
    </SafeAreaView>
  );
};
