"use client";
import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Passager.module.scss";
import { FaMinus, FaPlus } from "react-icons/fa";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectSearchState, setPassegers } from "@/redux/slices/searchSlice";
import { useTranslations } from "next-intl";

export default function Index() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("SearchForm");
  // const [passengers, setPassengers] = useState<IPassager[]>();
  const passengers = useAppSelector(selectSearchState).passagers;
  const dispatch = useAppDispatch();
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const totalPassengers = passengers.reduce((sum, item) => sum + item.value, 0);

  const validatePassengers = (newPassengers: IPassager[]): boolean => {
    const children = newPassengers.find((passenger) => passenger.id === 2)?.value || 0;
    const total = newPassengers.reduce((sum, item) => sum + item.value, 0);

    if (total > 10) {
      toast.error("Số lượng vé không được vượt quá 10.");
      return false;
    }

    if (children > 0 && children === total) {
      toast.error("Trẻ em phải có ít nhất một người lớn đi cùng.");
      return false;
    }

    if (total === 0) {
      toast.error("Phải có ít nhất 1 người từ bất kỳ nhóm nào.");
      return false;
    }

    return true;
  };

  const handleChange = (value: number, id: number) => {
    const newPassengers = passengers.map((passenger) =>
      passenger.id === id ? { ...passenger, value: value < 0 ? 0 : value } : passenger
    );

    if (validatePassengers(newPassengers)) {
      dispatch(setPassegers(newPassengers));
      // setPassengers(newPassengers);
    }
  };
  useEffect(() => {
    if (passengers.length >= 10) {
      toast.error("Số lượng vé không được vượt quá 10.");
    }
  }, [passengers]);
  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      {passengers.map(
        (item) =>
          item.value !== 0 && (
            <input
              key={item.id}
              type="hidden"
              hidden
              name={item.title.toLocaleLowerCase()}
              defaultValue={item.value}
              readOnly
            />
          )
      )}

      <div className={styles.input} onClick={toggleDropdown}>
        <label htmlFor="customSelect" className={styles.label}>
          {t("passengers")}
        </label>
        <div className={styles.main}>
          <div className={styles.mainLabel}>
            <span>{`${totalPassengers} ${t("passengers")}`}</span>
          </div>
        </div>
      </div>
      {isDropdownOpen && (
        <div className={styles.wrapperDropDown}>
          <div className="flex flex-col gap-100">
            {passengers.map((item: IPassager) => (
              <Item
                onChange={handleChange}
                value={item.value}
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
                total={totalPassengers}
              />
            ))}
          </div>
        </div>
      )}
      <ToastContainer limit={3} />
    </div>
  );
}

function Item({
  value,
  title,
  description,
  id,
  total,
  onChange,
}: {
  value: number;
  title: string;
  description?: string;
  id: number;
  total: number;
  onChange: (value: number, id: number) => void;
}) {
  function handleIncrement() {
    onChange(value + 1, id);
  }

  function handleDecrement() {
    onChange(value - 1, id);
  }
  function handleDisbleDecrement(value: number): boolean {
    if (value <= 0) {
      return true;
    }
    if (value === 1 && total === 1) {
      return true;
    }

    return false;
  }
  function handleDisbleIncrement(value: number): boolean {
    if (total >= 10 || value >= 10) {
      return true;
    }

    return false;
  }
  return (
    <div className="px-100 py-050">
      <div className="flex items-center justify-between gap-100">
        <div className="flex flex-col">
          <span className="max-w-full text-size-100 leading-125 inline-block text-color-secondary">{title}</span>
          <span className="text-size-75 leading-100 text-color-secondary">{description}</span>
        </div>
        <div className="flex items-center gap-100">
          <button
            disabled={handleDisbleDecrement(value)}
            type="button"
            onClick={handleDecrement}
            className={clsx(
              "focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center p-100 rounded-xs hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-elevation-flat-glass shadow-elevation-flat hover:bg-color-elevation-raised-canvas hover:shadow-elevation-raised active:bg-color-elevation-flat-glass active:shadow-elevation-flat text-icon-color-primary",
              styles.btn
            )}
          >
            <FaMinus width={24} height={24} />
          </button>
          <span className="max-w-full font-weight-bold text-size-100 leading-125 inline-block w-300 select-none text-center text-color-secondary">
            {value}
          </span>
          <button
            disabled={handleDisbleIncrement(value)}
            type="button"
            onClick={handleIncrement}
            className={clsx(
              "focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center p-100 rounded-xs hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-elevation-flat-glass shadow-elevation-flat hover:bg-color-elevation-raised-canvas hover:shadow-elevation-raised active:bg-color-elevation-flat-glass active:shadow-elevation-flat text-icon-color-primary",
              styles.btn
            )}
          >
            <FaPlus width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
