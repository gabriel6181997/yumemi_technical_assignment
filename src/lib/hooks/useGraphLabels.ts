import { useCallback, useState } from "react";
import type { PopulationDataJson } from "src/lib/type/type";

export const useGraphLabels = () => {
  const [graphLabels, setGraphLabels] = useState<number[]>([]);
  const [graphLabelsError, setGraphLabelsError] = useState<unknown>();

  const getGraphLabels = useCallback(async () => {
    try {
      const populationDataFromAPI = await fetch(`/api/populationAPI/1`);
      if (!populationDataFromAPI.ok) {
        throw new Error(
          "エラーが発生したため、グラフのX軸のデータの取得に失敗しました"
        );
      }

      const populationDataJson: PopulationDataJson =
        await populationDataFromAPI.json();
      const populationYear = populationDataJson.result.data
        .find((pop) => {
          return pop.label === "総人口";
        })
        .data.map((d) => {
          return d.year;
        });
      setGraphLabels(populationYear);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setGraphLabelsError(error);
      }
    }
  }, []);

  return { graphLabelsError, graphLabels, getGraphLabels };
};
