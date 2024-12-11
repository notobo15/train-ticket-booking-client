import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "TrainTicket.Hub - The Best Way to Book Ticket Train",
};
export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
