import React from "react";

export default function Index() {
  return (
    <section
      className="grid grid-cols-[minmax(0,80rem)] justify-center pe-[5vw] ps-[5vw] md:pe-[6.25vw] md:ps-[6.25vw] py-500 gap-y-300 md:py-600 lg:py-800 lg:gap-y-500"
      data-testid="quick-access-menu"
    >
      <nav className="flex flex-wrap justify-center gap-x-100 gap-y-150">
        <a
          className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-100 pe-100 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-literal-blue-100 text-color-scheme-literal-blue-800 hover:text-color-scheme-literal-blue-600 active:bg-color-scheme-literal-blue-200 active:text-color-scheme-literal-blue-800"
          href="#journey-overview"
          data-access-menu-link="true"
        >
          <span className="font-weight-bold ps-050 pe-050 py-000 text-size-87 leading-125">Journey Overview</span>
        </a>
        <a
          className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-100 pe-100 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-literal-blue-100 text-color-scheme-literal-blue-800 hover:text-color-scheme-literal-blue-600 active:bg-color-scheme-literal-blue-200 active:text-color-scheme-literal-blue-800"
          href="#route-featured-profiles"
          data-access-menu-link="true"
        >
          <span className="font-weight-bold ps-050 pe-050 py-000 text-size-87 leading-125">Compare bus companies</span>
        </a>
        <a
          className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-100 pe-100 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-literal-blue-100 text-color-scheme-literal-blue-800 hover:text-color-scheme-literal-blue-600 active:bg-color-scheme-literal-blue-200 active:text-color-scheme-literal-blue-800"
          href="#about-this-route"
          data-access-menu-link="true"
        >
          <span className="font-weight-bold ps-050 pe-050 py-000 text-size-87 leading-125">City Guide</span>
        </a>
        <a
          className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-100 pe-100 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-literal-blue-100 text-color-scheme-literal-blue-800 hover:text-color-scheme-literal-blue-600 active:bg-color-scheme-literal-blue-200 active:text-color-scheme-literal-blue-800"
          href="#popular-stations"
          data-access-menu-link="true"
        >
          <span className="font-weight-bold ps-050 pe-050 py-000 text-size-87 leading-125">Popular bus stations</span>
        </a>
        <a
          className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-100 pe-100 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-literal-blue-100 text-color-scheme-literal-blue-800 hover:text-color-scheme-literal-blue-600 active:bg-color-scheme-literal-blue-200 active:text-color-scheme-literal-blue-800"
          href="#faq"
          data-access-menu-link="true"
        >
          <span className="font-weight-bold ps-050 pe-050 py-000 text-size-87 leading-125">
            Frequently Asked Questions
          </span>
        </a>
        <a
          className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-100 pe-100 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-literal-blue-100 text-color-scheme-literal-blue-800 hover:text-color-scheme-literal-blue-600 active:bg-color-scheme-literal-blue-200 active:text-color-scheme-literal-blue-800"
          href="#historical-prices"
          data-access-menu-link="true"
        >
          <span className="font-weight-bold ps-050 pe-050 py-000 text-size-87 leading-125">
            Best time to book your trip
          </span>
        </a>
        <a
          className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-100 pe-100 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-literal-blue-100 text-color-scheme-literal-blue-800 hover:text-color-scheme-literal-blue-600 active:bg-color-scheme-literal-blue-200 active:text-color-scheme-literal-blue-800"
          href="#about-travel"
          data-access-menu-link="true"
        >
          <span className="font-weight-bold ps-050 pe-050 py-000 text-size-87 leading-125">About Bus Travel</span>
        </a>
        <a
          className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-100 pe-100 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-literal-blue-100 text-color-scheme-literal-blue-800 hover:text-color-scheme-literal-blue-600 active:bg-color-scheme-literal-blue-200 active:text-color-scheme-literal-blue-800"
          href="#route-featured-routes"
          data-access-menu-link="true"
        >
          <span className="font-weight-bold ps-050 pe-050 py-000 text-size-87 leading-125">
            Top traveled bus routes
          </span>
        </a>
        <a
          className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-100 pe-100 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-literal-blue-100 text-color-scheme-literal-blue-800 hover:text-color-scheme-literal-blue-600 active:bg-color-scheme-literal-blue-200 active:text-color-scheme-literal-blue-800"
          href="#about-busbud"
          data-access-menu-link="true"
        >
          <span className="font-weight-bold ps-050 pe-050 py-000 text-size-87 leading-125">Why choose Busbud?</span>
        </a>
        <a
          className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-100 pe-100 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-literal-blue-100 text-color-scheme-literal-blue-800 hover:text-color-scheme-literal-blue-600 active:bg-color-scheme-literal-blue-200 active:text-color-scheme-literal-blue-800"
          href="#origin-from"
          data-access-menu-link="true"
        >
          <span className="font-weight-bold ps-050 pe-050 py-000 text-size-87 leading-125">
            Popular Buses Connecting Binghamton
          </span>
        </a>
        <a
          className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-100 pe-100 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-literal-blue-100 text-color-scheme-literal-blue-800 hover:text-color-scheme-literal-blue-600 active:bg-color-scheme-literal-blue-200 active:text-color-scheme-literal-blue-800"
          href="#destination-from"
          data-access-menu-link="true"
        >
          <span className="font-weight-bold ps-050 pe-050 py-000 text-size-87 leading-125">
            Popular Buses Connecting Binghamton
          </span>
        </a>
        <a
          className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-100 pe-100 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-literal-blue-100 text-color-scheme-literal-blue-800 hover:text-color-scheme-literal-blue-600 active:bg-color-scheme-literal-blue-200 active:text-color-scheme-literal-blue-800"
          href="#popular-routes-country"
          data-access-menu-link="true"
        >
          <span className="font-weight-bold ps-050 pe-050 py-000 text-size-87 leading-125">
            Popular Routes In This Country
          </span>
        </a>
      </nav>
    </section>
  );
}
