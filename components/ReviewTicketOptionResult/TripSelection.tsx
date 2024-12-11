import React from "react";
import styles from "./TicketOptionResult.module.scss";
import { FaLocationDot, FaTrainSubway } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineAccessTime } from "react-icons/md";
import Link from "next/link";
import clsx from "clsx";
import { useAppSelector } from "@/redux/hooks";
import { selectSearchState } from "@/redux/slices/searchSlice";

export default function TripSelection({
  className,
  isShowHeader,
  title,
  date,
  train,
}: {
  className?: string;
  isShowHeader?: boolean;
  title?: string;
  date?: string;
  train: Train | null;
}) {
  // const { train, trainReturn, step } = useAppSelector(selectSearchState);

  // Use trainReturn for return trip, train for outbound
  // const isReturnStep = step === "return";
  // const selectedTrain = isReturnStep ? trainReturn : train;

  // if (!selectedTrain) {
  //   return <div>No train data available</div>;
  // }

  return (
    <>
      {isShowHeader && (
        <div className="mb-200 flex items-center justify-between flex-row-reverse md:mb-300">
          <div className="inline-flex max-w-full items-center gap-x-025 rounded-pill ps-075 pe-075 py-050 backdrop-blur-lg bg-color-scheme-literal-blue-100 text-color-scheme-literal-blue-800">
            <span className="font-weight-bold ps-050 pe-050 py-000 text-size-75 leading-100">
              <span className="max-w-full font-weight-bold text-size-75 leading-100 inline-block">{title}</span>
              <span className="t-x5afcv-DsLabel-root-DsLabel-sizeLg-dash"> </span>
              <span className="text-nowrap"> {date}</span>
            </span>
          </div>
        </div>
      )}
      <div className={clsx(styles.cardContent, className)}>
        <div className={styles.item}>
          <div className={styles.slotStart}>
            <div className={styles.starttime}>
              <span>{train?.departureTime}</span>
              <span style={{ fontSize: "13px" }}> {train?.departureDate}</span>
            </div>
          </div>
          <div className={styles.slotMiddle}>
            <div className={styles.middleContent}>
              <FaTrainSubway size={24} />
              <svg width="2" viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden="true">
                <line
                  x1="0.5"
                  y1="0"
                  x2="0.5"
                  y2="1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                ></line>
              </svg>
            </div>
          </div>
          <div className={styles.slotEnd}>
            <div className={styles.endContent}>
              <div>
                <div className={styles.provinceLabelXs}>{train?.startStationName}</div>
                <div className={styles.provinceLabelg}>{train?.startProvinceName}</div>
                <Link
                  href={"https://www.google.com/maps/search/?api=1&query=10.767647,106.691065"}
                  className={styles.ggmapLink}
                >
                  Map
                  <FiExternalLink size={16} />
                </Link>
              </div>
              <div className={styles.trainName}>
                <span className="max-w-full text-size-87 leading-100 inline-block">{train?.trainNumber}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.slotMiddle}>
            <div className={styles.middleContent}>
              <MdOutlineAccessTime size={16} />
              <svg width="2" viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden="true">
                <line
                  x1="0.5"
                  y1="0"
                  x2="0.5"
                  y2="1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                ></line>
              </svg>
            </div>
          </div>
          <div className={styles.slotEnd}>
            <div className={styles.timeDutation}>{train?.totalDuration}</div>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.slotStart}>
            <div className={styles.starttime}>
              <span>{train?.arrivalTime}</span>
              <span style={{ fontSize: "13px" }}> {train?.arrivalDate}</span>
            </div>
          </div>
          <div className={styles.slotMiddle}>
            <div className={styles.middleContent}>
              <FaLocationDot size={24} />
            </div>
          </div>
          <div className={styles.slotEnd}>
            <div className={styles.endContent}>
              <div>
                <div className={styles.provinceLabelXs}>{train?.endStationName}</div>
                <div className={styles.provinceLabelg}>{train?.endProvinceName}</div>
                <Link
                  href={"https://www.google.com/maps/search/?api=1&query=10.767647,106.691065"}
                  className={styles.ggmapLink}
                >
                  Map
                  <FiExternalLink size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
