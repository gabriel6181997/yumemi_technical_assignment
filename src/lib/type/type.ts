export type PrefectureData = {
  prefCode: number;
  prefName: string;
};

export type GraphData = {
  label: string;
  data: number[];
  fill: boolean;
  borderColor: string;
};

export type PopulationDataJson = {
  message: null;
  result: {
    boundaryYear: number;
    data: {
      label: string;
      data: {
        year: number;
        value: number;
      }[];
    }[];
  };
};
