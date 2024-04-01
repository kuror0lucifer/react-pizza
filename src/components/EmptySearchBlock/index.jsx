import React from "react";

import styles from "./EmptySearchBlock.module.scss";

export default function EmptySearchBlock() {
  return (
    <div className={styles.root}>
      <p>
        <span>😕</span>
        <br />
        Пиццы не найдены
      </p>
    </div>
  );
}
