import { monthRus } from "data";
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
  }, []);

export const monthNames = monthRus[(new Date()).getMonth()];
export const currentDate = monthNames + " " + new Date().getDate() + ", " + new Date().getFullYear();