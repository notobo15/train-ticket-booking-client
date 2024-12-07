import React from "react";
import { MdErrorOutline } from "react-icons/md";
import styles from "./ErrrorMessage.module.scss";
export default function index({ message }: { message: string | undefined }) {
  return (
    <div className={styles.error}>
      <div className={styles.errorWrapper}>
        <span className={styles.errorIcon}>
          <MdErrorOutline size={24} />
        </span>
        <span className={styles.errorMessage}>{message}</span>
      </div>
    </div>
  );
}
