"use client";
import React from "react";
import styles from "./checkout.module.scss";
import Header from "@/components/Header";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaArrowRight } from "react-icons/fa";
import FloatingLabelSelect from "@/components/FloatingLabelSelect";
import { IoIosArrowDown } from "react-icons/io";
import ErrorMessage from "@/components/ErrorMessage";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import TripSelection from "@/components/ReviewTicketOptionResult/TripSelection";
import { FaArrowRightLong } from "react-icons/fa6";
import { useAppSelector } from "@/redux/hooks";
import { selectSearchState } from "@/redux/features/searchSlice";
import { formatCurrencyVND } from "@/utils/formatDate";

const validationSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  passengers: Yup.array().of(
    Yup.object({
      fullname: Yup.string().required("Fullname is required"),
      seatNumber: Yup.string().required("Seat Number is required"),
      passengerType: Yup.string().required("Passenger Type is required"),
      identityNumber: Yup.string()
        .matches(/^\d{10}$/, "Identity Number must be exactly 10 digits")
        .required("Identity Number is required"),
    })
  ),
});

const Index: React.FC = () => {
  const { train, passagers, price } = useAppSelector(selectSearchState);
  const formik = useFormik({
    initialValues: {
      email: "",
      phoneNumber: "",
      passengers: [
        {
          fullname: "",
          identityNumber: "",
          seatNumber: "",
          passengerType: "",
        },
      ],
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
                <form onSubmit={formik.handleSubmit}>
                  {formik.values.passengers.map((_, index: any) => (
                    <div key={index} className={styles.sidebarWrapper}>
                      <div className={styles.sidebarItem}>
                        <div className={styles.itemHeading}>
                          <div className={styles.itemHeadingWrapper}>
                            <span>Passenger</span>
                            <span>{formik.values.passengers[index].passengerType || "Adult"}</span>
                          </div>
                        </div>
                        <hr className={styles.hr} />
                        <div className={styles.itemContent}>
                          <FloatingLabelInput
                            id={`passengers.${index}.fullname`}
                            label="Full name"
                            value={formik.values.passengers[index].fullname}
                            onChange={formik.handleChange}
                            className="my-4"
                            error={
                              formik.touched.passengers?.[index]?.fullname &&
                              formik.errors.passengers?.[index]?.fullname
                            }
                          />
                          {formik.touched.passengers?.[index]?.fullname &&
                          formik.errors.passengers?.[index]?.fullname ? (
                            <ErrorMessage message={formik.errors.passengers[index].fullname} />
                          ) : null}

                          <FloatingLabelInput
                            id={`passengers.${index}.identityNumber`}
                            label="Identity Number"
                            value={formik.values.passengers[index].identityNumber}
                            onChange={formik.handleChange}
                            className="my-4"
                            error={
                              formik.touched.passengers?.[index]?.identityNumber &&
                              formik.errors.passengers?.[index]?.identityNumber
                            }
                          />
                          {formik.touched.passengers?.[index]?.identityNumber &&
                          formik.errors.passengers?.[index]?.identityNumber ? (
                            <ErrorMessage message={formik.errors.passengers[index].identityNumber} />
                          ) : null}

                          <FloatingLabelSelect
                            id={`passengers.${index}.seatNumber`}
                            label="Select a Seat"
                            name={`passengers.${index}.seatNumber`}
                            className="my-4"
                            icon={<IoIosArrowDown size={24} />}
                            value={formik.values.passengers[index].seatNumber}
                            onChange={formik.handleChange}
                            options={[
                              { label: "Option 1", value: "1" },
                              { label: "Option 2", value: "2" },
                              { label: "Option 3", value: "3" },
                            ]}
                            error={
                              formik.touched.passengers?.[index]?.seatNumber &&
                              formik.errors.passengers?.[index]?.seatNumber
                            }
                          />

                          <FloatingLabelSelect
                            id={`passengers.${index}.passengerType`}
                            label="Select your passenger type"
                            name={`passengers.${index}.passengerType`}
                            className="my-4"
                            icon={<IoIosArrowDown size={24} />}
                            value={formik.values.passengers[index].passengerType}
                            onChange={formik.handleChange}
                            options={[
                              { label: "Adult", value: "Adult" },
                              { label: "Child", value: "Child" },
                              { label: "Senior", value: "Senior" },
                            ]}
                            error={
                              formik.touched.passengers?.[index]?.passengerType &&
                              formik.errors.passengers?.[index]?.passengerType
                            }
                          />
                        </div>
                      </div>
                      <hr className={styles.hr} />
                    </div>
                  ))}
                  <ContactInfo formik={formik} />
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
                <div className={styles.rightWrapper}>
                  <div className={styles.sidebarWrapper}>
                    <div className={styles.sidebarItem}>
                      <div className={styles.itemHeading}>
                        <div className={styles.itemHeadingWrapper}>
                          <span>Your trip selection</span>
                        </div>
                      </div>
                      <hr className={styles.hr} />
                      <div className={styles.rightContainer}>
                        <TripSelection isShowHeader={true} className="!p-0" />
                      </div>
                      {/* <hr className={styles.hr} />
                      <div className={styles.itemContent}>
                        <TripSelection isShowHeader={true} />
                      </div> */}
                    </div>
                  </div>
                  <div className={styles.sidebarWrapper}>
                    <div className={styles.sidebarItem}>
                      <div className={styles.itemHeading}>
                        <div className={styles.itemHeadingWrapper}>
                          <span>Trip fare summary</span>
                        </div>
                      </div>
                      {/* <hr className={styles.hr} /> */}
                      {/* <div className="space-y-200 px-250 py-200 sm:px-350 sm:py-300 lg:px-250 lg:py-200">
                        <Ticket />
                        <hr className={styles.hr} />
                        <Ticket />
                        <hr className={styles.hr} />
                        <div className="flex flex-col gap-100">
                          <div className="row flex justify-between">
                            <div className="max-w-full font-weight-bold text-size-100 leading-125 inline-block">
                              Subtotal
                            </div>
                            <div className="max-w-full font-weight-bold text-size-100 leading-125 inline-block">
                              $104.00
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <hr className={styles.hr} />

                    <div className={styles.itemFooter}>
                      <div className={styles.footerLeft}>
                        <span className={styles.footerLeftLabel}>Total</span>
                        <span className={styles.footerLeftText}>Taxes & fees included</span>
                      </div>
                      <div className={styles.footerRight}>{formatCurrencyVND(price)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

function ContactInfo({ formik }: { formik: any }) {
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebarItem}>
        <div className={styles.itemHeading}>
          <div className={styles.itemHeadingWrapper}>
            <span>Your contact information</span>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.itemContent}>
          <FloatingLabelInput
            id={"phoneNumber"}
            label="Phone Number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            className="mb-7"
            description="OurBus requires your mobile number to notify you of any schedule changes."
            error={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />

          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <ErrorMessage message={formik.errors.phoneNumber} />
          ) : null}

          <FloatingLabelInput
            id="email"
            label="Email Address"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="mb-7 mt-4"
            description="  Your confirmation email will be sent to this email."
            error={formik.touched.email && formik.errors.email}
          />
          {formik.touched.email && formik.errors.email ? <ErrorMessage message={formik.errors.email} /> : null}
        </div>
      </div>
      <hr className={styles.hr} />
    </div>
  );
}

function Ticket() {
  return (
    <div className={styles.ticket}>
      <div className={styles.ticketHeading}>
        <span className={styles.stationLabel}>
          <span>Boston</span>
        </span>
        <FaArrowRightLong size={16} />
        <span className={styles.stationLabel}>
          <span>New York</span>
        </span>
      </div>
      <div className={styles.ticketCenter}>
        <div className={styles.ticketPriceWrapper}>
          <span className={styles.ticketPassengerName}>Bình</span>
          <span className={styles.ticketPrice}>$33.00</span>
        </div>
        <div className={styles.ticketPriceWrapper}>
          <span className={styles.ticketPassengerName}>Bình</span>
          <span className={styles.ticketPrice}>$33.00</span>
        </div>
      </div>
    </div>
  );
}
