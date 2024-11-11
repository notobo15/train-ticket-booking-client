import React from "react";
import styles from "./SelectStation.module.scss";
import clsx from "clsx";

const Loading: React.FC = () => {
  return <div className={clsx(styles.loading, "p-4")}>Đang tải dữ liệu...</div>;
};

export default Loading;
