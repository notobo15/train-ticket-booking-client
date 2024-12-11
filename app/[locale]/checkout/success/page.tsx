"use client";
import { Link } from "@/i18n/routing";
import { addSeatHold, clearSeatHold, clearSeatHoldReturn, setCurrentSeat } from "@/redux/slices/searchSlice";
import { useAppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";

const CheckoutSuccess = () => {
  const [orderInfo, setOrderInfo] = useState<string | null>("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get("orderId");
    setOrderInfo(orderId);
    dispatch(clearSeatHold());
    dispatch(clearSeatHoldReturn());
    dispatch(setCurrentSeat(null));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        {/* Close Button */}

        {/* Icon */}
        <div className="flex items-center justify-center bg-green-100 rounded-full w-12 h-12 mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold text-center text-gray-800 mt-4">Your order is confirmed!</h1>

        {/* Description */}
        <p className="text-gray-600 text-center mt-2">
          Your order <span className="font-semibold text-gray-800">#{orderInfo || "Unknown"}</span> will be processed
          within 24 hours during working days. We will notify you by email once your order has been shipped.
        </p>

        <div className="border-t mt-6"></div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <Link
            href={"/account/trips"}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Track your order
          </Link>
          <Link
            href={"/home"}
            className="border border-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition duration-300"
          >
            Return to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
