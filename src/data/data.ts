import { IData } from "../types";

// type AuthKey = "age" | "gender" | "weight";

export const userDataRegistration: any[] = [];

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
