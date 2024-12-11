"use client";
import React from "react";
import styles from "./BtnBackResult.module.scss";
import { FaAngleLeft } from "react-icons/fa";
import { useRouter } from "@/i18n/routing";

type BtnBackResultProps = {};

export default function BtnBackResult({}: BtnBackResultProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.main}>
          <div className={styles.mainInner}>
            <button className={styles.btn} onClick={handleBack}>
              <FaAngleLeft size={24} />
              <span className={styles.label}>Back to results</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
