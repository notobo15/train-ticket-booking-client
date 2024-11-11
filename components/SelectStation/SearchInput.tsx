import React from "react";
import styles from "./SelectStation.module.scss";

interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setIsFocused: (focused: boolean) => void;
  inputRef: React.RefObject<HTMLInputElement>; // Nhận ref từ bên ngoài
  name: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchQuery, setSearchQuery, setIsFocused, inputRef, name }) => {
  return (
    <input
      ref={inputRef}
      type="text"
      name={name}
      className={styles.searchInput}
      placeholder="Tìm kiếm ga..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

export default SearchInput;
