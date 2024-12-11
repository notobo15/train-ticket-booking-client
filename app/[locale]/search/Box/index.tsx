import React from "react";
import styles from "./Box.module.scss";
import { formatPriceK } from "@/utils/formatDate";
import { useAppDispatch } from "@/redux/hooks";
import { setPrice } from "@/redux/slices/searchSlice";

type BoxProps = {
  id: number;
  number: string;
  price: number;
  status?: "available" | "booked" | "holding" | string;
  onClick: (id: number) => void;
};

export default function Box({ id, price, status = "available", number, onClick }: BoxProps) {
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => {
        dispatch(setPrice(price));
        onClick(id);
      }}
      className={`${styles.box} ${styles[status]}`}
    >
      <div className={styles.info}>
        <p className={styles.number}>{number}</p>
        <p className={styles.price}>{formatPriceK(price)}</p>
      </div>
    </div>
  );
}
