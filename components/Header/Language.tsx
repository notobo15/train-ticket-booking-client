"use client";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import React, { useState, useEffect, useRef, startTransition, useTransition } from "react";
import { FaAngleDown, FaCheck } from "react-icons/fa";
import styles from "./Header.module.scss";
import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl"; // Import useTranslations
import { routing, usePathname } from "@/i18n/routing";
import { useRouter } from "next/navigation";
import { IoCheckmarkOutline } from "react-icons/io5";

export default function Account() {
  const [isShow, setIsShow] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const localActive = useLocale();
  const pathname = usePathname();
  const t = useTranslations("LocaleSwitcher"); // Use useTranslations for localization

  // Mapping of languages to flags
  const languages = [
    {
      title: t("locale", { locale: "en" }), // Using locale placeholder to get translated title for English
      url: "en",
      flag: "fi-gb", // English flag
    },
    {
      title: t("locale", { locale: "vi" }), // Using locale placeholder to get translated title for Vietnamese
      url: "vi",
      flag: "fi-vn", // Vietnamese flag
    },
  ];

  // Close the dropdown when clicked outside
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsShow(false);
    }
  };
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const handleLanguageSwitch = (nextLocale: string) => {
    startTransition(() => {
      const newPath = `/${nextLocale}${pathname}`;
      router.replace(newPath);
      router.refresh();
    });
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
              {/* Show the current language's flag and name */}
              <span className={`fi ${languages.find((lang) => lang.url === localActive)?.flag} mr-2`} />
              {languages.find((lang) => lang.url === localActive)?.title || t("label")}
            </span>
            <span className="shrink-0 text-icon-color-primary">
              <FaAngleDown size={16} />
            </span>
          </button>
        </div>

        {/* Dropdown Menu */}
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
            {/* Loop through the languages to display them in the dropdown */}
            {languages.map((item, index) => (
              <li key={index}>
                <span
                  className={clsx(styles.languageItem, {
                    [styles.selected]: item.url === localActive, // Highlight selected language
                  })}
                  onClick={() => handleLanguageSwitch(item.url)}
                >
                  <span>
                    <span className={`fi ${item.flag} mr-2`} />
                    {item.title}
                  </span>

                  {item.url === localActive && <FaCheck />}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
