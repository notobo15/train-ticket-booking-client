"use client";

import React from "react";
import styles from "./SleepingCarriage6.module.scss";
import Box from "../Box";
import SeatListWrapper from "../SeatListWrapper";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addToCart,
  removeFromCart,
  selectSearchState,
  setCarriage,
  setCurrentSeat,
  setSeatId,
} from "@/redux/slices/searchSlice";
import { useCreateSeatHoldMutation, useDeleteSeatHoldMutation } from "@/services/seatApi";
import { toast } from "react-toastify";
import { useGetCarriagesQuery } from "@/services/carriageApi";
type SleepingCarriage6Props = {
  seatList: Seat[];
  onClickSeat: any;
};

const floorLabels = ["Tầng 3", "Tầng 2", "Tầng 1"];
function generateLayout(seatList: Seat[]) {
  const layout = [];
  let seatIndex = 0;
  const carriageCount = Math.ceil(seatList.length / 6);

  for (let i = 1; i <= carriageCount; i++) {
    const cabinSeats = [
      [seatList[seatIndex], seatList[seatIndex + 1]],
      [seatList[seatIndex + 2], seatList[seatIndex + 3]],
      [seatList[seatIndex + 4], seatList[seatIndex + 5]],
    ];
    layout.push({ carriage: i, cabin: i, seats: cabinSeats });
    seatIndex += 6; // Mỗi cabin có 6 ghế
  }

  return layout;
}

export default function SleepingCarriage6({ seatList, onClickSeat }: SleepingCarriage6Props) {
  const layout = generateLayout(seatList);
  const dispatch = useAppDispatch();
  // const [createSeatHold] = useCreateSeatHoldMutation();
  // const [deleteSeatHold] = useDeleteSeatHoldMutation();

  const {
    trainId,
    departureStationId,
    arrivalStationId,
    date,
    origin,
    destination,
    currentSeats,
    carriageId,
    departureDate,
  } = useAppSelector(selectSearchState);
  const handleSeatClick = async (id: number) => {
    // Cập nhật SeatId trong Redux store
    // dispatch(setSeatId(id));
    // const { data: carriageData, isFetching } = useGetCarriagesQuery({
    //   carriageId: carriageId,
    //   trainId: trainId,
    //   arrivalStationId: 0,
    //   departureStationId: 0,
    //   arrivalStationCode: origin,
    //   departureStationCode: destination,

    //   departureDate: departureDate,
    // });
    // Kiểm tra xem ghế có trong danh sách `currentSeats` không (giả sử trạng thái "reserved" là ghế đã được giữ)
    // const existingSeat = currentSeats.find((seat) => seat.seatId === id);
    const existingSeat = seatList.find((seat) => seat.seatId === id);
    console.log("status", existingSeat?.status);
    onClickSeat(existingSeat);
    dispatch(setCurrentSeat(existingSeat || null));
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
        {layout.map((cabin) => (
          <div key={cabin.cabin} className={styles.cabin}>
            <h3>Khoang {cabin.cabin}</h3>
            {cabin.seats.map((row, rowIndex) => (
              <div key={rowIndex} className={styles.row}>
                <p className={styles.floorLabel}>{floorLabels[rowIndex]}</p>
                {row.map((seat) => (
                  <Box
                    onClick={handleSeatClick}
                    id={seat?.seatId}
                    key={seat?.seatId}
                    number={seat?.seatNumber}
                    price={seat?.price || 0}
                    status={seat?.status}
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
