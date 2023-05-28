import {
  addDays, // Добавьте указанное количество дней к заданной дате. addDays(date, amount)
  eachDayOfInterval, //возвращает массив недель в пределах указанного временного интервала
  eachWeekOfInterval, // Возвращает массив дат в пределах указанного временного интервала.
  format,
  subDays, // Вычтите указанное количество дней из заданной даты
} from "date-fns";
import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import PagerView from "react-native-pager-view";
import { calendarStyles } from "styles";


interface PropsOfTitle {
  changeParentsTitle: (title: string) => void;
  changeParentsDateText: (day: string) => void;
}

const calendarDates = eachWeekOfInterval(
  // получим [[даты]]
  {
    // time interval
    start: subDays(new Date(), 0), // сегоднешнее число - 2 недели
    end: addDays(new Date(), 14), //  сегоднешнее число + 2 недели
  },
  {
    // options
    weekStartsOn: 1, // неделя начинается с понедельника
  } //возвращается массив недель
).reduce((acc: Date[][], cur) => {
  const allDays = eachDayOfInterval({
    start: cur, //первый день недели
    end: addDays(cur, 6), // первый день недешли + 6 дней
  }); //массив дней. Получется двумерный массив
  acc.push(allDays);
  return acc;
}, []);
//console.log(calendarDates);

export const CalendarSlider: React.FC<PropsOfTitle> = ({
  changeParentsTitle, changeParentsDateText
}) => {
  let todayDay = new Date();

  const [todayDayState, setTodayDayState] = useState(todayDay.getDate());

  const handleClick = (weekDay: string, weekDays: number, yearToday: string) => {
    if (weekDays == todayDay.getDate()) {
      changeParentsTitle("Сегодня");
    } else {
      changeParentsTitle(weekDay);
    }
    setTodayDayState(weekDays);
    changeParentsDateText(yearToday);
  };

  return (
    <PagerView style={calendarStyles.container}>
      {calendarDates.map((week, index) => {
        // проходимся по неделям
        return (
          <View key={index} style={calendarStyles.row}>
            {week.map((day, i) => {
              const txt = format(day, "EEEEEEE"); //получение дня недели
              const yearToday = format(day, "PP"); //получение месяца, даты и года
              const weekDays = day.getDate();

              return (
                <Pressable
                  onPress={() =>handleClick(txt, weekDays, yearToday)}
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
