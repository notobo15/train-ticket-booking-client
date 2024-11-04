import { defaultLocale, locales } from "@/i18n/i18n.config";
import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  defaultLocale: defaultLocale,
  locales: locales,
});
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
