import React from "react";
import styles from "./Seat.module.scss";

type SeatProps = {
  id?: number;
  status?: "available" | "booked";
};

export default function Seat({ id, status }: SeatProps) {
  return (
    <div className={`${styles.seat} ${status === "booked" ? styles.booked : styles.available}`}>
      <div className={styles.seatContainer}>
        <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="8.75"
            y="2.75"
            width="22.5"
            height="26.5"
            rx="2.25"
            fill="#FFF"
            stroke="#B8B8B8"
            strokeWidth="1.5"
            strokeLinejoin="round"
          ></rect>
          <rect
            x="10.25"
            y="11.75"
            width="14.5"
            height="5.5"
            rx="2.25"
            transform="rotate(90 10.25 11.75)"
            fill="#FFF"
            stroke="#B8B8B8"
            strokeWidth="1.5"
            strokeLinejoin="round"
          ></rect>
          <rect
            x="35.25"
            y="11.75"
            width="14.5"
            height="5.5"
            rx="2.25"
            transform="rotate(90 35.25 11.75)"
            fill="#FFF"
            stroke="#B8B8B8"
            strokeWidth="1.5"
            strokeLinejoin="round"
          ></rect>
          <rect
            x="8.75"
            y="22.75"
            width="22.5"
            height="6.5"
            rx="2.25"
            fill="#FFF"
            stroke="#B8B8B8"
            strokeWidth="1.5"
            strokeLinejoin="round"
          ></rect>
        </svg>
        <p className={styles.seatNumber}>{id}</p>
      </div>
    </div>
  );
}
