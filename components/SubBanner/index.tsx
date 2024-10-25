import React from "react";

export default function SubBanner() {
  return (
    <div className="flex flex-col gap-y-300 px-150 py-200 sm:flex-row sm:gap-x-100 sm:gap-y-0 sm:px-300 md:gap-x-200 xl:gap-x-600 rounded-md border-width-sm border-color-primary bg-color-glass-primary backdrop-blur-md relative">
      <div className="flex flex-1 items-start">
        <img
          src="https://www.busbud.com/pubweb-assets/images/usp/34c9c4c.usp-trust.svg"
          alt=""
          className="size-600 sm:max-md:size-500 mr-200 shrink-0"
          height={48}
          width={48}
        />
        <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block text-balance">
          Trusted by 75M+ travelers every year looking for bus and train tickets
        </span>
      </div>
      <div className="flex flex-1 items-start">
        <img
          src="https://www.busbud.com/pubweb-assets/images/usp/9772d4c.usp-coverage.svg"
          alt=""
          className="size-600 sm:max-md:size-500 mr-200 shrink-0"
          height={48}
          width={48}
        />
        <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block text-balance">
          Serving 2M+ bus and train routes in more than 85 countries
        </span>
      </div>
      <div className="flex flex-1 items-start">
        <img
          src="https://www.busbud.com/pubweb-assets/images/usp/b5019df.usp-support.svg"
          alt=""
          className="size-600 sm:max-md:size-500 mr-200 shrink-0"
          height={48}
          width={48}
        />
        <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block text-balance">
          Dedicated customer service from booking to travel
        </span>
      </div>
    </div>
  );
}
