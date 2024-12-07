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
  const searchState = useAppSelector(selectSearchState);

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
  // useEffect(() => {
  dispatch(setOrigin(searchParams.get("origin") || ""));
  dispatch(setDestination(searchParams.get("destination") || ""));
  dispatch(setDate(searchParams.get("date") ? formatDateToYMD(new Date(searchParams.get("date") as string)) : null));
  dispatch(
    setReturnDate(
      searchParams.get("return-date") ? formatDateToYMD(new Date(searchParams.get("return-date") as string)) : null
    )
  );
  dispatch(setAdults(parseInt(searchParams.get("adults") || "0", 10)));
  dispatch(setChildren(parseInt(searchParams.get("children") || "0", 10)));
  dispatch(setStudents(parseInt(searchParams.get("students") || "0", 10)));
  dispatch(setSeniors(parseInt(searchParams.get("seniors") || "0", 10)));
  // }, [searchParams, dispatch]);

  // Function để chuyển sang bước tiếp theo và cập nhật URL giữ nguyên params cũ
  const handleNextStep = () => {
    const nextStep = currentStep + 1;
    if (nextStep <= 4) {
      setCurrentStep(nextStep);

      // Tạo một đối tượng mới để giữ nguyên các tham số cũ và thêm `view`
      const params = new URLSearchParams(searchParams.toString());
      params.set("view", nextStep.toString());
      if (nextStep === 5) router.push(`/checkout`); // Cập nhật URL với query mới
    }
  };

  // Function để quay lại bước trước đó và cập nhật URL giữ nguyên params cũ
  const handlePreviousStep = () => {
    const prevStep = currentStep - 1;
    if (prevStep >= 1) {
      setCurrentStep(prevStep);

      // Tạo một đối tượng mới để giữ nguyên các tham số cũ và thêm `view`
      const params = new URLSearchParams(searchParams.toString());
      params.set("view", prevStep.toString());

      router.push(`?${params.toString()}`); // Cập nhật URL với query mới
    }
  };

  // Function để reset về bước 1
  const resetToStep1 = () => {
    setCurrentStep(1);
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", "1");
    router.push(`/checkout`);
  };

  const isOpenModalFilter = useAppSelector(selectSearchState).isOpenModalFilter;
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
          {currentStep === 1 && <Step1 onNext={handleNextStep} isOutbound />}
          {currentStep === 2 && <Step2 onBack={handlePreviousStep} onNext={handleNextStep} />}
          {currentStep === 3 && (
            <Step1
              onNext={handleNextStep}
              isReturnStep
              isOutbound={false}
              onCallBack={resetToStep1} // Truyền callback để reset bước
            />
          )}
          {currentStep === 4 && <Step2 onBack={handlePreviousStep} onNext={handleNextStep} isReturnStep />}
        </div>
      </div>
    </div>
  );
}

function Step1({ onNext, isReturnStep = false, isOutbound, onCallBack }: StepProps) {
  const searchState = useAppSelector(selectSearchState);
  return (
    <div>
      <TabDay date={searchState.date ? formatDateToYMD(new Date(searchState.date)) : null} />
      {searchState.returnDate && <TabRouteTrip isOutbound={isOutbound} onCallBack={onCallBack} />}
      <TabFilterSearch />
      <ResultTrains onNext={() => onNext} />
      <button onClick={onNext} className="btn-primary">
        {isReturnStep ? "Next to Review" : "Next"}
      </button>
    </div>
  );
}

function Step2({ onBack, onNext, isReturnStep = false }: StepProps) {
  return (
    <div>
      <BtnBackResult onClick={onBack ? onBack : () => {}} />
      <ReviewTicketOption onClick={onNext} />
      <ReviewTicketOptionResult />
      <button onClick={onNext} className="btn-primary">
        {isReturnStep ? "Proceed to Checkout" : "Next"}
      </button>
    </div>
  );
}
