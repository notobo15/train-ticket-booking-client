import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import styles from "./ResultTrains.module.scss";
import { useAppSelector } from "@/redux/hooks";
import { selectSearchState } from "@/redux/slices/searchSlice";
export default function Info() {
  const { origin, destination, step } = useAppSelector(selectSearchState);
  const isReturnStep = step === "return";

  return (
    <div className={styles.info}>
      <div className={styles.infoWrapper}>
        {/* <div className={styles.infoLabel}>
          <FaLocationDot /> From {origin} Arrive in<strong>{destination}</strong>
        </div> */}
        <div className={styles.infoBottom}>
          <FaLocationDot />
          <div>
            From <strong className="px-1"> {isReturnStep ? destination : origin} </strong> Arrive to{" "}
            <strong className="px-1">{isReturnStep ? origin : destination}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
