import React from "react";
import SleepingCarriage6 from "@/app/[locale]/search/SleepingCarriage6";
import SleepingCarriage4 from "@/app/[locale]/search/SleepingCarriage4";
import SeatListWrapper from "@/app/[locale]/search/SeatListWrapper";
import HardSeatCarriage from "@/app/[locale]/search/HardSeatCarriage";
export default function SeatWrapper({
  carriageType,
  prices,
  carriageNumber,
  carriageClass,
  seats,
  onClick,
  onClickSeat,
}: {
  carriageType?: number;
  prices: Price[];
  carriageNumber?: string;
  carriageClass?: string;
  seats?: Seat[];
  onClick: any;
  onClickSeat: any;
}) {
  const results =
    seats?.map((seat) => ({
      ...seat,
      // price: prices.find((price) => price.seatType === seat.seatType)?.totalPrice || 0,
    })) || [];
  return (
    <SeatListWrapper carriageClass={carriageClass} carriageNumber={carriageNumber}>
      {carriageType === 1 && <HardSeatCarriage seatList={results} onClickSeat={onClickSeat} />}
      {carriageType === 2 && <SleepingCarriage6 seatList={results} onClickSeat={onClickSeat} />}
      {carriageType === 3 && <SleepingCarriage4 seatList={results} onClickSeat={onClickSeat} />}
    </SeatListWrapper>
  );
}
