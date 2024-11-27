import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Center.module.scss";
import { FaArrowRightLong, FaMapLocationDot, FaTrainSubway } from "react-icons/fa6";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
interface IItem {
  title?: string;
  startStation: string;
  endStation: string;
  url: string;
}
const listTrains = [{ startStation: "Washington", endStation: "New York", url: "/" }];
export default function Center() {
  return (
    <ul className="hidden lg:flex group border-width-sm border-color-primary rounded-pill flex justify-center p-025 backdrop-blur-md bg-color-glass-primary">
      <li className="relative">
        <DropdownMenu
          icon={<FaTrainSubway size={20} className="text-color-scheme-literal-blue-400" />}
          title="Popular Routes"
          items={listTrains}
          className="bg-color-scheme-literal-blue-100 text-color-scheme-literal-blue-800 hover:text-color-scheme-literal-blue-600 active:bg-color-scheme-literal-blue-200 active:text-color-scheme-literal-blue-800"
        />
      </li>
      {/* <li className="relative before:absolute before:inset-y-100 before:z-[1] before:w-012 before:border-r-width-hairline before:border-r-color-primary">
        <DropdownMenu
          icon={<FaMapLocationDot size={20} className="text-color-scheme-literal-yellow-400" />}
          title="Provinces"
          items={listTrains}
          className="bg-color-scheme-literal-yellow-100 text-color-scheme-literal-yellow-800"
        />
      </li> */}
      {/* <li className="relative before:absolute before:inset-y-100 before:z-[1] before:w-012 before:border-r-width-hairline before:border-r-color-primary">
        <DropdownMenu
          icon={<FaCalendarAlt size={20} className="text-color-scheme-literal-green-400" />}
          title="Schedules"
          items={[{ title: "SE", url: "/" }]}
          className="bg-color-scheme-literal-green-100 text-color-scheme-literal-green-800 hover:text-color-scheme-literal-green-600 active:bg-color-scheme-literal-green-200 active:text-color-scheme-literal-green-800"
        />
      </li> */}
      {/* <li className="relative before:absolute before:inset-y-100 before:z-[1] before:w-012 before:border-r-width-hairline before:border-r-color-primary">
        <DropdownMenu
          icon={<FaMapLocationDot size={20} className="text-color-scheme-literal-yellow-400" />}
          title="Provinces"
          items={[{ title: "SE", url: "/" }]}
          className="bg-color-scheme-literal-yellow-100 text-color-scheme-literal-yellow-800"
        />
      </li> */}
    </ul>
  );
}
function DropdownMenu({
  title,
  icon,
  items,
  className,
}: {
  title: string;
  icon: React.ReactNode;
  items: IItem[];
  className: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div id="dropdown-chip-route" className="header-dropdown relative">
      <div className="header-dropdown-link">
        <div className="relative">
          <div
            onClick={() => setIsOpen(true)}
            className={`focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg !transform-none [&:not(:hover)]:bg-color-static-transparent ${className}`}
          >
            <span className="shrink-0 text-color-scheme-literal-blue-400">{icon}</span>
            <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">{title}</span>
          </div>
        </div>
      </div>
      <div
        ref={menuRef}
        className={clsx(
          "bb-dropdown js-header-dropdown absolute overflow-y-hidden max-h-screen mt-100 bg-color-canvas-primary rounded-md shadow-lg scale-90 origin-top-left duration-100 ease-in-out transition-all [&.open]:opacity-100 [&.open]:scale-100 w-[21rem]",
          { "opacity-100 scale-100": isOpen, "opacity-0 scale-90": !isOpen }
        )}
        style={{ zIndex: 1300 }}
        hidden={!isOpen}
      >
        <ul className="overflow-y-auto max-h-[42rem]">
          <DropdownItem items={items} />
        </ul>
      </div>
    </div>
  );
}
function DropdownItem({ items }: { items: IItem[] }) {
  return (
    <>
      {items.map((item: IItem, index: number) => (
        <li key={index}>
          <Link className={styles.item} tabIndex={0} href={item.url}>
            <span className="flex flex-row flex-nowrap whitespace-pre">
              <span
                className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                title={item.title}
              >
                <span className="flex flex-row flex-nowrap whitespace-pre">
                  <span
                    className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                    title="Boston"
                  >
                    {item.startStation}
                  </span>
                  <span>
                    <FaArrowRightLong
                      size={12}
                      className="max-w-full font-weight-bold text-size-87 leading-100 inline-block mx-2"
                    />
                  </span>
                  <span
                    className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                    title="New York"
                  >
                    {item.endStation}
                  </span>
                </span>
                {/* {item.title} */}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </>
  );
}
