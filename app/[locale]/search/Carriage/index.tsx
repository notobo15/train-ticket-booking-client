"use client";
import React, { useEffect } from "react";
import styles from "./Carriage.module.scss";
import clsx from "clsx";
// import SeatList from "../SeatList";
import { useAppDispatch } from "@/redux/hooks";
import {
  setCarriageId,
  setCarriageType,
  setCurrentCarriage,
  setCurrentSeat,
  setCurrentSeats,
} from "@/redux/slices/searchSlice";
// import useSeatHold from "@/hooks/useSeatHold";

const carriageTypes: Record<string, string> = {
  "1": "bg-blue-200",
  "2": "bg-yellow-200",
  "3": "bg-green-200",
};

// Các loại tàu và màu tương ứng
// const carriageTypes = {
//   softSeat: "bg-blue-200",
//   hardSeat: "bg-yellow-200",
//   sleeper: "bg-green-200",
// };

// type CarriageProps = {
//   number: string; // Số hiệu toa
//   type: string; // Loại toa
//   // type: "softSeat" | "hardSeat" | "sleeper"; // Loại toa
//   seats?: number; // Số lượng chỗ
// };
// const seatData: { id: number; status: "available" | "booked" }[] = [
//   { id: 1, status: "available" },
//   { id: 2, status: "booked" },
//   { id: 3, status: "available" },
//   { id: 4, status: "booked" },
//   { id: 5, status: "available" },
// ];

export default function Carriage({
  carriageClassName,
  carriageId,
  // carriageColor,
  carriageNumber,
  carriageClassId,
  onClickCarriage,
}: Carriage & { onClickCarriage: any }) {
  const carriageColor = carriageTypes[carriageClassId];
  // const { seats: carriageData, sendDeleteHold, sendGetList, sendHold } = useSeatHold();

  const dispatch = useAppDispatch();

  const handleShowSeats = () => {
    dispatch(setCarriageId(carriageId));
    dispatch(setCarriageType(carriageClassId));
    dispatch(
      setCurrentCarriage({
        carriageId: carriageId,
        carriageClassName: carriageClassName,
        carriageNumber: carriageNumber,
        carriageClassId: carriageClassId,
      })
    );
    onClickCarriage({
      carriageId: carriageId,
      carriageClassName: carriageClassName,
      carriageNumber: carriageNumber,
      carriageClassId: carriageClassId,
    });

    // sendGetList(seatRequestData);
    // dispatch(setCurrentSeats(carriageData?.result?.seats));
  };

  return (
    <>
      <div key={carriageId} onClick={handleShowSeats} className={clsx(styles.carriage, carriageColor)}>
        <div className={styles.infoContainer}>
          <div className={styles.carriageNumber}>Toa {carriageNumber}</div>
          <div className={styles.carriageType}>{carriageClassName}</div>
        </div>
      </div>
    </>
  );
}
