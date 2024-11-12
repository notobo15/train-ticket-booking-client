import React from "react";
import styles from "./SleepingCarriage4.module.scss";
import Box from "../Box";
import SeatListWrapper from "../SeatListWrapper";
import { useAppDispatch } from "@/redux/hooks";
import { addSeat } from "@/redux/features/searchSlice";

type SleepingCarriage4Props = {
  seatList: Seat[];
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

export default function SleepingCarriage4({ seatList }: SleepingCarriage4Props) {
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
