import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Sign up to your Account",
  description: "",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
