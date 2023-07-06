import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import PagerView from "react-native-pager-view";
import { calendarDates } from "components";
import { calendarStyles } from "styles";
import { monthRus, weekDaysRus } from "data";
import { ICalendar } from "types";

export const CalendarSlider: React.FC<ICalendar> = ({ changeParentsTitle, changeParentsDateText,}) => {
  let todayDay = (new Date()).getDate();

  const [todayDayState, setTodayDayState] = useState(todayDay);

  const handleClick = (weekDay: string, weekDays: number, yearToday: string ) => {
    if (weekDays == todayDay) {
      changeParentsTitle("Сегодня", weekDays);
    } else {
      changeParentsTitle(weekDay, weekDays);
    }
    setTodayDayState(weekDays);
    changeParentsDateText(yearToday);
  };

  return (
    <PagerView style={calendarStyles.container} initialPage={2}>
      {calendarDates.map((week, index) => {
        return (
          <View key={index} style={calendarStyles.row}>
            {week.map((day, i) => {
              const yearToday = monthRus[day.getMonth()] + " " + day.getDate() + ", " + day.getFullYear();
              const weekDays = day.getDate();
              const txt = weekDaysRus[day.getDay()];

              return (
                <Pressable
                  onPress={() => {
                    handleClick(txt, weekDays, yearToday);
                  }}
                  key={i}
                  style={[
                    calendarStyles.day,
                    weekDays == todayDayState
                      ? calendarStyles.today
                      : calendarStyles.notToday,
                  ]}
                >
                  <Text>{weekDays}</Text>
                </Pressable>
              );
            })}
          </View>
        );
      })}
    </PagerView>
  );
};
