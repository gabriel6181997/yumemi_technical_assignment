import type { VFC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "src/components/Atom/Checkbox/index.module.scss";

type CheckboxType = {
  prefCode: number;
  label: string;
  onChange: (e: { prefCode: number; isChecked: boolean }) => void;
};

export const Checkbox: VFC<CheckboxType> = (props) => {
  const { label, onChange, prefCode } = props;
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prevIsChecked) => {
      return !prevIsChecked;
    });
  };

  useEffect(() => {
    onChange({
      prefCode,
      isChecked,
    });
  }, [isChecked, onChange, prefCode]);

  return (
    <div>
      <label className={styles.checkbox}>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        <p className={styles.label}>{label}</p>
      </label>
    </div>
  );
};
