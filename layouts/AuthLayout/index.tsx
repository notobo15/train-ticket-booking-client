"use client";
import { useRouter } from "@/i18n/routing";
import { useEffect } from "react";
import jwt from "jsonwebtoken";
import { useAppSelector } from "@/redux/hooks";
import { selectAuthState } from "@/redux/slices/authSlice";

interface DecodedToken {
  role: string[]; // Array of roles in the decoded JWT
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { token } = useAppSelector(selectAuthState);

  if (!token) {
    router.push("/login");
    return;
  }
  try {
    const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET || "") as DecodedToken;

    // If the role does not include 'admin', redirect to unauthorized page
    if (!decoded.role.some((r) => r.trim().toLowerCase() === "admin")) {
      router.push("/unauthorized");
      return;
    }
  } catch (err) {
    router.push("/login");
  }

  return <>{children}</>;
}
