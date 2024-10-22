import React from "react";
import styles from "./TabFilterSearch.module.scss";
import clsx from "clsx";
export default function Index() {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.main}>
          <div className={styles.mainInner}>
            <div className={styles.mainWrapper}>
              <div className={styles.labelResult}>
                <div className={styles.loadingDone}>
                  <div className={styles.labelLoading}>Searching</div>
                  <div className={styles.containerResult}>
                    <span className={styles.labelHeading}>
                      Select your trip
                    </span>
                    <span className={styles.result}>41 results</span>
                  </div>
                </div>
              </div>
              <div className={styles.actionContainer}>
                <div className={styles.actionWrapper}>
                  <span className={styles.actionLabel}>Sort By</span>
                  <div className={styles.sortingContainer}>
                    <span
                      className={clsx(
                        styles.sortingItem,
                        styles.sortingItemSelected
                      )}
                    >
                      Recommended
                    </span>
                    <div className={styles.sortingItem}>Cheapest</div>
                    <div className={styles.sortingItem}>Fastest</div>
                    <div className={styles.sortingItem}>Earliest</div>
                    <div className={styles.sortingItem}>Latest</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
