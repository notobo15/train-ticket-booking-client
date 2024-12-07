"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Import useSearchParams để lấy query
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
} from "@/redux/slices/searchSlice";
import { formatDateToYMD } from "@/utils/formatDate";
import TabFilterSearch from "@/components/TabFilterSearch";
import FilterModal from "@/components/ResultTrains/SeatWrapper/FilterModal";
import { useTranslations } from "next-intl";
import { setIsLoading } from "@/redux/slices/homeSlice";
import { useRouter } from "@/i18n/routing";
import { number } from "yup";

type StepProps = {
  onNext: () => void;
  onBack?: () => void;
  onCallBack?: () => void;
  isReturnStep?: boolean;
  isOutbound?: boolean;
};

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const dispatch = useAppDispatch();
  const router = useRouter(); // Dùng để điều hướng
  const searchParams = useSearchParams(); // Dùng để lấy query params từ URL
  const t = useTranslations("SearchForm");

  const [isOverviewVisible, setIsOverviewVisible] = useState(false);
  // const searchState = useAppSelector(selectSearchState);

  // Effect để khởi tạo bước dựa trên URL params
  // useEffect(() => {
  //   const stepParam = searchParams.get("view");
  //   if (stepParam) {
  //     const step = parseInt(stepParam, 10);
  //     if (!isNaN(step) && step >= 1 && step <= 4) {
  //       setCurrentStep(step);
  //     }
  //   }
  //   if (Number(stepParam) == 4) router.push(`/checkout`);
  //   dispatch(setIsLoading(false));
  // }, [searchParams]);

  // Effect để khởi tạo các tham số tìm kiếm
  const isOpenModalFilter = useAppSelector(selectSearchState).isOpenModalFilter;
  const view = searchParams.get("view");
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
  }, [searchParams, dispatch]);

  useEffect(() => {
    if (params.returnDate) {
      setIsOverviewVisible(true);
    }
  }, [params.returnDate]);
  // Function để chuyển sang bước tiếp theo và cập nhật URL giữ nguyên params cũ
  const handleContinue = () => {
    if (params.returnDate) {
      // Chuyển đến result cho chuyến đi và chuyến về
      // router.push(`/result?origin=${origin}&destination=${destination}`);
    } else {
      // Nếu không có return-date, chuyển đến checkout
      // router.push(`/checkout?origin=${origin}&destination=${destination}`);
    }
  };

  return (
    <div>
      {isOpenModalFilter && <FilterModal open={isOpenModalFilter} />}
      <div className="grid grid-cols-[minmax(0,80rem)] justify-center pe-[5vw] ps-[5vw] md:pe-[6.25vw] md:ps-[6.25vw] [background:var(--header-gradient)]">
        <header className={styles.header}>
          <div className="relative">
            <Header isShowCenter={false} className="py-150 md:py-150" />
            {<SearchForm btnSubmit={t("update_submit_button")} />}
          </div>
        </header>
      </div>
      <div>
        <div className={styles.main}>
          {/* {params.returnDate && isOverviewVisible ? ( */}
          {view !== "overview" ? <Result date={params.date} returnDate={params.returnDate} /> : <Overview />}
          {/* ) : ( */}

          {/* )} */}

          {/* <div>
            <TabDay date={params.date ? formatDateToYMD(new Date(params.date)) : null} />
            {params.returnDate && <TabRouteTrip isOutbound={params.returnDate !== null} onCallBack={() => {}} />}
            <TabFilterSearch />
            <ResultTrains onNext={() => {}} />
          </div> */}
        </div>
      </div>
    </div>
  );
}

function Result({ date, returnDate }: { date: string | null; returnDate: string | null }) {
  return (
    <div>
      <TabDay date={date ? formatDateToYMD(new Date(date)) : null} />
      {returnDate && <TabRouteTrip isOutbound={returnDate !== null} onCallBack={() => {}} />}
      <TabFilterSearch />
      <ResultTrains onNext={() => {}} />
    </div>
  );
}
function Overview() {
  return (
    <div>
      <BtnBackResult onClick={() => {}} />
      <ReviewTicketOption onClick={() => {}} />
      <ReviewTicketOptionResult />
    </div>
  );
}
