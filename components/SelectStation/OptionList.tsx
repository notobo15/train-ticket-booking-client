import React from "react";
import styles from "./SelectStation.module.scss";
import { IoLocation } from "react-icons/io5";
import { FaTrainSubway } from "react-icons/fa6";

interface OptionType {
  label: string;
  value: string;
}

interface GroupType {
  label: string;
  options: OptionType[];
}

interface OptionListProps {
  groups: GroupType[];
  selectedOption: OptionType | null;
  handleSelectOption: (option: OptionType) => void;
}

const OptionList: React.FC<OptionListProps> = ({ groups, selectedOption, handleSelectOption }) => {
  return (
    <>
      {groups.map((group) => (
        <div key={group.label}>
          <div className={styles.groupLabel}>
            <IoLocation />
            <div className={styles.textContainer}>
              <div className={styles.textContainerInner}>
                <div className={styles.textLabel}>{group.label}</div>
                <div className={styles.textRegonLabel}>Việt Nam</div>
              </div>
            </div>
          </div>
          {group.options.map((option) => (
            <li
              key={option.value}
              className={`${styles.option} ${
                selectedOption && selectedOption.value === option.value ? styles.selectedOption : ""
              }`}
              onClick={() => handleSelectOption(option)}
            >
              <FaTrainSubway />
              <div className={styles.textContainer}>
                <div className={styles.textLabel}>{option.label}</div>
              </div>
            </li>
          ))}
        </div>
      ))}
    </>
  );
};

export default OptionList;
