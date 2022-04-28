import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { Graph } from "src/components/Layout/Graph";
import { PrefectureChoice } from "src/components/Layout/PrefectureChoice";
import { Title } from "src/components/Layout/Title";
import { useFetchPopulationData } from "src/lib/hooks/useFetchPopulationData";
import { useGraphLabels } from "src/lib/hooks/useGraphLabels";
import { usePrefectureData } from "src/lib/hooks/usePrefectureData";
import type { GraphData } from "src/lib/type/type";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const { prefectureData, prefectureDataError } = usePrefectureData();
  const { getGraphLabels, graphLabels, graphLabelsError } = useGraphLabels();
  const { fetchPopulationData } = useFetchPopulationData();
  const [prefectureCheckedList, setPrefectureCheckedList] = useState<number[]>(
    []
  );
  const [graphDataList, setGraphDataList] = useState<GraphData[]>([]);

  const getPopulationData = useCallback(async () => {
    const list = prefectureCheckedList.map((prefecture) => {
      return fetchPopulationData(prefecture);
    });
    const dataList = await Promise.all(list);
    setGraphDataList(dataList as GraphData[]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefectureCheckedList]);

  useEffect(() => {
    getPopulationData();
  }, [getPopulationData, prefectureCheckedList]);

  useEffect(() => {
    getGraphLabels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (prefectureDataError instanceof Error) {
    return <div>{prefectureDataError.message}</div>;
  }

  if (graphLabelsError instanceof Error) {
    return <div>{graphLabelsError.message}</div>;
  }

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
