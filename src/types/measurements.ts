export interface IAdditionalData {
  additionalDataOne: string;
  additionalDataTwo: string;
  additionalDataThree: string;
}

export interface IMeasurement {
  additionalDataOne: string;
  additionalDataThree: string;
  additionalDataTwo: string;
  date?: string; 
  id?: string;
  pressureD: string;
  pressureS: string;
  pulse: string;
  rangePreasure: string;
}

export interface IPropsMeasurements {
  addMeasurements: (data: IMeasurement, date:string) => void;
  dateProps: string;
  editMeasurements: IMeasurement;
}

export interface IEdiMeasurements {
  additionalData: {
    additionalDataOne: string;
    additionalDataThree: string;
    additionalDataTwo: string;
  };
  date: string; 
  id: string;
  pressureD: string;
  pressureS: string;
  pulse: string;
}




