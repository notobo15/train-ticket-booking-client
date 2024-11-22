import { useTranslations } from "next-intl";
import React from "react";

export default function Banner() {
  const t = useTranslations("HomePage");
  return (
    <div className="px-300 py-100 text-center sm:py-300 md:px-700 lg:pe-100 lg:ps-100 lg:text-left">
      <div
        style={{
          backgroundImage: "url(https://www.busbud.com/pubweb-assets/images/hero/281232c.redesign-illustration.svg)",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 hidden aspect-[2] w-full max-w-[80rem] -translate-x-[46%] -translate-y-[67%] lg:block"
      ></div>
      <div
        className="relative flex flex-col gap-100 [text-shadow:_0px_0px_24px_theme('colors.color-scheme-literal-blue-100')] sm:gap-200 md:gap-300 lg:justify-center lg:min-h-[12rem] lg:w-7/12 xl:min-h-[13.5rem]"
        id="heroTitle"
      >
        <h1 className="font-family-display-html text-size-150 font-weight-bolder leading-175 tracking-tight sm:font-family-display-html sm:text-size-250 sm:font-weight-bolder sm:leading-275 sm:tracking-tight md:font-family-display-html md:text-size-300 md:font-weight-bolder md:leading-reset md:tracking-tight xl:font-family-display-html xl:text-size-400 xl:font-weight-bolder xl:leading-reset xl:tracking-tighter text-balance">
          {t("title")}
        </h1>
        <p className="text-size-100 font-weight-bold leading-125 sm:font-family-display-html sm:text-size-125 sm:font-weight-bolder sm:leading-150 sm:tracking-tight text-balance text-color-secondary">
          {t("description")}
        </p>
      </div>
    </div>
  );
}
