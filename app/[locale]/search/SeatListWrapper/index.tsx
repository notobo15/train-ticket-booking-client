"use client";
import React from "react";
import styles from "./SeatListWrapper.module.scss";
import Seat from "../Seat";
import { AiOutlineDelete } from "react-icons/ai";
import { useAppSelector } from "@/redux/hooks";
import { selectSearchState } from "@/redux/features/searchSlice";
import BoxEmpty from "../BoxEmpty";

export default function SeatList({
  children,
  carriageClass,
  carriageNumber,
}: {
  children: React.ReactNode;
  carriageClass?: string;
  carriageNumber?: string;
}) {
  const searchState = useAppSelector(selectSearchState);
  return (
    <div className={styles.wrapper}>
      <div className={styles.seatList}>
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <div className={styles.title}>Chú thích</div>

            <div className={styles.info}>
              <BoxEmpty background="#fff" />
              <div className={styles.infoName}>Ghế còn trống</div>
            </div>
            <div className={styles.info}>
              <BoxEmpty background="#ffdedb" />
              <div className={styles.infoName}>Ghế đã đặt</div>
            </div>
            <div className={styles.info}>
              <BoxEmpty background="#d1edff" />
              <div className={styles.infoName}>Ghế đang giữ</div>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.heading}>
              <h3>
                Toa {carriageNumber}: {carriageClass}
              </h3>
              <p>Phía trước tàu</p>
            </div>
            {children}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          Ghế:
          <span>{searchState.seats.join(", ")}</span>
        </div>
        <div className={styles.footerRight}>
          Tổng cộng:
          <span className={styles.footerTotal}>100000</span>
          <button type="button" className={styles.footerBtn}>
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
}
