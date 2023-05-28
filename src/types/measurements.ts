export interface IAdditionalData {
  additionalDataOne: string;
  additionalDataTwo: string;
  additionalDataThree: string;
}

export interface IMeasurement {
  id?: string;
  pressureD: string;
  pressureS: string;
  pulse: string;
  additionalData: IAdditionalData;
}
