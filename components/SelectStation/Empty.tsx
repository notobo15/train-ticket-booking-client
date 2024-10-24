import React from "react";
import styles from "./SelectStation.module.scss";

const Empty: React.FC = () => {
  return <div className={styles.empty}>Không tìm thấy ga phù hợp</div>;
};

export default Empty;
