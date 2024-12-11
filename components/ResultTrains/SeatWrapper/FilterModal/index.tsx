import React from "react";
import styles from "./FilterModal.module.scss";
import clsx from "clsx";
import { IoClose } from "react-icons/io5";
import { useAppDispatch } from "@/redux/hooks";
import { setIsOpenModalFilter } from "@/redux/slices/searchSlice";
import FilterTime from "../../FilterTime";
export default function Index({ open }: { open: boolean }) {
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(setIsOpenModalFilter(false));
  };
  return (
    <div className={styles.modal}>
      <div className={clsx(styles.bakcdrop, { [styles.active]: open })} onClick={handleClose}></div>
      <div className={styles.container}>
        <div className={clsx(styles.wrapper, { [styles.close]: !open })}>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <button onClick={handleClose}>
                <IoClose size={32} />
              </button>
              <h6>Filters</h6>
            </div>
            <div className={styles.headerRight}>
              <span>Reset all</span>
            </div>
          </div>
          <div className={styles.main}>
            <FilterTime />
          </div>
          <div className={styles.footer}>
            <div className={styles.result}>
              <span>39 results found</span>
            </div>
            <button className={styles.btnDone}>
              <span>Done</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
