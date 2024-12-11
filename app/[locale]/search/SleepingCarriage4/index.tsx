"use client";

import React from "react";
import styles from "./SleepingCarriage4.module.scss";
import Box from "../Box";
import SeatListWrapper from "../SeatListWrapper";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectSearchState, setCurrentSeat, setSeatId } from "@/redux/slices/searchSlice";
import { useCreateSeatHoldMutation, useDeleteSeatHoldMutation } from "@/services/seatApi";
import { RootState } from "@/redux/store";
import { toast } from "react-toastify";

type SleepingCarriage4Props = {
  seatList: Seat[];
  onClickSeat: any;
};

const floorLabels = ["Tầng 2", "Tầng 1"];

function generateLayout(seatList: Seat[]) {
  const layout = [];
  let seatIndex = 0;
  const carriageCount = Math.ceil(seatList.length / 4);

  for (let i = 1; i <= carriageCount; i++) {
    const cabinSeats = [
      [seatList[seatIndex], seatList[seatIndex + 1]],
      [seatList[seatIndex + 2], seatList[seatIndex + 3]],
    ];
    layout.push({ carriage: i, cabin: i, seats: cabinSeats });
    seatIndex += 4;
  }

  return layout;
}

export default function SleepingCarriage4({ seatList, onClickSeat }: SleepingCarriage4Props) {
  const layout = generateLayout(seatList);

  const dispatch = useAppDispatch();
  const [createSeatHold] = useCreateSeatHoldMutation();
  const [deleteSeatHold] = useDeleteSeatHoldMutation();
  const { trainId, departureStationId, arrivalStationId, date, origin, destination, currentSeats } =
    useAppSelector(selectSearchState);
  const handleSeatClick = async (id: number) => {
    // Cập nhật SeatId trong Redux store
    dispatch(setSeatId(id));

    // Kiểm tra xem ghế có trong danh sách `currentSeats` không (giả sử trạng thái "reserved" là ghế đã được giữ)
    const existingSeat = seatList.find((seat) => seat.seatId === id);
    console.log("status", existingSeat?.status);
    onClickSeat(existingSeat);
    dispatch(setCurrentSeat(existingSeat || null));
    // if (existingSeat) {
    //   // Nếu ghế đã có trong danh sách, tiến hành xóa ghế
    //   try {
    //     // Gọi API để xóa giữ chỗ cho ghế
    //     const response = await deleteSeatHold(id).unwrap();
    //     if (response.success) {
    //       // Nếu xóa thành công, bạn có thể cập nhật lại state Redux hoặc làm gì đó sau khi xóa thành công
    //       console.log("Seat hold canceled successfully.");
    //     }
    //   } catch (error) {
    //     console.error("Error removing seat hold:", error);
    //   }
    // } else {
    //   // Nếu ghế chưa có trong danh sách, tiến hành thêm ghế vào danh sách giữ chỗ
    //   try {
    //     const seatHoldData = {
    //       seatId: id,
    //       trainId,
    //       departureStationId,
    //       arrivalStationId,
    //       departureDate: date || "",
    //       arrivalStationCode: origin,
    //       departureStationCode: destination,
    //       departure: false,
    //     };

    //     // Gọi API để giữ ghế
    //     const response = await createSeatHold(seatHoldData).unwrap();
    //     if (response.success) {
    //       console.log("Seat hold created successfully.");
    //       toast.success(response.message, { autoClose: 1000 });
    //     }
    //   } catch (error) {
    //     console.error("Error creating seat hold:", error);
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
                {row.map(
                  (seat) =>
                    seat && (
                      <Box
                        onClick={() => handleSeatClick(seat.seatId)}
                        id={seat.seatId}
                        number={seat.seatNumber}
                        key={seat.seatId}
                        price={seat.price || 0}
                        status={seat.status}
                      />
                    )
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
