import React from "react";

export default function Index() {
  return (
    <footer
      className="mt-300 sm:mt-0 focus-visible:outline-none focus-visible:before:ring focus-visible:relative focus-visible:before:absolute focus-visible:before:inset-050 focus-visible:before:pointer-events-none focus-visible:before:rounded-sm"
      id="footer"
      tabIndex={-1}
    >
      <div className="grid grid-cols-[minmax(0,80rem)] justify-center pe-[5vw] ps-[5vw] md:pe-[6.25vw] md:ps-[6.25vw] sm:pb-800 sm:pt-600 md:pt-800">
        <div className="flex flex-col sm:gap-200">
          <div>
            <hr
              aria-orientation="horizontal"
              className="border-none bg-[theme(borderColor[color-primary])] h-012 -mr-200 min-[360px]:-mr-300 sm:hidden"
              role="separator"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-200">
            <div className="order-1 sm:order-[0] sm:w-7/24 md:w-6/24">
              <div className="px-200 py-300 sm:p-0">
                <a
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default block h-500 text-center max-sm:hidden sm:mb-200 sm:text-left"
                  href="https://www.busbud.com/en"
                >
                  {/* BrandLogo */}
                </a>
                <p className="text-size-62 leading-75 tracking-wide uppercase mb-200 font-weight-bold text-color-secondary sm:hidden">
                  follow us
                </p>
                <ul className="-mb-075 -ml-075 -mt-075 flex flex-row gap-150 sm:m-0 sm:flex-col sm:gap-0">
                  <li>
                    <span className="max-w-full font-weight-bold text-size-75 leading-100 inline-flex items-center gap-x-025">
                      <span className="shrink-0"></span>
                      <span className="">
                        <a
                          aria-label="Instagram"
                          className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default hover:underline"
                          href="https://www.instagram.com/busbud/"
                        >
                          <span className="max-sm:hidden">Instagram</span>
                        </a>
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="max-w-full font-weight-bold text-size-75 leading-100 inline-flex items-center gap-x-025">
                      <span className="shrink-0"></span>
                      <span className="">
                        <a
                          aria-label="Facebook"
                          className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default hover:underline"
                          href="https://www.facebook.com/Busbud"
                        >
                          <span className="max-sm:hidden">Facebook</span>
                        </a>
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="max-w-full font-weight-bold text-size-75 leading-100 inline-flex items-center gap-x-025">
                      <span className="shrink-0"></span>
                      <span className="">
                        <a
                          aria-label="Twitter"
                          className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default hover:underline"
                          href="https://twitter.com/Busbud"
                        >
                          <span className="max-sm:hidden">Twitter</span>
                        </a>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
              <hr
                aria-orientation="horizontal"
                className="border-none bg-[theme(borderColor[color-primary])] h-012 -mr-200 min-[360px]:-mr-300 sm:hidden"
                role="separator"
              />
            </div>
            <div className="sm:w-7/24">
              <div className="px-200 py-300 sm:p-0">
                <p className="text-size-62 leading-75 tracking-wide uppercase mb-200 font-weight-bold text-color-secondary">
                  Global coverage
                </p>
                <ul className="flex flex-col gap-100">
                  <li>
                    <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block">
                      <a
                        className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default hover:underline"
                        href="https://www.busbud.com/en/sitemap/wp/0"
                      >
                        Bus and Train companies
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
              <hr
                aria-orientation="horizontal"
                className="border-none bg-[theme(borderColor[color-primary])] h-012 -mr-200 min-[360px]:-mr-300 sm:hidden"
                role="separator"
              />
            </div>
            <div className="sm:w-4/24">
              <div className="px-200 py-300 sm:p-0">
                <p className="text-size-62 leading-75 tracking-wide uppercase mb-200 font-weight-bold text-color-secondary">
                  Company
                </p>
                <ul className="flex flex-col gap-100">
                  <li>
                    <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block">
                      <a
                        className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default hover:underline"
                        href="https://www.busbud.com/en/about"
                      >
                        About
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block">
                      <a
                        className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default hover:underline"
                        href="https://www.busbud.com/en/about/partners"
                      >
                        Partner with us
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block">
                      <a
                        className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default hover:underline"
                        href="https://www.busbud.com/blog/"
                      >
                        Blog
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block">
                      <a
                        className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default hover:underline"
                        href="https://help.busbud.com/hc/en-us"
                      >
                        Help
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
              <hr
                aria-orientation="horizontal"
                className="border-none bg-[theme(borderColor[color-primary])] h-012 -mr-200 min-[360px]:-mr-300 sm:hidden"
                role="separator"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[minmax(0,80rem)] justify-center pe-[5vw] ps-[5vw] md:pe-[6.25vw] md:ps-[6.25vw] sm:border-t-width-sm sm:border-t-color-primary">
        <div className="flex flex-1 justify-center px-200 py-300 sm:px-0">
          <div className="flex flex-1 flex-col justify-between sm:flex-col-reverse sm:items-center md:flex-row">
            <div className="flex flex-[2_2_0%] flex-col xl:flex-row">
              <div className="mb-200 flex-1 sm:mb-0 sm:text-center md:text-left">
                <p className="text-size-75 leading-100 truncate font-weight-bold text-color-tertiary">
                  © 2024 Busbud Inc., All rights reserved
                </p>
              </div>
              <div className="mb-200 flex flex-1 sm:mb-0 xl:justify-center">
                <ul className="flex flex-col sm:mb-0 sm:flex-row">
                  <span className="max-w-full font-weight-bold text-size-75 leading-100 inline-block no-underline after:ml-100 after:mr-100 after:text-color-tertiary after:content-['•']">
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default hover:underline"
                      href="https://www.busbud.com/en/terms-of-use/"
                    >
                      Terms of use
                    </a>
                  </span>
                  <span className="max-w-full font-weight-bold text-size-75 leading-100 inline-block no-underline after:ml-100 after:mr-100 after:text-color-tertiary after:content-['•']">
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default hover:underline"
                      href="https://www.busbud.com/en/privacy-policy/"
                    >
                      Privacy
                    </a>
                  </span>
                  <span className="max-w-full font-weight-bold text-size-75 leading-100 inline-block no-underline">
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default hover:underline"
                      href="https://www.busbud.com/en/refund-policy/"
                    >
                      Refund policy
                    </a>
                  </span>
                </ul>
              </div>
            </div>
            <div className="hidden flex-1 sm:flex md:justify-end sm:hidden">
              <ul className="mb-200 md:mb-0">
                <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-flex items-center gap-x-025 no-underline">
                  <span className="shrink-0"></span>
                  <span className="">
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default hover:underline"
                      href="https://help.busbud.com/hc/en-us"
                    >
                      Help
                    </a>
                  </span>
                </span>
              </ul>
            </div>
            <div className="flex flex-1 justify-start md:justify-end">
              <ul className="flex gap-200 sm:mb-200">
                <button
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default vanilla-btn-links"
                  type="button"
                  data-href="itms-apps://apps.apple.com/en/app/busbud/id569615989"
                  data-new-tab="true"
                >
                  <img
                    className="block h-400"
                    src="https://busbud.imgix.net/app-store/ios/app-store-badge-en.png?auto=compress%2Cformat"
                    alt="Download on the App Store"
                    loading="lazy"
                  />
                </button>
                <button
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default vanilla-btn-links"
                  type="button"
                  data-href="https://play.google.com/store/apps/details?id=com.busbud.android&hl=en"
                  data-new-tab="true"
                >
                  <img
                    className="block h-400"
                    src="https://busbud.imgix.net/app-store/android/google-play-badge-en.png?auto=compress%2Cformat"
                    alt="Get it on Google Play"
                    loading="lazy"
                  />
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
