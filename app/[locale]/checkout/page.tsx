"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./checkout.module.scss";
import Header from "@/components/Header";
import { FaArrowRight } from "react-icons/fa";
import FloatingLabelSelect from "@/components/FloatingLabelSelect";
import { IoIosArrowDown } from "react-icons/io";
import ErrorMessage from "@/components/ErrorMessage";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import TripSelection from "@/components/ReviewTicketOptionResult/TripSelection";
import { FaArrowRightLong, FaRegCircleCheck } from "react-icons/fa6";
import { useAppSelector } from "@/redux/hooks";
import { clearSeatHold, clearSeatHoldReturn, selectSearchState } from "@/redux/slices/searchSlice";
import { formatCurrencyVND } from "@/utils/formatDate";
import { Link, useRouter } from "@/i18n/routing";
import { GoCircle } from "react-icons/go";
import { BookingRequest, useCreateBookingMutation } from "@/services/bookingApi";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";
// Zod schema for validation
import * as NProgress from "nprogress";
import { useCheckoutMutation } from "@/services/orderApi";
import { useAppDispatch } from "@/redux/store";
import { selectAuthState } from "@/redux/slices/authSlice";
const passengerSchema = z.object({
  fullname: z.string().min(1, "Full name is required"),
  identityNumber: z
    .string()
    .length(10, "Identity Number must be exactly 10 digits")
    .regex(/^\d+$/, "Identity Number must contain only digits")
    .min(1, "Identity Number is required"),
  seatNumber: z.string().min(1, "Seat Number is required"),
  seatReturn: z.string().optional(),
  passengerType: z.string().min(1, "Passenger Type is required"),
});

const formSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phoneNumber: z
    .string()
    .min(1, "Phone Number is required")
    .regex(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  passengers: z.array(passengerSchema),
});

// Type for the form values
type FormValues = z.infer<typeof formSchema>;

