import { useTranslations } from "next-intl";
import React from "react";

export default function Index() {
  const t = useTranslations("TopTravel");

  return (
    <section
      className="grid grid-cols-[minmax(0,80rem)] justify-center pe-[5vw] ps-[5vw] md:pe-[6.25vw] md:ps-[6.25vw] py-500 gap-y-300 md:py-600 lg:py-800 lg:gap-y-500"
      id="route-featured-routes"
    >
      <div className="grid justify-items-center gap-y-200 text-balance text-center *:max-w-prose">
        <h2 className="font-family-display-html text-size-150 font-weight-bolder leading-175 tracking-tight md:font-family-display-html md:text-size-200 md:font-weight-bolder md:leading-225 md:tracking-tight text-balance text-center undefined">
          {t("top_travel_routes")}
        </h2>
      </div>
      <div className="grid grid-cols-24 items-start">
        <ul className="col-start-1 col-end-25 grid grid-cols-1 gap-200 sm:grid-cols-2 sm:gap-300 lg:col-start-2 lg:col-end-24 lg:grid-cols-3">
          <li>
            <a
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default relative block aspect-[21/9] origin-[center_80%] overflow-hidden rounded-lg bg-color-canvas-primary shadow-md transition-transform hover:scale-105 sm:aspect-[3/2]"
              href="https://www.vr.com.vn/vi"
            >
              <p className="font-weight-bold text-size-100 leading-125 inline-block absolute bottom-150 start-150 max-w-[calc(100%-theme(spacing.150)*2)] break-words rounded-lg px-150 py-100 text-color-primary-inverse backdrop-blur-lg">
                {t("buses_from_hanoi_to_sai_gon")}
              </p>
              <img
                loading="lazy"
                className="h-full w-full object-cover object-center"
                alt="Hà Nội đến Sài Gòn"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Vietnam_Railways_train_%28Hanoi%29.jpg/800px-Vietnam_Railways_train_%28Hanoi%29.jpg"
                srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Vietnam_Railways_train_%28Hanoi%29.jpg/800px-Vietnam_Railways_train_%28Hanoi%29.jpg 720w"
                sizes="(min-width:992px) 376px,(min-width:768px) 472px,(min-width:600px) 360px,720px"
              />
            </a>
          </li>
          {/* Các tuyến tàu khác */}
        </ul>
      </div>
    </section>
  );
}
