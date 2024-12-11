import React from "react";
import styles from "./TabDay.module.scss";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

interface TabDayProps {
  date: string | null;
}

export default function Index({ date }: TabDayProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const inputDate = date ? new Date(date) : new Date();

  const dates = Array.from({ length: 7 }, (_, i) => {
    const currentDate = new Date(inputDate);
    currentDate.setDate(inputDate.getDate() - 2 + i);
    return {
      day: currentDate.toLocaleString("en-US", { weekday: "short" }),
      date: currentDate.getDate(),
      fullDate: currentDate.toISOString().split("T")[0], // Format to YYYY-MM-DD
    };
  });

  const getHref = (selectedDate: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("date", selectedDate); // Update the date parameter
    if (searchParams.get("return-date")) {
      newParams.set("return-date", selectedDate); // Update the date parameter
    }

    return `${pathname}?${newParams.toString()}`;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.mainInner}>
          <div className={styles.tabs}>
            {dates.map((item, index) =>
              index === 2 ? (
                <Active key={index} day={item.day} date={item.date} href={getHref(item.fullDate)} />
              ) : (
                <Tab key={index} day={item.day} date={item.date} href={getHref(item.fullDate)} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
interface TabProps {
  day: string;
  date: number;
  href: string;
}

export function Tab({ day, date, href }: TabProps) {
  return (
    <Link href={href} className={styles.tab}>
      <span className={styles.tabLabel}>
        {date} {day}
      </span>
    </Link>
  );
}
interface ActiveProps {
  day: string;
  date: number;
  href: string;
}

export function Active({ day, date, href }: ActiveProps) {
  return (
    <Link href={href} className={clsx(styles.tab, styles.active)}>
      <span className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block">
        {day}
      </span>
      <span className="max-w-full text-size-150 leading-175 tracking-tight inline-block">{date}</span>
    </Link>
  );
}