const Index: React.FC = () => {
  const {
    train,
    passagers,
    price,
    date,
    returnDate,
    origin,
    destination,
    seathold,
    trainReturn,
    seatholdReturn,
    trainId,
  } = useAppSelector(selectSearchState);
  const { userId, user } = useAppSelector(selectAuthState);
  const [createBooking, { isLoading, isError, data, error }] = useCreateBookingMutation();
  const params = useSearchParams();
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, touchedFields },
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phoneNumber: "",
      passengers: seathold.map((seatHold, index) => ({
        fullname: "", // Để trống, chờ người dùng nhập
        identityNumber: "",
        seatNumber: "", // Đặt số ghế từ seatHold
        passengerType: "", // Để trống, chờ người dùng nhập
        seatReturn: "",
      })),
    },
  });

  const passengerOptions = passagers.map((item) => {
    return {
      label: item.title,
      value: item.id,
    };
  });
  const seatOptions = [
    { label: "Không Chọn", value: "", price: 0 },
    ...seathold.map((seatHold: Seat) => ({
      label: `${seatHold.seatNumber} ${seatHold.seatType}`, // Chuyển seatNumber thành label
      value: seatHold.seatId.toString(), // Chuyển seatId thành string cho value
      price: seatHold.price, // Lấy giá từ seat
    })),
  ];

  const seatOptionsReturn = [
    { label: "Không Chọn", value: "", price: 0 },
    ...seatholdReturn.map((seatHold: Seat) => ({
      label: `${seatHold.seatNumber} ${seatHold.seatType}`,
      value: seatHold.seatId.toString(),
      price: seatHold.price,
    })),
  ];

  // Watch the passengers field to get the selected seats
  const selectedSeats = watch("passengers").map((passenger) => passenger.seatNumber);
  const passengerOverviews = watch("passengers").map((passenger, index) => ({
    price: seatOptions.find((s) => s.value === passenger.seatNumber)?.price || 0,
    name: passenger.fullname || `Passenger ${index + 1}`,
    type: passenger.passengerType,
  }));

  const selectedSeatReturn = watch("passengers").map((passenger) => passenger.seatReturn);
  const passengerReturnOverviews = watch("passengers").map((passenger, index) => ({
    price: seatOptionsReturn.find((s) => s.value === passenger.seatReturn)?.price || 0,
    name: passenger.fullname || `Passenger ${index + 1}`,
    type: passenger.passengerType,
  }));

  const subSotal = formatCurrencyVND(
    passengerOverviews.reduce((acc, p) => acc + (p.price || 0), 0) +
      passengerReturnOverviews.reduce((acc, p) => acc + (p.price || 0), 0)
  );
  const total = formatCurrencyVND(
    passengerOverviews.reduce((acc, p) => acc + (p.price || 0), 0) +
      passengerReturnOverviews.reduce((acc, p) => acc + (p.price || 0), 0)
  );
  const view = params.get("view");
  const onSubmit = (data: FormValues) => {
    console.log("Form values:", data);

    const bookingData: BookingRequest = {
      userId: user?.id,
      startStationCode: origin, // Ví dụ: ID ga đi, bạn có thể lấy từ input hoặc state
      endStationCode: destination, // Ví dụ: ID ga đến
      departureDate: date || "",
      arrivalDate: returnDate || "",
      tickets: data.passengers.map((passenger) => ({
        trainId: trainId,
        departureDate: date, // Ngày khởi hành, bạn có thể lấy từ form
        seatId: parseInt(passenger.seatNumber), // Chuyển seatNumber thành seatId
        price: seatOptions.find((s) => s.value === passenger.seatNumber)?.price || 0, // Giá vé, bạn có thể tính giá hoặc lấy từ đâu đó
        passenger: {
          fullName: passenger.fullname,
          passengerTypeId: parseInt(passenger.passengerType), // Chuyển loại hành khách thành passengerTypeId
          identityCardNumber: passenger.identityNumber,
        },
        seatReturnId: passenger?.seatReturn ? parseInt(passenger?.seatReturn) : 0,
        seatReturnPrice: seatOptionsReturn.find((s) => s.value === passenger?.seatReturn)?.price || 0,
      })),
    };
    console.log("bookingData", bookingData);
    createBooking(bookingData)
      .unwrap()
      .then((response) => {
        if (response.success) {
          // Hiển thị thông báo thành công
          // toast.success(response.message, { autoClose: 1000 });
          NProgress.start();
          // Chuyển hướng đến trang thanh toán với bookingId và view=payment

          router.push({
            pathname: "/checkout", // Đường dẫn đến trang thanh toán
            query: {
              bookingId: response.data,
              view: "payment",
              price: passengerOverviews.reduce((acc, p) => acc + (p.price || 0), 0),
            }, // Thêm params vào URL
          });
        } else {
          // Hiển thị thông báo lỗi nếu tạo booking thất bại
          toast.error("Booking failed. Please try again.");
        }
      })
      .catch((error) => {
        // Xử lý lỗi API (nếu có)
        toast.error("Error occurred while booking. Please try again.");
      });
  };

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
                {view !== "payment" ? (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {control._formValues.passengers?.map((_: any, index: number) => {
                      const occupiedSeats = selectedSeats.filter((seat, seatIndex) => seat && seatIndex !== index);
                      const availableSeatOptions = seatOptions.filter(
                        (option) => !occupiedSeats.includes(option.value)
                      );

                      return (
                        <div key={index} className={styles.sidebarWrapper}>
                          <div className={styles.sidebarItem}>
                            <div className={styles.itemHeading}>
                              <div className={styles.itemHeadingWrapper}>
                                <span>Passenger {index + 1}</span>
                              </div>
                            </div>
                            <hr className={styles.hr} />
                            <div className={styles.itemContent}>
                              <Controller
                                name={`passengers.${index}.fullname`}
                                control={control}
                                render={({ field }) => (
                                  <FloatingLabelInput
                                    label="Full name"
                                    value={field.value}
                                    onChange={field.onChange}
                                    className="my-4"
                                    error={errors.passengers?.[index]?.fullname}
                                  />
                                )}
                              />
                              {errors.passengers?.[index]?.fullname && (
                                <ErrorMessage message={errors.passengers[index]?.fullname?.message} />
                              )}

                              <Controller
                                name={`passengers.${index}.identityNumber`}
                                control={control}
                                render={({ field }) => (
                                  <FloatingLabelInput
                                    label="Identity Number"
                                    value={field.value}
                                    onChange={field.onChange}
                                    className="my-4"
                                    error={errors.passengers?.[index]?.identityNumber}
                                  />
                                )}
                              />
                              {errors.passengers?.[index]?.identityNumber && (
                                <ErrorMessage message={errors.passengers[index]?.identityNumber?.message} />
                              )}

                              <Controller
                                name={`passengers.${index}.seatNumber`}
                                control={control}
                                render={({ field }) => (
                                  <FloatingLabelSelect
                                    label="Select a Seat"
                                    value={field.value}
                                    onChange={field.onChange}
                                    options={availableSeatOptions}
                                    className="my-4"
                                    error={errors.passengers?.[index]?.seatNumber}
                                    icon={<IoIosArrowDown size={24} />}
                                  />
                                )}
                              />
                              {errors.passengers?.[index]?.seatNumber && (
                                <ErrorMessage message={errors.passengers[index]?.seatNumber?.message} />
                              )}
                              {returnDate && (
                                <>
                                  <Controller
                                    name={`passengers.${index}.seatReturn`}
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                      <FloatingLabelSelect
                                        label="Select a Seat for Return Trip"
                                        value={field.value || ""}
                                        onChange={field.onChange}
                                        options={seatOptionsReturn}
                                        className="my-4"
                                        icon={<IoIosArrowDown size={24} />}
                                        error={errors?.passengers?.[index]?.seatReturn?.message} // Correctly access nested error
                                      />
                                    )}
                                  />
                                  {errors?.passengers?.[index]?.seatReturn && (
                                    <ErrorMessage message={errors.passengers[index]?.seatReturn?.message} />
                                  )}
                                </>
                              )}

                              <Controller
                                name={`passengers.${index}.passengerType`}
                                control={control}
                                render={({ field }) => (
                                  <FloatingLabelSelect
                                    label="Select your passenger type"
                                    value={field.value}
                                    onChange={field.onChange}
                                    options={passengerOptions}
                                    error={errors.passengers?.[index]?.passengerType}
                                    icon={<IoIosArrowDown size={24} />}
                                  />
                                )}
                              />
                              {errors.passengers?.[index]?.passengerType && (
                                <ErrorMessage message={errors.passengers[index]?.passengerType?.message} />
                              )}
                            </div>
                          </div>
                          <hr className={styles.hr} />
                        </div>
                      );
                    })}
                    <ContactInfo control={control} errors={errors} />
                    <div className={styles.btnSubmit}>
                      <button
                        className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center max-w-full ps-200 pe-200 py-150 rounded-md hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-brand-primary-500 shadow-sm hover:bg-color-scheme-brand-primary-400 hover:shadow-sm active:bg-color-scheme-brand-primary-600 [&amp;:not(:focus-visible)]:active:shadow-none text-color-primary-inverse hover:text-color-primary-inverse active:text-color-primary-inverse w-full"
                        type="submit"
                        data-cy="passenger-submit"
                        data-testid="submit-button"
                      >
                        <span className="ps-100 pe-100 py-075 font-weight-bolder leading-125 text-size-112">
                          {isLoading ? "Processing..." : "Continue to Payment"}
                        </span>
                        <span className="shrink-0 text-icon-color-primary-inverse">
                          <FaArrowRight size={32} />
                        </span>
                      </button>
                    </div>
                  </form>
                ) : (
                  <>
                    <PaymentMethod />
                  </>
                )}
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
                        <TripSelection
                          title={"Outbound"}
                          date={date || ""}
                          train={train}
                          isShowHeader={true}
                          className="!p-0"
                        />
                      </div>
                      {returnDate !== null && (
                        <>
                          <hr className={styles.hr} />
                          <div className={styles.itemContent}>
                            <TripSelection
                              title={"Return"}
                              date={returnDate || ""}
                              train={trainReturn}
                              isShowHeader={true}
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className={styles.sidebarWrapper}>
                    <div className={styles.sidebarItem}>
                      <div className={styles.itemHeading}>
                        <div className={styles.itemHeadingWrapper}>
                          <span>Trip fare summary</span>
                        </div>
                      </div>
                      <hr className={styles.hr} />
                      <div className="space-y-200 px-250 py-200 sm:px-350 sm:py-300 lg:px-250 lg:py-200">
                        <Ticket from={origin} to={destination} passengers={passengerOverviews} />
                        {returnDate !== null && (
                          <>
                            <hr className={styles.hr} />
                            <Ticket from={destination} to={origin} passengers={passengerReturnOverviews} />
                          </>
                        )}

                        <hr className={styles.hr} />
                        <div className="flex flex-col gap-100">
                          <div className="row flex justify-between">
                            <div className="max-w-full font-weight-bold text-size-100 leading-125 inline-block">
                              Subtotal
                            </div>
                            <div className="max-w-full font-weight-bold text-size-100 leading-125 inline-block">
                              {subSotal}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className={styles.hr} />
                    <div className={styles.itemFooter}>
                      <div className={styles.footerLeft}>
                        <span className={styles.footerLeftLabel}>Total</span>
                        <span className={styles.footerLeftText}>Taxes & fees included</span>
                      </div>
                      <div className={styles.footerRight}>{total}</div>
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

function PaymentMethod() {
  const params = useSearchParams();
  const router = useRouter();

  const [method, setMethod] = useState([
    {
      name: "VN Pay",
      checked: true,
      image: "/icons/vnpay.webp",
    },
    {
      name: "PayPal",
      checked: false,
      image: "/icons/paypal.webp",
    },
  ]);
  const [checkout, { isLoading, isSuccess, error }] = useCheckoutMutation();
  const handlePaymentSelect = (index: number) => {
    setMethod((prevMethods) =>
      prevMethods.map((item, idx) => ({
        ...item,
        checked: idx === index, // Chỉ đặt "checked: true" cho item được click
      }))
    );
  };
  const handleCheckout = async () => {
    // Kiểm tra nếu phương thức VNPay được chọn
    const selectedMethod = method.find((item) => item.checked);
    if (selectedMethod?.name === "VN Pay") {
      const checkoutData = {
        amount: Number(params.get("price")) || 0,
        orderId: params.get("bookingId") || "",
      };

      try {
        const response = await checkout(checkoutData).unwrap(); // Gọi API checkout
        console.log(response);
        if (response?.url) {
          // Nếu API trả về thành công, chuyển hướng đến URL thanh toán
          toast.success(response.message);

          window.location.href = response.url;
        } else {
          // Xử lý lỗi nếu thanh toán không thành công
          toast.success(response.message || "Failed to process payment");
        }
      } catch (err) {
        console.error("Error during checkout:", error);
      }
    }
  };
  const [accepted, setAccepted] = useState<boolean>(false);
  return (
    <>
      <div className={styles.sidebarWrapper}>
        <div className={styles.sidebarItem}>
          <div className={styles.policy}>
            <input
              id="bordered-checkbox-1"
              type="checkbox"
              defaultChecked={accepted}
              onChange={() => setAccepted(!accepted)}
              name="bordered-checkbox"
              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mr-3"
            />
            <label htmlFor="bordered-checkbox-1" className="select-none">
              <p>
                I have read and agree to the terms and conditions, including the binding arbitration agreement and
                Amtrak’s baggage policy, which includes fees for excess or oversize baggage.{" "}
                <Link href="">Amtrak Terms and Conditions</Link>.
              </p>
            </label>
          </div>
        </div>
      </div>
      <div className={styles.sidebarWrapper}>
        <div className={styles.sidebarItem}>
          <div className={styles.itemHeading}>
            <div className={styles.itemHeadingWrapper}>
              <span>Payment Method</span>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.itemContent}>
            {method.map((item, idx) => (
              <div key={idx} className={styles.sidebarWrapper}>
                <div className={styles.sidebarItem} onClick={() => handlePaymentSelect(idx)}>
                  <div className={styles.payment}>
                    <div className={styles.paymentButton}>
                      {/* <span className={styles.checkbox}></span> */}
                      {item.checked ? (
                        <FaRegCircleCheck size={20} className="text-[#0b95f5]" />
                      ) : (
                        <GoCircle size={20} className="text-[#20415a]" />
                      )}
                      <span className="inline-flex items-center gap-2 p-1 border rounded-full bg-gray-50 border-blue-500 text-blue-500">
                        <img src={item.image} alt="Payment Icon" className="w-7 h-4 object-contain" />
                      </span>
                      <span className={styles.paymentName}>
                        <span>{item.name}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <hr className={styles.hr} />
            <div className={styles.terms}>
              <div className="last:*:mb-0 [&>a]:text-color-scheme-interactive-link-600 [&>a]:visited:text-color-scheme-literal-purple-600 [&>a]:hover:text-color-scheme-interactive-link-500 [&>a]:focus-visible:outline-none [&>a]:focus-visible:ring [&>a]:active:text-color-scheme-interactive-link-600 [&>a]:aria-disabled:cursor-default text-color-secondary">
                <p className="text-size-75 leading-100 mb-300">
                  By completing this booking, I confirm that I have read and agree to
                  <Link
                    className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default text-color-scheme-interactive-link-600 hover:text-color-scheme-interactive-link-500 active:text-color-scheme-interactive-link-600 underline"
                    href={""}
                  >
                    Terms
                  </Link>
                  and
                  <Link
                    href={""}
                    className="focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default text-color-scheme-interactive-link-600 hover:text-color-scheme-interactive-link-500 active:text-color-scheme-interactive-link-600 underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className={styles.btnSubmit}>
              <button
                className={`mt-4 focus-visible:outline-none focus-visible:ring aria-disabled:cursor-default inline-flex items-center justify-center max-w-full ps-200 pe-200 py-150 rounded-md hover:-translate-y-006 active:translate-y-006 backdrop-blur-lg bg-color-scheme-brand-primary-500 shadow-sm hover:bg-color-scheme-brand-primary-400 hover:shadow-sm active:bg-color-scheme-brand-primary-600 [&amp;:not(:focus-visible)]:active:shadow-none text-color-primary-inverse hover:text-color-primary-inverse active:text-color-primary-inverse w-full
                
                ${!accepted && "cursor-not-allowed"}
                `}
                onClick={handleCheckout} // Gọi hàm thanh toán
                disabled={!accepted || isLoading} // Disable nút khi đang loading
              >
                <span className="ps-100 pe-100 py-075 font-weight-bolder leading-125 text-size-112">
                  {isLoading ? "Processing..." : "Payment Now"}
                </span>
                <span className="shrink-0 text-icon-color-primary-inverse">
                  <FaArrowRight size={32} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ContactInfo({ control, errors }: { control: any; errors: any }) {
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
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <FloatingLabelInput
                label="Phone Number"
                value={field.value}
                onChange={field.onChange}
                className="mb-7"
                description="OurBus requires your mobile number to notify you of any schedule changes."
                error={errors.phoneNumber}
              />
            )}
          />
          {errors.phoneNumber && <ErrorMessage message={errors.phoneNumber?.message} />}

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <FloatingLabelInput
                label="Email Address"
                type="email"
                value={field.value}
                onChange={field.onChange}
                className="mb-7 mt-4"
                description="Your confirmation email will be sent to this email."
                error={errors.email}
              />
            )}
          />
          {errors.email && <ErrorMessage message={errors.email?.message} />}
        </div>
      </div>
      <hr className={styles.hr} />
    </div>
  );
}

function Ticket({ from, to, passengers }: { from: string; to: string; passengers: { name: string; price: number }[] }) {
  return (
    <div className={styles.ticket}>
      <div className={styles.ticketHeading}>
        <span className={styles.stationLabel}>
          <span>{from}</span>
        </span>
        <FaArrowRightLong size={16} />
        <span className={styles.stationLabel}>
          <span>{to}</span>
        </span>
      </div>
      <div className={styles.ticketCenter}>
        {passengers.map((item, idx) => (
          <div key={idx} className={styles.ticketPriceWrapper}>
            <span className={styles.ticketPassengerName}>{item.name}</span>
            <span className={styles.ticketPrice}>{formatCurrencyVND(item.price)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
