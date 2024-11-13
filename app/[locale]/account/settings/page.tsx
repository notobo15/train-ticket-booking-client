"use client";
import React from "react";
import styles from "./settings.module.scss";
export default function Page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.formGroup}>
        <div className={styles.formGroupRow}>
          <div className={styles.formGroupHeading}>
            <span className={styles.headingLabel}>Newsletter</span>
            <span className={styles.headingDes}>Get the latest deals and travel tips delivered to your inbox.</span>
          </div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
}
