"use client";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useAppDispatch } from "@/redux/hooks";
import { setToken } from "@/redux/slices/authSlice";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { getCookie } from "cookies-next";
import { useEffect, useLayoutEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_ID as string;

  // const dispatch = useAppDispatch();
  // useLayoutEffect(() => {
  //   const loadTokenFromCookie = async () => {
  //     const token = getCookie("jwtToken");

  //     if (token) {
  //       dispatch(setToken(token as string)); // Cập nhật Redux store với token
  //     }
  //   };

  //   loadTokenFromCookie(); // Gọi hàm bất đồng bộ để lấy token
  // }, [dispatch]);
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <LoadingSpinner />
        <>{children}</>
      </GoogleOAuthProvider>
    </>
  );
}

// async function getToken() {
//   return await getCookie("jwtToken");
// }
