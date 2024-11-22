"use client";
import React from "react";
import styles from "./checkout.module.scss";
import Header from "@/components/Header";
import { useFormik } from "formik";
import * as Yup from "yup";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import ErrorMessage from "@/components/ErrorMessage";
import { FaArrowRight } from "react-icons/fa";
import FloatingLabelSelect from "@/components/FloatingLabelSelect";
import { IoIosArrowDown } from "react-icons/io";
export default function Index() {
  const validationSchema = Yup.object({
    fullname: Yup.string().required("Fullname is required"),
    seatNumber: Yup.string().required("Seat Number is required"),
    passagerType: Yup.string().required("Passager Type is required"),

    identityNumber: Yup.number()
      .required("Identity Number is required")
      .min(1000000000, "Identity Number must be exactly 10 digits")
      .max(9999999999, "Identity Number must be exactly 10 digits"),
  });
  // Formik form setup
  const formik = useFormik({
    initialValues: {
      fullname: "",
      identityNumber: "",
      seatNumber: "",
      passagerType: "",
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
                <form onSubmit={formik.handleSubmit} action="">
                  <div className={styles.sidebarWrapper}>
                    <div className={styles.sidebarItem}>
                      <div className={styles.itemHeading}>
                        <div className={styles.itemHeadingWrapper}>
                          <span>Primary Passenger</span>
                          <span>Adult</span>
                        </div>
                      </div>
                      <hr className={styles.hr} />
                      <div className={styles.itemContent}>
                        <FloatingLabelInput
                          id="fullname"
                          label="Full name"
                          value={formik.values.fullname}
                          onChange={formik.handleChange}
                          className="my-4"
                          error={formik.touched.fullname && formik.errors.fullname}
                        />
                        {formik.touched.fullname && formik.errors.fullname ? (
                          <ErrorMessage message={formik.errors.fullname} />
                        ) : null}

                        <FloatingLabelInput
                          id="identityNumber"
                          label="Identity Number"
                          value={formik.values.identityNumber}
                          onChange={formik.handleChange}
                          className="my-4"
                          error={formik.touched.identityNumber && formik.errors.identityNumber}
                        />
                        {formik.touched.identityNumber && formik.errors.identityNumber ? (
                          <ErrorMessage message={formik.errors.identityNumber} />
                        ) : null}

                        <FloatingLabelSelect
                          id="seatNumber"
                          label="Select a Seat"
                          name="seatNumber"
                          className="my-4"
                          icon={<IoIosArrowDown className="text-icon-color-primary" size={24} />}
                          value={formik.values.seatNumber}
                          onChange={formik.handleChange}
                          options={[
                            { label: "Option 1", value: "1" },
                            { label: "Option 2", value: "2" },
                            { label: "Option 3", value: "3" },
                          ]}
                          error={formik.touched.seatNumber && formik.errors.seatNumber}
                        />
                        <FloatingLabelSelect
                          id="passagerType"
                          label="Select your passager type"
                          name="passagerType"
                          className="my-4"
                          icon={<IoIosArrowDown className="text-icon-color-primary" size={24} />}
                          value={formik.values.passagerType}
                          onChange={formik.handleChange}
                          options={[
                            { label: "Option 1", value: "1" },
                            { label: "Option 2", value: "2" },
                            { label: "Option 3", value: "3" },
                          ]}
                          error={formik.touched.passagerType && formik.errors.passagerType}
                        />
                      </div>
                    </div>
                    <hr className={styles.hr} />
                  </div>
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
