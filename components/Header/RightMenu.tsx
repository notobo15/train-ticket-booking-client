"use client";
import Account from "./Account";
import Language from "./Language";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import Cart from "./Cart";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
// import { useSession } from "next-auth/react";
import { selectAuthState } from "@/redux/slices/authSlice";
import { useAppSelector } from "@/redux/hooks";
const cartItems = [
  {
    id: 1,
    ticketCode: "123456",
    trainName: "Express Train",
    carriage: "3",
    seat: "15A",
    direction: "Sài Gòn - Hà Nội",
    date: "2024-11-15",
    time: "14:00",
    seatType: "Ghế mềm điều hòa",
  },
  {
    id: 2,
    ticketCode: "234567",
    trainName: "Fast Train",
    carriage: "2",
    seat: "10B",
    direction: "Hà Nội - Đà Nẵng",
    date: "2024-11-16",
    time: "18:30",
    seatType: "Ghế cứng",
  },
];

const HeaderMenu: React.FC = () => {
  // const { data: session, status } = useSession();
  const { isAuthenticated } = useAppSelector(selectAuthState);
  const t = useTranslations("Header");

  return (
    <ul className="hidden items-center gap-100 lg:flex">
      <li className="hidden sm:block">
        <Language />
      </li>
      {/* <li className="hidden sm:block">
        <Item label="Check tickets" url="/check-tickets" />
      </li> */}
      <li className="hidden sm:block">
        <Item label={t("policy")} url="/policy" />
      </li>
      <li className="hidden sm:block">
        <Item label={t("schedules")} url="/train-schedule" />
      </li>
      {/* <li className="hidden sm:block">
        <Item label={t("help")} url="/help" />
      </li> */}
      {isAuthenticated ? (
        <>
          <li className="hidden sm:block">
            <Account />
          </li>
          {/* <li className="hidden sm:block">
            <Cart icon={<FaCartShopping size={24} />} count={cartItems.length} cartItems={cartItems} />
          </li> */}
        </>
      ) : (
        <li className="hidden sm:block">
          <Item label={t("signin")} url="/sign-in" />
        </li>
      )}
    </ul>
  );
};

export default HeaderMenu;

function Item({ url, label, icon }: { url: string; label?: string; icon?: React.ReactNode }) {
  return (
    <Link
      className="focus-visible:outline-none focus-visible:ring inline-flex items-center justify-center max-w-full ps-100 pe-100 py-100 rounded-sm hover:-translate-y-006 active:translate-y-006 hover:backdrop-blur-lg bg-color-static-transparent hover:bg-color-film-secondary active:bg-color-film-tertiary text-color-primary hover:text-color-primary active:text-color-primary"
      href={url}
    >
      {label && <span className="ps-050 pe-050 py-000 font-weight-bold leading-100 text-size-87">{label}</span>}

      {icon}
    </Link>
  );
}

// function Cart({
//   label,
//   icon,
//   count = 0,
// }: {
//   label?: string;
//   icon?: React.ReactNode;
//   count?: number;
// }) {
//   return (
//     <div className="focus-visible:outline-none focus-visible:ring inline-flex items-center justify-center max-w-full ps-100 pe-100 py-100 rounded-sm hover:-translate-y-006 active:translate-y-006 hover:backdrop-blur-lg bg-color-static-transparent hover:bg-color-film-secondary active:bg-color-film-tertiary text-color-primary hover:text-color-primary active:text-color-primary">
//       {label && (
//         <span className="ps-050 pe-050 py-000 font-weight-bold leading-100 text-size-87">
//           {label}
//         </span>
//       )}

//       <div className="relative">
//         {icon}
//         <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
//           {count}
//         </span>
//       </div>
//     </div>
//   );
// }
