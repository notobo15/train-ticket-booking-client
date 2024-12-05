"use client";
import clsx from "clsx";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";

export default function MenuMobile() {
  const [isShow, setIsShow] = useState(false);
  return (
    <nav
      id="header-drawer"
      className={clsx("group flex lg:hidden text-color-primary", {
        open: isShow,
      })}
    >
      {/* open */}
      <button
        id="header-drawer-open"
        className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center p-100 rounded-sm hover:-translate-y-006 active:translate-y-006 hover:backdrop-blur-lg bg-color-static-transparent hover:bg-color-film-secondary active:bg-color-film-tertiary text-icon-color-primary -mr-100"
        type="button"
        onClick={() => setIsShow(!isShow)}
      >
        <IoIosMenu size={32} />
      </button>
      <div
        className={clsx(
          "fixed right-0 top-0 z-[1200] h-screen w-screen translate-x-full transform-gpu overflow-x-hidden bg-color-canvas-primary pl-300 pt-250 transition-all duration-300 group-[.open]:translate-x-0 group-[.open]:shadow-lg sm:w-[75vw] md:w-[50vw]"
        )}
      >
        <div className="mb-200">
          <a href="https://www.busbud.com/en">{/* BrandLogo */}</a>
        </div>
        <button
          id="header-drawer-close"
          className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center p-100 rounded-sm hover:-translate-y-006 active:translate-y-006 hover:backdrop-blur-lg bg-color-static-transparent hover:bg-color-film-secondary active:bg-color-film-tertiary text-icon-color-primary absolute right-200 top-150"
          type="button"
          onClick={() => setIsShow(false)}
        >
          <IoClose size={32} />
        </button>
        <div className="flex flex-col">
          <span className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block rounded-l-pill bg-color-canvas-secondary px-150 py-100">
            Search for
          </span>
          <div className="flex flex-col divide-y-width-sm divide-color-primary">
            <div className="pe-200 ps-100">
              <div className="flex items-center justify-between gap-100 p-200 pe-050">
                <span className="max-w-full font-weight-bold text-size-100 leading-125 inline-flex items-center gap-x-025 w-full">
                  <span className="shrink-0">{/*  */}</span>
                  <span className="">
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default hover:underline"
                      href="https://www.busbud.com/en/bt/bus-tickets"
                    >
                      Buses
                    </a>
                  </span>
                </span>
                <button
                  aria-label="Expand bus routes"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center p-050 rounded-xs hover:-translate-y-006 active:translate-y-006 hover:backdrop-blur-lg bg-color-static-transparent hover:bg-color-film-secondary active:bg-color-film-tertiary text-icon-color-primary group-hover/button:[&:not(:active)]:bg-color-film-secondary group/button"
                  aria-controls="accordion-route"
                  type="button"
                  data-hz-collapse-target="#accordion-route"
                >
                  {/*  */}
                </button>
              </div>
              <div
                aria-hidden="true"
                className="grid transition-[grid-template-rows] duration-150 ease-out grid-rows-[0fr]"
                data-is-expanded="false"
                data-with-transition="true"
                id="accordion-route"
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-100 pb-100">
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default rounded-sm px-200 py-150 hover:bg-color-scheme-functional-informative-100"
                      href="https://www.busbud.com/en/bus-washington-new-york/r/dqcjqb-dr5reg"
                    >
                      <span className="flex flex-row flex-nowrap whitespace-pre">
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="Washington"
                        >
                          Washington
                        </span>
                        <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block"> →</span>
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="New York"
                        >
                          New York
                        </span>
                      </span>
                    </a>
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default rounded-sm px-200 py-150 hover:bg-color-scheme-functional-informative-100"
                      href="https://www.busbud.com/en/bus-new-york-boston/r/dr5reg-drt2yz"
                    >
                      <span className="flex flex-row flex-nowrap whitespace-pre">
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="New York"
                        >
                          New York
                        </span>
                        <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block"> →</span>
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="Boston"
                        >
                          Boston
                        </span>
                      </span>
                    </a>
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default rounded-sm px-200 py-150 hover:bg-color-scheme-functional-informative-100"
                      href="https://www.busbud.com/en/bus-orlando-miami/r/djn4k5-dhwfxh"
                    >
                      <span className="flex flex-row flex-nowrap whitespace-pre">
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="Orlando"
                        >
                          Orlando
                        </span>
                        <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block"> →</span>
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="Miami"
                        >
                          Miami
                        </span>
                      </span>
                    </a>
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default rounded-sm px-200 py-150 hover:bg-color-scheme-functional-informative-100"
                      href="https://www.busbud.com/en/bus-baltimore-new-york/r/dqcx88-dr5reg"
                    >
                      <span className="flex flex-row flex-nowrap whitespace-pre">
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="Baltimore"
                        >
                          Baltimore
                        </span>
                        <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block"> →</span>
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="New York"
                        >
                          New York
                        </span>
                      </span>
                    </a>
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default rounded-sm px-200 py-150 hover:bg-color-scheme-functional-informative-100"
                      href="https://www.busbud.com/en/bus-philadelphia-new-york/r/dr4e39-dr5reg"
                    >
                      <span className="flex flex-row flex-nowrap whitespace-pre">
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="Philadelphia"
                        >
                          Philadelphia
                        </span>
                        <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block"> →</span>
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="New York"
                        >
                          New York
                        </span>
                      </span>
                    </a>
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default rounded-sm px-200 py-150 hover:bg-color-scheme-functional-informative-100"
                      href="https://www.busbud.com/en/bus-new-york-albany/r/dr5reg-dred9s"
                    >
                      <span className="flex flex-row flex-nowrap whitespace-pre">
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="New York"
                        >
                          New York
                        </span>
                        <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block"> →</span>
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="Albany"
                        >
                          Albany
                        </span>
                      </span>
                    </a>
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default rounded-sm px-200 py-150 hover:bg-color-scheme-functional-informative-100"
                      href="https://www.busbud.com/en/bus-houston-dallas/r/9vk1mf-9vg4mp"
                    >
                      <span className="flex flex-row flex-nowrap whitespace-pre">
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="Houston"
                        >
                          Houston
                        </span>
                        <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block"> →</span>
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="Dallas"
                        >
                          Dallas
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="pe-200 ps-100">
              <div className="flex items-center justify-between gap-100 p-200 pe-050">
                <span className="max-w-full font-weight-bold text-size-100 leading-125 inline-flex items-center gap-x-025 w-full">
                  <span className="shrink-0">{/*  */}</span>
                  <span className="">
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default hover:underline"
                      href="https://www.busbud.com/en/tt/train-tickets"
                    >
                      Trains
                    </a>
                  </span>
                </span>
                <button
                  aria-label="Expand train routes"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center p-050 rounded-xs hover:-translate-y-006 active:translate-y-006 hover:backdrop-blur-lg bg-color-static-transparent hover:bg-color-film-secondary active:bg-color-film-tertiary text-icon-color-primary group-hover/button:[&:not(:active)]:bg-color-film-secondary group/button"
                  aria-controls="accordion-train-route"
                  type="button"
                  data-hz-collapse-target="#accordion-train-route"
                ></button>
              </div>
              <div
                aria-hidden="true"
                className="grid transition-[grid-template-rows] duration-150 ease-out grid-rows-[0fr]"
                data-is-expanded="false"
                data-with-transition="true"
                id="accordion-train-route"
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-100 pb-100">
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default rounded-sm px-200 py-150 hover:bg-color-scheme-functional-informative-100"
                      href="https://www.busbud.com/en/train-boston-new-york/t/drt2yz-dr5reg"
                    >
                      <span className="flex flex-row flex-nowrap whitespace-pre">
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="Boston"
                        >
                          Boston
                        </span>
                        <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block"> →</span>
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="New York"
                        >
                          New York
                        </span>
                      </span>
                    </a>
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default rounded-sm px-200 py-150 hover:bg-color-scheme-functional-informative-100"
                      href="https://www.busbud.com/en/train-new-york-baltimore/t/dr5reg-dqcx88"
                    >
                      <span className="flex flex-row flex-nowrap whitespace-pre">
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="New York"
                        >
                          New York
                        </span>
                        <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block"> →</span>
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="Baltimore"
                        >
                          Baltimore
                        </span>
                      </span>
                    </a>
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default rounded-sm px-200 py-150 hover:bg-color-scheme-functional-informative-100"
                      href="https://www.busbud.com/en/train-washington-new-york/t/dqcjqb-dr5reg"
                    >
                      <span className="flex flex-row flex-nowrap whitespace-pre">
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="Washington"
                        >
                          Washington
                        </span>
                        <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block"> →</span>
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="New York"
                        >
                          New York
                        </span>
                      </span>
                    </a>
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default rounded-sm px-200 py-150 hover:bg-color-scheme-functional-informative-100"
                      href="https://www.busbud.com/en/train-seattle-vancouver/t/c23nb6-c2b2nm"
                    >
                      <span className="flex flex-row flex-nowrap whitespace-pre">
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="Seattle"
                        >
                          Seattle
                        </span>
                        <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block"> →</span>
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="Vancouver"
                        >
                          Vancouver
                        </span>
                      </span>
                    </a>
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default rounded-sm px-200 py-150 hover:bg-color-scheme-functional-informative-100"
                      href="https://www.busbud.com/en/train-philadelphia-new-york/t/dr4e39-dr5reg"
                    >
                      <span className="flex flex-row flex-nowrap whitespace-pre">
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="Philadelphia"
                        >
                          Philadelphia
                        </span>
                        <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block"> →</span>
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="New York"
                        >
                          New York
                        </span>
                      </span>
                    </a>
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default rounded-sm px-200 py-150 hover:bg-color-scheme-functional-informative-100"
                      href="https://www.busbud.com/en/train-newark-washington/t/dr5r8p-dqcjqb"
                    >
                      <span className="flex flex-row flex-nowrap whitespace-pre">
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="Newark"
                        >
                          Newark
                        </span>
                        <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block"> →</span>
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="Washington"
                        >
                          Washington
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="pe-200 ps-100">
              <div className="flex items-center justify-between gap-100 p-200 pe-050">
                <span className="max-w-full font-weight-bold text-size-100 leading-125 inline-flex items-center gap-x-025 w-full">
                  <span className="shrink-0"></span>
                  <span className="">
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default hover:underline"
                      href="https://www.busbud.com/en/bt/bus-tickets"
                    >
                      Places
                    </a>
                  </span>
                </span>
                <button
                  aria-label="Expand point of interest routes"
                  className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center p-050 rounded-xs hover:-translate-y-006 active:translate-y-006 hover:backdrop-blur-lg bg-color-static-transparent hover:bg-color-film-secondary active:bg-color-film-tertiary text-icon-color-primary group-hover/button:[&:not(:active)]:bg-color-film-secondary group/button"
                  aria-controls="accordion-point-of-interest-route"
                  type="button"
                  data-hz-collapse-target="#accordion-point-of-interest-route"
                ></button>
              </div>
              <div
                aria-hidden="true"
                className="grid transition-[grid-template-rows] duration-150 ease-out grid-rows-[0fr]"
                data-is-expanded="false"
                data-with-transition="true"
                id="accordion-point-of-interest-route"
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-100 pb-100">
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default rounded-sm px-200 py-150 hover:bg-color-scheme-functional-informative-100"
                      href="https://www.busbud.com/en/bus-boston-south-station-boston/i/drt2zjf-drt2yz"
                    >
                      <span className="flex flex-row flex-nowrap whitespace-pre">
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="South Station"
                        >
                          South Station
                        </span>
                        <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block"> →</span>
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="Boston"
                        >
                          Boston
                        </span>
                      </span>
                    </a>
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default rounded-sm px-200 py-150 hover:bg-color-scheme-functional-informative-100"
                      href="https://www.busbud.com/en/bus-new-york-new-york-port-authority-terminal/i/dr5reg-dr5ru78"
                    >
                      <span className="flex flex-row flex-nowrap whitespace-pre">
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="New York"
                        >
                          New York
                        </span>
                        <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block"> →</span>
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="Port Authority"
                        >
                          Port Authority
                        </span>
                      </span>
                    </a>
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default rounded-sm px-200 py-150 hover:bg-color-scheme-functional-informative-100"
                      href="https://www.busbud.com/en/bus-new-york-new-york-jfk-airport/i/dr5reg-dr5x1n5"
                    >
                      <span className="flex flex-row flex-nowrap whitespace-pre">
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="New York"
                        >
                          New York
                        </span>
                        <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block"> →</span>
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="JFK Airport"
                        >
                          JFK Airport
                        </span>
                      </span>
                    </a>
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default rounded-sm px-200 py-150 hover:bg-color-scheme-functional-informative-100"
                      href="https://www.busbud.com/en/bus-san-diego-los-angeles-lax-airport/i/9mudn5-9q5c1e1"
                    >
                      <span className="flex flex-row flex-nowrap whitespace-pre">
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="San Diego"
                        >
                          San Diego
                        </span>
                        <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block"> →</span>
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="Los Angeles International Airport"
                        >
                          Los Angeles International Airport
                        </span>
                      </span>
                    </a>
                    <a
                      className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default rounded-sm px-200 py-150 hover:bg-color-scheme-functional-informative-100"
                      href="https://www.busbud.com/en/bus-los-angeles-lax-airport-san-diego/i/9q5c1e1-9mudn5"
                    >
                      <span className="flex flex-row flex-nowrap whitespace-pre">
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="Los Angeles International Airport"
                        >
                          Los Angeles International Airport
                        </span>
                        <span className="max-w-full font-weight-bold text-size-87 leading-100 inline-block"> →</span>
                        <span
                          className="font-weight-bold text-size-87 leading-100 block max-w-[20ch] truncate"
                          title="San Diego"
                        >
                          San Diego
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="max-w-full font-weight-bold text-size-62 uppercase leading-75 tracking-wider inline-block rounded-l-pill bg-color-canvas-secondary px-150 py-100">
            Useful links
          </span>
          <div className="flex flex-col">
            <div className="flex min-h-700 flex-col justify-center pl-100">
              <span className="max-w-full font-weight-bold text-size-100 leading-125 gap-x-025 flex grow items-center justify-start whitespace-nowrap p-0">
                <span className="shrink-0">
                  <FaUser size={20} />
                </span>
                <span className="">
                  <a
                    className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default hover:underline"
                    href="https://www.busbud.com/en/account/signin"
                    data-cy="header-signin-button"
                  >
                    Sign in
                  </a>
                </span>
              </span>
              <hr
                aria-orientation="horizontal"
                className="border-none bg-[theme(borderColor[color-primary])] h-012"
                role="separator"
              />
            </div>
            <div className="flex min-h-700 flex-col justify-center pl-100">
              <div className="-mb-050 -mt-050 ml-0 mr-0 flex items-center grow">
                <div className="relative flex">
                  <div>
                    <label
                      className="max-w-full font-weight-bold text-size-100 leading-125 gap-x-025 flex items-center"
                      htmlFor="picker-language"
                    >
                      <span className="shrink-0">
                        <MdLanguage size={24} />
                      </span>
                      <span className="">
                        Language
                        <span className="font-weight-normal before:content-['\00A0\00A0\2014\00A0\00A0']">English</span>
                      </span>
                    </label>
                  </div>
                  <select
                    data-testid="select-sorting"
                    className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
                    data-interactive="redirection"
                    id="picker-language"
                  >
                    <option value="/de/bus-albany-binghamton/r/dred9s-dr6p2r">Deutsch</option>
                    <option value="/en/bus-albany-binghamton/r/dred9s-dr6p2r">English</option>
                    <option value="/en-ca/bus-albany-binghamton/r/dred9s-dr6p2r">English (Canada)</option>
                    <option value="/en-gb/bus-albany-binghamton/r/dred9s-dr6p2r">English (UK)</option>
                    <option value="/es/autobus-albany-binghamton/r/dred9s-dr6p2r">Español (España)</option>
                    <option value="/es-419/autobus-albany-binghamton/r/dred9s-dr6p2r">Español (Latinoamérica)</option>
                    <option value="/es-mx/autobus-albany-binghamton/r/dred9s-dr6p2r">Español (Mexico)</option>
                    <option value="/fr/bus-albany-binghamton/r/dred9s-dr6p2r">Français</option>
                    <option value="/fr-ca/bus-albany-binghamton/r/dred9s-dr6p2r">Français (Canada)</option>
                    <option value="/it/bus-albany-binghamton/r/dred9s-dr6p2r">Italiano</option>
                    <option value="/nl/bus-albany-binghamton/r/dred9s-dr6p2r">Nederlands</option>
                    <option value="/pl/autobus-albany-binghamton/r/dred9s-dr6p2r">Polski</option>
                    <option value="/pt/onibus-albany-binghamton/r/dred9s-dr6p2r">Português (Brasil)</option>
                    <option value="/pt-pt/autocarro-albany-binghamton/r/dred9s-dr6p2r">Português (Portugal)</option>
                    <option value="/ru/avtobus-%D0%BE%D0%BB%D0%B1%D0%B0%D0%BD%D0%B8-%D0%B1%D0%B8%D0%BD%D0%B3%D0%B5%D0%BC%D1%82%D0%BE%D0%BD/r/dred9s-dr6p2r">
                      Русский
                    </option>
                    <option value="/sv/buss-albany-binghamton/r/dred9s-dr6p2r">Svenska</option>
                    <option value="/tr/otobus-albany-binghamton/r/dred9s-dr6p2r">Türkçe</option>
                    <option value="/zh/bus-albany-%E8%B3%93%E6%BC%A2%E9%A0%93/r/dred9s-dr6p2r">中文简体</option>
                  </select>
                </div>
              </div>
              <hr
                aria-orientation="horizontal"
                className="border-none bg-[theme(borderColor[color-primary])] h-012"
                role="separator"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
