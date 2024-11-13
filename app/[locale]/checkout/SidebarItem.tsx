import React from "react";
import { FormikErrors, FormikTouched, FormikHandlers } from "formik";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import ErrorMessage from "@/components/ErrorMessage";
import FloatingLabelSelect from "@/components/FloatingLabelSelect";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./checkout.module.scss";

interface SidebarItemProps {
  formik: {
    values: {
      fullname: string;
      identityNumber: string;
      seatNumber: string;
      passengerType: string;
    };
    errors: FormikErrors<{
      fullname: string;
      identityNumber: string;
      seatNumber: string;
      passengerType: string;
    }>;
    touched: FormikTouched<{
      fullname: boolean;
      identityNumber: boolean;
      seatNumber: boolean;
      passengerType: boolean;
    }>;
    handleChange: FormikHandlers["handleChange"];
  };
  passengerType: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ formik, passengerType }) => {
  return (
    <div className={styles.sidebarItem}>
      <div className={styles.itemHeading}>
        <div className={styles.itemHeadingWrapper}>
          <span>Passenger</span>
          <span>{passengerType}</span>
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
        {formik.touched.fullname && formik.errors.fullname ? <ErrorMessage message={formik.errors.fullname} /> : null}

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
          id="passengerType"
          label="Select your passenger type"
          name="passengerType"
          className="my-4"
          icon={<IoIosArrowDown className="text-icon-color-primary" size={24} />}
          value={formik.values.passengerType}
          onChange={formik.handleChange}
          options={[
            { label: "Adult", value: "Adult" },
            { label: "Child", value: "Child" },
            { label: "Senior", value: "Senior" },
          ]}
          error={formik.touched.passengerType && formik.errors.passengerType}
        />
      </div>
    </div>
  );
};

export default SidebarItem;
