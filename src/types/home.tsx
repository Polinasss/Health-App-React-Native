import { IMeasurement } from "./measurements";

export interface PropsOfTitle {
  userDate: string;
  sendAllMeasurementsData: (data: IMeasurement[]) => void;
}