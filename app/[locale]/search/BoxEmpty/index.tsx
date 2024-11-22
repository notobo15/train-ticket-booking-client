import React from "react";
import styles from "./BoxEmpty.module.scss";

type BoxProps = {
  background?: string;
  width?: string;
  height?: string;
  className?: string;
};

export default function BoxEmpty({ background, height, width, className }: BoxProps) {
  return (
    <div
      style={{ backgroundColor: background, height: height, width: width, borderRadius: "8px", border: "" }}
      className={styles.box}
    ></div>
  );
}
