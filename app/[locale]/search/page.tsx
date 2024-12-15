"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./search.module.scss";
import SearchForm from "@/components/SearchForm";
import TabDay from "@/components/TabDay";
import TabRouteTrip from "@/components/TabRouteTrip";
import ResultTrains from "@/components/ResultTrains";
import Header from "@/components/Header";
import BtnBackResult from "@/components/BtnBackResult";
import ReviewTicketOption from "@/components/ReviewTicketOption";
import ReviewTicketOptionResult from "@/components/ReviewTicketOptionResult";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setOrigin,
  setDestination,
  setDate,
  setReturnDate,
  setAdults,
  setChildren,
  setStudents,
  setSeniors,
  selectSearchState,
  setView,
  setCurrentSeats,
  setCurrentCarriage,
  addSeatHold,
  removeSeatHold,
  setStep,
  addSeatHoldReturn,
  removeSeatHoldReturn,
  clearSeatHold,
  clearSeatHoldReturn,
} from "@/redux/slices/searchSlice";
import { formatDateToYMD } from "@/utils/formatDate";
import TabFilterSearch from "@/components/TabFilterSearch";
import FilterModal from "@/components/ResultTrains/SeatWrapper/FilterModal";
import { useTranslations } from "next-intl";
import { setIsLoading } from "@/redux/slices/homeSlice";
import { useRouter } from "@/i18n/routing";
import axios from "axios";
import { toast } from "react-toastify";

