import { IData, IMeasurement, ISymptomsData } from "../types";

export const monthRus: string[] = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Ноябрь",
  "Декабрь",
];

export const weekDaysRus: string[] = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

export const dataGender: { value: string }[] = [
  {
    value: "муж",
  },
  {
    value: "жен",
  },
];

export const dataChartsDate: IData[] = [
  { id: 1, value: "день" },
  { id: 2, value: "неделя" },
  { id: 3, value: "месяц" },
  { id: 4, value: "год" },
];

export const additionalDataOne: IData[] = [
  { id: 1, value: "Головная боль" },
  { id: 2, value: "Головокружение" },
  { id: 3, value: "Отдышка" },
  { id: 4, value: "Всё в порядке" },
];

export const additionalDataTwo: IData[] = [
  { id: 1, value: "Левая рука" },
  { id: 2, value: "Правая рука" },
];

export const additionalDataThree: IData[] = [
  { id: 1, value: "Сидя" },
  { id: 2, value: "Стоя" },
  { id: 3, value: "Лёжа" },
];

export const startCalendarData: IMeasurement = {
  additionalDataOne: "",
  additionalDataThree: "",
  additionalDataTwo: "",
  date: "",
  id: "",
  pressureD: "",
  pressureS: "",
  pulse: "",
  rangePreasure: "",
};

export const measurementIndicators = ["Сист-ое", "Диаст-ое", "Пульс"];

export const arrayOfAllDays: string[] = [];
export const indicesOfDays: number[] = []; // [1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0]

