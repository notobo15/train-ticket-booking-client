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
}: {
  carriageType?: number;
  prices: Price[];
  carriageNumber?: string;
  carriageClass?: string;
  seats?: Seat[];
}) {
  const seatList32 = [
    { id: 1, number: 1, type: "AnLT1", status: "available" },
    { id: 2, number: 2, type: "AnLT1", status: "available" },
    { id: 3, number: 3, type: "AnLT2", status: "booked" },
    { id: 4, number: 4, type: "AnLT2", status: "available" },
    { id: 5, number: 5, type: "AnLT1", status: "available" },
    { id: 6, number: 6, type: "AnLT1", status: "booked" },
    { id: 7, number: 7, type: "AnLT2", status: "available" },
    { id: 8, number: 8, type: "AnLT2", status: "available" },
    { id: 9, number: 9, type: "AnLT1", status: "available" },
    { id: 10, number: 10, type: "AnLT1", status: "booked" },
    { id: 11, number: 11, type: "AnLT2", status: "available" },
    { id: 12, number: 12, type: "AnLT2", status: "available" },
    { id: 13, number: 13, type: "AnLT1", status: "available" },
    { id: 14, number: 14, type: "AnLT1", status: "available" },
    { id: 15, number: 15, type: "AnLT2", status: "booked" },
    { id: 16, number: 16, type: "AnLT2", status: "available" },
    { id: 17, number: 17, type: "AnLT1", status: "available" },
    { id: 18, number: 18, type: "AnLT1", status: "available" },
    { id: 19, number: 19, type: "AnLT2", status: "booked" },
    { id: 20, number: 20, type: "AnLT2", status: "available" },
    { id: 21, number: 21, type: "AnLT1", status: "available" },
    { id: 22, number: 22, type: "AnLT1", status: "available" },
    { id: 23, number: 23, type: "AnLT2", status: "available" },
    { id: 24, number: 24, type: "AnLT2", status: "available" },
    { id: 25, number: 25, type: "AnLT1", status: "booked" },
    { id: 26, number: 26, type: "AnLT1", status: "available" },
    { id: 27, number: 27, type: "AnLT2", status: "available" },
    { id: 28, number: 28, type: "AnLT2", status: "available" },
    { id: 29, number: 29, type: "AnLT1", status: "booked" },
    { id: 30, number: 30, type: "AnLT1", status: "available" },
    { id: 31, number: 31, type: "AnLT1", status: "available" },
    { id: 32, number: 32, type: "AnLT1", status: "available" },
  ];
  const seatList42 = [
    { id: 1, number: 1, type: "BnLT1", status: "available" },
    { id: 2, number: 2, type: "BnLT1", status: "available" },
    { id: 3, number: 3, type: "BnLT2", status: "booked" },
    { id: 4, number: 4, type: "BnLT2", status: "available" },
    { id: 5, number: 5, type: "BnLT3", status: "available" },
    { id: 6, number: 6, type: "BnLT3", status: "booked" },
    { id: 7, number: 7, type: "BnLT1", status: "available" },
    { id: 8, number: 8, type: "BnLT1", status: "available" },
    { id: 9, number: 9, type: "BnLT2", status: "available" },
    { id: 10, number: 10, type: "BnLT2", status: "booked" },
    { id: 11, number: 11, type: "BnLT3", status: "available" },
    { id: 12, number: 12, type: "BnLT3", status: "available" },
    { id: 13, number: 13, type: "BnLT1", status: "available" },
    { id: 14, number: 14, type: "BnLT1", status: "available" },
    { id: 15, number: 15, type: "BnLT2", status: "booked" },
    { id: 16, number: 16, type: "BnLT2", status: "available" },
    { id: 17, number: 17, type: "BnLT3", status: "available" },
    { id: 18, number: 18, type: "BnLT3", status: "available" },
    { id: 19, number: 19, type: "BnLT1", status: "booked" },
    { id: 20, number: 20, type: "BnLT1", status: "available" },
    { id: 21, number: 21, type: "BnLT2", status: "available" },
    { id: 22, number: 22, type: "BnLT2", status: "available" },
    { id: 23, number: 23, type: "BnLT3", status: "available" },
    { id: 24, number: 24, type: "BnLT3", status: "available" },
    { id: 25, number: 25, type: "BnLT1", status: "booked" },
    { id: 26, number: 26, type: "BnLT1", status: "available" },
    { id: 27, number: 27, type: "BnLT2", status: "available" },
    { id: 28, number: 28, type: "BnLT2", status: "available" },
    { id: 29, number: 29, type: "BnLT3", status: "booked" },
    { id: 30, number: 30, type: "BnLT3", status: "available" },
    { id: 31, number: 31, type: "BnLT1", status: "available" },
    { id: 32, number: 32, type: "BnLT1", status: "available" },
    { id: 33, number: 33, type: "BnLT2", status: "available" },
    { id: 34, number: 34, type: "BnLT2", status: "available" },
    { id: 35, number: 35, type: "BnLT3", status: "booked" },
    { id: 36, number: 36, type: "BnLT3", status: "available" },
    { id: 37, number: 37, type: "BnLT1", status: "available" },
    { id: 38, number: 38, type: "BnLT1", status: "available" },
    { id: 39, number: 39, type: "BnLT2", status: "booked" },
    { id: 40, number: 40, type: "BnLT2", status: "available" },
    { id: 41, number: 41, type: "BnLT3", status: "available" },
    { id: 42, number: 42, type: "BnLT3", status: "available" },
  ];

  const seatList64 = [
    { id: 1, number: 1, type: "NML", status: "available" },
    { id: 2, number: 2, type: "NML", status: "available" },
    { id: 3, number: 3, type: "NML", status: "booked" },
    { id: 4, number: 4, type: "NML", status: "available" },
    { id: 5, number: 5, type: "NML", status: "available" },
    { id: 6, number: 6, type: "NML", status: "booked" },
    { id: 7, number: 7, type: "NML", status: "available" },
    { id: 8, number: 8, type: "NML", status: "available" },
    { id: 9, number: 9, type: "NML", status: "available" },
    { id: 10, number: 10, type: "NML", status: "booked" },
    { id: 11, number: 11, type: "NML", status: "available" },
    { id: 12, number: 12, type: "NML", status: "available" },
    { id: 13, number: 13, type: "NML", status: "available" },
    { id: 14, number: 14, type: "NML", status: "available" },
    { id: 15, number: 15, type: "NML", status: "booked" },
    { id: 16, number: 16, type: "NML", status: "available" },
    { id: 17, number: 17, type: "NML", status: "available" },
    { id: 18, number: 18, type: "NML", status: "available" },
    { id: 19, number: 19, type: "NML", status: "booked" },
    { id: 20, number: 20, type: "NML", status: "available" },
    { id: 21, number: 21, type: "NML", status: "available" },
    { id: 22, number: 22, type: "NML", status: "available" },
    { id: 23, number: 23, type: "NML", status: "available" },
    { id: 24, number: 24, type: "NML", status: "available" },
    { id: 25, number: 25, type: "NMLV", status: "booked" },
    { id: 26, number: 26, type: "NMLV", status: "available" },
    { id: 27, number: 27, type: "NMLV", status: "available" },
    { id: 28, number: 28, type: "NMLV", status: "available" },
    { id: 29, number: 29, type: "NMLV", status: "booked" },
    { id: 30, number: 30, type: "NMLV", status: "available" },
    { id: 31, number: 31, type: "NMLV", status: "available" },
    { id: 32, number: 32, type: "NMLV", status: "available" },
    { id: 33, number: 33, type: "NML", status: "available" },
    { id: 34, number: 34, type: "NML", status: "available" },
    { id: 35, number: 35, type: "NML", status: "booked" },
    { id: 36, number: 36, type: "NML", status: "available" },
    { id: 37, number: 37, type: "NML", status: "available" },
    { id: 38, number: 38, type: "NML", status: "available" },
    { id: 39, number: 39, type: "NML", status: "booked" },
    { id: 40, number: 40, type: "NML", status: "available" },
    { id: 41, number: 41, type: "NML", status: "available" },
    { id: 42, number: 42, type: "NML", status: "available" },
    { id: 43, number: 43, type: "NML", status: "available" },
    { id: 44, number: 44, type: "NML", status: "available" },
    { id: 45, number: 45, type: "NML", status: "available" },
    { id: 46, number: 46, type: "NML", status: "available" },
    { id: 47, number: 47, type: "NML", status: "available" },
    { id: 48, number: 48, type: "NML", status: "available" },
    { id: 49, number: 49, type: "NML", status: "available" },
    { id: 50, number: 50, type: "NML", status: "available" },
    { id: 51, number: 51, type: "NML", status: "available" },
    { id: 52, number: 52, type: "NML", status: "available" },
    { id: 53, number: 53, type: "NML", status: "available" },
    { id: 54, number: 54, type: "NML", status: "available" },
    { id: 55, number: 55, type: "NML", status: "available" },
    { id: 56, number: 56, type: "NML", status: "available" },
    { id: 57, number: 57, type: "NML", status: "available" },
    { id: 58, number: 58, type: "NML", status: "available" },
    { id: 59, number: 59, type: "NML", status: "available" },
    { id: 60, number: 60, type: "NML", status: "available" },
    { id: 61, number: 61, type: "NML", status: "available" },
    { id: 62, number: 62, type: "NML", status: "available" },
    { id: 63, number: 63, type: "NML", status: "available" },
    { id: 64, number: 64, type: "NML", status: "available" },
  ];
  // const enrichedSeatList64 = seatList64.map((seat) => ({
  //   ...seat,
  //   price: prices.find((price) => price.seatType === seat.type)?.totalPrice || 0,
  // }));

  // const enrichedSeatList42 = seatList42.map((seat) => ({
  //   ...seat,
  //   price: prices.find((price) => price.seatType === seat.type)?.totalPrice || 0,
  // }));

  // const enrichedSeatList32 = seatList32.map((seat) => ({
  //   ...seat,
  //   price: prices.find((price) => price.seatType === seat.type)?.totalPrice || 0,
  // }));
  const results =
    seats?.map((seat) => ({
      ...seat,
      price: prices.find((price) => price.seatType === seat.seatType)?.totalPrice || 0,
    })) || [];
  return (
    <SeatListWrapper carriageClass={carriageClass} carriageNumber={carriageNumber}>
      {carriageType === 1 && <HardSeatCarriage seatList={results} />}
      {carriageType === 2 && <SleepingCarriage6 seatList={results} />}
      {carriageType === 3 && <SleepingCarriage4 seatList={results} />}
    </SeatListWrapper>
  );
}
