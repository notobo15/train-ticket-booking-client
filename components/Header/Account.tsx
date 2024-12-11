"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown, FaUserAlt } from "react-icons/fa";
import styles from "./Header.module.scss";
import clsx from "clsx";
import { GiReturnArrow } from "react-icons/gi";
import { IoSettingsSharp, IoTicket } from "react-icons/io5";
import { signOut } from "next-auth/react";
import { Link, useRouter } from "@/i18n/routing";
import { useAppDispatch } from "@/redux/hooks";
import { clearToken } from "@/redux/slices/authSlice";

export default function Account() {
  const [isShow, setIsShow] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Thêm kiểu cho ref
  const router = useRouter();
  const dispatch = useAppDispatch();

  const sidebarItems = [
    { href: "/account/trips", icon: <IoTicket size={24} />, text: "Trips" },
    { href: "/account/infos", icon: <FaUserAlt size={24} />, text: "Infos" },
    {
      href: "/account/return-tickets",
      icon: <GiReturnArrow size={24} />,
      text: "Return Tickets",
    },
    {
      href: "/account/settings",
      icon: <IoSettingsSharp size={24} />,
      text: "Settings",
    },
  ];

  const handleClickOutside = (event: MouseEvent) => {
    // Kiểm tra nếu click nằm ngoài dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsShow(false); // Đóng dropdown nếu click ra ngoài
    }
  };
  const handleLogout = () => {
    dispatch(clearToken());
    router.push("/home");
  };

  useEffect(() => {
    // Thêm event listener khi component được mount
    document.addEventListener("mousedown", handleClickOutside);

    // Loại bỏ event listener khi component bị unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div id="account-item">
      <div id="account-menu" className="header-dropdown relative" ref={dropdownRef}>
        <div className="header-dropdown-link">
          <button
            className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center max-w-full ps-100 pe-100 py-100 rounded-sm hover:-translate-y-006 active:translate-y-006 hover:backdrop-blur-lg bg-color-static-transparent hover:bg-color-film-secondary active:bg-color-film-tertiary text-color-primary hover:text-color-primary active:text-color-primary"
            type="button"
            onClick={() => setIsShow(!isShow)}
          >
            <span className="ps-050 pe-050 py-000 font-weight-bold leading-100 text-size-87">Account</span>
            <span className="shrink-0 text-icon-color-primary">
              <FaAngleDown size={16} />
            </span>
          </button>
        </div>
        <div
          className={clsx(
            "bb-dropdown js-header-dropdown absolute overflow-y-hidden max-h-screen mt-100 bg-color-canvas-primary rounded-md shadow-lg opacity-0 scale-90 origin-top-left duration-100 ease-in-out transition-all [&.open]:opacity-100 [&.open]:scale-100 right-0",
            { open: isShow }
          )}
          hidden={!isShow}
          style={{ zIndex: 1300 }}
        >
          <ul className="overflow-y-auto max-h-max w-[12.5rem]">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className={styles.languageItem}>
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <span
                className={styles.languageItem}
                onClick={
                  // () => signOut({ callbackUrl: "/en/home" })
                  handleLogout
                }
              >
                Log Out
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
