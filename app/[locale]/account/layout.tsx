import React from "react";
import AccountLayout from "@/layouts/AccountLayout";
export default function Layout({ children }: { children: React.ReactNode }) {
  return <AccountLayout>{children}</AccountLayout>;
}
