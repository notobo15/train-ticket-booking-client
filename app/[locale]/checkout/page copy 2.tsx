"use client";
import React from "react";
import styles from "./checkout.module.scss";
import Header from "@/components/Header";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { FaArrowRight } from "react-icons/fa";
import PassengerItem from "./PassengerItem";

export interface Passengar {
  value: number;
  id: number;
  title: string;
  description: string;
  seat: string[];
}

export default function Index() {
  const passengers = [
    { id: 1, value: 2, title: "Adults", description: "19-59 years" },
    { id: 2, value: 0, title: "Children", description: "0-6 years" },
    { id: 3, value: 0, title: "Students", description: "7-18 years" },
    { id: 4, value: 0, title: "Seniors", description: "60+ years" },
  ];

  const seats = ["A1", "A2"];
  const allocatedSeats: any = [];

  // Phân phối ghế cho từng hành khách
  passengers.forEach((passenger) => {
    for (let i = 0; i < passenger.value; i++) {
      allocatedSeats.push({
        ...passenger,
        seat: seats[allocatedSeats.length],
      });
    }
  });

  const validationSchema = Yup.object({
    passengers: Yup.array().of(
      Yup.object({
        fullname: Yup.string().required("Fullname is required"),
        identityNumber: Yup.number()
          .required("Identity Number is required")
          .min(1000000000, "Identity Number must be exactly 10 digits")
          .max(9999999999, "Identity Number must be exactly 10 digits"),
        seatNumber: Yup.string().required("Seat Number is required"),
      })
    ),
  });

  const formik = useFormik({
    initialValues: {
      passengers: allocatedSeats.map(() => ({
        fullname: "",
        identityNumber: "",
        seatNumber: "",
      })),
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });
  return (
    <div>
      <div className="grid grid-cols-[minmax(0,80rem)] justify-center pe-[5vw] ps-[5vw] md:pe-[6.25vw] md:ps-[6.25vw] [background:var(--header-gradient)]">
        <header className={styles.header}>
          <div className="relative">
            <Header isShowCenter={false} className="py-150 md:py-150" />
          </div>
        </header>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div>
            <div className={styles.content}>
              <div className={styles.sidebar}>
                <FormikProvider value={formik}>
                  <form onSubmit={formik.handleSubmit}>
                    {allocatedSeats.map((passenger: Passengar, index: number) => (
                      <PassengerItem key={index} passenger={passenger} seat={passenger.seat} />
                    ))}
                    <div className={styles.btnSubmit}>
                      <button
                        className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center max-w-full ps-200 pe-200 py-150 rounded-md hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-brand-primary-500 shadow-sm hover:bg-color-scheme-brand-primary-400 hover:shadow-sm active:bg-color-scheme-brand-primary-600 [&amp;:not(:focus-visible)]:active:shadow-none text-color-primary-inverse hover:text-color-primary-inverse active:text-color-primary-inverse w-full"
                        type="submit"
                        data-cy="passenger-submit"
                        data-testid="submit-button"
                      >
                        <span className="ps-100 pe-100 py-075 font-weight-bolder leading-125 text-size-112">
                          Continue to payment
                        </span>
                        <span className="shrink-0 text-icon-color-primary-inverse">
                          <FaArrowRight size={32} />
                        </span>
                      </button>
                    </div>
                  </form>
                </FormikProvider>
              </div>
              <div className={styles.right}>
                <div className={styles.rightWrapper}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
