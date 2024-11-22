import React from "react";
import styles from "./Box.module.scss";
import { formatPriceK } from "@/utils/formatDate";

type BoxProps = {
  id: number;
  number: string;
  price: number;
  status?: "available" | "booked" | string;
  onClick: (id: number) => void;
};

export default function Box({ id, price, status = "available", number, onClick }: BoxProps) {
  return (
    <div
      onClick={() => onClick(id)}
      className={`${styles.box} ${status === "booked" ? styles.booked : styles.available}`}
    >
      <div className={styles.info}>
        <p className={styles.number}>{number}</p>
        <p className={styles.price}>{formatPriceK(price)}</p>
      </div>
    </div>
  );
}
