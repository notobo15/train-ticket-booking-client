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
import { selectSearchState, setCarriageId } from "@/redux/features/searchSlice";
import CarriageList from "@/app/[locale]/search/CarriageList";
import { convertTo12HourFormat, getPriceRange } from "@/utils/formatDate";
import { RiPinDistanceLine } from "react-icons/ri";
import {
  useGetCarriageByIdQuery,
  useGetCarriagesByTrainIdQuery,
  useGetSeatsByCarriageQuery,
} from "@/services/carriageApi";
import SeatWrapper from "./SeatWrapper";

export default function Card({
  //   arrivalDate,
  //   departureDate,
  //   trainId,
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
}: Train & { onClick: (_: number) => void }) {
  const searchState = useAppSelector(selectSearchState);

  const dispatch = useAppDispatch();

  const carriageId = searchState.carriageId;

  const { data: carriageData, isFetching } = useGetCarriageByIdQuery(carriageId, {
    skip: carriageId === 0,
  });

  const [showCarriageList, setShowCarriageList] = useState<boolean>(false);

  const cardContainerRef = useRef<HTMLDivElement>(null);
  const handleClickInside = () => {
    setShowCarriageList((prev) => !prev);
    onClick(trainId);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (cardContainerRef.current && !cardContainerRef.current.contains(event.target as Node)) {
      setShowCarriageList(false);
      // dispatch(setCarriageId(0));
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={cardContainerRef}>
      <div className={styles.cardWrapper}>
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
            <CarriageList carriages={carriages || []} />
            {/* {searchState.carriageType === "softSeat" && <SeatList64 />} */}
            {/* {searchState.carriageId !== 0 && <SeatList />} */}
            {/* {searchState.carriageId !== 0 && <Bed6 />} */}

            {carriageData && (
              <SeatWrapper
                prices={prices}
                carriageType={searchState.carriageType}
                carriageNumber={carriageData?.carriageNumber}
                carriageClass={carriageData?.carriageClassName}
                seats={carriageData?.seats || []}
              />
            )}
            {/* {searchState.carriageType === 1 && <HardSeatCarriage prices={prices} seatList={seatList64} />}
            {searchState.carriageType === 2 && <SleepingCarriage6 seatList={seatList} />}
            {searchState.carriageType === 3 && <SleepingCarriage4 seatList={seatList32} />} */}
          </div>
        )}
      </div>
    </div>
  );
}
