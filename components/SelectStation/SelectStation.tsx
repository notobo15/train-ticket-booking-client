"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./SelectStation.module.scss";
import SearchInput from "./SearchInput";
import OptionList from "./OptionList";
import Empty from "./Empty";
import Loading from "./Loading";
import { normalizeVietnameseText } from "@/utils/textUtils";
import clsx from "clsx";
import { useAppDispatch } from "@/redux/hooks";
import { setArrivalStationId } from "@/redux/slices/searchSlice";

interface OptionType {
  label: string;
  value: string;
}

interface GroupType {
  label: string;
  options: OptionType[];
}

interface CustomSelectProps {
  options: GroupType[];
  label: string;
  placeholder: string;
  isLoading?: boolean;
  name: string;
  value: string;
  isFetching: boolean;
  onSelect: (value: any) => void; // Callback to get selected option value
  error: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  label,
  placeholder,
  isLoading = false,
  name,
  value,
  onSelect,
  isFetching,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<GroupType[]>(options);
  const selectRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const handleSelectOption = (option: OptionType) => {
    setSelectedOption(option);
    setSearchQuery("");
    setIsOpen(false);
    onSelect(option.value); // Pass selected option value to onSelect callback
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  // Thiết lập selectedOption dựa trên giá trị mặc định khi khởi tạo hoặc khi value thay đổi
  useEffect(() => {
    if (value) {
      const selected = options.flatMap((group) => group.options).find((option) => option.value === value);
      setSelectedOption(selected || null);
    }
  }, [value, options]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredOptions(options);
    } else {
      const normalizedQuery = normalizeVietnameseText(searchQuery.toLowerCase());
      const newFilteredOptions = options
        .map((group) => ({
          ...group,
          options: group.options.filter((option) =>
            normalizeVietnameseText(option.label.toLowerCase()).includes(normalizedQuery)
          ),
        }))
        .filter((group) => group.options.length > 0);
      setFilteredOptions(newFilteredOptions);
    }
  }, [searchQuery, options]);

  return (
    <div className={styles.wrapper} ref={selectRef}>
      <>
        <input type="hidden" defaultValue={value} name={name} hidden readOnly />
        <label htmlFor="customSelect" className={styles.label}>
          {label}
        </label>
        <div className={clsx(styles.selectBox, { [styles.error]: error })} onClick={toggleDropdown}>
          <div className={styles.selected}>
            {isOpen ? (
              <>
                <SearchInput
                  name={name}
                  inputRef={searchInputRef}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  setIsFocused={setIsFocused}
                />
                <ul className={styles.optionsList}>
                  {isFetching || isLoading ? (
                    <Loading />
                  ) : filteredOptions.length > 0 ? (
                    <OptionList
                      groups={filteredOptions}
                      selectedOption={selectedOption}
                      handleSelectOption={handleSelectOption}
                    />
                  ) : (
                    <Empty />
                  )}
                </ul>
              </>
            ) : (
              <div className={styles.dropdown}>{selectedOption ? selectedOption.label : placeholder}</div>
            )}
          </div>
        </div>
      </>
    </div>
  );
};

export default CustomSelect;
