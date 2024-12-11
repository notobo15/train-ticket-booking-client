"use client";
import DatePicker from "@/components/DatePicker";
import SelectStation from "@/components/SelectStation";
import Passager from "@/components/Passager/Passager";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState, useTransition } from "react";
import { selectSearchState } from "@/redux/slices/searchSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "@/i18n/routing";
import { setIsLoading } from "@/redux/slices/homeSlice";
import * as NProgress from "nprogress";
export default function Index({ btnSubmit = "Search" }: { btnSubmit?: string }) {
  const router = useRouter();
  const { origin, destination } = useAppSelector(selectSearchState);
  const [errorStations, setErrorStations] = useState({ origin: false, destination: false });
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const hasError = {
      origin: origin === "",
      destination: destination === "",
    };

    setErrorStations((prev) => ({
      ...prev,
      ...hasError,
    }));

    if (hasError.origin || hasError.destination) {
      return;
    }

    const formData = new FormData(e.target as HTMLFormElement);
    const queryParams = new URLSearchParams();

    formData.forEach((value, key) => {
      queryParams.append(key, value.toString());
    });
    NProgress.start();
    router.push(`/search?${queryParams.toString()}`, { scroll: true });
  };
  useEffect(() => {
    if (origin) {
      setErrorStations((prev) => ({
        ...prev,
        origin: false,
      }));
    }
  }, [origin]);

  useEffect(() => {
    if (destination) {
      setErrorStations((prev) => ({
        ...prev,
        destination: false,
      }));
    }
  }, [destination]);
  return (
    <form
      // action="/search"
      // method="get"
      onSubmit={handleSubmit}
      className="group flex flex-wrap lg:rounded-md lg:bg-color-canvas-primary lg:shadow-md"
    >
      <div className="w-full lg:w-10/24 relative flex flex-wrap max-lg:mb-100 max-lg:rounded-md max-lg:bg-color-canvas-primary max-lg:shadow-md lg:flex-nowrap lg:border-r-width-sm lg:border-r-color-primary">
        <SelectStation errors={errorStations} />
      </div>
      <div className="w-full lg:w-14/24 relative flex flex-wrap sm:max-lg:rounded-md sm:max-lg:bg-color-canvas-primary sm:max-lg:shadow-md md:flex-nowrap">
        <div className="w-full sm:w-21/24 md:w-19/24 lg:w-18/24 xl:w-18/24 flex flex-wrap sm:flex-nowrap">
          <div className="w-full sm:w-14/24 md:w-17/24 lg:w-16/24 xl:w-14/24 flex flex-wrap max-sm:mb-100 max-sm:rounded-md max-sm:bg-color-canvas-primary max-sm:shadow-md sm:border-r-width-sm sm:border-r-color-primary">
            <DatePicker />
          </div>
          <div className="w-full sm:w-10/24 md:9/24 xl:w-11/24 max-sm:mb-100 max-sm:rounded-md max-sm:bg-color-canvas-primary max-sm:shadow-md sm:border-r-width-sm sm:border-r-color-primary sm:p-050">
            <Passager />
          </div>
        </div>
        <div className="w-full sm:w-3/24 md:w-5/24 lg:w-7/24 xl:w-6/24 whitespace-nowrap">
          <span className="h-full sm:hidden">
            <button
              type="submit"
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center max-w-full ps-150 pe-150 py-150 rounded-md hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-brand-primary-500 shadow-sm hover:bg-color-scheme-brand-primary-400 hover:shadow-sm active:bg-color-scheme-brand-primary-600 [&:not(:focus-visible)]:active:shadow-none text-color-primary-inverse hover:text-color-primary-inverse active:text-color-primary-inverse h-full w-full"
            >
              <span className="shrink-0 text-icon-color-primary-inverse">
                <IoSearch className="w-[32px] h-[32px]" />
              </span>
              <span className="ps-100 pe-100 py-075 font-weight-bolder leading-125 text-size-112">{btnSubmit}</span>
            </button>
          </span>
          <span className="hidden h-full sm:inline md:hidden">
            <button
              type="submit"
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center p-150 rounded-md hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-brand-primary-500 shadow-sm hover:bg-color-scheme-brand-primary-400 hover:shadow-sm active:bg-color-scheme-brand-primary-600 [&:not(:focus-visible)]:active:shadow-none text-icon-color-primary-inverse h-full w-full rounded-bl-none rounded-tl-none"
            >
              <span className="shrink-0 text-icon-color-primary-inverse">
                <IoSearch className="w-[32px] h-[32px]" />
              </span>
              <span className="ps-100 pe-100 py-075 font-weight-bolder leading-125 text-size-112">{btnSubmit}</span>
            </button>
          </span>
          <span className="hidden h-full md:block">
            <button
              type="submit"
              className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center max-w-full ps-200 pe-200 py-150 rounded-md hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-brand-primary-500 shadow-sm hover:bg-color-scheme-brand-primary-400 hover:shadow-sm active:bg-color-scheme-brand-primary-600 [&:not(:focus-visible)]:active:shadow-none text-color-primary-inverse hover:text-color-primary-inverse active:text-color-primary-inverse h-full w-full rounded-bl-none rounded-tl-none xl:rounded-bl-none xl:rounded-tl-none"
            >
              <span className="shrink-0 text-icon-color-primary-inverse">
                <IoSearch className="w-[32px] h-[32px]" />
              </span>
              <span className="ps-100 pe-100 py-075 font-weight-bolder leading-125 text-size-112">{btnSubmit}</span>
            </button>
          </span>
        </div>
      </div>
    </form>
  );
}
