import React from "react";

import styles from "./EmptySearchBlock.module.scss";
const EmptySearchBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <p>
        <span>😕</span>
        <br />
        Пиццы не найдены
      </p>
    </div>
  );
};

export default EmptySearchBlock;