// API calls
const fetchSeats = async ({
  trainId,
  departureStationCode,
  arrivalStationCode,
  departureDate,
  carriageId,
}: {
  trainId: number;
  departureStationCode: string;
  arrivalStationCode: string;
  departureDate: string | null;
  carriageId: number;
}) => {
  try {
    const response = await axios.post(`https://localhost:5001/api/v1/Seats/GetSeatsStatus/status`, {
      trainId,
      departureStationCode,
      arrivalStationCode,
      departureDate,
      carriageId,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching seats:", error);
    return null;
  }
};

const createSeatHold = async ({
  seatId,
  trainId,
  departureStationCode,
  arrivalStationCode,
  departureDate,
  carriageId,
}: {
  seatId: number;
  trainId: number;
  departureStationCode: string;
  arrivalStationCode: string;
  departureDate: string | null;
  carriageId: number;
}) => {
  const params = {
    trainId,
    departureStationCode,
    arrivalStationCode,
    departureDate,
    carriageId,
    seatId,
  };
  try {
    const response = await axios.post("https://localhost:5001/api/v1/SeatHold/CreateSeatHold", params);
    return response.data;
  } catch (error) {
    console.error("Error creating seat hold:", error);
    return null;
  }
};

const deleteSeatHold = async ({ seatholdId }: { seatholdId: number }) => {
  try {
    const response = await axios.delete(`'https://localhost:5001/api/v1/SeatHold/DeleteSeatHold/${seatholdId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting seat hold:", error);
    return null;
  }
};

// BookingPage Component
export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations("SearchForm");
  const [isOverviewVisible, setIsOverviewVisible] = useState(false);

  const isOpenModalFilter = useAppSelector(selectSearchState).isOpenModalFilter;
  const view = searchParams.get("view") || "outbound";
  const step = searchParams.get("step") || "outbound";
  const params = {
    origin: searchParams.get("origin") || "",
    destination: searchParams.get("destination") || "",
    date: searchParams.get("date") ? formatDateToYMD(new Date(searchParams.get("date") as string)) : null,
    returnDate: searchParams.get("return-date")
      ? formatDateToYMD(new Date(searchParams.get("return-date") as string))
      : null,
    adults: parseInt(searchParams.get("adults") || "0", 10),
    children: parseInt(searchParams.get("children") || "0", 10),
    students: parseInt(searchParams.get("students") || "0", 10),
    seniors: parseInt(searchParams.get("seniors") || "0", 10),
  };

  useEffect(() => {
    dispatch(setOrigin(params.origin));
    dispatch(setDestination(params.destination));
    dispatch(setDate(params.date));
    dispatch(setReturnDate(params.returnDate));
    dispatch(setAdults(params.adults));
    dispatch(setChildren(params.children));
    dispatch(setStudents(params.students));
    dispatch(setSeniors(params.seniors));
    dispatch(setView(view));
    dispatch(setStep(step));

    if (step === "outbound" && searchParams.get("view") === "result") {
      dispatch(clearSeatHold());
      dispatch(clearSeatHoldReturn());
    }
  }, [searchParams, dispatch, view]);

  useEffect(() => {
    if (params.returnDate) {
      setIsOverviewVisible(true);
    }
  }, [params.returnDate]);

  return (
    <div>
      {isOpenModalFilter && <FilterModal open={isOpenModalFilter} />}
      <div className="grid grid-cols-[minmax(0,80rem)] justify-center pe-[5vw] ps-[5vw] md:pe-[6.25vw] md:ps-[6.25vw] [background:var(--header-gradient)]">
        <header className={styles.header}>
          <div className="relative">
            <Header isShowCenter={false} className="py-150 md:py-150" />
            <SearchForm btnSubmit={t("update_submit_button")} />
          </div>
        </header>
      </div>
      <div>
        <div className={styles.main}>{view !== "overview" ? <Result /> : <Overview />}</div>
      </div>
    </div>
  );
}

// Result Component
function Result() {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  let { seathold, trainId, origin, destination, date, returnDate, currentCarriage, carriageId, step, seatholdReturn } =
    useAppSelector(selectSearchState);
  const isReturnStep = step === "return";

  const handleClickCarriage = useCallback(
    async (carriage: any) => {
      const params = {
        trainId,
        departureStationCode: isReturnStep ? destination : origin,
        arrivalStationCode: isReturnStep ? origin : destination,
        departureDate: isReturnStep ? returnDate : date,
        carriageId: carriageId,
      };
      const data = await fetchSeats(params);
      dispatch(setCurrentSeats(data?.data));
    },
    [trainId, origin, destination, date, carriageId, dispatch]
  );

  const handleClickSeat = useCallback(
    async (seat: Seat) => {
      const params = {
        trainId,
        carriageId: carriageId,
        seatId: seat.seatId,
        departureStationCode: isReturnStep ? destination : origin,
        arrivalStationCode: isReturnStep ? origin : destination,
        departureDate: isReturnStep ? returnDate : date,
      };

      if (seat.status === "available") {
        if (isReturnStep && seatholdReturn.length === seathold.length) {
          toast.error("Không thể đặt nhiều số vé khi đi.");
          return;
        }

        const createSeat = await createSeatHold(params);

        if (createSeat.success) {
          toast.success(createSeat.message, { autoClose: 1000 });
          if (isReturnStep) {
            dispatch(addSeatHoldReturn(createSeat.result)); // Lưu vào seatholdreturn
          } else {
            dispatch(addSeatHold(createSeat.result)); // Lưu vào seathold
          }
          const seats = await fetchSeats(params);
          dispatch(setCurrentSeats(seats?.result));
        } else {
          toast.error(createSeat.message, { autoClose: 1000 });
        }
      } else if (seat.status === "booked") {
        const seatholdId = isReturnStep
          ? seatholdReturn.find((s) => s.seat?.seatId === seat.seatId)?.id || 0
          : seathold.find((s) => s.seat?.seatId === seat.seatId)?.id || 0;

        const deleteSeat = await deleteSeatHold({ seatholdId });

        if (deleteSeat.success) {
          toast.success(deleteSeat.message, { autoClose: 1000 });
          const seats = await fetchSeats(params);
          dispatch(setCurrentSeats(seats?.result));
          if (isReturnStep) {
            dispatch(removeSeatHoldReturn(seatholdId)); // Xóa khỏi seatholdreturn
          } else {
            dispatch(removeSeatHold(seatholdId)); // Xóa khỏi seathold
          }
        } else {
          toast.error(deleteSeat.message, { autoClose: 1000 });
        }
      }
    },
    [trainId, origin, destination, date, carriageId, seathold, seatholdReturn, isReturnStep, dispatch]
  );

  return (
    <div>
      <TabDay date={isReturnStep ? returnDate : date} />
      {returnDate && <TabRouteTrip isOutbound={!isReturnStep} />}
      <TabFilterSearch />
      <ResultTrains onClickSeat={handleClickSeat} onClickCarriage={handleClickCarriage} />
    </div>
  );
}

// Overview Component
function Overview() {
  return (
    <div>
      <BtnBackResult />
      <ReviewTicketOption />
      <ReviewTicketOptionResult />
    </div>
  );
}
