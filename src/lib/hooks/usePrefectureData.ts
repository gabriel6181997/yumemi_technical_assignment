import { useCallback, useState } from "react";
import type { PrefectureData } from "src/lib/type/type";

export const usePrefectureData = () => {
  const [prefectureData, setPrefectureData] = useState<PrefectureData[]>([]);
  const [prefectureDataError, setPrefectureDataError] = useState<unknown>();

  const getPrefectureData = useCallback(async () => {
    try {
      const prefectureDataFromAPI = await fetch("/api/prefectureAPI");
      if (!prefectureDataFromAPI.ok) {
        throw new Error(
          "エラーが発生したため、都道府県のデータの取得に失敗しました"
        );
      }
      const prefectureDataJson = await prefectureDataFromAPI.json();
      setPrefectureData(prefectureDataJson.result);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setPrefectureDataError(error);
      }
    }
  }, []);

  return { prefectureData, prefectureDataError, getPrefectureData };
};
