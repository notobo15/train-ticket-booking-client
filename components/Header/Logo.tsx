import { Link } from "@/i18n/routing";
import React from "react";

export default function Logo() {
  return (
    <Link href="/home" aria-label="Go to the home page" className="focus-visible:ring [&_svg]:max-sm:max-h-400">
      {/* BrandLogo */}
      <h1 className="text-[#0274CA] font-weight-bolder tracking-tight lg:text-[2.5rem] md:text-[2.0rem] text-[1.5rem]">
        Train Ticket.
        <span className="lg:text-[1.5rem] md:text-[1.3rem] text-[1rem]">Hub</span>
      </h1>
    </Link>
  );
}
