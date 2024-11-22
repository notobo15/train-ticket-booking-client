import AccountLayout from "@/layouts/AccountLayout";
import CommonLayout from "@/layouts/CommonLayout";
import React from "react";

export default function PolicyLayout({ children }: { children: React.ReactNode }) {
  return <CommonLayout>{children}</CommonLayout>;
}
