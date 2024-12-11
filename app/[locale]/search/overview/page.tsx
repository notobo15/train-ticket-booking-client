"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Import useSearchParams để lấy query
import styles from "../search.module.scss";
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations("SearchForm");
  const searchState = useAppSelector(selectSearchState);

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
          <div>
            <BtnBackResult onClick={() => {}} />
            {/* <ReviewTicketOption onClick={() => {}} /> */}
            <ReviewTicketOptionResult />
          </div>
        </div>
      </div>
    </div>
  );
}
