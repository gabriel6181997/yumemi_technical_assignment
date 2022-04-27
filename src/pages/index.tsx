import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { Graph } from "src/components/Layout/Graph";
import { PrefectureChoice } from "src/components/Layout/PrefectureChoice";
import { Title } from "src/components/Layout/Title";
import type { PrefectureData } from "src/lib/type/type";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const [prefectureData, setPrefectureData] = useState<PrefectureData[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [prefectureCheckedList, setPrefectureCheckedList] = useState<number[]>(
    []
  );

  const getPrefectureData = useCallback(async () => {
    const prefectureDataFromAPI = await fetch("/api/prefectureAPI");
    const prefectureDataJson = await prefectureDataFromAPI.json();
    setPrefectureData(prefectureDataJson.result);
  }, []);

  useEffect(() => {
    getPrefectureData();
  }, [getPrefectureData]);

  return (
    <div className={styles.container}>
      <Title />
      <PrefectureChoice
        prefectureData={prefectureData}
        setPrefectureCheckedList={setPrefectureCheckedList}
      />
      <div className={styles.graphContainer}>
        <Graph />
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
