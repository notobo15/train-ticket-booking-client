"use client";
import React, { useState } from "react";
import DatePickerInput from "./DatePickerInput";

const MainComponent = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [returnDate, setReturnDate] = useState<Date | null>(null);

  return (
    <div>
      <DatePickerInput
        label="Date"
        placeholder="Select a date"
        onDateChange={(date: Date | null) => {
          setSelectedDate(date);
          setReturnDate(null);
        }}
        defaultValue={selectedDate}
      />
      <DatePickerInput
        label="Return Date"
        placeholder="Optional"
        defaultValue={returnDate}
        isReturnDate={true}
        minDate={selectedDate}
        onDateChange={setReturnDate}
      />
    </div>
  );
};

export default MainComponent;
