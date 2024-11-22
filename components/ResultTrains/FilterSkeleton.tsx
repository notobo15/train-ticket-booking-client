import React from "react";
import clsx from "clsx";

export default function FilterSkeleton() {
  return (
    <div className="sidebarWrapper">
      <div className="xl:hidden">
        <button className={clsx("sidebarBtn", "additional classes here")}>
          <span className="shrink-0 text-icon-color-primary"></span>
          <span className="font-weight-bold ps-050 pe-050 py-025 text-size-100 leading-150">Filters</span>
        </button>
      </div>
      <div className="hidden divide-y-width-sm divide-color-primary xl:block">
        <fieldset className="group py-200 first:pt-150">
          <h3 className="flex">
            <button
              className="focus-visible:outline-none focus-visible:ring"
              aria-controls=":r6:"
              aria-expanded="true"
              type="button"
            >
              <div className="font-weight-bold text-size-87 leading-100 inline-flex items-center gap-x-025">
                <div className=" w-[160px] h-[16px] skeleton"></div>
              </div>
            </button>
          </h3>
          <div className="grid transition-[grid-template-rows] duration-150 ease-out grid-rows-[1fr]">
            <div className="overflow-hidden user-select-none">
              <FilterItem />
              <FilterItem />
              <FilterItem />
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
}

const FilterItem = () => (
  <div className="flex items-center justify-between py-2">
    <div className="w-[120px] h-[20px] skeleton"></div>
    <p className=" w-[80px] h-[20px] skeleton"></p>
  </div>
);
