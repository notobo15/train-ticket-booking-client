"use client";
import React from "react";
import { IoChevronDown, IoSettingsSharp, IoTicket } from "react-icons/io5";
import styles from "./SidebarAccount.module.scss";
import clsx from "clsx";
import { FaUserAlt } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { LuLogOut } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";
import { signOut } from "next-auth/react";

export default function Index() {
  const pathname = usePathname();
  // Mảng các item trong sidebar
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

  return (
    <div className={styles.sidebar}>
      <div className={styles.web}>
        <div className={styles.sidebarContainer}>
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(styles.sidebarItem, pathname === item.href && styles.selected)}
            >
              {item.icon}
              <span className={styles.itemText}>{item.text}</span>
            </Link>
          ))}
          <div className={styles.sidebarItem} onClick={() => signOut({ callbackUrl: "/en/home" })}>
            <LuLogOut size={24} />
            <span className={styles.itemText}>Sign out</span>
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={styles.mobileWrapper}>
          <div className={styles.mobileWrapperInner}>
            <div className={styles.mobileLeft}>
              <IoChevronDown size={24} />
              <p>Settings</p>
            </div>
            <IoChevronDown size={24} />
          </div>
        </div>

        <select data-testid="select-sorting" className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0">
          <option value="/en/account/trips">Trips</option>
          <option value="/en/account/passenger-profiles">Passengers</option>
          <option value="/en/account/settings">Settings</option>
          <option value="/en/auth/logout?redirect=%2Fen%2Faccount%2Fsettings">Sign out</option>
        </select>
      </div>
    </div>
  );
}
