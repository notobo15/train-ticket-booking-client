import React from "react";
import { Checkbox } from "antd";
import clsx from "clsx";

import { TbSunset2 } from "react-icons/tb";
import { BsCloudSun } from "react-icons/bs";
import { GiStripedSun } from "react-icons/gi";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { RiTimeZoneLine } from "react-icons/ri";
import { IoFilter, IoMoonOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectSearchState, setIsOpenModalFilter, updateFilter } from "@/redux/slices/searchSlice";
import FilterTime from "./FilterTime";

interface FilterProps {
  checkedItems: {
    nighttime: boolean;
    early: boolean;
    midday: boolean;
    late: boolean;
  };
  onCheckboxChange: (key: string, checked: boolean) => void;
}

export default function Filter() {
  const dispatch = useAppDispatch();
  const checkedItems = useAppSelector(selectSearchState).filters;

  const handleCheckboxChange = (key: string) => (e: CheckboxChangeEvent) => {
    dispatch(updateFilter({ key, value: e.target.checked }));
  };
  return (
    <div className="sidebarWrapper">
      <div className="xl:hidden">
        <button
          onClick={() => dispatch(setIsOpenModalFilter(true))}
          className={clsx(
            "sidebarBtn",
            "focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-neutral-100 text-color-primary hover:text-color-secondary active:bg-color-scheme-neutral-200 active:text-color-primary w-full mt-[16px]"
          )}
        >
          <span className="shrink-0 text-icon-color-primary">
            <IoFilter />
          </span>
          <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">Filters</span>
        </button>
      </div>
      <div className="hidden divide-y-width-sm divide-color-primary xl:block">
        <FilterTime />
      </div>
    </div>
  );
}
interface FilterItemProps {
  label: string;
  icon: React.ReactNode;
  description: string;
  checked: boolean;
  onChange: (e: CheckboxChangeEvent) => void;
}
