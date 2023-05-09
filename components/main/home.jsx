import {
  addDays,
  eachDayOfInterval,
  eachWeekOfInterval,
  format,
  subDays,
} from "date-fns";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PagerView from "react-native-pager-view";

const dates = eachWeekOfInterval(
  {
    start: subDays(new Date(), 14),
    end: addDays(new Date(), 14),
  },
  {
    weekStartsOn: 1,
  }
).reduce((acc, cur) => {
  const allDays = eachDayOfInterval({
    start: cur,
    end: addDays(cur, 6),
  });
  acc.push(allDays);
  return acc;
}, []);
console.log(dates);

export const Home = () => {
  return (
    <SafeAreaView>
      <PagerView style={styles.container}>
        {dates.map((week, i) => {
          return (
            <View key={i}>
              <View style={styles.row}>
                {week.map((day) => {
                  const txt = format(day, "EEEEE");

                  return (
                    <View style={styles.day}>
                      <Text>{txt}</Text>
                      <Text>{day.getDate()}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </PagerView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  row: {
    flexDirection: "row",
  },
  day: {
    alignItems: "center",
  },
});
