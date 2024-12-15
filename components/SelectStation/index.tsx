"use client";
import React, { useEffect, useState } from "react";
import SelectStation from "./SelectStation";
import { FaExchangeAlt } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectSearchState,
  setArrivalStationId,
  setDestination,
  setEndStationInfo,
  setOrigin,
  setStartStationInfo,
} from "@/redux/slices/searchSlice";
import { useGetProvincesWithStationsQuery, useLazyGetProvincesWithStationsQuery } from "@/services/provinceApi";
import { formatOptions } from "@/utils/formatOptions";
import { useTranslations } from "next-intl";

export default function Index({ errors }: { errors: { origin: boolean; destination: boolean } }) {
  const dispatch = useAppDispatch();
  const { origin, destination } = useAppSelector(selectSearchState);

  const t = useTranslations("SearchForm");
  const [fetchProvincesWithStations, { data, error, isFetching }] = useLazyGetProvincesWithStationsQuery();
  const provincesWithStations = data?.data || [];

  useEffect(() => {
    if (origin || destination) {
      fetchProvincesWithStations();
    }
  }, [origin, destination]);

  const handleFetchData = () => {
    fetchProvincesWithStations();
  };

  const handleSelectStation = (stationId: string, isOrigin: boolean) => {
    // Tìm ga từ dữ liệu provincesWithStations
    const stationInfo = provincesWithStations
      .flatMap((province) => province.stations)
      .find((station) => station.code === stationId);

    if (stationInfo) {
      // Tìm fullName của tỉnh thuộc về ga
      const provinceFullName = provincesWithStations.find((province) =>
        province.stations.some((station) => station.code === stationId)
      )?.fullName;

      if (provinceFullName) {
        const stationData = {
          code: stationInfo.code,
          name: stationInfo.name,
          province: provinceFullName, // Province là fullName của tỉnh
        };

        if (isOrigin) {
          dispatch(setStartStationInfo(stationData)); // Cập nhật thông tin ga xuất phát
        } else {
          dispatch(setEndStationInfo(stationData)); // Cập nhật thông tin ga đến
        }
      }
    }
  };

  const options = data ? formatOptions(data.data) : [];
  return (
    <>
      <div
        onClick={handleFetchData}
        className="w-full sm:w-10/24 max-sm:after:content-[''] max-sm:after:w-[6rem] max-sm:after:absolute max-sm:after:top-012 max-sm:after:right-012 max-sm:after:bg-gradient-to-l max-sm:after:rounded-md max-sm:after:h-[calc(100%-4px)] sm:p-050 max-md:relative"
      >
        <SelectStation
          name="origin"
          placeholder={t("origin_placeholder")}
          label={t("origin")}
          isFetching={isFetching}
          options={options}
          value={origin}
          onSelect={(value) => {
            dispatch(setOrigin(value));
            handleSelectStation(value, true);
          }}
          error={errors.origin}
        />
      </div>
      <div className="sm:w-2/24 absolute bottom-0 right-0 top-0 z-[2] flex items-center justify-center pl-400 pr-300 sm:static sm:self-center sm:p-0">
        <button
          type="button"
          className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default rotate-45 rounded-md border-width-sm border-color-primary bg-color-canvas-primary p-100 active:bg-color-canvas-secondary sm:border-color-static-transparent sm:p-075 sm:hover:border-color-primary"
        >
          <FaExchangeAlt size={24} className="rotate-45 text-icon-color-primary sm:-rotate-45" />
        </button>
      </div>
      <div
        onClick={handleFetchData}
        className="w-full sm:w-12/24 max-sm:after:content-[''] max-sm:after:w-[6rem] max-sm:after:absolute max-sm:after:top-012 max-sm:after:right-012 max-sm:after:bg-gradient-to-l max-sm:after:rounded-md max-sm:after:h-[calc(100%-4px)] sm:p-050 max-sm:relative max-sm:border-t-width-sm max-sm:border-t-color-primary"
      >
        <SelectStation
          isFetching={isFetching}
          name="destination"
          placeholder={t("destination_placeholder")}
          label={t("destination")}
          options={options}
          value={destination}
          onSelect={(value) => {
            dispatch(setDestination(value));
            handleSelectStation(value, false);
          }}
          error={errors.destination}
        />
      </div>
    </>
  );
}
