"use client";
import React from "react";
import styles from "./SeatListWrapper.module.scss";
import Seat from "../Seat";
import { AiOutlineDelete } from "react-icons/ai";
import { useAppSelector } from "@/redux/hooks";
import { selectSearchState } from "@/redux/slices/searchSlice";
import BoxEmpty from "../BoxEmpty";
import { useSearchParams } from "next/navigation";
import { useRouter } from "@/i18n/routing";
import * as NProgress from "nprogress";
export default function SeatList({
  children,
  carriageClass,
  carriageNumber,
}: {
  children: React.ReactNode;
  carriageClass?: string;
  carriageNumber?: string;
}) {
  const { seathold, seatholdReturn, step } = useAppSelector(selectSearchState);
  const searchParams = useSearchParams();
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.seatList}>
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <div className={styles.title}>Chú thích</div>

            <div className={styles.info}>
              <BoxEmpty background="#f0f8ff" />
              <div className={styles.infoName}>Ghế còn trống</div>
            </div>
            {/* 
            <div className={styles.info}>
              <BoxEmpty background="yellow" />
              <div className={styles.infoName}>Ghế đang giữ</div>
            </div> */}
            <div className={styles.info}>
              <BoxEmpty background="#ffc0cb" />
              <div className={styles.infoName}>Ghế đã đặt</div>
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
          <span>
            {(step === "return" ? seatholdReturn : seathold).map((s) => `${s?.seatNumber} (${s?.seatType})`).join(", ")}
          </span>
        </div>
        <div className={styles.footerRight}>
          {/* Tổng cộng: */}
          {/* <span className={styles.footerTotal}>100000</span> */}
          <button
            type="button"
            className={styles.footerBtn}
            onClick={() => {
              const params = new URLSearchParams(searchParams.toString());
              const step = searchParams.get("step") || "outbound";
              params.set("view", "overview");
              if (step == "outbound") {
                params.set("step", step);
              } else {
                params.set("step", "return");
              }
              NProgress.start();
              router.push(`?${params.toString()}`);
            }}
          >
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
}
