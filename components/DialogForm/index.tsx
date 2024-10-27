import React from "react";
import styles from "./DialogForm.module.scss";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

export default function Index({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backdrop}></div>
      <div className={styles.container}>
        <div className={styles.modal}>
          <div className={styles.headingCloseable}>
            <Link href="/" className={styles.btnClose}>
              <IoClose size={24} />
            </Link>
          </div>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  );
}
