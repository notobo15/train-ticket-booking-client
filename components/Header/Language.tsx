"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import styles from "./Header.module.scss";
import clsx from "clsx";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function Account() {
  const [isShow, setIsShow] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [languages] = useState([
    {
      title: "English",
      url: "en",
    },
    {
      title: "Việt Nam",
      url: "vi",
    },
  ]);
  const localActive = useLocale();
  const pathname = usePathname();

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div id="language-item">
      <div id="language-menu" className="header-dropdown relative" ref={dropdownRef}>
        <div className="header-dropdown-link">
          <button
            className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center max-w-full ps-100 pe-100 py-100 rounded-sm hover:-translate-y-006 active:translate-y-006 hover:backdrop-blur-lg bg-color-static-transparent hover:bg-color-film-secondary active:bg-color-film-tertiary text-color-primary hover:text-color-primary active:text-color-primary"
            type="button"
            onClick={() => setIsShow(!isShow)}
          >
            <span className="ps-050 pe-050 py-000 font-weight-bold leading-100 text-size-87">
              {languages.find((lang) => lang.url === localActive)?.title || "Language"}
            </span>
            <span className="shrink-0 text-icon-color-primary">
              <FaAngleDown size={16} />
            </span>
          </button>
        </div>
        <div
          className={clsx(
            "bb-dropdown js-header-dropdown absolute overflow-y-hidden max-h-screen mt-100 bg-color-canvas-primary rounded-md shadow-lg origin-top-left duration-100 ease-in-out transition-all",
            {
              "opacity-100 scale-100": isShow,
              "opacity-0 scale-90": !isShow,
            }
          )}
          hidden={!isShow}
          style={{ zIndex: 1300 }}
        >
          <ul className="overflow-y-auto max-h-[13.5rem] w-[12.5rem]">
            {languages.map((item, index) => (
              <li key={index}>
                <Link
                  className={clsx(styles.languageItem, {
                    [styles.selected]: item.url === localActive,
                  })}
                  tabIndex={0}
                  href={`/${item.url}${pathname.replace(/^\/[a-z]{2,}(-[A-Za-z]{2,})?/, "")}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
