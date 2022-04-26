import { useState } from "react";
import styles from "src/components/Atom/Checkbox/index.module.scss";


export const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label className={styles.checkbox}>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        <p className={styles.label}>北海道</p>
      </label>
    </div>
  );
};
