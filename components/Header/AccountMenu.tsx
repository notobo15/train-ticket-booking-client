import React from "react";
import { FaAngleDown, FaUser } from "react-icons/fa";
import styles from "./Header.module.scss";
import { Link } from "@/i18n/routing";

interface AccountMenuProps {
  isAuthenticated: boolean;
}

export default function AccountMenu({ isAuthenticated }: AccountMenuProps) {
  return isAuthenticated ? (
    <div className="header-dropdown relative">
      <div className="header-dropdown-link">
        <button className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center max-w-full ps-100 pe-100 py-100 rounded-sm hover:-translate-y-006 active:translate-y-006 hover:backdrop-blur-lg bg-color-static-transparent hover:bg-color-film-secondary active:bg-color-film-tertiary text-color-primary hover:text-color-primary active:text-color-primary">
          <span className="ps-050 pe-050 py-000 font-weight-bold leading-100 text-size-87">Account</span>
          <span className="shrink-0 text-icon-color-primary">
            <FaAngleDown size={16} />
          </span>
        </button>
      </div>
      <div className="bb-dropdown absolute overflow-y-hidden max-h-screen mt-100 bg-color-canvas-primary rounded-md shadow-lg right-0 open">
        <ul className="overflow-y-auto max-h-max w-[12.5rem]">
          <li>
            <a className={styles.languageItem} href="/account/trips">
              Trips
            </a>
          </li>
          <li>
            <a className={styles.languageItem} href="/account/passenger-profiles">
              Passengers
            </a>
          </li>
          <li>
            <a className={styles.languageItem} href="/account/settings">
              Settings
            </a>
          </li>
          <li>
            <a className={styles.languageItem} href="/auth/logout">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <Link href="/sign-in" className="inline-flex items-center gap-x-025 hover:underline">
      <FaUser size={20} />
      <span>Sign in</span>
    </Link>
  );
}
