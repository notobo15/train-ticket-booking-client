"use client";
import DatePickerInput from "@/components/DatePicker/DatePickerInput";
import SelectStation from "@/components/SelectStation/SelectStation";
import { useGetProvincesWithStationsQuery, useLazyGetProvincesWithStationsQuery } from "@/services/provinceApi";
import { formatOptions } from "@/utils/formatOptions";
import { FaSearch } from "react-icons/fa"; // Importing the search icon from react-icons
import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { useLazyGetTrainSchedulesQuery } from "@/services/trainsApi";
import { formatCurrencyVND, formatDateToDDMMYYYY, formatDateToYMD, formatPriceK } from "@/utils/formatDate";

const TrainSchedulePage = () => {
  const [fetchProvincesWithStations, { data, error, isFetching }] = useLazyGetProvincesWithStationsQuery();
  const [fetchTrainSchedules, { data: trains, isFetching: trainSchedulesIsLoading }] = useLazyGetTrainSchedulesQuery();
  const options = data ? formatOptions(data.data) : [];

  const [selectedDeparture, setSelectedDeparture] = useState<string>("");
  const [selectedArrival, setSelectedArrival] = useState<string>("");
  const [travelDate, setTravelDate] = useState<string>("");
  const [startStation, setStartStation] = useState("");
  const [endStation, setEndStation] = useState("");
  const [date, setDate] = useState(new Date());
  const [currentTrain, setCurrentTrain] = useState<Train>();
  const [errorStations, setErrorStations] = useState({ startStation: false, endStation: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentTrain(undefined);
    const hasError = {
      startStation: startStation === "",
      endStation: endStation === "",
    };

    setErrorStations((prev) => ({
      ...prev,
      ...hasError,
    }));

    if (hasError.startStation || hasError.endStation) {
      return;
    }

    fetchTrainSchedules({
      departureDate: formatDateToYMD(date),
      startStationCode: startStation,
      endStationCode: endStation,
      passengerCount: 0,
    });
  };
  useEffect(() => {
    if (startStation || endStation) {
      fetchProvincesWithStations();
    }
  }, [startStation, endStation]);

  const handleDepartureChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDeparture(event.target.value);
  };

  const handleArrivalChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedArrival(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTravelDate(event.target.value);
  };

  const handleFetchData = () => {
    fetchProvincesWithStations();
  };

  const handleViewTrainDetails = () => {
    // Here you can filter data based on selected departure, arrival, and travel date
  };

  useEffect(() => {
    if (startStation) {
      setErrorStations((prev) => ({
        ...prev,
        startStation: false,
      }));
    }
  }, [startStation]);

  useEffect(() => {
    if (endStation) {
      setErrorStations((prev) => ({
        ...prev,
        endStation: false,
      }));
    }
  }, [endStation]);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Thông tin hành trình</h1>

      <form onSubmit={handleSubmit}>
        <div className="flex items-center space-x-4 mb-4 border p-4 rounded-lg">
          <div className="flex-1">
            <div onClick={handleFetchData}>
              <SelectStation
                name="startstation"
                placeholder="Chọn ga đi"
                label="Ga đi"
                isFetching={isFetching}
                options={options}
                value={startStation}
                onSelect={(value) => {
                  setStartStation(value);
                }}
                error={errorStations.startStation}
              />
            </div>
          </div>
          <div className="flex-1">
            <div onClick={handleFetchData}>
              <SelectStation
                name="endstation"
                placeholder="Chọn ga đến"
                label="Ga đến"
                isFetching={isFetching}
                options={options}
                value={endStation}
                onSelect={(value) => {
                  setEndStation(value);
                }}
                error={errorStations.endStation}
              />
            </div>
          </div>
          <div className="flex-1">
            <DatePickerInput
              label="Chọn ngày đi"
              name="date"
              defaultValue={formatDateToYMD(date)}
              onDateChange={(value) => {
                if (value) {
                  setDate(value);
                }
              }}
              minDate={date}
              placeholder="Chọn ngày"
            />
          </div>
          <div className="flex-1">
            <button
              type="submit"
              disabled={trainSchedulesIsLoading}
              className="bg-blue-500 text-white flex items-center justify-center px-6 py-2 rounded w-full h-[54px]"
            >
              <FaSearch className="mr-2" size={24} />
              <span className="font-semibold fs-6"> {trainSchedulesIsLoading ? "Đang tìm kiếm..." : "Tìm kiếm"}</span>
            </button>
          </div>
        </div>
      </form>
      {trainSchedulesIsLoading && (
        <div className="px-4 py-8 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 flex items-center" role="alert">
          <svg
            className="animate-spin h-5 w-5 text-blue-500 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          <span className="font-medium">Loading search train</span>.
        </div>
      )}

      {/* Train List */}

      {!trainSchedulesIsLoading && trains?.success && trains?.data?.length > 0 && (
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Danh sách tàu</h2>
          <div className="space-y-4">
            {trains?.data?.map((train, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-sm"
                // onClick={() => setCurrentTrain(train)}
              >
                <div>
                  <h3 className="text-xl font-semibold">{train.trainNumber}</h3>
                  <p className="text-sm text-gray-500">{train.totalDuration}</p>
                  <p className="text-sm text-gray-700">
                    Ga đi: {formatDateToDDMMYYYY(new Date(train.departureDate))} ({train.departureTime})
                  </p>
                  <p className="text-sm text-gray-700">
                    Ga đến: {formatDateToDDMMYYYY(new Date(train.arrivalDate || ""))} ({train.arrivalTime})
                  </p>
                </div>
                <button onClick={() => setCurrentTrain(train)} className="bg-blue-600 text-white px-4 py-2 rounded">
                  Xem chi tiết
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Train Journey Table */}
      {!trainSchedulesIsLoading && currentTrain && (
        <div className="flex space-x-8 mt-8">
          {/* Journey Stations Table */}
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-4">Các ga trong hành trình</h2>
            <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 border-b text-left">STT</th>
                  <th className="px-4 py-3 border-b text-left">Ga đi</th>
                  <th className="px-4 py-3 border-b text-left">Ga đến</th>
                  <th className="px-4 py-3 border-b text-left">Cự ly (Km)</th>
                  <th className="px-4 py-3 border-b text-left">Ngày đi</th>
                  <th className="px-4 py-3 border-b text-left">Giờ đến</th>
                  <th className="px-4 py-3 border-b text-left">Giờ đi</th>
                </tr>
              </thead>
              <tbody>
                {!trainSchedulesIsLoading &&
                  currentTrain.routes.map((route, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b">{index + 1}</td>
                      <td className="px-4 py-2 border-b">{route.startStationName}</td>
                      <td className="px-4 py-2 border-b">{route.endStationName}</td>
                      <td className="px-4 py-2 border-b">{route.distance}</td>
                      <td className="px-4 py-2 border-b">
                        {new Date(
                          new Date(currentTrain.departureDate).getTime() + route.dateNumber * 24 * 60 * 60 * 1000
                        ).toLocaleDateString("vi-VN")}
                      </td>
                      <td className="px-4 py-2 border-b">{route.arrivalTime}</td>
                      <td className="px-4 py-2 border-b">{route.departureTime}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* Ticket Price Table */}
          <div className="w-1/3">
            <h2 className="text-2xl font-bold mb-4">Bảng giá vé</h2>
            <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 border-b text-left">STT</th>
                  <th className="px-4 py-3 border-b text-left">Mã</th>
                  {/* <th className="px-4 py-3 border-b text-left">Loại chỗ</th> */}
                  <th className="px-4 py-3 border-b text-left">Giá vé (₫)</th>
                </tr>
              </thead>
              <tbody>
                {currentTrain.prices.map((price, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b">{index + 1}</td>
                    <td className="px-4 py-2 border-b">{price.code}</td>
                    {/* <td className="px-4 py-2 border-b">{price.seatType}</td> */}
                    <td className="px-4 py-2 border-b">{formatCurrencyVND(price.totalPrice)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-sm text-gray-500">
              Chú ý: Giá vé đã bao gồm tiền bảo hiểm. Giá có thể thay đổi theo 1 số điều kiện: thời gian mua vé, đối
              tượng đi tàu, vị trí chỗ trên toa...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainSchedulePage;
