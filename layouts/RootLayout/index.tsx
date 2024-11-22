import React from "react";
import styles from "./RootLayout.module.scss";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>{children}</div>
    </div>
  );
}
