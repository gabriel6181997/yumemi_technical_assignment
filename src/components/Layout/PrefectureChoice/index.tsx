import type { Dispatch, SetStateAction, VFC } from "react";
import { useCallback } from "react";
import { Checkbox } from "src/components/Atom/Checkbox";
import styles from "src/components/Layout/PrefectureChoice/index.module.scss";
import type { PrefectureData } from "src/lib/type/type";

type PrefectureChoiceType = {
  prefectureData: PrefectureData[];
  setPrefectureCheckedList: Dispatch<SetStateAction<number[]>>;
};

export const PrefectureChoice: VFC<PrefectureChoiceType> = (props) => {
  const { prefectureData, setPrefectureCheckedList } = props;

  const handleChange = useCallback(
    (e: { prefCode: number; isChecked: boolean }) => {
      if (e.isChecked) {
        setPrefectureCheckedList((prevPrefectureCheckedList) => {
          return [...prevPrefectureCheckedList, e.prefCode];
        });
      } else {
        setPrefectureCheckedList((prevPrefectureCheckedList) => {
          return prevPrefectureCheckedList.filter((prefCode) => {
            return prefCode !== e.prefCode;
          });
        });
      }
    },
    [setPrefectureCheckedList]
  );

  return (
    <div className="container">
      <h2>都道府県</h2>
      <ul className={styles.checkboxGroup}>
        {prefectureData.map((prefecture) => {
          return (
            <li key={prefecture.prefCode}>
              <Checkbox
                label={prefecture.prefName}
                onChange={handleChange}
                prefCode={prefecture.prefCode}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
