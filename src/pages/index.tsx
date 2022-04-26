import type { NextPage } from "next";
import { Graph } from "src/components/Layout/Graph";
import { PrefectureChoice } from "src/components/Layout/PrefectureChoice";
import { Title } from "src/components/Layout/Title";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Title />
      <PrefectureChoice />
      <div className={styles.graphContainer}>
        <Graph />
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
