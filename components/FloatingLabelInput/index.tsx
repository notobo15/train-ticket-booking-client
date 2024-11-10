"use client";
import React, { ChangeEvent } from "react";

export default function FloatingLabelInput({
  id,
  label,
  type = "text",
  name,
  value,
  onChange,
  className = "",
  icon,
  error,
  disabled,
  description,
}: {
  id: string;
  label: string;
  type?: string;
  name?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void; // Updated type
  className?: string;
  icon?: React.ReactNode;
  error?: string | boolean;
  disabled?: boolean;
  description?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <input
        type={type}
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
        placeholder=" "
      />

      {icon && <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">{icon}</div>}

      <label
        htmlFor={id}
        className={`absolute text-sm ${
          error ? "text-[rgb(252,44,58)]" : "text-gray-500 dark:text-gray-400"
        } duration-300 transform -translate-y-4 scale-75 top-2 left-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4`}
      >
        {label}
      </label>
      {description && <p className="absolute mt-1 ms-2 text-xs text-gray-500">{description}</p>}
    </div>
  );
}
