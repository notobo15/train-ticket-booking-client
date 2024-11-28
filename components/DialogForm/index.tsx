import React from "react";
import styles from "./DialogForm.module.scss";
import { IoClose } from "react-icons/io5";
import { Link } from "@/i18n/routing";

export default function Index({
  children,
  isShowIconClose = true,
}: {
  children: React.ReactNode;
  isShowIconClose?: boolean;
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backdrop}></div>
      <div className={styles.container}>
        <div className={styles.modal}>
          {isShowIconClose && (
            <div className={styles.headingCloseable}>
              <Link href="/home" className={styles.btnClose}>
                <IoClose size={24} />
              </Link>
            </div>
          )}
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  );
}
