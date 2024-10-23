import React from "react";

export default function Index() {
  return (
    <section
      className="grid grid-cols-[minmax(0,80rem)] justify-center pe-[5vw] ps-[5vw] md:pe-[6.25vw] md:ps-[6.25vw] py-500 gap-y-300 md:py-600 lg:py-800 lg:gap-y-500"
      data-view-block-tracking-name="about_travel"
      id="about-travel"
    >
      <h2 className="font-family-display-html text-size-150 font-weight-bolder leading-175 tracking-tight md:font-family-display-html md:text-size-200 md:font-weight-bolder md:leading-225 md:tracking-tight text-balance text-center undefined">
        About Bus Travel
      </h2>
      <div className="grid grid-cols-24">
        <div className="col-start-2 col-end-24 sm:col-end-23 xl:col-start-5 xl:col-end-21">
          <div className="grid gap-y-200 md:gap-y-300">
            <h3 className="font-family-display-html text-size-125 font-weight-bolder leading-150 tracking-tight md:font-family-display-html md:text-size-150 md:font-weight-bolder md:leading-175 md:tracking-tight text-balance text-start">
              Bus Travel Tips
            </h3>
            <p className="text-size-100 leading-150">
              If you&apos;re abroad, study some local language. Not only could
              it get you out of a pickle during your bus trip from Albany to
              Binghamton but it&apos;ll also be endearing to native speakers who
              will surely appreciate your effort.
            </p>
            <p className="text-size-100 leading-150">
              Start sightseeing the minute your bus leaves the station. If
              you&apos;re on the night bus from Albany to Binghamton, get comfy
              and count the stars.
            </p>
            <p className="text-size-100 leading-150">
              Taking the bus creates the smallest carbon footprint compared to
              other modes of transport. Not to mention that buses will allow you
              to discover scenic gems from Albany to Binghamton that are
              otherwise impossible to come by with a plane.
            </p>
            <p className="text-size-100 leading-150">
              Tune out to the fine sounds of your best music playlist on your
              bus trip from Albany to Binghamton while indulging in miles on end
              of beautiful scenic views.
            </p>
          </div>
          <div className="mt-300 grid gap-y-200 md:mt-400 md:gap-y-300">
            <h3 className="font-family-display-html text-size-125 font-weight-bolder leading-150 tracking-tight md:font-family-display-html md:text-size-150 md:font-weight-bolder md:leading-175 md:tracking-tight text-balance text-start">
              Did you know?
            </h3>
            <p className="text-size-100 leading-150">
              The word &apos;bus&apos; is an abbreviation of &apos;omnibus&apos;
              which means &apos;for all&apos; in Latin as buses were meant to be
              transportation for everybody.
            </p>
            <p className="text-size-100 leading-150">
              Did you know there are on average 4,400 intercity bus departures
              every day in the US only? This number has been growing for 9 years
              in a row, yay!
            </p>
            <p className="text-size-100 leading-150">
              The Superbus, created by a Dutch engineer is the world&apos;s
              fastest bus with 250 km/h. Too bad it&apos;s only a prototype for
              now.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
