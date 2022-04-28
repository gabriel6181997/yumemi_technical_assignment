import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { Graph } from "src/components/Layout/Graph";
import { PrefectureChoice } from "src/components/Layout/PrefectureChoice";
import { Title } from "src/components/Layout/Title";
import type { GraphData, PrefectureData } from "src/lib/type/type";
import { graphColor } from "src/lib/utils/utils";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const [prefectureData, setPrefectureData] = useState<PrefectureData[]>([]);
  const [prefectureCheckedList, setPrefectureCheckedList] = useState<number[]>(
    []
  );
  const [graphDataList, setGraphDataList] = useState<GraphData[]>([]);
  const [graphLabels, setGraphLabels] = useState<number[]>([]);

  const getPrefectureData = useCallback(async () => {
    const prefectureDataFromAPI = await fetch("/api/prefectureAPI");
    const prefectureDataJson = await prefectureDataFromAPI.json();
    setPrefectureData(prefectureDataJson.result);
  }, []);

  // Add Loading
  const getPopulationData = useCallback(async () => {
    const list = prefectureCheckedList.map((prefecture) => {
      return fetchPopulationData(prefecture);
    });
    setGraphDataList(await Promise.all(list));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefectureCheckedList]);

  const fetchPopulationData = async (prefecture: number) => {
    const populationDataFromAPI = await fetch(
      `/api/populationAPI/${prefecture}`
    );
    const populationDataJson = await populationDataFromAPI.json();
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

  const getGraphLabels = useCallback(async () => {
    const populationDataFromAPI = await fetch(`/api/populationAPI/1`);
    const populationDataJson = await populationDataFromAPI.json();
    const populationYear = populationDataJson.result.data
      .find((pop) => {
        return pop.label === "総人口";
      })
      .data.map((d) => {
        return d.year;
      });
    setGraphLabels(populationYear);
  }, []);

  useEffect(() => {
    getPrefectureData();
  }, [getPrefectureData]);

  useEffect(() => {
    getPopulationData();
  }, [getPopulationData, prefectureCheckedList]);

  useEffect(() => {
    getGraphLabels();
  }, []);

  return (
    <div className={styles.container}>
      <Title />
      <PrefectureChoice
        prefectureData={prefectureData}
        setPrefectureCheckedList={setPrefectureCheckedList}
      />
      <div className={styles.graphContainer}>
        <Graph datasets={graphDataList} labels={graphLabels} />
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
