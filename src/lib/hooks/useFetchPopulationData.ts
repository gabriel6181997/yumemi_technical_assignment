import { usePrefectureData } from "src/lib/hooks/usePrefectureData";
import type { PopulationDataJson } from "src/lib/type/type";
import { graphColor } from "src/lib/utils/utils";

export const useFetchPopulationData = () => {
  const { prefectureData } = usePrefectureData();

  const fetchPopulationData = async (prefecture: number) => {
    const populationDataFromAPI = await fetch(
      `/api/populationAPI/${prefecture}`
    );
    const populationDataJson: PopulationDataJson =
      await populationDataFromAPI.json();
    const prefectureName =
      prefectureData.find((pre) => {
        return pre.prefCode === prefecture;
      })?.prefName || "";

    const populationValue = populationDataJson.result.data
      .find((pop) => {
        return pop.label === "総人口";
      })
      .data.map((d) => {
        return d.value;
      });

    const datasetItem = {
      label: prefectureName,
      data: populationValue,
      fill: false,
      borderColor: graphColor[prefecture],
    };

    return datasetItem;
  };

  return { fetchPopulationData };
};
