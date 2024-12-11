import React, { useMemo } from "react";
import styles from "./TicketOptionResult.module.scss";
import { FaBagShopping, FaTrainSubway } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
import {} from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaRegSnowflake, FaWifi } from "react-icons/fa";
import { BsCupHot } from "react-icons/bs";
import { PiWarningCircle } from "react-icons/pi";
import { RiRefund2Fill } from "react-icons/ri";
import TripSelection from "./TripSelection";
import { selectSearchState } from "@/redux/slices/searchSlice";
import { useAppSelector } from "@/redux/hooks";
export default function Index() {
  const { step, train, trainReturn } = useAppSelector(selectSearchState);
  const isReturnStep = step === "return";
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.contentWrapper}>
          <div className={styles.contentInner}>
            <div className={styles.content}>
              <div className={styles.left}>
                <div className={styles.leftHeading}>
                  <div className={styles.leftContent}>
                    <span>Trip selection</span>
                  </div>
                </div>
                <TripSelection train={isReturnStep ? trainReturn : train} />
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.left}>
                <div className={styles.leftHeading}>
                  <div className={styles.leftContent}>
                    <span>Comfort options</span>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.rightContentInner}>
                    <span>Amenities</span>
                    <Amenities />
                  </div>
                </div>
              </div>
              <div className={styles.left}>
                <div className={styles.leftHeading}>
                  <div className={styles.leftContent}>
                    <span>
                      <div className={styles.leftHeading}>
                        <div className={styles.leftContent}>
                          <span>Flexibility and conditions</span>
                        </div>
                      </div>
                    </span>
                    <div className={styles.cardContent}>
                      <div className={styles.rightContentInner}>
                        <div className={styles.conditions}>
                          <Conditions />
                        </div>
                      </div>
                    </div>
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

function Amenities() {
  const list = useMemo(
    () => [
      {
        icon: <FaRegSnowflake size={16} />,
        name: "Air conditioning",
      },
      {
        icon: <FaWifi size={16} />,
        name: "Wifi",
      },
      {
        icon: <BsCupHot size={16} />,
        name: "Hot Water",
      },
      {
        icon: <ImBooks size={16} />,
        name: "Books",
      },
    ],
    []
  );
  return (
    <div className={styles.amenities}>
      {list.map((item, index) => (
        <div key={index} className={styles.amenityItem}>
          {item.icon}
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

function Conditions() {
  const list = useMemo(
    () => [
      {
        name: "Refunds and Exchanges",
        items: [
          {
            icon: <RiRefund2Fill size={16} />,
            name: (
              <>
                Refund up to <strong>24 hr.</strong>
                before departure - <strong>100%</strong>
              </>
            ),
          },
          {
            icon: <PiWarningCircle size={16} />,
            name: <>No exchanges</>,
          },
        ],
      },
      {
        name: "Boarding Requirements",
        items: [
          {
            icon: <FaTrainSubway size={16} />,
            name: (
              <>
                <strong>Printed</strong> tickets and
                <strong>passport</strong>
                <strong>required</strong>
              </>
            ),
          },
          {
            icon: <PiWarningCircle size={16} />,
            name: (
              <>
                Tickets displayed on <strong>phones are not accepted</strong>
              </>
            ),
          },
          {
            icon: <MdEmail size={16} />,
            name: (
              <>
                Ticket delivery <strong>by email</strong>
              </>
            ),
          },
        ],
      },
      {
        name: "Luggage",
        items: [
          {
            icon: <FaBagShopping size={16} />,
            name: (
              <>
                <strong>1</strong> carry-on bag
              </>
            ),
          },
          {
            icon: <FaBagShopping size={16} />,
            name: (
              <>
                Max <strong>5kg</strong> (11.0lbs) per carry-on bag
              </>
            ),
          },
          {
            icon: <FaBagShopping size={16} />,
            name: (
              <>
                <strong>1</strong> checked bag - <strong>free</strong>
              </>
            ),
          },
          {
            icon: <FaBagShopping size={16} />,
            name: (
              <>
                Max <strong>20kg</strong> (44.1lbs) per checked bag
              </>
            ),
          },
        ],
      },
    ],
    []
  );
  return (
    <div className={styles.conditionsWrapper}>
      {list.map((item, index) => (
        <div key={index} className={styles.conditionItem}>
          <div className={styles.itemHeading}>{item.name}</div>
          <div className={styles.itemContent}>
            {item.items.map((sub, index) => (
              <div key={index} className={styles.itemContentWrapper}>
                {sub.icon}
                <div className="last:*:mb-0 [&>a]:text-color-scheme-interactive-link-600 [&>a]:visited:text-color-scheme-literal-purple-600 [&>a]:hover:text-color-scheme-interactive-link-500 [&>a]:focus-visible:outline-none [&>a]:focus-visible:ring [&>a]:active:text-color-scheme-interactive-link-600 [&>a]:aria-disabled:cursor-default">
                  <p className="text-size-75 leading-100 mb-300">{sub.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
