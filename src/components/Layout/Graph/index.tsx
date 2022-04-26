import { Line } from "react-chartjs-2";
import styles from "src/components/Layout/Graph/index.module.scss";

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
    },
  ],
};

export const Graph = () => {
  return (
    <div className={styles.graphContainer}>
      <Line data={data} />
    </div>
  );
};
