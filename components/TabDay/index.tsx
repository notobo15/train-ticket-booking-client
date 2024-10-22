import React from "react";
import styles from "./TabDay.module.scss";
import clsx from "clsx";
export default function Index() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.mainInner}>
          <div className={styles.tabs}>
            <div className={styles.tab}>
              <span className={styles.tabLabel}>29 Tue</span>
            </div>
            <div className={styles.tab}>
              <span className={styles.tabLabel}>29 Tue</span>
            </div>
            <div className={clsx(styles.tab, styles.active)}>
              <span className={styles.tabLabel}>29 Tue</span>
            </div>
            <div className={styles.tab}>
              <span className={styles.tabLabel}>29 Tue</span>
            </div>
            <div className={styles.tab}>
              <span className={styles.tabLabel}>29 Tue</span>
            </div>
            <div className={styles.tab}>
              <span className={styles.tabLabel}>29 Tue</span>
            </div>
            <div className={styles.tab}>
              <span className={styles.tabLabel}>29 Tue</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
