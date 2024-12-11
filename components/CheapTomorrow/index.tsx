import React from "react";

export default function Index() {
  return (
    <section className="grid grid-cols-[minmax(0,80rem)] justify-center pe-[5vw] ps-[5vw] md:pe-[6.25vw] md:ps-[6.25vw] py-500 gap-y-300 md:py-600 lg:py-800 lg:gap-y-500 !mt-0 bg-color-canvas-secondary">
      <div className="flex flex-col gap-y-300 lg:gap-y-500" data-price-calendar-tab-pane="true">
        <div className="grid justify-items-center gap-y-200 text-balance text-center *:max-w-prose">
          <h2 className="font-family-display-html text-size-150 font-weight-bolder leading-175 tracking-tight md:font-family-display-html md:text-size-200 md:font-weight-bolder md:leading-225 md:tracking-tight text-balance text-center undefined">
            Cheap buses leaving tomorrow
          </h2>
          <h3 className="text-size-100 leading-150 text-color-secondary">One passenger / one way</h3>
          <div className="mt-200 flex flex-col items-center justify-center gap-100 sm:flex-row sm:gap-200">
            <button
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-literal-blue-100 text-color-scheme-literal-blue-800 hover:text-color-scheme-literal-blue-600 active:bg-color-scheme-literal-blue-200 active:text-color-scheme-literal-blue-800 vanilla-btn-links"
              type="button"
              data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-16&adults=1&sort_key=price_avg"
              data-tracking-action="click_link"
              data-tracking-details='{"link_target":"price_calendar_cheapest_button"}'
            >
              <span className="shrink-0 text-color-scheme-literal-blue-400"></span>
              <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">Cheapest trips</span>
            </button>
            <button
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-literal-blue-100 text-color-scheme-literal-blue-800 hover:text-color-scheme-literal-blue-600 active:bg-color-scheme-literal-blue-200 active:text-color-scheme-literal-blue-800 vanilla-btn-links"
              type="button"
              data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-16&adults=1&sort_key=duration_m"
              data-tracking-action="click_link"
              data-tracking-details='{"link_target":"price_calendar_fastest_button"}'
            >
              <span className="shrink-0 text-color-scheme-literal-blue-400"></span>
              <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">Fastest trips</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-300 lg:gap-y-500">
          <ul className="flex flex-col gap-150">
            <li
              className="rounded-lg outline-width-lg bg-color-scheme-functional-positive-100 outline-color-scheme-functional-positive-100"
              aria-label="Bus from Albany to Binghamton, departing from ALB Airport at 3:45pm on October 16, arriving at Binghamton Bus Station at 11:30pm on October 16. Duration: 7h 45m. Operated by: Adirondack Trailways. Price: $97"
            >
              <div className="max-w-full font-weight-bolder text-size-62 uppercase leading-75 tracking-wider my-050 block text-center text-color-scheme-functional-positive-600">
                <span className="sr-only">This trip is recommended because it is: </span>
                Cheapest
              </div>
              <div
                className="grid cursor-pointer gap-x-200 gap-y-150 rounded-lg bg-color-canvas-primary p-100 shadow-[0_0_0_var(--bw-sm)_var(--col-b-prim)] [gridTemplateAreas:'locations_locations'_'meta_button'] [gridTemplateColumns:1fr_min-content] hover:shadow-[0_0_0_var(--bw-md)_var(--col-brand-prim-200)] md:gap-x-300 md:gap-y-200 md:px-250 md:py-200 md:[gridTemplateAreas:'meta_locations_button'] md:[gridTemplateColumns:25%_1fr_minmax(min-content,12.5%)]"
                data-price-calendar-departure-link="true"
                data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-16&adults=1&leg_card_id=7f33be0c-bbc7-4f8f-853c-5bd78b00a4ef766676732024-10-16T15%3A45%3A00-04%3A002024-10-16T23%3A30%3A00-04%3A00&view=ticket_options"
              >
                <div className="grid items-start gap-x-300 p-100 [gridArea:locations] [gridTemplateColumns:1fr_1fr] md:p-0">
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city'] gap-x-200 [gridTemplateAreas:'time_arrow'_'location_location'_'city_city'] [gridTemplateColumns:1fr_auto]">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Departure time: October 16 at </span>
                      <time dateTime="2024-10-16T15:45:00">3:45pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure city: </span>
                      Albany
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure location: </span>
                      ALB Airport
                    </div>
                    <svg
                      className="text-icon-color-secondary self-center [gridArea:arrow]"
                      id="root"
                      width={36}
                      height={12}
                      viewBox="0 0 36 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M30.34 0l5.37 5.3a1 1 0 0 1 0 1.4L30.34 12 29 10.66 32.66 7H18V5h14.66L29 1.34 30.34 0zM2 5H0v2h2V5zm2 0h4v2H4V5zm12 0h-6v2h6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city']">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Arrival time: October 16 at </span>
                      <time dateTime="2024-10-16T23:30:00">11:30pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination city: </span>
                      Binghamton
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination location: </span>
                      Binghamton Bus Station
                    </div>
                  </div>
                </div>
                <div className="self-center pl-050 [gridArea:meta]">
                  <span className="sr-only">Operated by: Adirondack Trailways</span>
                  <img
                    loading="lazy"
                    className="max-h-300"
                    alt="Adirondack Trailways"
                    src="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0"
                    srcSet="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=1 1x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=2 2x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=3 3x"
                  />
                  <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block mt-050">
                    <span className="sr-only">Vehicle: {/* */}Bus</span>
                    <span className="sr-only">Duration: </span>
                    <time dateTime="PT7H45M">7h 45m</time>
                  </div>
                </div>
                <button
                  aria-label="Price: $97. Go to all departures from Albany to Binghamton on October 16 to book this trip"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-neutral-100 text-color-primary hover:text-color-secondary active:bg-color-scheme-neutral-200 active:text-color-primary self-center justify-self-end [gridArea:button]"
                  type="button"
                >
                  <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">$97</span>
                  <span className="shrink-0 text-icon-color-primary">
                    <svg fill="none" height={24} width={24} aria-hidden="true">
                      <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Chevron/right/md.svg#root"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </li>
            <li
              className="rounded-lg outline-width-lg bg-color-scheme-functional-special-100 outline-color-scheme-functional-special-100"
              aria-label="Bus from Albany to Binghamton, departing from Albany Terminal at 4:30pm on October 16, arriving at Binghamton Bus Station at 11:30pm on October 16. Duration: 7h. Operated by: Adirondack Trailways. Price: $147"
            >
              <div className="max-w-full font-weight-bolder text-size-62 uppercase leading-75 tracking-wider my-050 block text-center text-color-scheme-functional-special-600">
                <span className="sr-only">This trip is recommended because it is: </span>
                Fastest
              </div>
              <div
                className="grid cursor-pointer gap-x-200 gap-y-150 rounded-lg bg-color-canvas-primary p-100 shadow-[0_0_0_var(--bw-sm)_var(--col-b-prim)] [gridTemplateAreas:'locations_locations'_'meta_button'] [gridTemplateColumns:1fr_min-content] hover:shadow-[0_0_0_var(--bw-md)_var(--col-brand-prim-200)] md:gap-x-300 md:gap-y-200 md:px-250 md:py-200 md:[gridTemplateAreas:'meta_locations_button'] md:[gridTemplateColumns:25%_1fr_minmax(min-content,12.5%)]"
                data-price-calendar-departure-link="true"
                data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-16&adults=1&leg_card_id=7f33be0c-bbc7-4f8f-853c-5bd78b00a4ef14977976732024-10-16T16%3A30%3A00-04%3A002024-10-16T23%3A30%3A00-04%3A00&view=ticket_options"
              >
                <div className="grid items-start gap-x-300 p-100 [gridArea:locations] [gridTemplateColumns:1fr_1fr] md:p-0">
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city'] gap-x-200 [gridTemplateAreas:'time_arrow'_'location_location'_'city_city'] [gridTemplateColumns:1fr_auto]">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Departure time: October 16 at </span>
                      <time dateTime="2024-10-16T16:30:00">4:30pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure city: </span>
                      Albany
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure location: </span>
                      Albany Terminal
                    </div>
                    <svg
                      className="text-icon-color-secondary self-center [gridArea:arrow]"
                      id="root"
                      width={36}
                      height={12}
                      viewBox="0 0 36 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M30.34 0l5.37 5.3a1 1 0 0 1 0 1.4L30.34 12 29 10.66 32.66 7H18V5h14.66L29 1.34 30.34 0zM2 5H0v2h2V5zm2 0h4v2H4V5zm12 0h-6v2h6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city']">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Arrival time: October 16 at </span>
                      <time dateTime="2024-10-16T23:30:00">11:30pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination city: </span>
                      Binghamton
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination location: </span>
                      Binghamton Bus Station
                    </div>
                  </div>
                </div>
                <div className="self-center pl-050 [gridArea:meta]">
                  <span className="sr-only">Operated by: Adirondack Trailways</span>
                  <img
                    loading="lazy"
                    className="max-h-300"
                    alt="Adirondack Trailways"
                    src="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0"
                    srcSet="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=1 1x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=2 2x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=3 3x"
                  />
                  <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block mt-050">
                    <span className="sr-only">Vehicle: {/* */}Bus</span>
                    <span className="sr-only">Duration: </span>
                    <time dateTime="PT7H">7h</time>
                  </div>
                </div>
                <button
                  aria-label="Price: $147. Go to all departures from Albany to Binghamton on October 16 to book this trip"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-neutral-100 text-color-primary hover:text-color-secondary active:bg-color-scheme-neutral-200 active:text-color-primary self-center justify-self-end [gridArea:button]"
                  type="button"
                >
                  <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">$147</span>
                  <span className="shrink-0 text-icon-color-primary">
                    <svg fill="none" height={24} width={24} aria-hidden="true">
                      <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Chevron/right/md.svg#root"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </li>
            <li aria-label="Bus from Albany to Binghamton, departing from ALB Airport at 3:45pm on October 16, arriving at Binghamton Bus Station at 11:30pm on October 16. Duration: 7h 45m. Operated by: Adirondack Trailways. Price: $134">
              <div
                className="grid cursor-pointer gap-x-200 gap-y-150 rounded-lg bg-color-canvas-primary p-100 shadow-[0_0_0_var(--bw-sm)_var(--col-b-prim)] [gridTemplateAreas:'locations_locations'_'meta_button'] [gridTemplateColumns:1fr_min-content] hover:shadow-[0_0_0_var(--bw-md)_var(--col-brand-prim-200)] md:gap-x-300 md:gap-y-200 md:px-250 md:py-200 md:[gridTemplateAreas:'meta_locations_button'] md:[gridTemplateColumns:25%_1fr_minmax(min-content,12.5%)]"
                data-price-calendar-departure-link="true"
                data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-16&adults=1&leg_card_id=7f33be0c-bbc7-4f8f-853c-5bd78b00a4ef766676732024-10-16T15%3A45%3A00-04%3A002024-10-16T23%3A30%3A00-04%3A00&view=ticket_options"
              >
                <div className="grid items-start gap-x-300 p-100 [gridArea:locations] [gridTemplateColumns:1fr_1fr] md:p-0">
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city'] gap-x-200 [gridTemplateAreas:'time_arrow'_'location_location'_'city_city'] [gridTemplateColumns:1fr_auto]">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Departure time: October 16 at </span>
                      <time dateTime="2024-10-16T15:45:00">3:45pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure city: </span>
                      Albany
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure location: </span>
                      ALB Airport
                    </div>
                    <svg
                      className="text-icon-color-secondary self-center [gridArea:arrow]"
                      id="root"
                      width={36}
                      height={12}
                      viewBox="0 0 36 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M30.34 0l5.37 5.3a1 1 0 0 1 0 1.4L30.34 12 29 10.66 32.66 7H18V5h14.66L29 1.34 30.34 0zM2 5H0v2h2V5zm2 0h4v2H4V5zm12 0h-6v2h6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city']">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Arrival time: October 16 at </span>
                      <time dateTime="2024-10-16T23:30:00">11:30pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination city: </span>
                      Binghamton
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination location: </span>
                      Binghamton Bus Station
                    </div>
                  </div>
                </div>
                <div className="self-center pl-050 [gridArea:meta]">
                  <span className="sr-only">Operated by: Adirondack Trailways</span>
                  <img
                    loading="lazy"
                    className="max-h-300"
                    alt="Adirondack Trailways"
                    src="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0"
                    srcSet="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=1 1x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=2 2x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=3 3x"
                  />
                  <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block mt-050">
                    <span className="sr-only">Vehicle: {/* */}Bus</span>
                    <span className="sr-only">Duration: </span>
                    <time dateTime="PT7H45M">7h 45m</time>
                  </div>
                </div>
                <button
                  aria-label="Price: $134. Go to all departures from Albany to Binghamton on October 16 to book this trip"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-neutral-100 text-color-primary hover:text-color-secondary active:bg-color-scheme-neutral-200 active:text-color-primary self-center justify-self-end [gridArea:button]"
                  type="button"
                >
                  <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">$134</span>
                  <span className="shrink-0 text-icon-color-primary">
                    <svg fill="none" height={24} width={24} aria-hidden="true">
                      <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Chevron/right/md.svg#root"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </li>
            <li aria-label="Bus from Albany to Binghamton, departing from 1400 Washington Ave. at 11:00am on October 16, arriving at Binghamton Bus Station at 8:30pm on October 16. Duration: 9h 30m. Operated by: Adirondack Trailways. Price: $141">
              <div
                className="grid cursor-pointer gap-x-200 gap-y-150 rounded-lg bg-color-canvas-primary p-100 shadow-[0_0_0_var(--bw-sm)_var(--col-b-prim)] [gridTemplateAreas:'locations_locations'_'meta_button'] [gridTemplateColumns:1fr_min-content] hover:shadow-[0_0_0_var(--bw-md)_var(--col-brand-prim-200)] md:gap-x-300 md:gap-y-200 md:px-250 md:py-200 md:[gridTemplateAreas:'meta_locations_button'] md:[gridTemplateColumns:25%_1fr_minmax(min-content,12.5%)]"
                data-price-calendar-departure-link="true"
                data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-16&adults=1&leg_card_id=7f33be0c-bbc7-4f8f-853c-5bd78b00a4ef6563476732024-10-16T11%3A00%3A00-04%3A002024-10-16T20%3A30%3A00-04%3A00&view=ticket_options"
              >
                <div className="grid items-start gap-x-300 p-100 [gridArea:locations] [gridTemplateColumns:1fr_1fr] md:p-0">
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city'] gap-x-200 [gridTemplateAreas:'time_arrow'_'location_location'_'city_city'] [gridTemplateColumns:1fr_auto]">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Departure time: October 16 at </span>
                      <time dateTime="2024-10-16T11:00:00">11:00am</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure city: </span>
                      Albany
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure location: </span>
                      1400 Washington Ave.
                    </div>
                    <svg
                      className="text-icon-color-secondary self-center [gridArea:arrow]"
                      id="root"
                      width={36}
                      height={12}
                      viewBox="0 0 36 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M30.34 0l5.37 5.3a1 1 0 0 1 0 1.4L30.34 12 29 10.66 32.66 7H18V5h14.66L29 1.34 30.34 0zM2 5H0v2h2V5zm2 0h4v2H4V5zm12 0h-6v2h6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city']">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Arrival time: October 16 at </span>
                      <time dateTime="2024-10-16T20:30:00">8:30pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination city: </span>
                      Binghamton
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination location: </span>
                      Binghamton Bus Station
                    </div>
                  </div>
                </div>
                <div className="self-center pl-050 [gridArea:meta]">
                  <span className="sr-only">Operated by: Adirondack Trailways</span>
                  <img
                    loading="lazy"
                    className="max-h-300"
                    alt="Adirondack Trailways"
                    src="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0"
                    srcSet="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=1 1x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=2 2x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=3 3x"
                  />
                  <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block mt-050">
                    <span className="sr-only">Vehicle: {/* */}Bus</span>
                    <span className="sr-only">Duration: </span>
                    <time dateTime="PT9H30M">9h 30m</time>
                  </div>
                </div>
                <button
                  aria-label="Price: $141. Go to all departures from Albany to Binghamton on October 16 to book this trip"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-neutral-100 text-color-primary hover:text-color-secondary active:bg-color-scheme-neutral-200 active:text-color-primary self-center justify-self-end [gridArea:button]"
                  type="button"
                >
                  <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">$141</span>
                  <span className="shrink-0 text-icon-color-primary">
                    <svg fill="none" height={24} width={24} aria-hidden="true">
                      <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Chevron/right/md.svg#root"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </li>
            <li aria-label="Bus from Albany to Binghamton, departing from 1400 Washington Ave. at 11:00am on October 16, arriving at Binghamton Bus Station at 8:30pm on October 16. Duration: 9h 30m. Operated by: Adirondack Trailways. Price: $102">
              <div
                className="grid cursor-pointer gap-x-200 gap-y-150 rounded-lg bg-color-canvas-primary p-100 shadow-[0_0_0_var(--bw-sm)_var(--col-b-prim)] [gridTemplateAreas:'locations_locations'_'meta_button'] [gridTemplateColumns:1fr_min-content] hover:shadow-[0_0_0_var(--bw-md)_var(--col-brand-prim-200)] md:gap-x-300 md:gap-y-200 md:px-250 md:py-200 md:[gridTemplateAreas:'meta_locations_button'] md:[gridTemplateColumns:25%_1fr_minmax(min-content,12.5%)]"
                data-price-calendar-departure-link="true"
                data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-16&adults=1&leg_card_id=7f33be0c-bbc7-4f8f-853c-5bd78b00a4ef6563476732024-10-16T11%3A00%3A00-04%3A002024-10-16T20%3A30%3A00-04%3A00&view=ticket_options"
              >
                <div className="grid items-start gap-x-300 p-100 [gridArea:locations] [gridTemplateColumns:1fr_1fr] md:p-0">
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city'] gap-x-200 [gridTemplateAreas:'time_arrow'_'location_location'_'city_city'] [gridTemplateColumns:1fr_auto]">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Departure time: October 16 at </span>
                      <time dateTime="2024-10-16T11:00:00">11:00am</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure city: </span>
                      Albany
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure location: </span>
                      1400 Washington Ave.
                    </div>
                    <svg
                      className="text-icon-color-secondary self-center [gridArea:arrow]"
                      id="root"
                      width={36}
                      height={12}
                      viewBox="0 0 36 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M30.34 0l5.37 5.3a1 1 0 0 1 0 1.4L30.34 12 29 10.66 32.66 7H18V5h14.66L29 1.34 30.34 0zM2 5H0v2h2V5zm2 0h4v2H4V5zm12 0h-6v2h6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city']">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Arrival time: October 16 at </span>
                      <time dateTime="2024-10-16T20:30:00">8:30pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination city: </span>
                      Binghamton
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination location: </span>
                      Binghamton Bus Station
                    </div>
                  </div>
                </div>
                <div className="self-center pl-050 [gridArea:meta]">
                  <span className="sr-only">Operated by: Adirondack Trailways</span>
                  <img
                    loading="lazy"
                    className="max-h-300"
                    alt="Adirondack Trailways"
                    src="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0"
                    srcSet="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=1 1x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=2 2x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=3 3x"
                  />
                  <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block mt-050">
                    <span className="sr-only">Vehicle: {/* */}Bus</span>
                    <span className="sr-only">Duration: </span>
                    <time dateTime="PT9H30M">9h 30m</time>
                  </div>
                </div>
                <button
                  aria-label="Price: $102. Go to all departures from Albany to Binghamton on October 16 to book this trip"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-neutral-100 text-color-primary hover:text-color-secondary active:bg-color-scheme-neutral-200 active:text-color-primary self-center justify-self-end [gridArea:button]"
                  type="button"
                >
                  <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">$102</span>
                  <span className="shrink-0 text-icon-color-primary">
                    <svg fill="none" height={24} width={24} aria-hidden="true">
                      <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Chevron/right/md.svg#root"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </li>
          </ul>
          <button
            aria-label="Go to all departures from Albany to Binghamton on October 16"
            className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center max-w-full ps-200 pe-200 py-150 rounded-md hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-brand-primary-500 shadow-sm hover:bg-color-scheme-brand-primary-400 hover:shadow-sm active:bg-color-scheme-brand-primary-600 [&:not(:focus-visible)]:active:shadow-none text-color-primary-inverse hover:text-color-primary-inverse active:text-color-primary-inverse w-full self-center sm:w-auto"
            type="button"
            data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-16&adults=1"
            data-price-calendar-more-link="true"
          >
            <span className="shrink-0 text-icon-color-primary-inverse">
              <svg fill="none" height={32} width={32} aria-hidden="true">
                <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/MagnifyingGlass/lg.svg#root" />
              </svg>
            </span>
            <span className="ps-100 pe-100 py-075 font-weight-bolder leading-125 text-size-112">
              View all departures
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-300 lg:gap-y-500 hidden" data-price-calendar-tab-pane="true">
        <div className="grid justify-items-center gap-y-200 text-balance text-center *:max-w-prose">
          <div className="font-family-display-html text-size-150 font-weight-bolder leading-175 tracking-tight md:font-family-display-html md:text-size-200 md:font-weight-bolder md:leading-225 md:tracking-tight text-balance text-center undefined">
            Cheap buses leaving Friday
          </div>
          <h3 className="text-size-100 leading-150 text-color-secondary">One passenger / one way</h3>
          <div className="mt-200 flex flex-col items-center justify-center gap-100 sm:flex-row sm:gap-200">
            <button
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-literal-blue-100 text-color-scheme-literal-blue-800 hover:text-color-scheme-literal-blue-600 active:bg-color-scheme-literal-blue-200 active:text-color-scheme-literal-blue-800 vanilla-btn-links"
              type="button"
              data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-16&adults=1&sort_key=price_avg"
              data-tracking-action="click_link"
              data-tracking-details='{"link_target":"price_calendar_cheapest_button"}'
            >
              <span className="shrink-0 text-color-scheme-literal-blue-400"></span>
              <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">Cheapest trips</span>
            </button>
            <button
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-literal-blue-100 text-color-scheme-literal-blue-800 hover:text-color-scheme-literal-blue-600 active:bg-color-scheme-literal-blue-200 active:text-color-scheme-literal-blue-800 vanilla-btn-links"
              type="button"
              data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-16&adults=1&sort_key=duration_m"
              data-tracking-action="click_link"
              data-tracking-details='{"link_target":"price_calendar_fastest_button"}'
            >
              <span className="shrink-0 text-color-scheme-literal-blue-400"></span>
              <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">Fastest trips</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-300 lg:gap-y-500">
          <ul className="flex flex-col gap-150">
            <li
              className="rounded-lg outline-width-lg bg-color-scheme-functional-positive-100 outline-color-scheme-functional-positive-100"
              aria-label="Bus from Albany to Binghamton, departing from 1400 Washington Ave. at 10:55am on October 18, arriving at Binghamton Bus Station at 2:05pm on October 18. Duration: 3h 10m. Operated by: Adirondack Trailways. Price: $51"
            >
              <div className="max-w-full font-weight-bolder text-size-62 uppercase leading-75 tracking-wider my-050 block text-center text-color-scheme-functional-positive-600">
                <span className="sr-only">This trip is recommended because it is: </span>
                Cheapest
              </div>
              <div
                className="grid cursor-pointer gap-x-200 gap-y-150 rounded-lg bg-color-canvas-primary p-100 shadow-[0_0_0_var(--bw-sm)_var(--col-b-prim)] [gridTemplateAreas:'locations_locations'_'meta_button'] [gridTemplateColumns:1fr_min-content] hover:shadow-[0_0_0_var(--bw-md)_var(--col-brand-prim-200)] md:gap-x-300 md:gap-y-200 md:px-250 md:py-200 md:[gridTemplateAreas:'meta_locations_button'] md:[gridTemplateColumns:25%_1fr_minmax(min-content,12.5%)]"
                data-price-calendar-departure-link="true"
                data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-18&adults=1&leg_card_id=7f33be0c-bbc7-4f8f-853c-5bd78b00a4ef6563476732024-10-18T10%3A55%3A00-04%3A002024-10-18T14%3A05%3A00-04%3A00&view=ticket_options"
              >
                <div className="grid items-start gap-x-300 p-100 [gridArea:locations] [gridTemplateColumns:1fr_1fr] md:p-0">
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city'] gap-x-200 [gridTemplateAreas:'time_arrow'_'location_location'_'city_city'] [gridTemplateColumns:1fr_auto]">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Departure time: October 18 at </span>
                      <time dateTime="2024-10-18T10:55:00">10:55am</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure city: </span>
                      Albany
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure location: </span>
                      1400 Washington Ave.
                    </div>
                    <svg
                      className="text-icon-color-secondary self-center [gridArea:arrow]"
                      id="root"
                      width={36}
                      height={12}
                      viewBox="0 0 36 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M30.34 0l5.37 5.3a1 1 0 0 1 0 1.4L30.34 12 29 10.66 32.66 7H18V5h14.66L29 1.34 30.34 0zM2 5H0v2h2V5zm2 0h4v2H4V5zm12 0h-6v2h6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city']">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Arrival time: October 18 at </span>
                      <time dateTime="2024-10-18T14:05:00">2:05pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination city: </span>
                      Binghamton
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination location: </span>
                      Binghamton Bus Station
                    </div>
                  </div>
                </div>
                <div className="self-center pl-050 [gridArea:meta]">
                  <span className="sr-only">Operated by: Adirondack Trailways</span>
                  <img
                    loading="lazy"
                    className="max-h-300"
                    alt="Adirondack Trailways"
                    src="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0"
                    srcSet="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=1 1x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=2 2x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=3 3x"
                  />
                  <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block mt-050">
                    <span className="sr-only">Vehicle: {/* */}Bus</span>
                    <span className="sr-only">Duration: </span>
                    <time dateTime="PT3H10M">3h 10m</time>
                  </div>
                </div>
                <button
                  aria-label="Price: $51. Go to all departures from Albany to Binghamton on October 18 to book this trip"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-neutral-100 text-color-primary hover:text-color-secondary active:bg-color-scheme-neutral-200 active:text-color-primary self-center justify-self-end [gridArea:button]"
                  type="button"
                >
                  <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">$51</span>
                  <span className="shrink-0 text-icon-color-primary">
                    <svg fill="none" height={24} width={24} aria-hidden="true">
                      <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Chevron/right/md.svg#root"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </li>
            <li
              className="rounded-lg outline-width-lg bg-color-scheme-functional-special-100 outline-color-scheme-functional-special-100"
              aria-label="Bus from Albany to Binghamton, departing from 1400 Washington Ave. at 10:55am on October 18, arriving at Binghamton Bus Station at 2:05pm on October 18. Duration: 3h 10m. Operated by: Adirondack Trailways. Price: $70"
            >
              <div className="max-w-full font-weight-bolder text-size-62 uppercase leading-75 tracking-wider my-050 block text-center text-color-scheme-functional-special-600">
                <span className="sr-only">This trip is recommended because it is: </span>
                Fastest
              </div>
              <div
                className="grid cursor-pointer gap-x-200 gap-y-150 rounded-lg bg-color-canvas-primary p-100 shadow-[0_0_0_var(--bw-sm)_var(--col-b-prim)] [gridTemplateAreas:'locations_locations'_'meta_button'] [gridTemplateColumns:1fr_min-content] hover:shadow-[0_0_0_var(--bw-md)_var(--col-brand-prim-200)] md:gap-x-300 md:gap-y-200 md:px-250 md:py-200 md:[gridTemplateAreas:'meta_locations_button'] md:[gridTemplateColumns:25%_1fr_minmax(min-content,12.5%)]"
                data-price-calendar-departure-link="true"
                data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-18&adults=1&leg_card_id=7f33be0c-bbc7-4f8f-853c-5bd78b00a4ef6563476732024-10-18T10%3A55%3A00-04%3A002024-10-18T14%3A05%3A00-04%3A00&view=ticket_options"
              >
                <div className="grid items-start gap-x-300 p-100 [gridArea:locations] [gridTemplateColumns:1fr_1fr] md:p-0">
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city'] gap-x-200 [gridTemplateAreas:'time_arrow'_'location_location'_'city_city'] [gridTemplateColumns:1fr_auto]">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Departure time: October 18 at </span>
                      <time dateTime="2024-10-18T10:55:00">10:55am</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure city: </span>
                      Albany
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure location: </span>
                      1400 Washington Ave.
                    </div>
                    <svg
                      className="text-icon-color-secondary self-center [gridArea:arrow]"
                      id="root"
                      width={36}
                      height={12}
                      viewBox="0 0 36 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M30.34 0l5.37 5.3a1 1 0 0 1 0 1.4L30.34 12 29 10.66 32.66 7H18V5h14.66L29 1.34 30.34 0zM2 5H0v2h2V5zm2 0h4v2H4V5zm12 0h-6v2h6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city']">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Arrival time: October 18 at </span>
                      <time dateTime="2024-10-18T14:05:00">2:05pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination city: </span>
                      Binghamton
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination location: </span>
                      Binghamton Bus Station
                    </div>
                  </div>
                </div>
                <div className="self-center pl-050 [gridArea:meta]">
                  <span className="sr-only">Operated by: Adirondack Trailways</span>
                  <img
                    loading="lazy"
                    className="max-h-300"
                    alt="Adirondack Trailways"
                    src="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0"
                    srcSet="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=1 1x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=2 2x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=3 3x"
                  />
                  <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block mt-050">
                    <span className="sr-only">Vehicle: {/* */}Bus</span>
                    <span className="sr-only">Duration: </span>
                    <time dateTime="PT3H10M">3h 10m</time>
                  </div>
                </div>
                <button
                  aria-label="Price: $70. Go to all departures from Albany to Binghamton on October 18 to book this trip"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-neutral-100 text-color-primary hover:text-color-secondary active:bg-color-scheme-neutral-200 active:text-color-primary self-center justify-self-end [gridArea:button]"
                  type="button"
                >
                  <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">$70</span>
                  <span className="shrink-0 text-icon-color-primary">
                    <svg fill="none" height={24} width={24} aria-hidden="true">
                      <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Chevron/right/md.svg#root"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </li>
            <li aria-label="Bus from Albany to Binghamton, departing from ALB Airport at 12:00pm on October 18, arriving at Binghamton Bus Station at 11:30pm on October 18. Duration: 11h 30m. Operated by: Adirondack Trailways. Price: $133">
              <div
                className="grid cursor-pointer gap-x-200 gap-y-150 rounded-lg bg-color-canvas-primary p-100 shadow-[0_0_0_var(--bw-sm)_var(--col-b-prim)] [gridTemplateAreas:'locations_locations'_'meta_button'] [gridTemplateColumns:1fr_min-content] hover:shadow-[0_0_0_var(--bw-md)_var(--col-brand-prim-200)] md:gap-x-300 md:gap-y-200 md:px-250 md:py-200 md:[gridTemplateAreas:'meta_locations_button'] md:[gridTemplateColumns:25%_1fr_minmax(min-content,12.5%)]"
                data-price-calendar-departure-link="true"
                data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-18&adults=1&leg_card_id=7f33be0c-bbc7-4f8f-853c-5bd78b00a4ef766676732024-10-18T12%3A00%3A00-04%3A002024-10-18T23%3A30%3A00-04%3A00&view=ticket_options"
              >
                <div className="grid items-start gap-x-300 p-100 [gridArea:locations] [gridTemplateColumns:1fr_1fr] md:p-0">
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city'] gap-x-200 [gridTemplateAreas:'time_arrow'_'location_location'_'city_city'] [gridTemplateColumns:1fr_auto]">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Departure time: October 18 at </span>
                      <time dateTime="2024-10-18T12:00:00">12:00pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure city: </span>
                      Albany
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure location: </span>
                      ALB Airport
                    </div>
                    <svg
                      className="text-icon-color-secondary self-center [gridArea:arrow]"
                      id="root"
                      width={36}
                      height={12}
                      viewBox="0 0 36 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M30.34 0l5.37 5.3a1 1 0 0 1 0 1.4L30.34 12 29 10.66 32.66 7H18V5h14.66L29 1.34 30.34 0zM2 5H0v2h2V5zm2 0h4v2H4V5zm12 0h-6v2h6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city']">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Arrival time: October 18 at </span>
                      <time dateTime="2024-10-18T23:30:00">11:30pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination city: </span>
                      Binghamton
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination location: </span>
                      Binghamton Bus Station
                    </div>
                  </div>
                </div>
                <div className="self-center pl-050 [gridArea:meta]">
                  <span className="sr-only">Operated by: Adirondack Trailways</span>
                  <img
                    loading="lazy"
                    className="max-h-300"
                    alt="Adirondack Trailways"
                    src="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0"
                    srcSet="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=1 1x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=2 2x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=3 3x"
                  />
                  <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block mt-050">
                    <span className="sr-only">Vehicle: {/* */}Bus</span>
                    <span className="sr-only">Duration: </span>
                    <time dateTime="PT11H30M">11h 30m</time>
                  </div>
                </div>
                <button
                  aria-label="Price: $133. Go to all departures from Albany to Binghamton on October 18 to book this trip"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-neutral-100 text-color-primary hover:text-color-secondary active:bg-color-scheme-neutral-200 active:text-color-primary self-center justify-self-end [gridArea:button]"
                  type="button"
                >
                  <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">$133</span>
                  <span className="shrink-0 text-icon-color-primary">
                    <svg fill="none" height={24} width={24} aria-hidden="true">
                      <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Chevron/right/md.svg#root"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </li>
            <li aria-label="Bus from Albany to Binghamton, departing from ALB Airport at 12:00pm on October 18, arriving at Binghamton Bus Station at 11:30pm on October 18. Duration: 11h 30m. Operated by: Adirondack Trailways. Price: $96">
              <div
                className="grid cursor-pointer gap-x-200 gap-y-150 rounded-lg bg-color-canvas-primary p-100 shadow-[0_0_0_var(--bw-sm)_var(--col-b-prim)] [gridTemplateAreas:'locations_locations'_'meta_button'] [gridTemplateColumns:1fr_min-content] hover:shadow-[0_0_0_var(--bw-md)_var(--col-brand-prim-200)] md:gap-x-300 md:gap-y-200 md:px-250 md:py-200 md:[gridTemplateAreas:'meta_locations_button'] md:[gridTemplateColumns:25%_1fr_minmax(min-content,12.5%)]"
                data-price-calendar-departure-link="true"
                data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-18&adults=1&leg_card_id=7f33be0c-bbc7-4f8f-853c-5bd78b00a4ef766676732024-10-18T12%3A00%3A00-04%3A002024-10-18T23%3A30%3A00-04%3A00&view=ticket_options"
              >
                <div className="grid items-start gap-x-300 p-100 [gridArea:locations] [gridTemplateColumns:1fr_1fr] md:p-0">
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city'] gap-x-200 [gridTemplateAreas:'time_arrow'_'location_location'_'city_city'] [gridTemplateColumns:1fr_auto]">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Departure time: October 18 at </span>
                      <time dateTime="2024-10-18T12:00:00">12:00pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure city: </span>
                      Albany
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure location: </span>
                      ALB Airport
                    </div>
                    <svg
                      className="text-icon-color-secondary self-center [gridArea:arrow]"
                      id="root"
                      width={36}
                      height={12}
                      viewBox="0 0 36 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M30.34 0l5.37 5.3a1 1 0 0 1 0 1.4L30.34 12 29 10.66 32.66 7H18V5h14.66L29 1.34 30.34 0zM2 5H0v2h2V5zm2 0h4v2H4V5zm12 0h-6v2h6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city']">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Arrival time: October 18 at </span>
                      <time dateTime="2024-10-18T23:30:00">11:30pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination city: </span>
                      Binghamton
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination location: </span>
                      Binghamton Bus Station
                    </div>
                  </div>
                </div>
                <div className="self-center pl-050 [gridArea:meta]">
                  <span className="sr-only">Operated by: Adirondack Trailways</span>
                  <img
                    loading="lazy"
                    className="max-h-300"
                    alt="Adirondack Trailways"
                    src="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0"
                    srcSet="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=1 1x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=2 2x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=3 3x"
                  />
                  <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block mt-050">
                    <span className="sr-only">Vehicle: {/* */}Bus</span>
                    <span className="sr-only">Duration: </span>
                    <time dateTime="PT11H30M">11h 30m</time>
                  </div>
                </div>
                <button
                  aria-label="Price: $96. Go to all departures from Albany to Binghamton on October 18 to book this trip"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-neutral-100 text-color-primary hover:text-color-secondary active:bg-color-scheme-neutral-200 active:text-color-primary self-center justify-self-end [gridArea:button]"
                  type="button"
                >
                  <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">$96</span>
                  <span className="shrink-0 text-icon-color-primary">
                    <svg fill="none" height={24} width={24} aria-hidden="true">
                      <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Chevron/right/md.svg#root"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </li>
            <li aria-label="Bus from Albany to Binghamton, departing from ALB Airport at 3:45pm on October 18, arriving at Binghamton Bus Station at 11:30pm on October 18. Duration: 7h 45m. Operated by: Adirondack Trailways. Price: $128">
              <div
                className="grid cursor-pointer gap-x-200 gap-y-150 rounded-lg bg-color-canvas-primary p-100 shadow-[0_0_0_var(--bw-sm)_var(--col-b-prim)] [gridTemplateAreas:'locations_locations'_'meta_button'] [gridTemplateColumns:1fr_min-content] hover:shadow-[0_0_0_var(--bw-md)_var(--col-brand-prim-200)] md:gap-x-300 md:gap-y-200 md:px-250 md:py-200 md:[gridTemplateAreas:'meta_locations_button'] md:[gridTemplateColumns:25%_1fr_minmax(min-content,12.5%)]"
                data-price-calendar-departure-link="true"
                data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-18&adults=1&leg_card_id=7f33be0c-bbc7-4f8f-853c-5bd78b00a4ef766676732024-10-18T15%3A45%3A00-04%3A002024-10-18T23%3A30%3A00-04%3A00&view=ticket_options"
              >
                <div className="grid items-start gap-x-300 p-100 [gridArea:locations] [gridTemplateColumns:1fr_1fr] md:p-0">
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city'] gap-x-200 [gridTemplateAreas:'time_arrow'_'location_location'_'city_city'] [gridTemplateColumns:1fr_auto]">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Departure time: October 18 at </span>
                      <time dateTime="2024-10-18T15:45:00">3:45pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure city: </span>
                      Albany
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure location: </span>
                      ALB Airport
                    </div>
                    <svg
                      className="text-icon-color-secondary self-center [gridArea:arrow]"
                      id="root"
                      width={36}
                      height={12}
                      viewBox="0 0 36 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M30.34 0l5.37 5.3a1 1 0 0 1 0 1.4L30.34 12 29 10.66 32.66 7H18V5h14.66L29 1.34 30.34 0zM2 5H0v2h2V5zm2 0h4v2H4V5zm12 0h-6v2h6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city']">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Arrival time: October 18 at </span>
                      <time dateTime="2024-10-18T23:30:00">11:30pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination city: </span>
                      Binghamton
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination location: </span>
                      Binghamton Bus Station
                    </div>
                  </div>
                </div>
                <div className="self-center pl-050 [gridArea:meta]">
                  <span className="sr-only">Operated by: Adirondack Trailways</span>
                  <img
                    loading="lazy"
                    className="max-h-300"
                    alt="Adirondack Trailways"
                    src="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0"
                    srcSet="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=1 1x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=2 2x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=3 3x"
                  />
                  <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block mt-050">
                    <span className="sr-only">Vehicle: {/* */}Bus</span>
                    <span className="sr-only">Duration: </span>
                    <time dateTime="PT7H45M">7h 45m</time>
                  </div>
                </div>
                <button
                  aria-label="Price: $128. Go to all departures from Albany to Binghamton on October 18 to book this trip"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-neutral-100 text-color-primary hover:text-color-secondary active:bg-color-scheme-neutral-200 active:text-color-primary self-center justify-self-end [gridArea:button]"
                  type="button"
                >
                  <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">$128</span>
                  <span className="shrink-0 text-icon-color-primary">
                    <svg fill="none" height={24} width={24} aria-hidden="true">
                      <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Chevron/right/md.svg#root"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </li>
          </ul>
          <button
            aria-label="Go to all departures from Albany to Binghamton on October 18"
            className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center max-w-full ps-200 pe-200 py-150 rounded-md hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-brand-primary-500 shadow-sm hover:bg-color-scheme-brand-primary-400 hover:shadow-sm active:bg-color-scheme-brand-primary-600 [&:not(:focus-visible)]:active:shadow-none text-color-primary-inverse hover:text-color-primary-inverse active:text-color-primary-inverse w-full self-center sm:w-auto"
            type="button"
            data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-18&adults=1"
            data-price-calendar-more-link="true"
          >
            <span className="shrink-0 text-icon-color-primary-inverse">
              <svg fill="none" height={32} width={32} aria-hidden="true">
                <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/MagnifyingGlass/lg.svg#root" />
              </svg>
            </span>
            <span className="ps-100 pe-100 py-075 font-weight-bolder leading-125 text-size-112">
              View all departures
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-300 lg:gap-y-500 hidden" data-price-calendar-tab-pane="true">
        <div className="grid justify-items-center gap-y-200 text-balance text-center *:max-w-prose">
          <div className="font-family-display-html text-size-150 font-weight-bolder leading-175 tracking-tight md:font-family-display-html md:text-size-200 md:font-weight-bolder md:leading-225 md:tracking-tight text-balance text-center undefined">
            Cheap buses leaving Saturday
          </div>
          <h3 className="text-size-100 leading-150 text-color-secondary">One passenger / one way</h3>
          <div className="mt-200 flex flex-col items-center justify-center gap-100 sm:flex-row sm:gap-200">
            <button
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-literal-blue-100 text-color-scheme-literal-blue-800 hover:text-color-scheme-literal-blue-600 active:bg-color-scheme-literal-blue-200 active:text-color-scheme-literal-blue-800 vanilla-btn-links"
              type="button"
              data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-16&adults=1&sort_key=price_avg"
              data-tracking-action="click_link"
              data-tracking-details='{"link_target":"price_calendar_cheapest_button"}'
            >
              <span className="shrink-0 text-color-scheme-literal-blue-400"></span>
              <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">Cheapest trips</span>
            </button>
            <button
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-literal-blue-100 text-color-scheme-literal-blue-800 hover:text-color-scheme-literal-blue-600 active:bg-color-scheme-literal-blue-200 active:text-color-scheme-literal-blue-800 vanilla-btn-links"
              type="button"
              data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-16&adults=1&sort_key=duration_m"
              data-tracking-action="click_link"
              data-tracking-details='{"link_target":"price_calendar_fastest_button"}'
            >
              <span className="shrink-0 text-color-scheme-literal-blue-400"></span>
              <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">Fastest trips</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-300 lg:gap-y-500">
          <ul className="flex flex-col gap-150">
            <li
              className="rounded-lg outline-width-lg bg-color-scheme-functional-positive-100 outline-color-scheme-functional-positive-100"
              aria-label="Bus from Albany to Binghamton, departing from 1400 Washington Ave. at 10:55am on October 19, arriving at Binghamton Bus Station at 2:05pm on October 19. Duration: 3h 10m. Operated by: Adirondack Trailways. Price: $49"
            >
              <div className="max-w-full font-weight-bolder text-size-62 uppercase leading-75 tracking-wider my-050 block text-center text-color-scheme-functional-positive-600">
                <span className="sr-only">This trip is recommended because it is: </span>
                Cheapest
              </div>
              <div
                className="grid cursor-pointer gap-x-200 gap-y-150 rounded-lg bg-color-canvas-primary p-100 shadow-[0_0_0_var(--bw-sm)_var(--col-b-prim)] [gridTemplateAreas:'locations_locations'_'meta_button'] [gridTemplateColumns:1fr_min-content] hover:shadow-[0_0_0_var(--bw-md)_var(--col-brand-prim-200)] md:gap-x-300 md:gap-y-200 md:px-250 md:py-200 md:[gridTemplateAreas:'meta_locations_button'] md:[gridTemplateColumns:25%_1fr_minmax(min-content,12.5%)]"
                data-price-calendar-departure-link="true"
                data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-19&adults=1&leg_card_id=7f33be0c-bbc7-4f8f-853c-5bd78b00a4ef6563476732024-10-19T10%3A55%3A00-04%3A002024-10-19T14%3A05%3A00-04%3A00&view=ticket_options"
              >
                <div className="grid items-start gap-x-300 p-100 [gridArea:locations] [gridTemplateColumns:1fr_1fr] md:p-0">
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city'] gap-x-200 [gridTemplateAreas:'time_arrow'_'location_location'_'city_city'] [gridTemplateColumns:1fr_auto]">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Departure time: October 19 at </span>
                      <time dateTime="2024-10-19T10:55:00">10:55am</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure city: </span>
                      Albany
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure location: </span>
                      1400 Washington Ave.
                    </div>
                    <svg
                      className="text-icon-color-secondary self-center [gridArea:arrow]"
                      id="root"
                      width={36}
                      height={12}
                      viewBox="0 0 36 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M30.34 0l5.37 5.3a1 1 0 0 1 0 1.4L30.34 12 29 10.66 32.66 7H18V5h14.66L29 1.34 30.34 0zM2 5H0v2h2V5zm2 0h4v2H4V5zm12 0h-6v2h6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city']">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Arrival time: October 19 at </span>
                      <time dateTime="2024-10-19T14:05:00">2:05pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination city: </span>
                      Binghamton
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination location: </span>
                      Binghamton Bus Station
                    </div>
                  </div>
                </div>
                <div className="self-center pl-050 [gridArea:meta]">
                  <span className="sr-only">Operated by: Adirondack Trailways</span>
                  <img
                    loading="lazy"
                    className="max-h-300"
                    alt="Adirondack Trailways"
                    src="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0"
                    srcSet="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=1 1x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=2 2x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=3 3x"
                  />
                  <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block mt-050">
                    <span className="sr-only">Vehicle: {/* */}Bus</span>
                    <span className="sr-only">Duration: </span>
                    <time dateTime="PT3H10M">3h 10m</time>
                  </div>
                </div>
                <button
                  aria-label="Price: $49. Go to all departures from Albany to Binghamton on October 19 to book this trip"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-neutral-100 text-color-primary hover:text-color-secondary active:bg-color-scheme-neutral-200 active:text-color-primary self-center justify-self-end [gridArea:button]"
                  type="button"
                >
                  <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">$49</span>
                  <span className="shrink-0 text-icon-color-primary">
                    <svg fill="none" height={24} width={24} aria-hidden="true">
                      <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Chevron/right/md.svg#root"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </li>
            <li
              className="rounded-lg outline-width-lg bg-color-scheme-functional-special-100 outline-color-scheme-functional-special-100"
              aria-label="Bus from Albany to Binghamton, departing from 1400 Washington Ave. at 10:55am on October 19, arriving at Binghamton Bus Station at 2:05pm on October 19. Duration: 3h 10m. Operated by: Adirondack Trailways. Price: $67"
            >
              <div className="max-w-full font-weight-bolder text-size-62 uppercase leading-75 tracking-wider my-050 block text-center text-color-scheme-functional-special-600">
                <span className="sr-only">This trip is recommended because it is: </span>
                Fastest
              </div>
              <div
                className="grid cursor-pointer gap-x-200 gap-y-150 rounded-lg bg-color-canvas-primary p-100 shadow-[0_0_0_var(--bw-sm)_var(--col-b-prim)] [gridTemplateAreas:'locations_locations'_'meta_button'] [gridTemplateColumns:1fr_min-content] hover:shadow-[0_0_0_var(--bw-md)_var(--col-brand-prim-200)] md:gap-x-300 md:gap-y-200 md:px-250 md:py-200 md:[gridTemplateAreas:'meta_locations_button'] md:[gridTemplateColumns:25%_1fr_minmax(min-content,12.5%)]"
                data-price-calendar-departure-link="true"
                data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-19&adults=1&leg_card_id=7f33be0c-bbc7-4f8f-853c-5bd78b00a4ef6563476732024-10-19T10%3A55%3A00-04%3A002024-10-19T14%3A05%3A00-04%3A00&view=ticket_options"
              >
                <div className="grid items-start gap-x-300 p-100 [gridArea:locations] [gridTemplateColumns:1fr_1fr] md:p-0">
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city'] gap-x-200 [gridTemplateAreas:'time_arrow'_'location_location'_'city_city'] [gridTemplateColumns:1fr_auto]">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Departure time: October 19 at </span>
                      <time dateTime="2024-10-19T10:55:00">10:55am</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure city: </span>
                      Albany
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure location: </span>
                      1400 Washington Ave.
                    </div>
                    <svg
                      className="text-icon-color-secondary self-center [gridArea:arrow]"
                      id="root"
                      width={36}
                      height={12}
                      viewBox="0 0 36 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M30.34 0l5.37 5.3a1 1 0 0 1 0 1.4L30.34 12 29 10.66 32.66 7H18V5h14.66L29 1.34 30.34 0zM2 5H0v2h2V5zm2 0h4v2H4V5zm12 0h-6v2h6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city']">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Arrival time: October 19 at </span>
                      <time dateTime="2024-10-19T14:05:00">2:05pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination city: </span>
                      Binghamton
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination location: </span>
                      Binghamton Bus Station
                    </div>
                  </div>
                </div>
                <div className="self-center pl-050 [gridArea:meta]">
                  <span className="sr-only">Operated by: Adirondack Trailways</span>
                  <img
                    loading="lazy"
                    className="max-h-300"
                    alt="Adirondack Trailways"
                    src="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0"
                    srcSet="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=1 1x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=2 2x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=3 3x"
                  />
                  <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block mt-050">
                    <span className="sr-only">Vehicle: {/* */}Bus</span>
                    <span className="sr-only">Duration: </span>
                    <time dateTime="PT3H10M">3h 10m</time>
                  </div>
                </div>
                <button
                  aria-label="Price: $67. Go to all departures from Albany to Binghamton on October 19 to book this trip"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-neutral-100 text-color-primary hover:text-color-secondary active:bg-color-scheme-neutral-200 active:text-color-primary self-center justify-self-end [gridArea:button]"
                  type="button"
                >
                  <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">$67</span>
                  <span className="shrink-0 text-icon-color-primary">
                    <svg fill="none" height={24} width={24} aria-hidden="true">
                      <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Chevron/right/md.svg#root"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </li>
            <li aria-label="Bus from Albany to Binghamton, departing from ALB Airport at 3:45pm on October 19, arriving at Binghamton Bus Station at 11:30pm on October 19. Duration: 7h 45m. Operated by: Adirondack Trailways. Price: $128">
              <div
                className="grid cursor-pointer gap-x-200 gap-y-150 rounded-lg bg-color-canvas-primary p-100 shadow-[0_0_0_var(--bw-sm)_var(--col-b-prim)] [gridTemplateAreas:'locations_locations'_'meta_button'] [gridTemplateColumns:1fr_min-content] hover:shadow-[0_0_0_var(--bw-md)_var(--col-brand-prim-200)] md:gap-x-300 md:gap-y-200 md:px-250 md:py-200 md:[gridTemplateAreas:'meta_locations_button'] md:[gridTemplateColumns:25%_1fr_minmax(min-content,12.5%)]"
                data-price-calendar-departure-link="true"
                data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-19&adults=1&leg_card_id=7f33be0c-bbc7-4f8f-853c-5bd78b00a4ef766676732024-10-19T15%3A45%3A00-04%3A002024-10-19T23%3A30%3A00-04%3A00&view=ticket_options"
              >
                <div className="grid items-start gap-x-300 p-100 [gridArea:locations] [gridTemplateColumns:1fr_1fr] md:p-0">
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city'] gap-x-200 [gridTemplateAreas:'time_arrow'_'location_location'_'city_city'] [gridTemplateColumns:1fr_auto]">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Departure time: October 19 at </span>
                      <time dateTime="2024-10-19T15:45:00">3:45pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure city: </span>
                      Albany
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure location: </span>
                      ALB Airport
                    </div>
                    <svg
                      className="text-icon-color-secondary self-center [gridArea:arrow]"
                      id="root"
                      width={36}
                      height={12}
                      viewBox="0 0 36 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M30.34 0l5.37 5.3a1 1 0 0 1 0 1.4L30.34 12 29 10.66 32.66 7H18V5h14.66L29 1.34 30.34 0zM2 5H0v2h2V5zm2 0h4v2H4V5zm12 0h-6v2h6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city']">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Arrival time: October 19 at </span>
                      <time dateTime="2024-10-19T23:30:00">11:30pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination city: </span>
                      Binghamton
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination location: </span>
                      Binghamton Bus Station
                    </div>
                  </div>
                </div>
                <div className="self-center pl-050 [gridArea:meta]">
                  <span className="sr-only">Operated by: Adirondack Trailways</span>
                  <img
                    loading="lazy"
                    className="max-h-300"
                    alt="Adirondack Trailways"
                    src="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0"
                    srcSet="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=1 1x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=2 2x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=3 3x"
                  />
                  <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block mt-050">
                    <span className="sr-only">Vehicle: {/* */}Bus</span>
                    <span className="sr-only">Duration: </span>
                    <time dateTime="PT7H45M">7h 45m</time>
                  </div>
                </div>
                <button
                  aria-label="Price: $128. Go to all departures from Albany to Binghamton on October 19 to book this trip"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-neutral-100 text-color-primary hover:text-color-secondary active:bg-color-scheme-neutral-200 active:text-color-primary self-center justify-self-end [gridArea:button]"
                  type="button"
                >
                  <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">$128</span>
                  <span className="shrink-0 text-icon-color-primary">
                    <svg fill="none" height={24} width={24} aria-hidden="true">
                      <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Chevron/right/md.svg#root"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </li>
            <li aria-label="Bus from Albany to Binghamton, departing from ALB Airport at 3:45pm on October 19, arriving at Binghamton Bus Station at 11:30pm on October 19. Duration: 7h 45m. Operated by: Adirondack Trailways. Price: $93">
              <div
                className="grid cursor-pointer gap-x-200 gap-y-150 rounded-lg bg-color-canvas-primary p-100 shadow-[0_0_0_var(--bw-sm)_var(--col-b-prim)] [gridTemplateAreas:'locations_locations'_'meta_button'] [gridTemplateColumns:1fr_min-content] hover:shadow-[0_0_0_var(--bw-md)_var(--col-brand-prim-200)] md:gap-x-300 md:gap-y-200 md:px-250 md:py-200 md:[gridTemplateAreas:'meta_locations_button'] md:[gridTemplateColumns:25%_1fr_minmax(min-content,12.5%)]"
                data-price-calendar-departure-link="true"
                data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-19&adults=1&leg_card_id=7f33be0c-bbc7-4f8f-853c-5bd78b00a4ef766676732024-10-19T15%3A45%3A00-04%3A002024-10-19T23%3A30%3A00-04%3A00&view=ticket_options"
              >
                <div className="grid items-start gap-x-300 p-100 [gridArea:locations] [gridTemplateColumns:1fr_1fr] md:p-0">
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city'] gap-x-200 [gridTemplateAreas:'time_arrow'_'location_location'_'city_city'] [gridTemplateColumns:1fr_auto]">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Departure time: October 19 at </span>
                      <time dateTime="2024-10-19T15:45:00">3:45pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure city: </span>
                      Albany
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure location: </span>
                      ALB Airport
                    </div>
                    <svg
                      className="text-icon-color-secondary self-center [gridArea:arrow]"
                      id="root"
                      width={36}
                      height={12}
                      viewBox="0 0 36 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M30.34 0l5.37 5.3a1 1 0 0 1 0 1.4L30.34 12 29 10.66 32.66 7H18V5h14.66L29 1.34 30.34 0zM2 5H0v2h2V5zm2 0h4v2H4V5zm12 0h-6v2h6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city']">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Arrival time: October 19 at </span>
                      <time dateTime="2024-10-19T23:30:00">11:30pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination city: </span>
                      Binghamton
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination location: </span>
                      Binghamton Bus Station
                    </div>
                  </div>
                </div>
                <div className="self-center pl-050 [gridArea:meta]">
                  <span className="sr-only">Operated by: Adirondack Trailways</span>
                  <img
                    loading="lazy"
                    className="max-h-300"
                    alt="Adirondack Trailways"
                    src="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0"
                    srcSet="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=1 1x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=2 2x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=3 3x"
                  />
                  <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block mt-050">
                    <span className="sr-only">Vehicle: {/* */}Bus</span>
                    <span className="sr-only">Duration: </span>
                    <time dateTime="PT7H45M">7h 45m</time>
                  </div>
                </div>
                <button
                  aria-label="Price: $93. Go to all departures from Albany to Binghamton on October 19 to book this trip"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-neutral-100 text-color-primary hover:text-color-secondary active:bg-color-scheme-neutral-200 active:text-color-primary self-center justify-self-end [gridArea:button]"
                  type="button"
                >
                  <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">$93</span>
                  <span className="shrink-0 text-icon-color-primary">
                    <svg fill="none" height={24} width={24} aria-hidden="true">
                      <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Chevron/right/md.svg#root"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </li>
            <li aria-label="Bus from Albany to Binghamton, departing from 1400 Washington Ave. at 10:55am on October 19, arriving at Binghamton Bus Station at 2:05pm on October 19. Duration: 3h 10m. Operated by: Adirondack Trailways. Price: $67">
              <div
                className="grid cursor-pointer gap-x-200 gap-y-150 rounded-lg bg-color-canvas-primary p-100 shadow-[0_0_0_var(--bw-sm)_var(--col-b-prim)] [gridTemplateAreas:'locations_locations'_'meta_button'] [gridTemplateColumns:1fr_min-content] hover:shadow-[0_0_0_var(--bw-md)_var(--col-brand-prim-200)] md:gap-x-300 md:gap-y-200 md:px-250 md:py-200 md:[gridTemplateAreas:'meta_locations_button'] md:[gridTemplateColumns:25%_1fr_minmax(min-content,12.5%)]"
                data-price-calendar-departure-link="true"
                data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-19&adults=1&leg_card_id=7f33be0c-bbc7-4f8f-853c-5bd78b00a4ef6563476732024-10-19T10%3A55%3A00-04%3A002024-10-19T14%3A05%3A00-04%3A00&view=ticket_options"
              >
                <div className="grid items-start gap-x-300 p-100 [gridArea:locations] [gridTemplateColumns:1fr_1fr] md:p-0">
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city'] gap-x-200 [gridTemplateAreas:'time_arrow'_'location_location'_'city_city'] [gridTemplateColumns:1fr_auto]">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Departure time: October 19 at </span>
                      <time dateTime="2024-10-19T10:55:00">10:55am</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure city: </span>
                      Albany
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure location: </span>
                      1400 Washington Ave.
                    </div>
                    <svg
                      className="text-icon-color-secondary self-center [gridArea:arrow]"
                      id="root"
                      width={36}
                      height={12}
                      viewBox="0 0 36 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M30.34 0l5.37 5.3a1 1 0 0 1 0 1.4L30.34 12 29 10.66 32.66 7H18V5h14.66L29 1.34 30.34 0zM2 5H0v2h2V5zm2 0h4v2H4V5zm12 0h-6v2h6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city']">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Arrival time: October 19 at </span>
                      <time dateTime="2024-10-19T14:05:00">2:05pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination city: </span>
                      Binghamton
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination location: </span>
                      Binghamton Bus Station
                    </div>
                  </div>
                </div>
                <div className="self-center pl-050 [gridArea:meta]">
                  <span className="sr-only">Operated by: Adirondack Trailways</span>
                  <img
                    loading="lazy"
                    className="max-h-300"
                    alt="Adirondack Trailways"
                    src="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0"
                    srcSet="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=1 1x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=2 2x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=3 3x"
                  />
                  <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block mt-050">
                    <span className="sr-only">Vehicle: {/* */}Bus</span>
                    <span className="sr-only">Duration: </span>
                    <time dateTime="PT3H10M">3h 10m</time>
                  </div>
                </div>
                <button
                  aria-label="Price: $67. Go to all departures from Albany to Binghamton on October 19 to book this trip"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-neutral-100 text-color-primary hover:text-color-secondary active:bg-color-scheme-neutral-200 active:text-color-primary self-center justify-self-end [gridArea:button]"
                  type="button"
                >
                  <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">$67</span>
                  <span className="shrink-0 text-icon-color-primary">
                    <svg fill="none" height={24} width={24} aria-hidden="true">
                      <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Chevron/right/md.svg#root"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </li>
          </ul>
          <button
            aria-label="Go to all departures from Albany to Binghamton on October 19"
            className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center max-w-full ps-200 pe-200 py-150 rounded-md hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-brand-primary-500 shadow-sm hover:bg-color-scheme-brand-primary-400 hover:shadow-sm active:bg-color-scheme-brand-primary-600 [&:not(:focus-visible)]:active:shadow-none text-color-primary-inverse hover:text-color-primary-inverse active:text-color-primary-inverse w-full self-center sm:w-auto"
            type="button"
            data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-19&adults=1"
            data-price-calendar-more-link="true"
          >
            <span className="shrink-0 text-icon-color-primary-inverse">
              <svg fill="none" height={32} width={32} aria-hidden="true">
                <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/MagnifyingGlass/lg.svg#root" />
              </svg>
            </span>
            <span className="ps-100 pe-100 py-075 font-weight-bolder leading-125 text-size-112">
              View all departures
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-300 lg:gap-y-500 hidden" data-price-calendar-tab-pane="true">
        <div className="grid justify-items-center gap-y-200 text-balance text-center *:max-w-prose">
          <div className="font-family-display-html text-size-150 font-weight-bolder leading-175 tracking-tight md:font-family-display-html md:text-size-200 md:font-weight-bolder md:leading-225 md:tracking-tight text-balance text-center undefined">
            Cheap buses leaving Sunday
          </div>
          <h3 className="text-size-100 leading-150 text-color-secondary">One passenger / one way</h3>
          <div className="mt-200 flex flex-col items-center justify-center gap-100 sm:flex-row sm:gap-200">
            <button
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-literal-blue-100 text-color-scheme-literal-blue-800 hover:text-color-scheme-literal-blue-600 active:bg-color-scheme-literal-blue-200 active:text-color-scheme-literal-blue-800 vanilla-btn-links"
              type="button"
              data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-16&adults=1&sort_key=price_avg"
              data-tracking-action="click_link"
              data-tracking-details='{"link_target":"price_calendar_cheapest_button"}'
            >
              <span className="shrink-0 text-color-scheme-literal-blue-400"></span>
              <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">Cheapest trips</span>
            </button>
            <button
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-literal-blue-100 text-color-scheme-literal-blue-800 hover:text-color-scheme-literal-blue-600 active:bg-color-scheme-literal-blue-200 active:text-color-scheme-literal-blue-800 vanilla-btn-links"
              type="button"
              data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-16&adults=1&sort_key=duration_m"
              data-tracking-action="click_link"
              data-tracking-details='{"link_target":"price_calendar_fastest_button"}'
            >
              <span className="shrink-0 text-color-scheme-literal-blue-400"></span>
              <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">Fastest trips</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-300 lg:gap-y-500">
          <ul className="flex flex-col gap-150">
            <li
              className="rounded-lg outline-width-lg bg-color-scheme-functional-positive-100 outline-color-scheme-functional-positive-100"
              aria-label="Bus from Albany to Binghamton, departing from 1400 Washington Ave. at 10:55am on October 20, arriving at Binghamton Bus Station at 2:05pm on October 20. Duration: 3h 10m. Operated by: Adirondack Trailways. Price: $51"
            >
              <div className="max-w-full font-weight-bolder text-size-62 uppercase leading-75 tracking-wider my-050 block text-center text-color-scheme-functional-positive-600">
                <span className="sr-only">This trip is recommended because it is: </span>
                Cheapest
              </div>
              <div
                className="grid cursor-pointer gap-x-200 gap-y-150 rounded-lg bg-color-canvas-primary p-100 shadow-[0_0_0_var(--bw-sm)_var(--col-b-prim)] [gridTemplateAreas:'locations_locations'_'meta_button'] [gridTemplateColumns:1fr_min-content] hover:shadow-[0_0_0_var(--bw-md)_var(--col-brand-prim-200)] md:gap-x-300 md:gap-y-200 md:px-250 md:py-200 md:[gridTemplateAreas:'meta_locations_button'] md:[gridTemplateColumns:25%_1fr_minmax(min-content,12.5%)]"
                data-price-calendar-departure-link="true"
                data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-20&adults=1&leg_card_id=7f33be0c-bbc7-4f8f-853c-5bd78b00a4ef6563476732024-10-20T10%3A55%3A00-04%3A002024-10-20T14%3A05%3A00-04%3A00&view=ticket_options"
              >
                <div className="grid items-start gap-x-300 p-100 [gridArea:locations] [gridTemplateColumns:1fr_1fr] md:p-0">
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city'] gap-x-200 [gridTemplateAreas:'time_arrow'_'location_location'_'city_city'] [gridTemplateColumns:1fr_auto]">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Departure time: October 20 at </span>
                      <time dateTime="2024-10-20T10:55:00">10:55am</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure city: </span>
                      Albany
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure location: </span>
                      1400 Washington Ave.
                    </div>
                    <svg
                      className="text-icon-color-secondary self-center [gridArea:arrow]"
                      id="root"
                      width={36}
                      height={12}
                      viewBox="0 0 36 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M30.34 0l5.37 5.3a1 1 0 0 1 0 1.4L30.34 12 29 10.66 32.66 7H18V5h14.66L29 1.34 30.34 0zM2 5H0v2h2V5zm2 0h4v2H4V5zm12 0h-6v2h6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city']">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Arrival time: October 20 at </span>
                      <time dateTime="2024-10-20T14:05:00">2:05pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination city: </span>
                      Binghamton
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination location: </span>
                      Binghamton Bus Station
                    </div>
                  </div>
                </div>
                <div className="self-center pl-050 [gridArea:meta]">
                  <span className="sr-only">Operated by: Adirondack Trailways</span>
                  <img
                    loading="lazy"
                    className="max-h-300"
                    alt="Adirondack Trailways"
                    src="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0"
                    srcSet="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=1 1x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=2 2x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=3 3x"
                  />
                  <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block mt-050">
                    <span className="sr-only">Vehicle: {/* */}Bus</span>
                    <span className="sr-only">Duration: </span>
                    <time dateTime="PT3H10M">3h 10m</time>
                  </div>
                </div>
                <button
                  aria-label="Price: $51. Go to all departures from Albany to Binghamton on October 20 to book this trip"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-neutral-100 text-color-primary hover:text-color-secondary active:bg-color-scheme-neutral-200 active:text-color-primary self-center justify-self-end [gridArea:button]"
                  type="button"
                >
                  <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">$51</span>
                  <span className="shrink-0 text-icon-color-primary">
                    <svg fill="none" height={24} width={24} aria-hidden="true">
                      <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Chevron/right/md.svg#root"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </li>
            <li
              className="rounded-lg outline-width-lg bg-color-scheme-functional-special-100 outline-color-scheme-functional-special-100"
              aria-label="Bus from Albany to Binghamton, departing from 1400 Washington Ave. at 10:55am on October 20, arriving at Binghamton Bus Station at 2:05pm on October 20. Duration: 3h 10m. Operated by: Adirondack Trailways. Price: $70"
            >
              <div className="max-w-full font-weight-bolder text-size-62 uppercase leading-75 tracking-wider my-050 block text-center text-color-scheme-functional-special-600">
                <span className="sr-only">This trip is recommended because it is: </span>
                Fastest
              </div>
              <div
                className="grid cursor-pointer gap-x-200 gap-y-150 rounded-lg bg-color-canvas-primary p-100 shadow-[0_0_0_var(--bw-sm)_var(--col-b-prim)] [gridTemplateAreas:'locations_locations'_'meta_button'] [gridTemplateColumns:1fr_min-content] hover:shadow-[0_0_0_var(--bw-md)_var(--col-brand-prim-200)] md:gap-x-300 md:gap-y-200 md:px-250 md:py-200 md:[gridTemplateAreas:'meta_locations_button'] md:[gridTemplateColumns:25%_1fr_minmax(min-content,12.5%)]"
                data-price-calendar-departure-link="true"
                data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-20&adults=1&leg_card_id=7f33be0c-bbc7-4f8f-853c-5bd78b00a4ef6563476732024-10-20T10%3A55%3A00-04%3A002024-10-20T14%3A05%3A00-04%3A00&view=ticket_options"
              >
                <div className="grid items-start gap-x-300 p-100 [gridArea:locations] [gridTemplateColumns:1fr_1fr] md:p-0">
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city'] gap-x-200 [gridTemplateAreas:'time_arrow'_'location_location'_'city_city'] [gridTemplateColumns:1fr_auto]">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Departure time: October 20 at </span>
                      <time dateTime="2024-10-20T10:55:00">10:55am</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure city: </span>
                      Albany
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure location: </span>
                      1400 Washington Ave.
                    </div>
                    <svg
                      className="text-icon-color-secondary self-center [gridArea:arrow]"
                      id="root"
                      width={36}
                      height={12}
                      viewBox="0 0 36 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M30.34 0l5.37 5.3a1 1 0 0 1 0 1.4L30.34 12 29 10.66 32.66 7H18V5h14.66L29 1.34 30.34 0zM2 5H0v2h2V5zm2 0h4v2H4V5zm12 0h-6v2h6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city']">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Arrival time: October 20 at </span>
                      <time dateTime="2024-10-20T14:05:00">2:05pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination city: </span>
                      Binghamton
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination location: </span>
                      Binghamton Bus Station
                    </div>
                  </div>
                </div>
                <div className="self-center pl-050 [gridArea:meta]">
                  <span className="sr-only">Operated by: Adirondack Trailways</span>
                  <img
                    loading="lazy"
                    className="max-h-300"
                    alt="Adirondack Trailways"
                    src="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0"
                    srcSet="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=1 1x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=2 2x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=3 3x"
                  />
                  <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block mt-050">
                    <span className="sr-only">Vehicle: {/* */}Bus</span>
                    <span className="sr-only">Duration: </span>
                    <time dateTime="PT3H10M">3h 10m</time>
                  </div>
                </div>
                <button
                  aria-label="Price: $70. Go to all departures from Albany to Binghamton on October 20 to book this trip"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-neutral-100 text-color-primary hover:text-color-secondary active:bg-color-scheme-neutral-200 active:text-color-primary self-center justify-self-end [gridArea:button]"
                  type="button"
                >
                  <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">$70</span>
                  <span className="shrink-0 text-icon-color-primary">
                    <svg fill="none" height={24} width={24} aria-hidden="true">
                      <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Chevron/right/md.svg#root"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </li>
            <li aria-label="Bus from Albany to Binghamton, departing from ALB Airport at 12:00pm on October 20, arriving at Binghamton Bus Station at 11:30pm on October 20. Duration: 11h 30m. Operated by: Adirondack Trailways. Price: $128">
              <div
                className="grid cursor-pointer gap-x-200 gap-y-150 rounded-lg bg-color-canvas-primary p-100 shadow-[0_0_0_var(--bw-sm)_var(--col-b-prim)] [gridTemplateAreas:'locations_locations'_'meta_button'] [gridTemplateColumns:1fr_min-content] hover:shadow-[0_0_0_var(--bw-md)_var(--col-brand-prim-200)] md:gap-x-300 md:gap-y-200 md:px-250 md:py-200 md:[gridTemplateAreas:'meta_locations_button'] md:[gridTemplateColumns:25%_1fr_minmax(min-content,12.5%)]"
                data-price-calendar-departure-link="true"
                data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-20&adults=1&leg_card_id=7f33be0c-bbc7-4f8f-853c-5bd78b00a4ef766676732024-10-20T12%3A00%3A00-04%3A002024-10-20T23%3A30%3A00-04%3A00&view=ticket_options"
              >
                <div className="grid items-start gap-x-300 p-100 [gridArea:locations] [gridTemplateColumns:1fr_1fr] md:p-0">
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city'] gap-x-200 [gridTemplateAreas:'time_arrow'_'location_location'_'city_city'] [gridTemplateColumns:1fr_auto]">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Departure time: October 20 at </span>
                      <time dateTime="2024-10-20T12:00:00">12:00pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure city: </span>
                      Albany
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure location: </span>
                      ALB Airport
                    </div>
                    <svg
                      className="text-icon-color-secondary self-center [gridArea:arrow]"
                      id="root"
                      width={36}
                      height={12}
                      viewBox="0 0 36 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M30.34 0l5.37 5.3a1 1 0 0 1 0 1.4L30.34 12 29 10.66 32.66 7H18V5h14.66L29 1.34 30.34 0zM2 5H0v2h2V5zm2 0h4v2H4V5zm12 0h-6v2h6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city']">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Arrival time: October 20 at </span>
                      <time dateTime="2024-10-20T23:30:00">11:30pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination city: </span>
                      Binghamton
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination location: </span>
                      Binghamton Bus Station
                    </div>
                  </div>
                </div>
                <div className="self-center pl-050 [gridArea:meta]">
                  <span className="sr-only">Operated by: Adirondack Trailways</span>
                  <img
                    loading="lazy"
                    className="max-h-300"
                    alt="Adirondack Trailways"
                    src="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0"
                    srcSet="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=1 1x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=2 2x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=3 3x"
                  />
                  <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block mt-050">
                    <span className="sr-only">Vehicle: {/* */}Bus</span>
                    <span className="sr-only">Duration: </span>
                    <time dateTime="PT11H30M">11h 30m</time>
                  </div>
                </div>
                <button
                  aria-label="Price: $128. Go to all departures from Albany to Binghamton on October 20 to book this trip"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-neutral-100 text-color-primary hover:text-color-secondary active:bg-color-scheme-neutral-200 active:text-color-primary self-center justify-self-end [gridArea:button]"
                  type="button"
                >
                  <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">$128</span>
                  <span className="shrink-0 text-icon-color-primary">
                    <svg fill="none" height={24} width={24} aria-hidden="true">
                      <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Chevron/right/md.svg#root"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </li>
            <li aria-label="Bus from Albany to Binghamton, departing from ALB Airport at 12:00pm on October 20, arriving at Binghamton Bus Station at 11:30pm on October 20. Duration: 11h 30m. Operated by: Adirondack Trailways. Price: $93">
              <div
                className="grid cursor-pointer gap-x-200 gap-y-150 rounded-lg bg-color-canvas-primary p-100 shadow-[0_0_0_var(--bw-sm)_var(--col-b-prim)] [gridTemplateAreas:'locations_locations'_'meta_button'] [gridTemplateColumns:1fr_min-content] hover:shadow-[0_0_0_var(--bw-md)_var(--col-brand-prim-200)] md:gap-x-300 md:gap-y-200 md:px-250 md:py-200 md:[gridTemplateAreas:'meta_locations_button'] md:[gridTemplateColumns:25%_1fr_minmax(min-content,12.5%)]"
                data-price-calendar-departure-link="true"
                data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-20&adults=1&leg_card_id=7f33be0c-bbc7-4f8f-853c-5bd78b00a4ef766676732024-10-20T12%3A00%3A00-04%3A002024-10-20T23%3A30%3A00-04%3A00&view=ticket_options"
              >
                <div className="grid items-start gap-x-300 p-100 [gridArea:locations] [gridTemplateColumns:1fr_1fr] md:p-0">
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city'] gap-x-200 [gridTemplateAreas:'time_arrow'_'location_location'_'city_city'] [gridTemplateColumns:1fr_auto]">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Departure time: October 20 at </span>
                      <time dateTime="2024-10-20T12:00:00">12:00pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure city: </span>
                      Albany
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure location: </span>
                      ALB Airport
                    </div>
                    <svg
                      className="text-icon-color-secondary self-center [gridArea:arrow]"
                      id="root"
                      width={36}
                      height={12}
                      viewBox="0 0 36 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M30.34 0l5.37 5.3a1 1 0 0 1 0 1.4L30.34 12 29 10.66 32.66 7H18V5h14.66L29 1.34 30.34 0zM2 5H0v2h2V5zm2 0h4v2H4V5zm12 0h-6v2h6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city']">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Arrival time: October 20 at </span>
                      <time dateTime="2024-10-20T23:30:00">11:30pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination city: </span>
                      Binghamton
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination location: </span>
                      Binghamton Bus Station
                    </div>
                  </div>
                </div>
                <div className="self-center pl-050 [gridArea:meta]">
                  <span className="sr-only">Operated by: Adirondack Trailways</span>
                  <img
                    loading="lazy"
                    className="max-h-300"
                    alt="Adirondack Trailways"
                    src="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0"
                    srcSet="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=1 1x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=2 2x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=3 3x"
                  />
                  <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block mt-050">
                    <span className="sr-only">Vehicle: {/* */}Bus</span>
                    <span className="sr-only">Duration: </span>
                    <time dateTime="PT11H30M">11h 30m</time>
                  </div>
                </div>
                <button
                  aria-label="Price: $93. Go to all departures from Albany to Binghamton on October 20 to book this trip"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-neutral-100 text-color-primary hover:text-color-secondary active:bg-color-scheme-neutral-200 active:text-color-primary self-center justify-self-end [gridArea:button]"
                  type="button"
                >
                  <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">$93</span>
                  <span className="shrink-0 text-icon-color-primary">
                    <svg fill="none" height={24} width={24} aria-hidden="true">
                      <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Chevron/right/md.svg#root"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </li>
            <li aria-label="Bus from Albany to Binghamton, departing from ALB Airport at 3:45pm on October 20, arriving at Binghamton Bus Station at 11:30pm on October 20. Duration: 7h 45m. Operated by: Adirondack Trailways. Price: $128">
              <div
                className="grid cursor-pointer gap-x-200 gap-y-150 rounded-lg bg-color-canvas-primary p-100 shadow-[0_0_0_var(--bw-sm)_var(--col-b-prim)] [gridTemplateAreas:'locations_locations'_'meta_button'] [gridTemplateColumns:1fr_min-content] hover:shadow-[0_0_0_var(--bw-md)_var(--col-brand-prim-200)] md:gap-x-300 md:gap-y-200 md:px-250 md:py-200 md:[gridTemplateAreas:'meta_locations_button'] md:[gridTemplateColumns:25%_1fr_minmax(min-content,12.5%)]"
                data-price-calendar-departure-link="true"
                data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-20&adults=1&leg_card_id=7f33be0c-bbc7-4f8f-853c-5bd78b00a4ef766676732024-10-20T15%3A45%3A00-04%3A002024-10-20T23%3A30%3A00-04%3A00&view=ticket_options"
              >
                <div className="grid items-start gap-x-300 p-100 [gridArea:locations] [gridTemplateColumns:1fr_1fr] md:p-0">
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city'] gap-x-200 [gridTemplateAreas:'time_arrow'_'location_location'_'city_city'] [gridTemplateColumns:1fr_auto]">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Departure time: October 20 at </span>
                      <time dateTime="2024-10-20T15:45:00">3:45pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure city: </span>
                      Albany
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Departure location: </span>
                      ALB Airport
                    </div>
                    <svg
                      className="text-icon-color-secondary self-center [gridArea:arrow]"
                      id="root"
                      width={36}
                      height={12}
                      viewBox="0 0 36 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M30.34 0l5.37 5.3a1 1 0 0 1 0 1.4L30.34 12 29 10.66 32.66 7H18V5h14.66L29 1.34 30.34 0zM2 5H0v2h2V5zm2 0h4v2H4V5zm12 0h-6v2h6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grid gap-y-025 [gridTemplateAreas:'time'_'location'_'city']">
                    <div className="max-w-full font-weight-bold text-size-112 leading-125 inline-block [gridArea:time]">
                      <span className="sr-only">Arrival time: October 20 at </span>
                      <time dateTime="2024-10-20T23:30:00">11:30pm</time>
                    </div>
                    <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block text-color-tertiary [gridArea:city] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination city: </span>
                      Binghamton
                    </div>
                    <div className="max-w-full text-size-87 leading-100 inline-block [gridArea:location] [overflowWrap:'anywhere']">
                      <span className="sr-only">Destination location: </span>
                      Binghamton Bus Station
                    </div>
                  </div>
                </div>
                <div className="self-center pl-050 [gridArea:meta]">
                  <span className="sr-only">Operated by: Adirondack Trailways</span>
                  <img
                    loading="lazy"
                    className="max-h-300"
                    alt="Adirondack Trailways"
                    src="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0"
                    srcSet="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=1 1x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=2 2x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=3 3x"
                  />
                  <div className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block mt-050">
                    <span className="sr-only">Vehicle: {/* */}Bus</span>
                    <span className="sr-only">Duration: </span>
                    <time dateTime="PT7H45M">7h 45m</time>
                  </div>
                </div>
                <button
                  aria-label="Price: $128. Go to all departures from Albany to Binghamton on October 20 to book this trip"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex max-w-full items-center gap-x-025 rounded-pill ps-150 pe-150 py-100 hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-neutral-100 text-color-primary hover:text-color-secondary active:bg-color-scheme-neutral-200 active:text-color-primary self-center justify-self-end [gridArea:button]"
                  type="button"
                >
                  <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">$128</span>
                  <span className="shrink-0 text-icon-color-primary">
                    <svg fill="none" height={24} width={24} aria-hidden="true">
                      <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Chevron/right/md.svg#root"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </li>
          </ul>
          <button
            aria-label="Go to all departures from Albany to Binghamton on October 20"
            className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center max-w-full ps-200 pe-200 py-150 rounded-md hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-brand-primary-500 shadow-sm hover:bg-color-scheme-brand-primary-400 hover:shadow-sm active:bg-color-scheme-brand-primary-600 [&:not(:focus-visible)]:active:shadow-none text-color-primary-inverse hover:text-color-primary-inverse active:text-color-primary-inverse w-full self-center sm:w-auto"
            type="button"
            data-href="/en/bus-schedules-results/dred9s/dr6p2r?outbound_date=2024-10-20&adults=1"
            data-price-calendar-more-link="true"
          >
            <span className="shrink-0 text-icon-color-primary-inverse">
              <svg fill="none" height={32} width={32} aria-hidden="true">
                <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/MagnifyingGlass/lg.svg#root" />
              </svg>
            </span>
            <span className="ps-100 pe-100 py-075 font-weight-bolder leading-125 text-size-112">
              View all departures
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
