import React from "react";

export default function Index() {
  return (
    <section
      className="grid grid-cols-[minmax(0,80rem)] justify-center pe-[5vw] ps-[5vw] md:pe-[6.25vw] md:ps-[6.25vw] py-500 gap-y-300 md:py-600 lg:py-800 lg:gap-y-500 bg-color-scheme-brand-primary-800"
      id="journey-overview"
      data-view-block-tracking-name="trip_overview"
    >
      <h2 className="font-family-display-html text-size-150 font-weight-bolder leading-175 tracking-tight md:font-family-display-html md:text-size-200 md:font-weight-bolder md:leading-225 md:tracking-tight text-balance text-center text-color-primary-inverse">
        Bus Albany to Binghamton: Trip Overview
      </h2>
      <div className="mt-500 flex flex-col">
        <div className="flex min-h-800 items-center gap-100 *:last-of-type:border-none">
          <div className="p-100">
            <svg fill="none" height={32} width={32} aria-hidden="true" className="text-icon-color-primary-inverse">
              <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Tickets/lg.svg#root" />
            </svg>
          </div>
          <div className="flex w-full items-center border-b-width-sm border-b-color-primary-inverse py-150 md:py-250">
            <span className="max-w-full text-size-75 leading-100 md:text-size-112 md:leading-125 inline-block md:inline-block w-full font-weight-bold text-color-primary-inverse md:w-12/24 md:font-weight-bolder">
              Average ticket price
            </span>
            <span className="max-w-full text-size-112 leading-125 inline-block w-full text-color-primary-inverse md:w-12/24">
              $134
            </span>
          </div>
        </div>
        <div className="flex min-h-800 items-center gap-100 *:last-of-type:border-none">
          <div className="p-100">
            <svg fill="none" height={32} width={32} aria-hidden="true" className="text-icon-color-primary-inverse">
              <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Clock/lg.svg#root" />
            </svg>
          </div>
          <div className="flex w-full items-center border-b-width-sm border-b-color-primary-inverse py-150 md:py-250">
            <span className="max-w-full text-size-75 leading-100 md:text-size-112 md:leading-125 inline-block md:inline-block w-full font-weight-bold text-color-primary-inverse md:w-12/24 md:font-weight-bolder">
              Average bus trip duration
            </span>
            <span className="max-w-full text-size-112 leading-125 inline-block w-full text-color-primary-inverse md:w-12/24">
              7h 30m
            </span>
          </div>
        </div>
        <div className="flex min-h-800 items-center gap-100 *:last-of-type:border-none">
          <div className="p-100">{/*  */}</div>
          <div className="flex w-full items-center border-b-width-sm border-b-color-primary-inverse py-150 md:py-250">
            <span className="max-w-full text-size-75 leading-100 md:text-size-112 md:leading-125 inline-block md:inline-block w-full font-weight-bold text-color-primary-inverse md:w-12/24 md:font-weight-bolder">
              Number of daily buses
            </span>
            <span className="max-w-full text-size-112 leading-125 inline-block w-full text-color-primary-inverse md:w-12/24">
              1
            </span>
          </div>
        </div>
        <div className="flex min-h-800 items-center gap-100 *:last-of-type:border-none">
          <div className="p-100">
            <svg fill="none" height={32} width={32} aria-hidden="true" className="text-icon-color-primary-inverse">
              <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Sun/lg.svg#root" />
            </svg>
          </div>
          <div className="flex w-full items-center border-b-width-sm border-b-color-primary-inverse py-150 md:py-250">
            <span className="max-w-full text-size-75 leading-100 md:text-size-112 md:leading-125 inline-block md:inline-block w-full font-weight-bold text-color-primary-inverse md:w-12/24 md:font-weight-bolder">
              Earliest bus departure
            </span>
            <span className="max-w-full text-size-112 leading-125 inline-block w-full text-color-primary-inverse md:w-12/24">
              8:40am
            </span>
          </div>
        </div>
        <div className="flex min-h-800 items-center gap-100 *:last-of-type:border-none">
          <div className="p-100">
            <svg fill="none" height={32} width={32} aria-hidden="true" className="text-icon-color-primary-inverse">
              <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/ArrowBiDirectional/horizontal/lg.svg#root"></use>
            </svg>
          </div>
          <div className="flex w-full items-center border-b-width-sm border-b-color-primary-inverse py-150 md:py-250">
            <span className="max-w-full text-size-75 leading-100 md:text-size-112 md:leading-125 inline-block md:inline-block w-full font-weight-bold text-color-primary-inverse md:w-12/24 md:font-weight-bolder">
              Distance
            </span>
            <span className="max-w-full text-size-112 leading-125 inline-block w-full text-color-primary-inverse md:w-12/24">
              116 miles (187 km)
            </span>
          </div>
        </div>
        <div className="flex min-h-800 items-center gap-100 *:last-of-type:border-none">
          <div className="p-100">
            <svg fill="none" height={32} width={32} aria-hidden="true" className="text-icon-color-primary-inverse">
              <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Moon/lg.svg#root" />
            </svg>
          </div>
          <div className="flex w-full items-center border-b-width-sm border-b-color-primary-inverse py-150 md:py-250">
            <span className="max-w-full text-size-75 leading-100 md:text-size-112 md:leading-125 inline-block md:inline-block w-full font-weight-bold text-color-primary-inverse md:w-12/24 md:font-weight-bolder">
              Latest bus departure
            </span>
            <span className="max-w-full text-size-112 leading-125 inline-block w-full text-color-primary-inverse md:w-12/24">
              4:30pm
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
