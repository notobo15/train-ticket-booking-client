import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import clsx from "clsx";
import styles from "./Header.module.scss";

export default function LanguagePicker() {
  const [isShowLanguage, setIsShowLanguage] = useState(false);

  return (
    <div id="language-picker" className="header-dropdown relative">
      <div className="header-dropdown-link">
        <button
          onClick={() => setIsShowLanguage(!isShowLanguage)}
          className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center max-w-full ps-100 pe-100 py-100 rounded-sm hover:-translate-y-006 active:translate-y-006 hover:backdrop-blur-lg bg-color-static-transparent hover:bg-color-film-secondary active:bg-color-film-tertiary text-color-primary hover:text-color-primary active:text-color-primary"
          type="button"
        >
          <span className="ps-050 pe-050 py-000 font-weight-bold leading-100 text-size-87">English</span>
          <span className="shrink-0 text-icon-color-primary">
            <FaAngleDown size={16} />
          </span>
        </button>
      </div>
      <div
        className={clsx(
          "bb-dropdow js-header-dropdown absolute overflow-y-hidden max-h-screen mt-100 bg-color-canvas-primary rounded-md shadow-lg opacity-0 scale-90 origin-top-left duration-100 ease-in-out transition-all [&.open]:opacity-100 [&.open]:scale-100",
          { open: isShowLanguage }
        )}
        style={{ zIndex: 1300 }}
        hidden={!isShowLanguage}
      >
        <ul className="overflow-y-auto max-h-[13.5rem] w-[12.5rem] overflow-y-auto">
          <li>
            <a className={styles.languageItem} tabIndex={0} href="/de">
              Deutsch
            </a>
          </li>
          <li>
            <a className={clsx(styles.languageItem, styles.selected)} tabIndex={0} href="/en">
              English
            </a>
          </li>
          {/* Thêm các ngôn ngữ khác ở đây */}
        </ul>
      </div>
    </div>
  );
}
