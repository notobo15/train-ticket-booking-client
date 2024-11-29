"use client";
import HeaderMenu from "./RightMenu";
// import React, { useState } from "react";
// import { FaAngleDown } from "react-icons/fa";
// import styles from "./Header.module.scss";
// import clsx from "clsx";
import Logo from "./Logo";
import MenuMobile from "./MenuMobile";
import Center from "./Center";
// import Center from "./Center";
// import Account from "./Account";
// import HeaderMenu from "./HeaderMenu";
export default function Index({ className, isShowCenter = true }: { className?: string; isShowCenter?: boolean }) {
  // const [isShowLanguage, setIsShowLanguage] = useState(false);
  // const [isShowMenuMobile, setIsShowMenuMobile] = useState(false);
  return (
    <div className="relative">
      <nav
        className={`flex z-[3] flex-nowrap relative min-h-900 py-350 md:py-350 items-center justify-between ${className}`}
        aria-label="Main"
        data-testid="busbud-header-with-menu"
      >
        <Logo />
        {/* {isShowCenter && <Center />} */}
        {/* <ul className="hidden items-center gap-100 lg:flex">
          <li className="hidden sm:block">
            <div id="language-picker" className="header-dropdown relative">
              <div className="header-dropdown-link">
                <button
                  onClick={() => setIsShowLanguage(!isShowLanguage)}
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center max-w-full ps-100 pe-100 py-100 rounded-sm hover:-translate-y-006 active:translate-y-006 hover:backdrop-blur-lg bg-color-static-transparent hover:bg-color-film-secondary active:bg-color-film-tertiary text-color-primary hover:text-color-primary active:text-color-primary"
                  type="button"
                >
                  <span className="ps-050 pe-050 py-000 font-weight-bold leading-100 text-size-87">
                    English
                  </span>
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
                    <a
                      className={styles.languageItem}
                      tabIndex={0}
                      href="https://www.busbud.com/de/bus-albany-binghamton/r/dred9s-dr6p2r"
                    >
                      Deutsch
                    </a>
                  </li>
                  <li>
                    <a
                      className={clsx(styles.languageItem, styles.selected)}
                      tabIndex={0}
                      href="https://www.busbud.com/en/bus-albany-binghamton/r/dred9s-dr6p2r"
                    >
                      English
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.languageItem}
                      tabIndex={0}
                      href="https://www.busbud.com/en-ca/bus-albany-binghamton/r/dred9s-dr6p2r"
                    >
                      English (Canada)
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.languageItem}
                      tabIndex={0}
                      href="https://www.busbud.com/en-gb/bus-albany-binghamton/r/dred9s-dr6p2r"
                    >
                      English (UK)
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.languageItem}
                      tabIndex={0}
                      href="https://www.busbud.com/es/autobus-albany-binghamton/r/dred9s-dr6p2r"
                    >
                      Español (España)
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.languageItem}
                      tabIndex={0}
                      href="https://www.busbud.com/es-419/autobus-albany-binghamton/r/dred9s-dr6p2r"
                    >
                      Español (Latinoamérica)
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.languageItem}
                      tabIndex={0}
                      href="https://www.busbud.com/es-mx/autobus-albany-binghamton/r/dred9s-dr6p2r"
                    >
                      Español (Mexico)
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.languageItem}
                      tabIndex={0}
                      href="https://www.busbud.com/fr/bus-albany-binghamton/r/dred9s-dr6p2r"
                    >
                      Français
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.languageItem}
                      tabIndex={0}
                      href="https://www.busbud.com/fr-ca/bus-albany-binghamton/r/dred9s-dr6p2r"
                    >
                      Français (Canada)
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.languageItem}
                      tabIndex={0}
                      href="https://www.busbud.com/it/bus-albany-binghamton/r/dred9s-dr6p2r"
                    >
                      Italiano
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.languageItem}
                      tabIndex={0}
                      href="https://www.busbud.com/nl/bus-albany-binghamton/r/dred9s-dr6p2r"
                    >
                      Nederlands
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.languageItem}
                      tabIndex={0}
                      href="https://www.busbud.com/pl/autobus-albany-binghamton/r/dred9s-dr6p2r"
                    >
                      Polski
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.languageItem}
                      tabIndex={0}
                      href="https://www.busbud.com/pt/onibus-albany-binghamton/r/dred9s-dr6p2r"
                    >
                      Português (Brasil)
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.languageItem}
                      tabIndex={0}
                      href="https://www.busbud.com/pt-pt/autocarro-albany-binghamton/r/dred9s-dr6p2r"
                    >
                      Português (Portugal)
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.languageItem}
                      tabIndex={0}
                      href="https://www.busbud.com/ru/avtobus-олбани-бингемтон/r/dred9s-dr6p2r"
                    >
                      Русский
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.languageItem}
                      tabIndex={0}
                      href="https://www.busbud.com/sv/buss-albany-binghamton/r/dred9s-dr6p2r"
                    >
                      Svenska
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.languageItem}
                      tabIndex={0}
                      href="https://www.busbud.com/tr/otobus-albany-binghamton/r/dred9s-dr6p2r"
                    >
                      Türkçe
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles.languageItem}
                      tabIndex={0}
                      href="https://www.busbud.com/zh/bus-albany-賓漢頓/r/dred9s-dr6p2r"
                    >
                      中文简体
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="hidden sm:block">
            <a
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center max-w-full ps-100 pe-100 py-100 rounded-sm hover:-translate-y-006 active:translate-y-006 hover:backdrop-blur-lg bg-color-static-transparent hover:bg-color-film-secondary active:bg-color-film-tertiary text-color-primary hover:text-color-primary active:text-color-primary"
              href="https://help.busbud.com/hc/en-us"
            >
              <span className="ps-050 pe-050 py-000 font-weight-bold leading-100 text-size-87">
                Help
              </span>
            </a>
          </li>
          <li className="hidden sm:block">
            <div id="account-item">
              <a
                className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center max-w-full ps-100 pe-100 py-100 rounded-sm hover:-translate-y-006 active:translate-y-006 hover:backdrop-blur-lg bg-color-static-transparent hover:bg-color-film-secondary active:bg-color-film-tertiary    hover:text-color-primary active:text-color-primary"
                href="https://www.busbud.com/en/account/signin"
              >
                <span className="ps-050 pe-050 py-000 font-weight-bold leading-100 text-size-87">
                  Sign in
                </span>
              </a>
            </div>
          </li>
          // <li className="hidden sm:block">
          //   <Account />
          // </li>
        </ul> */}

        <HeaderMenu />
        <MenuMobile />
      </nav>
    </div>
  );
}
