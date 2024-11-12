import React from "react";
import styles from "./SleepingCarriage6.module.scss";
import Box from "../Box";
import SeatListWrapper from "../SeatListWrapper";
import { useAppDispatch } from "@/redux/hooks";
import { addSeat } from "@/redux/features/searchSlice";

type SleepingCarriage6Props = {
  seatList: Seat[];
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

export default function SleepingCarriage6({ seatList }: SleepingCarriage6Props) {
  const layout = generateLayout(seatList);

  const dispatch = useAppDispatch();
  const handleSeatClick = (id: number) => {
    dispatch(addSeat(id));
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
