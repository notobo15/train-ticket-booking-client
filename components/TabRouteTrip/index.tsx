import React from "react";
import styles from "./TabRouteTrip.module.scss";
import clsx from "clsx";
export default function Index() {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.layoutMobile}></div>
        <div className={styles.layoutWeb}>
          <div className={styles.layoutWebWrapper}>
            <div className={styles.layoutWebMain}>
              <div className={styles.tabList}>
                <div className={clsx(styles.tabItem, styles.active)}>
                  <span className={styles.tabLabel}>
                    <span>Outbound</span>
                  </span>
                </div>
                <div className={clsx(styles.tabItem, styles.disabled)}>
                  <span className={styles.tabLabel}>
                    <span>Return</span>
                  </span>
                </div>
              </div>
              <div className={styles.tabIndicator}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
