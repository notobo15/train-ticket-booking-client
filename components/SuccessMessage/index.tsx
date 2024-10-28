import React from "react";
import styles from "./SuccessMessage.module.scss";
import { FaCheckCircle } from "react-icons/fa";
export default function index({ message }: { message: string }) {
  return (
    <div className={styles.error}>
      <div className={styles.errorWrapper}>
        <span className={styles.errorIcon}>
          <FaCheckCircle size={24} />
        </span>
        <span className={styles.errorMessage}>{message}</span>
      </div>
    </div>
  );
}
