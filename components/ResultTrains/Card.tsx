"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./ResultTrains.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaAngleRight, FaRegSnowflake, FaWifi } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

import SleepingCarriage6 from "@/app/[locale]/search/SleepingCarriage6";
import SleepingCarriage4 from "@/app/[locale]/search/SleepingCarriage4";
import HardSeatCarriage from "@/app/[locale]/search/HardSeatCarriage";
import { BsCupHot } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectSearchState,
  setCarriage,
  setCarriageId,
  setCurrentCarriage,
  setCurrentSeats,
  setTrainId,
} from "@/redux/slices/searchSlice";
import CarriageList from "@/app/[locale]/search/CarriageList";
import { convertTo12HourFormat, getPriceRange } from "@/utils/formatDate";
import { RiPinDistanceLine } from "react-icons/ri";
import { useGetCarriagesQuery, useGetSeatsByCarriageQuery } from "@/services/carriageApi";
import SeatWrapper from "./SeatWrapper";
import { useCreateSeatHoldMutation } from "@/services/seatApi";
import useSeatHold from "@/hooks/useSeatHold";

export default function Card({
  arrivalDate,
  endStationCode,
  startStationCode,
  departureDate,
  trainType,
  departureTime,
  arrivalTime,
  trainNumber,
  startProvinceName,
  endProvinceName,
  startStationName,
  endStationName,
  trainId,
  carriages,
  totalDuration,
  totalDistance,
  prices,
  onClick,
  onClickSeat,
  onClickCarriage,
}: Train & { onClick: (_: number) => void; onClickSeat: any; onClickCarriage: any }) {
  const { carriageType, currentCarriage, currentSeat, currentSeats } = useAppSelector(selectSearchState);
  const dispatch = useAppDispatch();
  const [createSeatHold] = useCreateSeatHoldMutation();

  const [showCarriageList, setShowCarriageList] = useState<boolean>(false);
  const [showSeatList, setShowSeatList] = useState<boolean>(false);

  const cardContainerRef = useRef<HTMLDivElement>(null);
  const handleClickInside = () => {
    setShowCarriageList(true);
    console.log("trainId", trainId);
    console.log("currentCarriage", currentCarriage?.carriageId);
    onClick(trainId);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (cardContainerRef.current && !cardContainerRef.current.contains(event.target as Node)) {
      // dispatch(setCarriageId(0));
      // dispatch(setCurrentCarriage(null));
      setShowCarriageList(false);
      // dispatch(setCurrentSeats([]));
    }
  };

  useEffect(() => {
    // dispatch(setCarriage(carriageData?.result));
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={cardContainerRef}>
      <div className={styles.cardWrapper}>
        {/* <button onClick={() => handleSendHold()}>Send Hold</button> */}
        <div className={styles.cardContainer} onClick={handleClickInside}>
          <div className={styles.cardMain}>
            <div className={styles.cardContent}>
              <div className={styles.topLeft}>
                <h1>{trainNumber}</h1>
                <p>{trainType}</p>
              </div>
              <div className={styles.topRight}>
                <div className={styles.topRightWrapper}>
                  <FaWifi size={24} className="text-icon-color-primary" />
                  <FaRegSnowflake size={24} className="text-icon-color-primary" />
                  <BsCupHot size={24} className="text-icon-color-primary" />
                </div>
              </div>
              <div className={styles.topCenter}>
                <div className={styles.topCenterLeft}>
                  <div className={styles.topCenterLeftContent}>
                    <span className={styles.topCenterLeftContentTime}>{convertTo12HourFormat(departureTime)}</span>
                    <span className={styles.topCenterLeftContentStation}>{startStationName}</span>
                    <span className={styles.topCenterLeftContentProvince}>{startProvinceName}</span>
                  </div>
                  <FaArrowRightLong className={styles.iconArrow} />
                </div>
                <div className={styles.topCenterRight}>
                  <div className={styles.topCenterLeftContent}>
                    <span className={styles.topCenterLeftContentTime}>
                      {convertTo12HourFormat(arrivalTime || departureTime)}
                    </span>
                    <span className={styles.topCenterLeftContentStation}>{endStationName}</span>
                    <span className={styles.topCenterLeftContentProvince}>{endProvinceName}</span>
                  </div>
                </div>
              </div>
              <div className={styles.break}></div>
              <div className={styles.bottomLeft}>
                <div className={styles.bottomLeftWrapper}>
                  <div className={styles.bottomLeftItem}>
                    <IoTimeOutline size={24} />
                    <span>{totalDuration}</span>
                    <RiPinDistanceLine size={24} />
                    <span>{totalDistance}km</span>
                  </div>
                </div>
              </div>
              <div className={styles.bottomRight}>
                <div className={styles.bottomBtn}>
                  <span>{getPriceRange(prices)}</span>
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        {showCarriageList && (
          <div className={styles.carrriageWrapper}>
            {carriages && (
              <CarriageList
                carriages={carriages}
                onClickCarriage={() => {
                  onClickCarriage();
                  setShowSeatList(true);
                }}
              />
            )}

            {currentCarriage && currentSeats?.length !== 0 && (
              <SeatWrapper
                onClickSeat={onClickSeat}
                onClick={onClick}
                prices={prices}
                carriageType={carriageType}
                carriageNumber={currentCarriage.carriageNumber}
                carriageClass={currentCarriage.carriageClassName}
                seats={currentSeats || []}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
