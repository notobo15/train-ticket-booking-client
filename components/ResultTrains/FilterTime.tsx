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

export default function FilterTime() {
  const dispatch = useAppDispatch();
  const checkedItems = useAppSelector(selectSearchState).filters;

  const handleCheckboxChange = (key: string) => (e: CheckboxChangeEvent) => {
    dispatch(updateFilter({ key, value: e.target.checked }));
  };
  return (
    <fieldset className="group py-200 first:pt-150">
      <h3 className="flex">
        <button
          className="focus-visible:outline-none focus-visible:ring"
          aria-controls=":r6:"
          aria-expanded="true"
          type="button"
        >
          <div className="font-weight-bold text-size-87 leading-100 inline-flex items-center gap-x-025">
            <span className="shrink-0">
              <RiTimeZoneLine size={20} className="text-color-primary" />
            </span>
            <span>Departure time</span>
          </div>
        </button>
      </h3>
      <div className="grid transition-[grid-template-rows] duration-150 ease-out grid-rows-[1fr]">
        <div className="overflow-hidden user-select-none">
          <FilterItem
            label="Nighttime"
            icon={<IoMoonOutline size={24} className="text-color-scheme-functional-informative-500" />}
            description="Before 6am"
            checked={checkedItems.nighttime}
            onChange={handleCheckboxChange("nighttime")}
          />
          <FilterItem
            label="Early"
            icon={<TbSunset2 size={26} className="text-color-scheme-functional-special-500" />}
            description="6am - 11am"
            checked={checkedItems.early}
            onChange={handleCheckboxChange("early")}
          />
          <FilterItem
            label="Midday"
            icon={<BsCloudSun size={24} className="text-color-scheme-functional-notice-500" />}
            description="11am - 5pm"
            checked={checkedItems.midday}
            onChange={handleCheckboxChange("midday")}
          />
          <FilterItem
            label="Late"
            icon={<GiStripedSun size={24} className="text-color-scheme-literal-purple-500" />}
            description="After 5pm"
            checked={checkedItems.late}
            onChange={handleCheckboxChange("late")}
          />
        </div>
      </div>
    </fieldset>
  );
}
interface FilterItemProps {
  label: string;
  icon: React.ReactNode;
  description: string;
  checked: boolean;
  onChange: (e: CheckboxChangeEvent) => void;
}

const FilterItem = ({ label, icon, description, checked, onChange }: FilterItemProps) => (
  <div className="flex items-center justify-between">
    <div className="sidebarItemLeft">
      <Checkbox checked={checked} onChange={onChange}>
        <span className="flex justify-between items-center gap-3">
          {icon}
          <span>{label}</span>
        </span>
      </Checkbox>
    </div>
    <p className="max-w-full text-size-87 leading-100 inline-block text-color-tertiary">{description}</p>
  </div>
);
