"use client";
import React from "react";

export default function FloatingLabelInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  className = "",
  icon,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (_: string) => void;
  className: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center">
        <input
          type={type}
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="block px-2.5 pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent rounded-md border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        />
        {icon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            {icon}
          </div>
        )}
      </div>
      <label
        htmlFor={id}
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 left-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {label}
      </label>
    </div>
  );
}
