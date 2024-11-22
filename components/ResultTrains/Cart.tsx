import React from "react";
import styles from "./ResultTrains.module.scss";
import { AiOutlineDelete } from "react-icons/ai";
export default function Cart() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Giỏ hàng</div>
      <div className={styles.cartWrapper}>
        <div className={styles.cartItem}>
          <div className={styles.itemLabel}>Toa 1 (Số 10)</div>
          <div className={styles.itemIcon}>
            <span>
              100
              <b>s</b>
            </span>

            <AiOutlineDelete size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
