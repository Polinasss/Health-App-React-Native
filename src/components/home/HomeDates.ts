import { monthRus, arrayOfAllDays, indicesOfDays } from "data";
import { addDays, eachDayOfInterval, eachWeekOfInterval, subDays } from "date-fns";

export const calendarDates = eachWeekOfInterval(
    {
      start: subDays(new Date(), 14),
      end: addDays(new Date(), 14),
    },
    {
      weekStartsOn: 1,
    }
  ).reduce((acc: Date[][], cur) => {
    const allDays = eachDayOfInterval({
      start: cur,
      end: addDays(cur, 6),
    });
    acc.push(allDays);
    return acc;
  }, []); //получаем все даты за 5 недель

export const monthNames = monthRus[(new Date()).getMonth()];
export const currentDate = monthNames + " " + new Date().getDate() + ", " + new Date().getFullYear(); // Июль 10, 2023

calendarDates.map((week) => {
  {
    week.map((day) => {
      indicesOfDays.push(day.getDay());
      const yearToday =
        monthRus[day.getMonth()] +
        " " +
        day.getDate() +
        ", " +
        day.getFullYear();
      arrayOfAllDays.push(yearToday);
    });
  }
}); 
// ["Июнь 19, 2023", "Июнь 20, 2023", "Июнь 21, 2023", ...]


export function getCurrentWeek (todayDay: number) {
  const indicesOfWeekDays: number[] = [];
  const result: string[] = [];

  for (let i = todayDay; indicesOfDays[i] > 0; i--) {
    indicesOfWeekDays.push(arrayOfAllDays.indexOf(arrayOfAllDays[i]))
  }
  for (let i = todayDay + 1; indicesOfDays[i] !== 1; i++) {
      indicesOfWeekDays.push(arrayOfAllDays.indexOf(arrayOfAllDays[i]));
  }

  indicesOfWeekDays.sort((a, b) => {return a-b});
  indicesOfWeekDays.forEach((el) => result.push(arrayOfAllDays[el]));

  console.log(result)
  return result;
}