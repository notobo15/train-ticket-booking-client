import React from "react";
import styles from "./TicketOptionResult.module.scss";
import { FaLocationDot, FaTrainSubway } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineAccessTime } from "react-icons/md";
import Link from "next/link";
import clsx from "clsx";

export default function TripSelection({ className, isShowHeader }: { className?: string; isShowHeader?: boolean }) {
  return (
    <>
      {isShowHeader && (
        <div className="mb-200 flex items-center justify-between flex-row-reverse md:mb-300">
          <div className="inline-flex max-w-full items-center gap-x-025 rounded-pill ps-075 pe-075 py-050 backdrop-blur-lg bg-color-scheme-literal-blue-100 text-color-scheme-literal-blue-800">
            <span className="font-weight-bold ps-050 pe-050 py-000 text-size-75 leading-100">
              <span className="max-w-full font-weight-bold text-size-75 leading-100 inline-block">Outbound</span>
              <span className="t-x5afcv-DsLabel-root-DsLabel-sizeLg-dash">–</span>
              <span className="text-nowrap">Fri, Nov 1</span>
            </span>
          </div>
        </div>
      )}
      <div className={clsx(styles.cardContent, className)}>
        <div className={styles.item}>
          <div className={styles.slotStart}>
            <div className={styles.starttime}>
              <span>1:45pm</span>
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
                <div className={styles.provinceLabelXs}>Ho Chi Minh City</div>
                <div className={styles.provinceLabelg}>Ho Chi Minh Office</div>
                <Link
                  href={"https://www.google.com/maps/search/?api=1&query=10.767647,106.691065"}
                  className={styles.ggmapLink}
                >
                  Map
                  <FiExternalLink size={16} />
                </Link>
              </div>
              <div className={styles.trainName}>
                <span className="max-w-full text-size-87 leading-100 inline-block">Airbus</span>
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
            <div className={styles.timeDutation}>5 hours 15 minutes</div>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.slotStart}>
            <div className={styles.starttime}>
              <span>1:45pm</span>
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
                <div className={styles.provinceLabelXs}>Ho Chi Minh City</div>
                <div className={styles.provinceLabelg}>Ho Chi Minh Office</div>
                <Link
                  href={"https://www.google.com/maps/search/?api=1&query=10.767647,106.691065"}
                  className={styles.ggmapLink}
                >
                  Map
                  <FiExternalLink size={16} />
                </Link>
              </div>
              {/* <div className={styles.trainName}>
                <span className="max-w-full text-size-87 leading-100 inline-block">
                  Airbus
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
