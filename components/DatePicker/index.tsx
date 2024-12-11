"use client";
import React from "react";
import DatePickerInput from "./DatePickerInput";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectSearchState, setDate, setReturnDate } from "@/redux/slices/searchSlice";
import { formatDateToYMD } from "@/utils/formatDate";
import { useTranslations } from "next-intl";

const MainComponent = () => {
  const dispatch = useAppDispatch();
  const { date: selectedDate, returnDate } = useAppSelector(selectSearchState);
  // const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  // const [returnDate, setReturnDate] = useState<Date | null>(null);
  const t = useTranslations("SearchForm");

  console.log("selectedDate", selectedDate);
  return (
    <>
      <div className="w-12/24 sm:p-050">
        <DatePickerInput
          name="date"
          label={t("date")}
          placeholder="Select a date"
          minDate={new Date()}
          onDateChange={(date) => {
            dispatch(setDate(date ? formatDateToYMD(date) : null));
            dispatch(setReturnDate(null));
          }}
          defaultValue={selectedDate}
        />
      </div>
      <div className="w-12/24 border-l-width-sm border-l-color-primary sm:p-050">
        <DatePickerInput
          name="return-date"
          label={t("return_date")}
          placeholder={t("return_date_placeholder")}
          defaultValue={returnDate}
          isReturnDate={true}
          minDate={selectedDate ? new Date(selectedDate) : null}
          onDateChange={(date) => dispatch(setReturnDate(date ? formatDateToYMD(date) : null))}
        />
      </div>
    </>
  );
};

export default MainComponent;
