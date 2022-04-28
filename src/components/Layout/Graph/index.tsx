import type { VFC } from "react";
import { Line } from "react-chartjs-2";
import styles from "src/components/Layout/Graph/index.module.scss";
import type { GraphData } from "src/lib/type/type";
import { defaultGraphSets } from "src/lib/utils/utils";

type GraphType = {
  datasets: GraphData[];
  labels: number[];
};

export const Graph: VFC<GraphType> = (props) => {
  const { datasets, labels } = props;

  const data = {
    labels: labels,
    datasets: datasets.length === 0 ? defaultGraphSets : datasets,
  };

  return (
    <div className={styles.graphContainer}>
      <Line data={data} />
    </div>
  );
};
