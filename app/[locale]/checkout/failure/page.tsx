"use client";
import { clearSeatHold, clearSeatHoldReturn } from "@/redux/slices/searchSlice";
import { useAppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";

const CheckoutFailure = () => {
  const [orderInfo, setOrderInfo] = useState<string | null>("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get("orderId");
    setOrderInfo(orderId);
    dispatch(clearSeatHold());
    dispatch(clearSeatHoldReturn());
  }, []);

  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-semibold text-red-600 mb-4">Payment Failed</h1>
        {orderInfo ? (
          <p className="text-xl text-gray-700">
            Sorry, your payment could not be processed for Order ID:{" "}
            <span className="font-bold text-red-500">{orderInfo}</span>
          </p>
        ) : (
          <p className="text-lg text-gray-500">Order ID not found.</p>
        )}
        <div className="mt-6">
          <a
            href="/"
            className="bg-red-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default CheckoutFailure;
