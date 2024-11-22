import React from "react";
import styles from "./Nav.module.scss";
export default function Index() {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.bgImage}>
          <div className={styles.bgImageInner}>
            <h2 className={styles.headline}>Travel that moves you</h2>
            <h1 className={styles.subHeadline}>Book train, bus, flight and ferry tickets</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
