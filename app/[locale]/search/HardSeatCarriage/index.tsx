import React from "react";
import Box from "../Box";
import styles from "./HardSeatCarriage.module.scss";
import SeatListWrapper from "../SeatListWrapper";
import { addSeat } from "@/redux/features/searchSlice";
import { useAppDispatch } from "@/redux/hooks";

type HardSeatCarriageProps = {
  seatList: Seat[];
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

export default function HardSeatCarriage({ seatList }: HardSeatCarriageProps) {
  const seatMap = Object.fromEntries(seatList.map((seat) => [seat.seatNumber, seat]));

  const dispatch = useAppDispatch();
  const handleSeatClick = (id: number) => {
    dispatch(addSeat(id));
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
