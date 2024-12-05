"use client";
import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import AccountMenu from "./AccountMenu";
import LanguagePicker from "./LanguagePicker";
import { IoClose } from "react-icons/io5";
// import { useSession } from "next-auth/react";

export default function Header() {
  const [isShowMenuMobile, setIsShowMenuMobile] = useState(false);
  // const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";
  return (
    <nav className="relative">
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <a href="/" aria-label="Go to the home page">
          <img src="/logo.svg" alt="Logo" height={40} />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="/buses">Buses</a>
          <a href="/trains">Trains</a>
          <LanguagePicker />
          <AccountMenu isAuthenticated={isAuthenticated} />
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsShowMenuMobile(!isShowMenuMobile)} className="lg:hidden">
          <IoIosMenu size={32} />
        </button>

        {/* Mobile Menu */}
        {isShowMenuMobile && (
          <div className="fixed right-0 top-0 z-50 h-full w-full bg-white">
            <button onClick={() => setIsShowMenuMobile(false)} className="absolute top-4 right-4">
              <IoClose size={32} />
            </button>
            <div className="p-4">
              <a href="/buses" className="block">
                Buses
              </a>
              <a href="/trains" className="block">
                Trains
              </a>
              <LanguagePicker />
              <AccountMenu isAuthenticated={isAuthenticated} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
