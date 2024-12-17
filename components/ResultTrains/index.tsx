"use client";
import React, { useEffect, useState } from "react";
import styles from "./ResultTrains.module.scss";
// import SeatList from "@/app/search/SeatList";
// import Bed6 from "@/app/search/Bed6";
// import SeatList64 from "@/app/search/SeatList64";
import Info from "./Info";
import Filter from "./Filter";
import Card from "./Card";
import { usePostSearchTrainsQuery } from "@/services/trainsApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectSearchState,
  setArrivalStationId,
  setCurrentSeats,
  setDepartureDate,
  setDepartureStationId,
  setResultCount,
  setTrain,
  setTrainId,
  setTrainReturn,
} from "@/redux/slices/searchSlice";
import { parseDuration } from "@/utils/formatDate";
import FilterSkeleton from "./FilterSkeleton";
import CardSkeleton from "./CardSkeleton";
// import Cart from "./Cart";
export default function Index({ onClickSeat, onClickCarriage }: { onClickSeat: any; onClickCarriage: any }) {
  // const [postSearchTrains, { isLoading, error, data }] = usePostSearchTrainsMutation();
  const dispatch = useAppDispatch();
  const searchState = useAppSelector(selectSearchState);
  // const [currentTrainId, setCurentTrainId] = useState<number | null>(null);

  // const { data: carriagesData } = useGetCarriagesByTrainIdQuery(currentTrainId!, {
  //   skip: currentTrainId === null, // Only call API if clickedTrainId is not null
  // });

  /* filters */
  const checkedItems = searchState.filters;
  /* sorting */
  const sortingOptions = searchState.sortingOptions;
  const selectedSortingOption = sortingOptions.find((option) => option.isSelected)?.label;
  // const [checkedItems, setCheckedItems] = useState({
  //   nighttime: false,
  //   early: false,
  //   midday: false,
  //   late: false,
  // });

  // const handleCheckboxChange = (key: string, checked: boolean) => {
  //   setCheckedItems((prev) => ({
  //     ...prev,
  //     [key]: checked,
  //   }));
  // };
  // const handleSearch = () => {
  // const params = {
  //   departureDate: searchState.date!,
  //   startStationCode: searchState.origin,
  //   endStationCode: searchState.destination,
  //   passengerCount: searchState.passagers.reduce(
  //     (total, passager) => total + passager.value,
  //     0
  //   ),
  //   roundTrip: !!searchState.returnDate,
  // };

  const isReturnStep = searchState.step === "return";
  const params = {
    startStationCode: isReturnStep ? searchState.destination : searchState.origin,
    endStationCode: isReturnStep ? searchState.origin : searchState.destination,
    departureDate: isReturnStep ? searchState.returnDate : searchState.date,
    passengerCount: searchState.passagers.reduce((total, passager) => total + passager.value, 0),
    // roundTrip: !!searchState.returnDate,
  };
  // };
  const { isFetching, error, data } = usePostSearchTrainsQuery(params, {});

  console.log("data", data);
  // useEffect(() => {
  //   postSearchTrains(params);
  // }, [postSearchTrains]);
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error occurred</div>;
  const isAnyFilterSelected = Object.values(checkedItems).some((value) => value);

  const filteredData = isAnyFilterSelected
    ? data?.data.filter((item: any) => {
        if (checkedItems.nighttime && item.departureTime < "06:00") return true;
        if (checkedItems.early && item.departureTime >= "06:00" && item.departureTime < "11:00") return true;
        if (checkedItems.midday && item.departureTime >= "11:00" && item.departureTime < "17:00") return true;
        if (checkedItems.late && item.departureTime >= "17:00") return true;
        return false;
      })
    : data?.data;

  const sortedData = filteredData
    ? [...filteredData].sort((a, b) => {
        switch (selectedSortingOption) {
          case "Cheapest":
            return a.prices[0].totalPrice - b.prices[0].totalPrice;
          case "Highest":
            return b.prices[0].totalPrice - a.prices[0].totalPrice;
          case "Fastest":
            return parseDuration(a.totalDuration) - parseDuration(b.totalDuration);
          case "Earliest":
            return a.departureTime.localeCompare(b.departureTime);
          case "Latest":
            return b.departureTime.localeCompare(a.departureTime);
          default:
            return 0; // No sorting for "Recommended" or default
        }
      })
    : filteredData;
  useEffect(() => {
    dispatch(setResultCount(filteredData?.length || 0));
  }, [filteredData]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperInner}>
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            {isFetching && <FilterSkeleton />}
            {sortedData && <Filter />}
          </div>
          <div className={styles.content}>
            <div className="flex flex-col gap-150 sm:gap-200">
              <div className={styles.main}>
                <Info />
                {isFetching && <CardSkeleton />}
                {!isFetching &&
                  sortedData &&
                  sortedData.map((item, index: number) => (
                    <Card
                      onClickCarriage={onClickCarriage}
                      onClickSeat={onClickSeat}
                      {...item}
                      key={index}
                      onClick={(trainId) => {
                        // setCurentTrainId(trainId);
                        dispatch(setTrainId(trainId));
                        dispatch(setCurrentSeats([]));
                        var t = sortedData.find((i) => i.trainId === trainId) || null;

                        if (isReturnStep) {
                          dispatch(setTrainReturn(t));
                        } else {
                          dispatch(setTrain(t));
                        }
                      }}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
