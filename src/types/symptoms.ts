export interface ISymptoms {
    dateProps: string;
    addSymptoms: (data: ISymptomsData[]) => void;
    editSymptomsDataState: ISymptomsData[];
}

export interface ISymptomsData {
    date: string;
    symptoms: string;
}

