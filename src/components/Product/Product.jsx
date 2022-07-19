import styles from "./styles.module.css";
import classnames from "classnames";
import { useState } from "react";

export const Product = ({ name, className }) => {
  const [count, setCount] = useState(0);
  return (
    <div className={classnames(styles.root, className)}>
      <span>{name}</span>
      <div className={styles.actions}>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
