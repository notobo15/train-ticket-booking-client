"use client";
import React, { useState } from "react";
import Box from "../Box";
import styles from "./HardSeatCarriage.module.scss";
import SeatListWrapper from "../SeatListWrapper";
import {
  addToCart,
  removeFromCart,
  selectSearchState,
  setCurrentSeat,
  setCurrentSeats,
  setPrice,
  setSeatId,
} from "@/redux/slices/searchSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useCreateSeatHoldMutation, useDeleteSeatHoldMutation } from "@/services/seatApi";

type HardSeatCarriageProps = {
  seatList: Seat[];
  onClickSeat: any;
};

const hardSeatLayout = [
  [4, 3, 2, 1],
  [5, 6, 7, 8],
  [12, 11, 10, 9],
  [13, 14, 15, 16],
  [20, 19, 18, 17],
  [21, 22, 23, 24],
  [28, 27, 26, 25],
  [29, 30, 31, 32],
  [36, 35, 34, 33],
  [37, 38, 39, 40],
  [44, 43, 42, 41],
  [45, 46, 47, 48],
  [52, 51, 50, 49],
  [53, 54, 55, 56],
  [60, 59, 58, 57],
  [61, 62, 63, 64],
];
import useWebSocket from "@/hooks/useWebSocket";
import { toast } from "react-toastify";
import useSeatHold from "@/hooks/useSeatHold";
export default function HardSeatCarriage({ seatList, onClickSeat }: HardSeatCarriageProps) {
  const seatMap = Object.fromEntries(seatList.map((seat) => [seat.seatNumber, seat]));
  // const { seats, sendDeleteHold, sendGetList, sendHold } = useSeatHold();

  const dispatch = useAppDispatch();

  const { currentCarriage } = useAppSelector(selectSearchState);

  const handleSeatClick = async (id: number) => {
    // dispatch(setSeatId(id));
    const existingSeat = seatList.find((seat) => seat.seatId === id);
    console.log("existingSeat", existingSeat);
    onClickSeat(existingSeat);
    dispatch(setCurrentSeat(existingSeat || null));
    // dispatch(setCurrentSeat(existingSeat || null));
    // if (existingSeat?.status === "available") {
    //   const seatRequestData = {
    //     trainId: 1,
    //     departureStationCode: "HNO",
    //     arrivalStationCode: "SG",
    //     seatId: existingSeat?.seatId || 0,
    //     carriageId: currentCarriage?.carriageId || 0,
    //     departureDate: "2024-10-15",
    //   };
    //   sendHold(seatRequestData);
    //   // sendGetList(seatRequestData);
    // } else if (existingSeat?.status === "booked") {
    //   const seatRequestData = {
    //     trainId: 1,
    //     departureStationCode: "HNO",
    //     arrivalStationCode: "SG",
    //     seatId: existingSeat?.seatId || 0,
    //     carriageId: currentCarriage?.carriageId || 0,
    //     departureDate: "2024-10-15",
    //   };
    //   sendDeleteHold(seatRequestData);
    //   // sendGetList(seatRequestData);
    // }

    // console.log("existingSeat", existingSeat);
    // if (existingSeat) {
    //   try {
    //     dispatch(setCurrentSeat(existingSeat));
    //     if (existingSeat.status === "available") {
    //       dispatch(addToCart(existingSeat));
    //     } else if (existingSeat.status === "booked") {
    //       dispatch(removeFromCart(existingSeat));
    //     }
    //   } catch (error) {
    //     console.error("Error removing seat hold:", error);
    //   }
    // }
  };

  return (
    <>
      <div className={styles.carriage}>
        {hardSeatLayout.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((seatNumber) => {
              const seat = seatMap[seatNumber];
              return seat ? (
                <Box
                  key={seat.seatId}
                  id={seat.seatId}
                  number={seat.seatNumber}
                  price={seat.price || 0}
                  status={seat.status}
                  onClick={() => handleSeatClick(seat.seatId)}
                />
              ) : (
                <div key={seatNumber} className={styles.emptySeat} />
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}
