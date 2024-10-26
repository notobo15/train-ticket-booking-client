"use client";
import React from "react";
import styles from "./forgotPassword.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import DialogForm from "@/components/DialogForm";
import ButtonAccount from "@/components/ButtonAccount";
import ErrorMessage from "@/components/ErrorMessage";
import SuccessMessage from "@/components/SuccessMessage";
export default function Index() {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });
  // Formik form setup
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form values:", values);
      // Handle the submit logic here, e.g., send a reset link
    },
  });
  return (
    <DialogForm>
      <div className={styles.contentInner}>
        <div className={styles.contentHeading}>
          <h2>Reset password</h2>
          <p>
            Enter the email address you used to sign up or book on Website, we
            will send you a link to reset your password.
          </p>
        </div>
        <div className={styles.main}>
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            {formik.touched.email && formik.errors.email ? (
              <ErrorMessage message={formik.errors.email} />
            ) : null}
            {/* <SuccessMessage message="Your reset link with the instructions is on its way! Allow 10 minutes for the email to arrive." /> */}
            <FloatingLabelInput
              id="email"
              label="Email Address"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="my-4"
              error={formik.touched.email && formik.errors.email}
            />

            <ButtonAccount type="submit" label="Send reset link" />
          </form>
        </div>
        <div className={styles.hr}></div>
        <div className={styles.footer}>
          <div className={styles.footerInner}>
            <Link href="/signin">Sign In</Link>
            <Link href="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </DialogForm>
  );
}
