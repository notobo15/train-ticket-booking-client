import { useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import styles from "../Header.module.scss";
import clsx from "clsx";
interface DropdownProps {
  isOpen: boolean;
  toggleDropdown: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, toggleDropdown }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  // useOutsideClick(dropdownRef, toggleDropdown);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={toggleDropdown}
        className="focus-visible:outline-none focus-visible:ring inline-flex items-center justify-center max-w-full ps-100 pe-100 py-100 rounded-sm hover:-translate-y-006 active:translate-y-006 hover:backdrop-blur-lg bg-color-static-transparent hover:bg-color-film-secondary active:bg-color-film-tertiary text-color-primary hover:text-color-primary active:text-color-primary"
        type="button"
      >
        <span className="ps-050 pe-050 py-000 font-weight-bold leading-100 text-size-87">Account</span>
        <span className="shrink-0 text-icon-color-primary">
          <FaAngleDown size={16} />
        </span>
      </button>
      <div
        hidden={!isOpen} // Ẩn dropdown nếu isOpen là false
        className={clsx(
          "bb-dropdown js-header-dropdown absolute overflow-y-hidden max-h-screen mt-100 bg-color-canvas-primary rounded-md shadow-lg opacity-0 scale-90 origin-top-left duration-100 ease-in-out transition-all [&.open]:opacity-100 [&.open]:scale-100 right-0",
          { open: isOpen }
        )}
        style={{ zIndex: 1300 }}
      >
        <ul className="overflow-y-auto max-h-max w-[12.5rem]">
          <li>
            <a className={styles.languageItem} tabIndex={0} href="/en/account/trips" id="my-trips">
              Trips11
            </a>
          </li>
          <li>
            <a className={styles.languageItem} tabIndex={0} href="/en/account/passenger-profiles" id="passengers">
              Passengers
            </a>
          </li>
          <li>
            <a className={styles.languageItem} tabIndex={0} href="/en/account/settings" id="settings">
              Settings
            </a>
          </li>
          <li>
            <a className={styles.languageItem} tabIndex={0} href="/en/auth/logout?redirect=%2Fen" id="logout">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
