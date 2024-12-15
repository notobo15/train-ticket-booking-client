"use client";
import React, { useEffect } from "react";
import "@/styles/styles.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import SubBanner from "@/components/SubBanner";
import SearchForm from "@/components/SearchForm";
import Footer from "@/components/Footer";
import TagLink from "@/components/TagLink";
import PopularRoute from "@/components/PopularRoute";
import About from "@/components/About";
import TopTravel from "@/components/TopTravel";
import PopularTrain from "@/components/PopularTrain";
import { useTranslations } from "next-intl";
import useSeatsSocket from "@/hooks/useSeatsSocket";
import { useAppDispatch } from "@/redux/hooks";
import { clearSeatHold, clearSeatHoldReturn } from "@/redux/slices/searchSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "@/i18n/routing";
import { setToken } from "@/redux/slices/authSlice";
import { useSearchParams } from "next/navigation";
// import { useSession } from "next-auth/react";
export default function Index() {
  // const { data } = useSession();
  // console.log("data", data);
  // const { seats, toggleSeatStatus } = useSeatsSocket();
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      dispatch(setToken(token));
      router.push("/home");
    } else {
      router.push("/home");
    }
  }, [router, dispatch]);

  const t = useTranslations("SearchForm");
  return (
    <>
      <header className="[background:var(--header-gradient)]">
        <div className="grid grid-cols-[minmax(0,80rem)] justify-center pe-[5vw] ps-[5vw] md:pe-[6.25vw] md:ps-[6.25vw] relative overflow-x-clip pb-500 md:pb-600 lg:pb-800 md:bg-[1.5rem_0%_center]">
          <Header />
          <div></div>
          <Banner />
          <div className="relative flex flex-col gap-150 py-300">
            <SearchForm btnSubmit={t("submit_button")} />
          </div>
          <SubBanner />
        </div>
      </header>
      <>
        <main
          className="focus-visible:outline-none focus-visible:before:ring focus-visible:relative focus-visible:before:absolute focus-visible:before:inset-050 focus-visible:before:pointer-events-none focus-visible:before:rounded-sm"
          id="main"
          tabIndex={-1}
        >
          {/* <TabDate /> */}
          {/* <TagLink /> */}

          <About />
          <TopTravel />
          {/* <PopularTrain /> */}
          {/* <PopularRoute /> */}
        </main>
        <Footer />
      </>
    </>
  );
}
