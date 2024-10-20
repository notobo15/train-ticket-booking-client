"use client";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePicker.module.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

interface DatePickerInputProps {
  label: string;
  placeholder?: string;
  minDate?: Date | null;
  isReturnDate?: boolean;
  onDateChange: (date: Date | null) => void;
  defaultValue?: Date | null;
}

const CustomInput = React.forwardRef<HTMLDivElement, any>(
  ({ value, onClick, placeholder, label, onClear, isReturnDate }, ref) => (
    <div className={styles.wrapperInput} onClick={onClick} ref={ref}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputContent}>
        <input
          className={styles.input}
          type="text"
          value={value || ""}
          placeholder={value ? undefined : placeholder}
          readOnly
        />
        {isReturnDate &&
          value && ( // Chỉ hiển thị nút "X" nếu là Return Date và đã có giá trị
            <span
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                e.stopPropagation(); // Ngăn việc mở lại DatePicker khi xóa
                onClear();
              }}
            >
              <FaTimes className={styles.clearIcon} />
            </span>
          )}
      </div>
    </div>
  )
);

CustomInput.displayName = "CustomInput";

const DatePickerInput = ({
  label,
  placeholder = "Select a date",
  minDate = new Date(),
  isReturnDate = false,
  onDateChange,
  defaultValue = null,
}: DatePickerInputProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(defaultValue);

  useEffect(() => {
    setSelectedDate(defaultValue);
  }, [defaultValue]);

  return (
    <div className={styles.wrapper}>
      <DatePicker
        selected={selectedDate}
        minDate={minDate || undefined}
        dateFormat="EEE, MMM dd"
        placeholderText={placeholder}
        onChange={(date: Date | null) => {
          setSelectedDate(date);
          onDateChange(date);
        }}
        customInput={
          <CustomInput
            label={label}
            placeholder={placeholder}
            isReturnDate={isReturnDate}
            onClear={() => {
              setSelectedDate(null);
              onDateChange(null);
            }}
          />
        }
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className={styles.header}>
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              <FaAngleLeft />
            </button>
            <span>
              {date.toLocaleString("default", { month: "long" })}{" "}
              {date.getFullYear()}
            </span>
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              <FaAngleRight />
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default DatePickerInput;
