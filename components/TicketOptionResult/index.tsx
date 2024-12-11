import React from "react";
import styles from "./ReviewTicketOption.module.scss";
import clsx from "clsx";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
import { Link, useRouter } from "@/i18n/routing";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useSearchParams } from "next/navigation";
import { selectSearchState } from "@/redux/slices/searchSlice";

export default function Index() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { returnDate } = useAppSelector(selectSearchState);
  const handleView = () => {
    const params = new URLSearchParams(searchParams.toString());

    const view = searchParams.get("step");
    if (returnDate != null && view == "return") {
      router.push("/checkout");
    } else {
      // params.set("view", "overview");
      params.set("view", "result");
      params.set("step", "return");
      router.push(`?${params.toString()}`);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.main}>
          <div className={styles.label}>Review ticket options</div>
          <div className={styles.mainRight}>
            <div className={styles.price}>
              <div className={styles.priceNumber}>
                <div className={styles.priceNumberWeb}>
                  <div className={styles.priceWrapper}>
                    <span>$44.00</span>
                  </div>
                </div>
                <div className={styles.priceNumberMobile}></div>
              </div>
              <div className={styles.priceLabel}>1 adult, 1 senior, Essential</div>
            </div>
            <div
              onClick={handleView}
              className={clsx(
                styles.btnContinue,
                "focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center max-w-full ps-150 pe-150 py-150 rounded-md hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-brand-primary-500 shadow-sm hover:bg-color-scheme-brand-primary-400 hover:shadow-sm active:bg-color-scheme-brand-primary-600 [&:not(:focus-visible)]:active:shadow-none text-color-primary-inverse hover:text-color-primary-inverse active:text-color-primary-inverse"
              )}
            >
              <span className="ps-100 pe-100 py-025 font-weight-bold leading-125 text-size-112">Continue</span>
              <span className="shrink-0 text-icon-color-primary-inverse">
                <FaArrowRight size={24} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
