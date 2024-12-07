"use client";
import React, { useState } from "react";
import Box from "../Box";
import styles from "./HardSeatCarriage.module.scss";
import SeatListWrapper from "../SeatListWrapper";
import { selectSearchState, setPrice, setSeatId } from "@/redux/slices/searchSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useCreateSeatHoldMutation, useDeleteSeatHoldMutation } from "@/services/seatApi";

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
import useWebSocket from "@/hooks/useWebSocket";
import { toast } from "react-toastify";
export default function HardSeatCarriage({ seatList }: HardSeatCarriageProps) {
  const seatMap = Object.fromEntries(seatList.map((seat) => [seat.seatNumber, seat]));

  const dispatch = useAppDispatch();
  const [createSeatHold] = useCreateSeatHoldMutation();
  const [deleteSeatHold] = useDeleteSeatHoldMutation();
  const { trainId, departureStationId, arrivalStationId, date, origin, destination, currentSeats } =
    useAppSelector(selectSearchState);

  const handleSeatClick = async (id: number) => {
    // Cập nhật SeatId trong Redux store
    dispatch(setSeatId(id));

    // Kiểm tra xem ghế có trong danh sách `currentSeats` không (giả sử trạng thái "reserved" là ghế đã được giữ)
    const existingSeat = currentSeats.find((seat) => seat.seatId === id);
    if (existingSeat) {
      // Nếu ghế đã có trong danh sách, tiến hành xóa ghế
      try {
        // Gọi API để xóa giữ chỗ cho ghế
        const response = await deleteSeatHold(id).unwrap();
        if (response.success) {
          // Nếu xóa thành công, bạn có thể cập nhật lại state Redux hoặc làm gì đó sau khi xóa thành công
          console.log("Seat hold canceled successfully.");
        }
      } catch (error) {
        console.error("Error removing seat hold:", error);
      }
    } else {
      // Nếu ghế chưa có trong danh sách, tiến hành thêm ghế vào danh sách giữ chỗ
      try {
        const seatHoldData = {
          seatId: id,
          trainId,
          departureStationId,
          arrivalStationId,
          departureDate: date || "",
          arrivalStationCode: origin,
          departureStationCode: destination,
          departure: false,
        };

        // Gọi API để giữ ghế
        const response = await createSeatHold(seatHoldData).unwrap();
        if (response.success) {
          console.log("Seat hold created successfully.");
          toast.success(response.message, { autoClose: 1000 });
        }
      } catch (error) {
        console.error("Error creating seat hold:", error);
      }
    }
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
