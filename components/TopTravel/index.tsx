import React from "react";

export default function Index() {
  return (
    <section
      className="grid grid-cols-[minmax(0,80rem)] justify-center pe-[5vw] ps-[5vw] md:pe-[6.25vw] md:ps-[6.25vw] py-500 gap-y-300 md:py-600 lg:py-800 lg:gap-y-500"
      id="route-featured-routes"
    >
      <div className="grid justify-items-center gap-y-200 text-balance text-center *:max-w-prose">
        <h2 className="font-family-display-html text-size-150 font-weight-bolder leading-175 tracking-tight md:font-family-display-html md:text-size-200 md:font-weight-bolder md:leading-225 md:tracking-tight text-balance text-center undefined">
          Top traveled bus routes
        </h2>
      </div>
      <div className="grid grid-cols-24 items-start">
        <ul className="col-start-1 col-end-25 grid grid-cols-1 gap-200 sm:grid-cols-2 sm:gap-300 lg:col-start-2 lg:col-end-24 lg:grid-cols-3">
          <li>
            <a
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default relative block aspect-[21/9] origin-[center_80%] overflow-hidden rounded-lg bg-color-canvas-primary shadow-md transition-transform hover:scale-105 sm:aspect-[3/2]"
              href="https://www.busbud.com/en/bus-boston-new-york/r/drt2yz-dr5reg"
            >
              <p className="font-weight-bold text-size-100 leading-125 inline-block absolute bottom-150 start-150 max-w-[calc(100%-theme(spacing.150)*2)] break-words rounded-lg px-150 py-100 text-color-primary-inverse backdrop-blur-lg">
                Buses from Boston to New York
              </p>
              <img
                loading="lazy"
                className="h-full w-full object-cover object-center"
                alt="New York"
                src="https://busbud.imgix.net/city-hires/1474307214322-NewYork,NewYork,UnitedStates.jpg?h=480&w=720&auto=format%2Ccompress&fit=crop"
                srcSet="https://busbud.imgix.net/city-hires/1474307214322-NewYork,NewYork,UnitedStates.jpg?h=480&w=720&auto=format%2Ccompress&fit=crop 720w,https://busbud.imgix.net/city-hires/1474307214322-NewYork,NewYork,UnitedStates.jpg?h=240&w=360&auto=format%2Ccompress&fit=crop 360w,https://busbud.imgix.net/city-hires/1474307214322-NewYork,NewYork,UnitedStates.jpg?h=314&w=472&auto=format%2Ccompress&fit=crop 472w,https://busbud.imgix.net/city-hires/1474307214322-NewYork,NewYork,UnitedStates.jpg?h=250&w=376&auto=format%2Ccompress&fit=crop 376w"
                sizes="(min-width:992px) 376px,(min-width:768px) 472px,(min-width:600px) 360px,720px"
              />
            </a>
          </li>
          <li>
            <a
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default relative block aspect-[21/9] origin-[center_80%] overflow-hidden rounded-lg bg-color-canvas-primary shadow-md transition-transform hover:scale-105 sm:aspect-[3/2]"
              href="https://www.busbud.com/en/bus-new-york-washington/r/dr5reg-dqcjqb"
            >
              <p className="font-weight-bold text-size-100 leading-125 inline-block absolute bottom-150 start-150 max-w-[calc(100%-theme(spacing.150)*2)] break-words rounded-lg px-150 py-100 text-color-primary-inverse backdrop-blur-lg">
                Buses from New York to Washington
              </p>
              <img
                loading="lazy"
                className="h-full w-full object-cover object-center"
                alt="Washington"
                src="https://busbud.imgix.net/city-hires/Washington,UnitedStates.png?h=480&w=720&auto=format%2Ccompress&fit=crop"
                srcSet="https://busbud.imgix.net/city-hires/Washington,UnitedStates.png?h=480&w=720&auto=format%2Ccompress&fit=crop 720w,https://busbud.imgix.net/city-hires/Washington,UnitedStates.png?h=240&w=360&auto=format%2Ccompress&fit=crop 360w,https://busbud.imgix.net/city-hires/Washington,UnitedStates.png?h=314&w=472&auto=format%2Ccompress&fit=crop 472w,https://busbud.imgix.net/city-hires/Washington,UnitedStates.png?h=250&w=376&auto=format%2Ccompress&fit=crop 376w"
                sizes="(min-width:992px) 376px,(min-width:768px) 472px,(min-width:600px) 360px,720px"
              />
            </a>
          </li>
          <li>
            <a
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default relative block aspect-[21/9] origin-[center_80%] overflow-hidden rounded-lg bg-color-canvas-primary shadow-md transition-transform hover:scale-105 sm:aspect-[3/2]"
              href="https://www.busbud.com/en/bus-miami-orlando/r/dhwfxh-djn4k5"
            >
              <p className="font-weight-bold text-size-100 leading-125 inline-block absolute bottom-150 start-150 max-w-[calc(100%-theme(spacing.150)*2)] break-words rounded-lg px-150 py-100 text-color-primary-inverse backdrop-blur-lg">
                Buses from Miami to Orlando
              </p>
              <img
                loading="lazy"
                className="h-full w-full object-cover object-center"
                alt="Orlando"
                src="https://busbud.imgix.net/city-hires/1474307214328-Orlando,Florida,UnitedStates.jpg?h=480&w=720&auto=format%2Ccompress&fit=crop"
                srcSet="https://busbud.imgix.net/city-hires/1474307214328-Orlando,Florida,UnitedStates.jpg?h=480&w=720&auto=format%2Ccompress&fit=crop 720w,https://busbud.imgix.net/city-hires/1474307214328-Orlando,Florida,UnitedStates.jpg?h=240&w=360&auto=format%2Ccompress&fit=crop 360w,https://busbud.imgix.net/city-hires/1474307214328-Orlando,Florida,UnitedStates.jpg?h=314&w=472&auto=format%2Ccompress&fit=crop 472w,https://busbud.imgix.net/city-hires/1474307214328-Orlando,Florida,UnitedStates.jpg?h=250&w=376&auto=format%2Ccompress&fit=crop 376w"
                sizes="(min-width:992px) 376px,(min-width:768px) 472px,(min-width:600px) 360px,720px"
              />
            </a>
          </li>
          <li>
            <a
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default relative block aspect-[21/9] origin-[center_80%] overflow-hidden rounded-lg bg-color-canvas-primary shadow-md transition-transform hover:scale-105 sm:aspect-[3/2]"
              href="https://www.busbud.com/en/bus-new-york-philadelphia/r/dr5reg-dr4e39"
            >
              <p className="font-weight-bold text-size-100 leading-125 inline-block absolute bottom-150 start-150 max-w-[calc(100%-theme(spacing.150)*2)] break-words rounded-lg px-150 py-100 text-color-primary-inverse backdrop-blur-lg">
                Buses from New York to Philadelphia
              </p>
              <img
                loading="lazy"
                className="h-full w-full object-cover object-center"
                alt="Philadelphia"
                src="https://busbud.imgix.net/city-hires/1474310617366-Philadelphia,Pennsylvania,UnitedStates.jpg?h=480&w=720&auto=format%2Ccompress&fit=crop"
                srcSet="https://busbud.imgix.net/city-hires/1474310617366-Philadelphia,Pennsylvania,UnitedStates.jpg?h=480&w=720&auto=format%2Ccompress&fit=crop 720w,https://busbud.imgix.net/city-hires/1474310617366-Philadelphia,Pennsylvania,UnitedStates.jpg?h=240&w=360&auto=format%2Ccompress&fit=crop 360w,https://busbud.imgix.net/city-hires/1474310617366-Philadelphia,Pennsylvania,UnitedStates.jpg?h=314&w=472&auto=format%2Ccompress&fit=crop 472w,https://busbud.imgix.net/city-hires/1474310617366-Philadelphia,Pennsylvania,UnitedStates.jpg?h=250&w=376&auto=format%2Ccompress&fit=crop 376w"
                sizes="(min-width:992px) 376px,(min-width:768px) 472px,(min-width:600px) 360px,720px"
              />
            </a>
          </li>
          <li>
            <a
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default relative block aspect-[21/9] origin-[center_80%] overflow-hidden rounded-lg bg-color-canvas-primary shadow-md transition-transform hover:scale-105 sm:aspect-[3/2]"
              href="https://www.busbud.com/en/bus-los-angeles-las-vegas/r/9q5ctr-9qqjgc"
            >
              <p className="font-weight-bold text-size-100 leading-125 inline-block absolute bottom-150 start-150 max-w-[calc(100%-theme(spacing.150)*2)] break-words rounded-lg px-150 py-100 text-color-primary-inverse backdrop-blur-lg">
                Buses from Los Angeles to Las Vegas
              </p>
              <img
                loading="lazy"
                className="h-full w-full object-cover object-center"
                alt="Las Vegas"
                src="https://busbud.imgix.net/city-hires/1474307214274-LasVegas,Nevada,UnitedStates.jpg?h=480&w=720&auto=format%2Ccompress&fit=crop"
                srcSet="https://busbud.imgix.net/city-hires/1474307214274-LasVegas,Nevada,UnitedStates.jpg?h=480&w=720&auto=format%2Ccompress&fit=crop 720w,https://busbud.imgix.net/city-hires/1474307214274-LasVegas,Nevada,UnitedStates.jpg?h=240&w=360&auto=format%2Ccompress&fit=crop 360w,https://busbud.imgix.net/city-hires/1474307214274-LasVegas,Nevada,UnitedStates.jpg?h=314&w=472&auto=format%2Ccompress&fit=crop 472w,https://busbud.imgix.net/city-hires/1474307214274-LasVegas,Nevada,UnitedStates.jpg?h=250&w=376&auto=format%2Ccompress&fit=crop 376w"
                sizes="(min-width:992px) 376px,(min-width:768px) 472px,(min-width:600px) 360px,720px"
              />
            </a>
          </li>
          <li>
            <a
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default relative block aspect-[21/9] origin-[center_80%] overflow-hidden rounded-lg bg-color-canvas-primary shadow-md transition-transform hover:scale-105 sm:aspect-[3/2]"
              href="https://www.busbud.com/en/bus-orlando-fort-lauderdale/r/djn4k5-dhxh87"
            >
              <p className="font-weight-bold text-size-100 leading-125 inline-block absolute bottom-150 start-150 max-w-[calc(100%-theme(spacing.150)*2)] break-words rounded-lg px-150 py-100 text-color-primary-inverse backdrop-blur-lg">
                Buses from Orlando to Fort Lauderdale
              </p>
              <img
                loading="lazy"
                className="h-full w-full object-cover object-center"
                alt="Fort Lauderdale"
                src="https://busbud.imgix.net/city-hires/FortLauderdale,Florida,UnitedStates.png?h=480&w=720&auto=format%2Ccompress&fit=crop"
                srcSet="https://busbud.imgix.net/city-hires/FortLauderdale,Florida,UnitedStates.png?h=480&w=720&auto=format%2Ccompress&fit=crop 720w,https://busbud.imgix.net/city-hires/FortLauderdale,Florida,UnitedStates.png?h=240&w=360&auto=format%2Ccompress&fit=crop 360w,https://busbud.imgix.net/city-hires/FortLauderdale,Florida,UnitedStates.png?h=314&w=472&auto=format%2Ccompress&fit=crop 472w,https://busbud.imgix.net/city-hires/FortLauderdale,Florida,UnitedStates.png?h=250&w=376&auto=format%2Ccompress&fit=crop 376w"
                sizes="(min-width:992px) 376px,(min-width:768px) 472px,(min-width:600px) 360px,720px"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
