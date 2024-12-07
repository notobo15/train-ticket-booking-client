import React, { ChangeEvent } from "react";
import { FieldError } from "react-hook-form";

export default function FloatingLabelSelect({
  id,
  label,
  name,
  value,
  onChange,
  options,
  className = "",
  icon,
  error,
  disabled,
}: {
  id?: string;
  label: string;
  name?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string | number }[];
  className?: string;
  icon?: React.ReactNode;
  error?: string | boolean | FieldError | undefined;
  disabled?: boolean;
}) {
  return (
    <div className={`relative ${className}`}>
      <select
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        className={`block px-2.5 pb-2.5 pt-4 w-full text-base text-color-primary rounded-md border-2 ${
          error
            ? "border-[rgb(213,26,45)] bg-[rgb(255,238,239)]"
            : "border-gray-300 bg-transparent focus:border-blue-600"
        } appearance-none focus:outline-none focus:ring-0 peer`}
      >
        <option value="" disabled hidden>
          {label}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {icon && <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">{icon}</div>}
      <label
        htmlFor={id}
        className={`absolute text-sm ${
          error ? "text-[rgb(252,44,58)]" : "text-gray-500 dark:text-gray-400"
        } duration-300 transform -translate-y-4 scale-75 top-2 left-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4`}
      >
        {label}
      </label>
    </div>
  );
}
