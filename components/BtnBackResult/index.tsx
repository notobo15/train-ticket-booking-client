import React from "react";
import styles from "./BtnBackResult.module.scss";
import { FaAngleLeft } from "react-icons/fa";

type BtnBackResultProps = {
  onClick: () => void;
};

export default function BtnBackResult({ onClick }: BtnBackResultProps) {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={styles.main}>
        <div className={styles.mainInner}>
          <div className={styles.btn}>
            <FaAngleLeft size={24} />
            <span className={styles.label}>Back to results</span>
          </div>
        </div>
      </div>
    </div>
  );
}
