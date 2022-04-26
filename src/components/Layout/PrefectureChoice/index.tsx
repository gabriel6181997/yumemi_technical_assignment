import { Checkbox } from "src/components/Atom/Checkbox";
import styles from "src/components/Layout/PrefectureChoice/index.module.scss";

export const PrefectureChoice = () => {
  return (
    <div className="container">
      <h2>都道府県</h2>
      <ul className={styles.checkboxGroup}>
        <li>
          <Checkbox />
        </li>
        <li>
          <Checkbox />
        </li>
        <li>
          <Checkbox />
        </li>
        <li>
          <Checkbox />
        </li>
        <li>
          <Checkbox />
        </li>
        <li>
          <Checkbox />
        </li>
        <li>
          <Checkbox />
        </li>
        <li>
          <Checkbox />
        </li>
      </ul>
    </div>
  );
};
