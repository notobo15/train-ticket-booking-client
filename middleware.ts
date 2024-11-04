import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "./i18n/i18n.config";

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: defaultLocale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|vi)/:path*"],
};
