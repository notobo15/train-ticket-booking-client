import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import styles from "./ResultTrains.module.scss";
export default function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.infoWrapper}>
        <div className={styles.infoLabel}>
          Arrive in<strong>Newark:</strong>
        </div>
        <div className={styles.infoBottom}>
          <FaLocationDot />
          <span>9 miles from New York</span>
        </div>
      </div>
    </div>
  );
}
