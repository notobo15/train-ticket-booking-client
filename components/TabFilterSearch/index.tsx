import React, { useState } from "react";
import styles from "./TabFilterSearch.module.scss";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectSearchState, setSortingOption } from "@/redux/slices/searchSlice";

export default function Index() {
  // const [sortingOptions, setSortingOptions] = useState([
  //   { label: "Recommended", isSelected: true },
  //   { label: "Cheapest", isSelected: false },
  //   { label: "Fastest", isSelected: false },
  //   { label: "Earliest", isSelected: false },
  //   { label: "Latest", isSelected: false },
  // ]);

  // const handleClick = (selectedLabel: string) => {
  //   setSortingOptions((prevOptions) =>
  //     prevOptions.map((option) =>
  //       option.label === selectedLabel
  //         ? { ...option, isSelected: true }
  //         : { ...option, isSelected: false }
  //     )
  //   );
  // };

  const dispatch = useAppDispatch();
  const earchState = useAppSelector(selectSearchState);
  const sortingOptions = earchState.sortingOptions;
  const resultCount = earchState.resultCount;

  const handleClick = (selectedLabel: string) => {
    dispatch(setSortingOption(selectedLabel));
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.main}>
          <div className={styles.mainInner}>
            <div className={styles.mainWrapper}>
              <div className={styles.labelResult}>
                <div className={styles.loadingDone}>
                  <div className={styles.labelLoading}>Searching</div>
                  <div className={styles.containerResult}>
                    <span className={styles.labelHeading}>Select your trip</span>
                    <span className={styles.result}>{resultCount} results</span>
                  </div>
                </div>
              </div>
              <div className={styles.actionContainer}>
                <div className={styles.actionWrapper}>
                  <span className={styles.actionLabel}>Sort By</span>
                  <div className={styles.sortingContainer}>
                    {sortingOptions.map((option) => (
                      <div
                        key={option.label}
                        className={clsx(styles.sortingItem, option.isSelected && styles.sortingItemSelected)}
                        onClick={() => handleClick(option.label)}
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
