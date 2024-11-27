"use client";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("About");

  return (
    <section
      className="grid grid-cols-[minmax(0,80rem)] justify-center pe-[5vw] ps-[5vw] md:pe-[6.25vw] md:ps-[6.25vw] py-500 gap-y-300 md:py-600 lg:py-800 lg:gap-y-500"
      data-view-block-tracking-name="about_travel"
      id="about-travel"
    >
      <h2 className="font-family-display-html text-size-150 font-weight-bolder leading-175 tracking-tight md:font-family-display-html md:text-size-200 md:font-weight-bolder md:leading-225 md:tracking-tight text-balance text-center undefined">
        {t("about_travel_title")}
      </h2>
      <div className="grid grid-cols-24">
        <div className="col-start-2 col-end-24 sm:col-end-23 xl:col-start-5 xl:col-end-21">
          <div className="grid gap-y-200 md:gap-y-300">
            <h3 className="font-family-display-html text-size-125 font-weight-bolder leading-150 tracking-tight md:font-family-display-html md:text-size-150 md:font-weight-bolder md:leading-175 md:tracking-tight text-balance text-start">
              {t("train_travel_tips")}
            </h3>
            <p className="text-size-100 leading-150">{t("train_travel_tip_1")}</p>
            <p className="text-size-100 leading-150">{t("train_travel_tip_2")}</p>
            <p className="text-size-100 leading-150">{t("train_travel_tip_3")}</p>
            <p className="text-size-100 leading-150">{t("train_travel_tip_4")}</p>
          </div>
          <div className="mt-300 grid gap-y-200 md:mt-400 md:gap-y-300">
            <h3 className="font-family-display-html text-size-125 font-weight-bolder leading-150 tracking-tight md:font-family-display-html md:text-size-150 md:font-weight-bolder md:leading-175 md:tracking-tight text-balance text-start">
              {t("did_you_know")}
            </h3>
            <p className="text-size-100 leading-150">{t("train_origin")}</p>
            <p className="text-size-100 leading-150">{t("daily_train_departures")}</p>
            <p className="text-size-100 leading-150">{t("supertrain")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
