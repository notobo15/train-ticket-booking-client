import React from "react";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import FloatingLabelSelect from "@/components/FloatingLabelSelect";
import ErrorMessage from "@/components/ErrorMessage";
import { IoIosArrowDown } from "react-icons/io";
import { useFormikContext } from "formik";

export default function PassengerItem({ passenger, seat }) {
  const { values, touched, errors, handleChange } = useFormikContext();

  return (
    <div className="my-4">
      <div className="flex justify-between">
        <span>{passenger.title}</span>
        <span>{passenger.description}</span>
      </div>
      <FloatingLabelInput
        id={`fullname-${passenger.id}`}
        label="Full name"
        value={values.passengers[passenger.id - 1]?.fullname}
        onChange={handleChange}
        error={touched.passengers?.[passenger.id - 1]?.fullname && errors.passengers?.[passenger.id - 1]?.fullname}
      />
      {touched.passengers?.[passenger.id - 1]?.fullname && errors.passengers?.[passenger.id - 1]?.fullname && (
        <ErrorMessage message={errors.passengers[passenger.id - 1].fullname} />
      )}

      <FloatingLabelInput
        id={`identityNumber-${passenger.id}`}
        label="Identity Number"
        value={values.passengers[passenger.id - 1]?.identityNumber}
        onChange={handleChange}
        error={
          touched.passengers?.[passenger.id - 1]?.identityNumber &&
          errors.passengers?.[passenger.id - 1]?.identityNumber
        }
      />
      {touched.passengers?.[passenger.id - 1]?.identityNumber &&
        errors.passengers?.[passenger.id - 1]?.identityNumber && (
          <ErrorMessage message={errors.passengers[passenger.id - 1].identityNumber} />
        )}

      <FloatingLabelSelect
        id={`seatNumber-${passenger.id}`}
        label="Select a Seat"
        name={`passengers[${passenger.id - 1}].seatNumber`}
        icon={<IoIosArrowDown className="text-icon-color-primary" size={24} />}
        value={values.passengers[passenger.id - 1]?.seatNumber || seat}
        onChange={handleChange}
        options={[{ label: `Seat ${seat}`, value: seat }]}
        error={touched.passengers?.[passenger.id - 1]?.seatNumber && errors.passengers?.[passenger.id - 1]?.seatNumber}
      />
      {touched.passengers?.[passenger.id - 1]?.seatNumber && errors.passengers?.[passenger.id - 1]?.seatNumber && (
        <ErrorMessage message={errors.passengers[passenger.id - 1].seatNumber} />
      )}
    </div>
  );
}
