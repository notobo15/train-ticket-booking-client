import React from "react";

export default function Index() {
  return (
    <section
      className="grid grid-cols-[minmax(0,80rem)] justify-center pe-[5vw] ps-[5vw] md:pe-[6.25vw] md:ps-[6.25vw] py-500 gap-y-300 md:py-600 lg:py-800 lg:gap-y-500"
      data-view-block-tracking-name="operators"
      id="route-featured-profiles"
    >
      <div className="flex flex-col gap-300">
        <h2 className="font-family-display-html text-size-150 font-weight-bolder leading-175 tracking-tight md:font-family-display-html md:text-size-200 md:font-weight-bolder md:leading-225 md:tracking-tight text-balance text-center undefined">
          Compare bus companies
        </h2>
        <div
          className="group/card overflow-hidden rounded-lg bg-color-elevation-raised-canvas shadow-elevation-raised size-md divide-y-width-sm divide-color-primary"
          data-testid="featured-operators"
        >
          <div>
            <div
              className="flex items-center group-[.size-sm]/card:px-150 group-[.size-sm]/card:py-100 group-[.size-md]/card:p-200 group/button cursor-pointer select-none"
              data-hz-collapse-target="#featured-operators-4148-accordion"
            >
              <div className="grow min-w-0 px-100 py-075">
                <div className="flex flex-col gap-200">
                  <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
                    <div className="flex flex-col gap-200 md:flex-row md:items-center">
                      <img
                        loading="lazy"
                        className="max-h-300 w-[11rem] object-contain object-left"
                        alt="Adirondack Trailways"
                        src="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0"
                        srcSet="https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=1 1x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=2 2x,https://busbud.imgix.net/operator-logos/logo-trailways.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=3 3x"
                      />
                      <span className="max-w-full text-size-87 leading-100 md:text-size-100 md:leading-125 inline-block md:inline-block">
                        <a
                          className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default hover:underline"
                          href="https://www.busbud.com/en/bus-company/adirondack-trailways"
                        >
                          Adirondack Trailways
                        </a>
                      </span>
                    </div>
                    <svg className="sr-only">
                      <defs>
                        <linearGradient id="half_gradient" x1={0} x2="100%" y1={0} y2={0}>
                          <stop offset="50%" stopColor="var(--col-special-400)" />
                          <stop offset="50%" stopColor="var(--col-neutral-200)" />
                        </linearGradient>
                        <symbol viewBox="0 0 24 24" id="star">
                          <path d="m20.34 9.06-4.07-.59a2.8 2.8 0 0 1-1.87-1.34l-1.82-3.65C12.42 3.16 12.22 3 12 3c-.22 0-.42.16-.58.48L9.6 7.13a2.8 2.8 0 0 1-1.87 1.34l-4.07.6c-.71.1-.87.59-.36 1.08L6.24 13c.55.59.81 1.38.72 2.18l-.7 4.01c-.08.51.11.81.47.81.17 0 .32-.05.47-.13l3.63-1.9a2.82 2.82 0 0 1 2.32 0l3.65 1.9c.15.08.3.12.48.13.35 0 .55-.3.46-.8l-.7-4.02c-.1-.8.17-1.6.72-2.19l2.94-2.84c.51-.5.35-.98-.36-1.09Z"></path>
                        </symbol>
                      </defs>
                    </svg>
                    <div className="flex flex-nowrap items-center">
                      <svg className="-mx-012 first:mx-0 last:mx-0" width={24} height={24} viewBox="0 0 24 24">
                        <use xlinkHref="#star" fill="var(--col-special-400)" />
                      </svg>
                      <svg className="-mx-012 first:mx-0 last:mx-0" width={24} height={24} viewBox="0 0 24 24">
                        <use xlinkHref="#star" fill="var(--col-special-400)" />
                      </svg>
                      <svg className="-mx-012 first:mx-0 last:mx-0" width={24} height={24} viewBox="0 0 24 24">
                        <use xlinkHref="#star" fill="var(--col-special-400)" />
                      </svg>
                      <svg className="-mx-012 first:mx-0 last:mx-0" width={24} height={24} viewBox="0 0 24 24">
                        <use xlinkHref="#star" fill="var(--col-special-400)" />
                      </svg>
                      <svg className="-mx-012 first:mx-0 last:mx-0" width={24} height={24} viewBox="0 0 24 24">
                        <use xlinkHref="#star" fill="var(--col-neutral-200)" />
                      </svg>
                      <span className="max-w-full text-size-56 uppercase leading-75 tracking-wider inline-block text-nowrap text-color-tertiary">
                        4/5 (1025)
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-100">
                    <div
                      className="inline-flex max-w-full items-center gap-x-025 rounded-pill ps-075 pe-075 py-050 outline outline-width-sm active:backdrop-blur-lg outline-color-primary text-color-primary"
                      title="According to the users, the staff has an approval rating of 91%"
                    >
                      <span className="shrink-0 text-icon-color-primary">
                        <svg fill="none" height={16} width={16} aria-hidden="true">
                          <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Attendant/sm.svg#root"></use>
                        </svg>
                      </span>
                      <span className="font-weight-bold ps-050 pe-050 py-000 text-size-75 leading-100">
                        <div className="flex flex-1 items-center justify-between gap-100">
                          <label className="max-w-full font-weight-bold text-size-75 leading-100 inline-block">
                            Staff
                          </label>
                          <label className="max-w-full font-weight-bold text-size-75 leading-100 inline-block text-color-primary">
                            91{/* */}%
                          </label>
                        </div>
                      </span>
                    </div>
                    <div
                      className="inline-flex max-w-full items-center gap-x-025 rounded-pill ps-075 pe-075 py-050 outline outline-width-sm active:backdrop-blur-lg outline-color-primary text-color-primary"
                      title="According to the users, the timeliness has an approval rating of 84%"
                    >
                      <span className="shrink-0 text-icon-color-primary">
                        <svg fill="none" height={16} width={16} aria-hidden="true">
                          <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Clock/sm.svg#root" />
                        </svg>
                      </span>
                      <span className="font-weight-bold ps-050 pe-050 py-000 text-size-75 leading-100">
                        <div className="flex flex-1 items-center justify-between gap-100">
                          <label className="max-w-full font-weight-bold text-size-75 leading-100 inline-block">
                            Timeliness
                          </label>
                          <label className="max-w-full font-weight-bold text-size-75 leading-100 inline-block text-color-primary">
                            84{/* */}%
                          </label>
                        </div>
                      </span>
                    </div>
                    <div
                      className="inline-flex max-w-full items-center gap-x-025 rounded-pill ps-075 pe-075 py-050 outline outline-width-sm active:backdrop-blur-lg outline-color-primary text-color-primary"
                      title="According to the users, the cleanliness has an approval rating of 95%"
                    >
                      <span className="shrink-0 text-icon-color-primary">
                        <svg fill="none" height={16} width={16} aria-hidden="true">
                          <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Check/sm.svg#root" />
                        </svg>
                      </span>
                      <span className="font-weight-bold ps-050 pe-050 py-000 text-size-75 leading-100">
                        <div className="flex flex-1 items-center justify-between gap-100">
                          <label className="max-w-full font-weight-bold text-size-75 leading-100 inline-block">
                            Cleanliness
                          </label>
                          <label className="max-w-full font-weight-bold text-size-75 leading-100 inline-block text-color-primary">
                            95{/* */}%
                          </label>
                        </div>
                      </span>
                    </div>
                    <div
                      className="inline-flex max-w-full items-center gap-x-025 rounded-pill ps-075 pe-075 py-050 outline outline-width-sm active:backdrop-blur-lg outline-color-primary text-color-primary"
                      title="According to the users, the wifi has an approval rating of 48%"
                    >
                      <span className="shrink-0 text-icon-color-primary">
                        <svg fill="none" height={16} width={16} aria-hidden="true">
                          <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Wifi/default/sm.svg#root"></use>
                        </svg>
                      </span>
                      <span className="font-weight-bold ps-050 pe-050 py-000 text-size-75 leading-100">
                        <div className="flex flex-1 items-center justify-between gap-100">
                          <label className="max-w-full font-weight-bold text-size-75 leading-100 inline-block">
                            Wifi
                          </label>
                          <label className="max-w-full font-weight-bold text-size-75 leading-100 inline-block text-color-scheme-functional-negative-600">
                            48{/* */}%
                          </label>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shrink-0">
                <button
                  aria-label="Expand reviews"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center p-050 rounded-xs hover:-translate-y-006 active:translate-y-006 hover:backdrop-blur-lg bg-color-static-transparent hover:bg-color-film-secondary active:bg-color-film-tertiary text-icon-color-primary group-hover/button:[&:not(:active)]:bg-color-film-secondary shrink-0"
                  aria-controls="featured-operators-4148-accordion"
                  aria-expanded="false"
                  type="button"
                ></button>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="grid transition-[grid-template-rows] duration-150 ease-out grid-rows-[0fr]"
              data-is-expanded="false"
              data-with-transition="true"
              data-testid="accordion-body"
              id="featured-operators-4148-accordion"
            >
              <div className="overflow-hidden">
                <div className="group-[.size-sm]/card:pt-200 group-[.size-sm]/card:pb-250 group-[.size-sm]/card:px-250 group-[.size-md]/card:pt-300 group-[.size-md]/card:pb-350 group-[.size-md]/card:px-300">
                  <div className="flex flex-col gap-300">
                    <p className="text-size-100 leading-150">
                      According to customer reviews, the service was satisfactory overall. However, there were
                      consistent complaints about significant delays on both ends of the journey. On a positive note,
                      customers appreciated the pleasant demeanor of the driver and had a great ride experience.
                    </p>
                    <h3 className="font-family-display-html text-size-125 font-weight-bolder leading-150 tracking-tight lg:font-family-display-html lg:text-size-150 lg:font-weight-bolder lg:leading-175 lg:tracking-tight">
                      Adirondack Trailways Albany Binghamton recent customer reviews
                    </h3>
                    <div className="grid grid-cols-1 gap-300 sm:grid-cols-2 md:grid-cols-3">
                      <div className="flex flex-1 flex-col gap-200 border-b-width-sm border-b-color-primary pb-300 last:border-none md:border-none">
                        <p className="text-size-87 leading-125 line-clamp-[13] flex-1 overflow-ellipsis">Good driver</p>
                        <div className="flex flex-col gap-050">
                          <p className="sr-only">5 out of 5 stars</p>
                          <svg className="sr-only">
                            <defs>
                              <linearGradient id="half_gradient" x1={0} x2="100%" y1={0} y2={0}>
                                <stop offset="50%" stopColor="var(--col-special-400)" />
                                <stop offset="50%" stopColor="var(--col-neutral-200)" />
                              </linearGradient>
                              <symbol viewBox="0 0 24 24" id="star">
                                <path d="m20.34 9.06-4.07-.59a2.8 2.8 0 0 1-1.87-1.34l-1.82-3.65C12.42 3.16 12.22 3 12 3c-.22 0-.42.16-.58.48L9.6 7.13a2.8 2.8 0 0 1-1.87 1.34l-4.07.6c-.71.1-.87.59-.36 1.08L6.24 13c.55.59.81 1.38.72 2.18l-.7 4.01c-.08.51.11.81.47.81.17 0 .32-.05.47-.13l3.63-1.9a2.82 2.82 0 0 1 2.32 0l3.65 1.9c.15.08.3.12.48.13.35 0 .55-.3.46-.8l-.7-4.02c-.1-.8.17-1.6.72-2.19l2.94-2.84c.51-.5.35-.98-.36-1.09Z"></path>
                              </symbol>
                            </defs>
                          </svg>
                          <div className="flex flex-nowrap items-center">
                            <svg className="-mx-012 first:mx-0 last:mx-0" width={16} height={16} viewBox="0 0 16 16">
                              <use xlinkHref="#star" fill="var(--col-special-400)" />
                            </svg>
                            <svg className="-mx-012 first:mx-0 last:mx-0" width={16} height={16} viewBox="0 0 16 16">
                              <use xlinkHref="#star" fill="var(--col-special-400)" />
                            </svg>
                            <svg className="-mx-012 first:mx-0 last:mx-0" width={16} height={16} viewBox="0 0 16 16">
                              <use xlinkHref="#star" fill="var(--col-special-400)" />
                            </svg>
                            <svg className="-mx-012 first:mx-0 last:mx-0" width={16} height={16} viewBox="0 0 16 16">
                              <use xlinkHref="#star" fill="var(--col-special-400)" />
                            </svg>
                            <svg className="-mx-012 first:mx-0 last:mx-0" width={16} height={16} viewBox="0 0 16 16">
                              <use xlinkHref="#star" fill="var(--col-special-400)" />
                            </svg>
                          </div>
                          <div className="flex flex-col">
                            <p className="max-w-full font-weight-bold text-size-87 leading-100 inline-block">Anne M.</p>
                            <time className="max-w-full text-size-75 leading-100 inline-block">March 3, 2024</time>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-200 border-b-width-sm border-b-color-primary pb-300 last:border-none md:border-none">
                        <p className="text-size-87 leading-125 line-clamp-[13] flex-1 overflow-ellipsis">
                          Driver was very pleasant. Ride was great
                        </p>
                        <div className="flex flex-col gap-050">
                          <p className="sr-only">5 out of 5 stars</p>
                          <svg className="sr-only">
                            <defs>
                              <linearGradient id="half_gradient" x1={0} x2="100%" y1={0} y2={0}>
                                <stop offset="50%" stopColor="var(--col-special-400)" />
                                <stop offset="50%" stopColor="var(--col-neutral-200)" />
                              </linearGradient>
                              <symbol viewBox="0 0 24 24" id="star">
                                <path d="m20.34 9.06-4.07-.59a2.8 2.8 0 0 1-1.87-1.34l-1.82-3.65C12.42 3.16 12.22 3 12 3c-.22 0-.42.16-.58.48L9.6 7.13a2.8 2.8 0 0 1-1.87 1.34l-4.07.6c-.71.1-.87.59-.36 1.08L6.24 13c.55.59.81 1.38.72 2.18l-.7 4.01c-.08.51.11.81.47.81.17 0 .32-.05.47-.13l3.63-1.9a2.82 2.82 0 0 1 2.32 0l3.65 1.9c.15.08.3.12.48.13.35 0 .55-.3.46-.8l-.7-4.02c-.1-.8.17-1.6.72-2.19l2.94-2.84c.51-.5.35-.98-.36-1.09Z"></path>
                              </symbol>
                            </defs>
                          </svg>
                          <div className="flex flex-nowrap items-center">
                            <svg className="-mx-012 first:mx-0 last:mx-0" width={16} height={16} viewBox="0 0 16 16">
                              <use xlinkHref="#star" fill="var(--col-special-400)" />
                            </svg>
                            <svg className="-mx-012 first:mx-0 last:mx-0" width={16} height={16} viewBox="0 0 16 16">
                              <use xlinkHref="#star" fill="var(--col-special-400)" />
                            </svg>
                            <svg className="-mx-012 first:mx-0 last:mx-0" width={16} height={16} viewBox="0 0 16 16">
                              <use xlinkHref="#star" fill="var(--col-special-400)" />
                            </svg>
                            <svg className="-mx-012 first:mx-0 last:mx-0" width={16} height={16} viewBox="0 0 16 16">
                              <use xlinkHref="#star" fill="var(--col-special-400)" />
                            </svg>
                            <svg className="-mx-012 first:mx-0 last:mx-0" width={16} height={16} viewBox="0 0 16 16">
                              <use xlinkHref="#star" fill="var(--col-special-400)" />
                            </svg>
                          </div>
                          <div className="flex flex-col">
                            <p className="max-w-full font-weight-bold text-size-87 leading-100 inline-block">
                              Dorolyn P.
                            </p>
                            <time className="max-w-full text-size-75 leading-100 inline-block">June 10, 2023</time>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-200 border-b-width-sm border-b-color-primary pb-300 last:border-none md:border-none">
                        <p className="text-size-87 leading-125 line-clamp-[13] flex-1 overflow-ellipsis">
                          The service was ok but the bus was very late on both ends of journey
                        </p>
                        <div className="flex flex-col gap-050">
                          <p className="sr-only">2 out of 5 stars</p>
                          <svg className="sr-only">
                            <defs>
                              <linearGradient id="half_gradient" x1={0} x2="100%" y1={0} y2={0}>
                                <stop offset="50%" stopColor="var(--col-special-400)" />
                                <stop offset="50%" stopColor="var(--col-neutral-200)" />
                              </linearGradient>
                              <symbol viewBox="0 0 24 24" id="star">
                                <path d="m20.34 9.06-4.07-.59a2.8 2.8 0 0 1-1.87-1.34l-1.82-3.65C12.42 3.16 12.22 3 12 3c-.22 0-.42.16-.58.48L9.6 7.13a2.8 2.8 0 0 1-1.87 1.34l-4.07.6c-.71.1-.87.59-.36 1.08L6.24 13c.55.59.81 1.38.72 2.18l-.7 4.01c-.08.51.11.81.47.81.17 0 .32-.05.47-.13l3.63-1.9a2.82 2.82 0 0 1 2.32 0l3.65 1.9c.15.08.3.12.48.13.35 0 .55-.3.46-.8l-.7-4.02c-.1-.8.17-1.6.72-2.19l2.94-2.84c.51-.5.35-.98-.36-1.09Z"></path>
                              </symbol>
                            </defs>
                          </svg>
                          <div className="flex flex-nowrap items-center">
                            <svg className="-mx-012 first:mx-0 last:mx-0" width={16} height={16} viewBox="0 0 16 16">
                              <use xlinkHref="#star" fill="var(--col-special-400)" />
                            </svg>
                            <svg className="-mx-012 first:mx-0 last:mx-0" width={16} height={16} viewBox="0 0 16 16">
                              <use xlinkHref="#star" fill="var(--col-special-400)" />
                            </svg>
                            <svg className="-mx-012 first:mx-0 last:mx-0" width={16} height={16} viewBox="0 0 16 16">
                              <use xlinkHref="#star" fill="var(--col-neutral-200)" />
                            </svg>
                            <svg className="-mx-012 first:mx-0 last:mx-0" width={16} height={16} viewBox="0 0 16 16">
                              <use xlinkHref="#star" fill="var(--col-neutral-200)" />
                            </svg>
                            <svg className="-mx-012 first:mx-0 last:mx-0" width={16} height={16} viewBox="0 0 16 16">
                              <use xlinkHref="#star" fill="var(--col-neutral-200)" />
                            </svg>
                          </div>
                          <div className="flex flex-col">
                            <p className="max-w-full font-weight-bold text-size-87 leading-100 inline-block">
                              Ashish S.
                            </p>
                            <time className="max-w-full text-size-75 leading-100 inline-block">December 1, 2022</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="flex items-center group-[.size-sm]/card:px-150 group-[.size-sm]/card:py-100 group-[.size-md]/card:p-200 group/button cursor-pointer select-none"
              data-hz-collapse-target="#featured-operators-580-accordion"
            >
              <div className="grow min-w-0 px-100 py-075">
                <div className="flex flex-col gap-200">
                  <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
                    <div className="flex flex-col gap-200 md:flex-row md:items-center">
                      <img
                        loading="lazy"
                        className="max-h-300 w-[11rem] object-contain object-left"
                        alt="Greyhound"
                        src="https://busbud.imgix.net/operator-logos/greyhound.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0"
                        srcSet="https://busbud.imgix.net/operator-logos/greyhound.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=1 1x,https://busbud.imgix.net/operator-logos/greyhound.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=2 2x,https://busbud.imgix.net/operator-logos/greyhound.png?h=24&w=auto&auto=format&fit=fill&trim=auto&trim-md=0&dpr=3 3x"
                      />
                      <span className="max-w-full text-size-87 leading-100 md:text-size-100 md:leading-125 inline-block md:inline-block">
                        <a
                          className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default hover:underline"
                          href="https://www.busbud.com/en/bus-company/greyhound"
                        >
                          Greyhound
                        </a>
                      </span>
                    </div>
                    <svg className="sr-only">
                      <defs>
                        <linearGradient id="half_gradient" x1={0} x2="100%" y1={0} y2={0}>
                          <stop offset="50%" stopColor="var(--col-special-400)" />
                          <stop offset="50%" stopColor="var(--col-neutral-200)" />
                        </linearGradient>
                        <symbol viewBox="0 0 24 24" id="star">
                          <path d="m20.34 9.06-4.07-.59a2.8 2.8 0 0 1-1.87-1.34l-1.82-3.65C12.42 3.16 12.22 3 12 3c-.22 0-.42.16-.58.48L9.6 7.13a2.8 2.8 0 0 1-1.87 1.34l-4.07.6c-.71.1-.87.59-.36 1.08L6.24 13c.55.59.81 1.38.72 2.18l-.7 4.01c-.08.51.11.81.47.81.17 0 .32-.05.47-.13l3.63-1.9a2.82 2.82 0 0 1 2.32 0l3.65 1.9c.15.08.3.12.48.13.35 0 .55-.3.46-.8l-.7-4.02c-.1-.8.17-1.6.72-2.19l2.94-2.84c.51-.5.35-.98-.36-1.09Z"></path>
                        </symbol>
                      </defs>
                    </svg>
                    <div className="flex flex-nowrap items-center">
                      <svg className="-mx-012 first:mx-0 last:mx-0" width={24} height={24} viewBox="0 0 24 24">
                        <use xlinkHref="#star" fill="var(--col-special-400)" />
                      </svg>
                      <svg className="-mx-012 first:mx-0 last:mx-0" width={24} height={24} viewBox="0 0 24 24">
                        <use xlinkHref="#star" fill="var(--col-special-400)" />
                      </svg>
                      <svg className="-mx-012 first:mx-0 last:mx-0" width={24} height={24} viewBox="0 0 24 24">
                        <use xlinkHref="#star" fill="var(--col-special-400)" />
                      </svg>
                      <svg className="-mx-012 first:mx-0 last:mx-0" width={24} height={24} viewBox="0 0 24 24">
                        <use xlinkHref="#star" fill="url(#half_gradient)" />
                      </svg>
                      <svg className="-mx-012 first:mx-0 last:mx-0" width={24} height={24} viewBox="0 0 24 24">
                        <use xlinkHref="#star" fill="var(--col-neutral-200)" />
                      </svg>
                      <span className="max-w-full text-size-56 uppercase leading-75 tracking-wider inline-block text-nowrap text-color-tertiary">
                        3.5/5 (86475)
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-100">
                    <div
                      className="inline-flex max-w-full items-center gap-x-025 rounded-pill ps-075 pe-075 py-050 outline outline-width-sm active:backdrop-blur-lg outline-color-primary text-color-primary"
                      title="According to the users, the staff has an approval rating of 70%"
                    >
                      <span className="shrink-0 text-icon-color-primary">
                        <svg fill="none" height={16} width={16} aria-hidden="true">
                          <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Attendant/sm.svg#root"></use>
                        </svg>
                      </span>
                      <span className="font-weight-bold ps-050 pe-050 py-000 text-size-75 leading-100">
                        <div className="flex flex-1 items-center justify-between gap-100">
                          <label className="max-w-full font-weight-bold text-size-75 leading-100 inline-block">
                            Staff
                          </label>
                          <label className="max-w-full font-weight-bold text-size-75 leading-100 inline-block text-color-primary">
                            70{/* */}%
                          </label>
                        </div>
                      </span>
                    </div>
                    <div
                      className="inline-flex max-w-full items-center gap-x-025 rounded-pill ps-075 pe-075 py-050 outline outline-width-sm active:backdrop-blur-lg outline-color-primary text-color-primary"
                      title="According to the users, the timeliness has an approval rating of 49%"
                    >
                      <span className="shrink-0 text-icon-color-primary">
                        <svg fill="none" height={16} width={16} aria-hidden="true">
                          <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Clock/sm.svg#root" />
                        </svg>
                      </span>
                      <span className="font-weight-bold ps-050 pe-050 py-000 text-size-75 leading-100">
                        <div className="flex flex-1 items-center justify-between gap-100">
                          <label className="max-w-full font-weight-bold text-size-75 leading-100 inline-block">
                            Timeliness
                          </label>
                          <label className="max-w-full font-weight-bold text-size-75 leading-100 inline-block text-color-scheme-functional-negative-600">
                            49{/* */}%
                          </label>
                        </div>
                      </span>
                    </div>
                    <div
                      className="inline-flex max-w-full items-center gap-x-025 rounded-pill ps-075 pe-075 py-050 outline outline-width-sm active:backdrop-blur-lg outline-color-primary text-color-primary"
                      title="According to the users, the cleanliness has an approval rating of 65%"
                    >
                      <span className="shrink-0 text-icon-color-primary">
                        <svg fill="none" height={16} width={16} aria-hidden="true">
                          <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Check/sm.svg#root" />
                        </svg>
                      </span>
                      <span className="font-weight-bold ps-050 pe-050 py-000 text-size-75 leading-100">
                        <div className="flex flex-1 items-center justify-between gap-100">
                          <label className="max-w-full font-weight-bold text-size-75 leading-100 inline-block">
                            Cleanliness
                          </label>
                          <label className="max-w-full font-weight-bold text-size-75 leading-100 inline-block text-color-scheme-functional-special-600">
                            65{/* */}%
                          </label>
                        </div>
                      </span>
                    </div>
                    <div
                      className="inline-flex max-w-full items-center gap-x-025 rounded-pill ps-075 pe-075 py-050 outline outline-width-sm active:backdrop-blur-lg outline-color-primary text-color-primary"
                      title="According to the users, the wifi has an approval rating of 45%"
                    >
                      <span className="shrink-0 text-icon-color-primary">
                        <svg fill="none" height={16} width={16} aria-hidden="true">
                          <use href="https://www.busbud.com/pubweb-assets/horizon/Icons/1.12.5/Wifi/default/sm.svg#root"></use>
                        </svg>
                      </span>
                      <span className="font-weight-bold ps-050 pe-050 py-000 text-size-75 leading-100">
                        <div className="flex flex-1 items-center justify-between gap-100">
                          <label className="max-w-full font-weight-bold text-size-75 leading-100 inline-block">
                            Wifi
                          </label>
                          <label className="max-w-full font-weight-bold text-size-75 leading-100 inline-block text-color-scheme-functional-negative-600">
                            45{/* */}%
                          </label>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shrink-0">
                <button
                  aria-label="Expand reviews"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center p-050 rounded-xs hover:-translate-y-006 active:translate-y-006 hover:backdrop-blur-lg bg-color-static-transparent hover:bg-color-film-secondary active:bg-color-film-tertiary text-icon-color-primary group-hover/button:[&:not(:active)]:bg-color-film-secondary shrink-0"
                  aria-controls="featured-operators-580-accordion"
                  aria-expanded="false"
                  type="button"
                ></button>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="grid transition-[grid-template-rows] duration-150 ease-out grid-rows-[0fr]"
              data-is-expanded="false"
              data-with-transition="true"
              data-testid="accordion-body"
              id="featured-operators-580-accordion"
            >
              <div className="overflow-hidden">
                <div className="group-[.size-sm]/card:pt-200 group-[.size-sm]/card:pb-250 group-[.size-sm]/card:px-250 group-[.size-md]/card:pt-300 group-[.size-md]/card:pb-350 group-[.size-md]/card:px-300">
                  <div className="flex flex-col gap-300">
                    <div className="last:*:mb-0 [&>a]:text-color-scheme-interactive-link-600 [&>a]:visited:text-color-scheme-literal-purple-600 [&>a]:hover:text-color-scheme-interactive-link-500 [&>a]:focus-visible:outline-none [&>a]:focus-visible:ring [&>a]:active:text-color-scheme-interactive-link-600 [&>a]:aria-disabled:cursor-default">
                      <p className="text-size-87 leading-125 sm:text-size-100 sm:leading-150 mb-300">
                        Greyhound Lines offers the most comprehensive intercity bus services in the United States. They
                        operate a modern, environmentally friendly fleet that serves more than 2400 destinations and
                        carries nearly 16 million passengers annually. When traveling with them, you can expect free
                        WiFi, onboard entertainment, bathrooms, power outlets and decent legroom. One of the great perks
                        of Greyhound is that they connect big cities and smaller towns in the US, where you usually
                        can&apos;t get to by train or plane. If you&apos;re looking for safe and affordable
                        transportation, Greyhound is a great choice.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-800 md:gap-1000">
          <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block">US bus companies: </span>
          <span className="max-w-full text-size-87 leading-100 inline-block flex-wrap">
            <a
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default text-color-scheme-interactive-link-600 hover:text-color-scheme-interactive-link-500 active:text-color-scheme-interactive-link-600 underline visited:text-color-scheme-literal-purple-600"
              href="https://www.busbud.com/en/bus-company/flixbus"
            >
              FlixBus
            </a>
            ,{" "}
            <a
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default text-color-scheme-interactive-link-600 hover:text-color-scheme-interactive-link-500 active:text-color-scheme-interactive-link-600 underline visited:text-color-scheme-literal-purple-600"
              href="https://www.busbud.com/en/bus-company/greyhound"
            >
              Greyhound
            </a>
            ,{" "}
            <a
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default text-color-scheme-interactive-link-600 hover:text-color-scheme-interactive-link-500 active:text-color-scheme-interactive-link-600 underline visited:text-color-scheme-literal-purple-600"
              href="https://www.busbud.com/en/bus-company/los-limousines"
            >
              Los Limousines
            </a>
            ,{" "}
            <a
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default text-color-scheme-interactive-link-600 hover:text-color-scheme-interactive-link-500 active:text-color-scheme-interactive-link-600 underline visited:text-color-scheme-literal-purple-600"
              href="https://www.busbud.com/en/bus-company/ourbus"
            >
              OurBus
            </a>
            ,{" "}
            <a
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default text-color-scheme-interactive-link-600 hover:text-color-scheme-interactive-link-500 active:text-color-scheme-interactive-link-600 underline visited:text-color-scheme-literal-purple-600"
              href="https://www.busbud.com/en/bus-company/wanda-coach"
            >
              Wanda Coach
            </a>
            ,{" "}
            <a
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default text-color-scheme-interactive-link-600 hover:text-color-scheme-interactive-link-500 active:text-color-scheme-interactive-link-600 underline visited:text-color-scheme-literal-purple-600"
              href="https://www.busbud.com/en/bus-company/new-york-trailways"
            >
              New York Trailways
            </a>
            ,{" "}
            <a
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default text-color-scheme-interactive-link-600 hover:text-color-scheme-interactive-link-500 active:text-color-scheme-interactive-link-600 underline visited:text-color-scheme-literal-purple-600"
              href="https://www.busbud.com/en/bus-company/acn-autobuses"
            >
              ACN Autobuses
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
