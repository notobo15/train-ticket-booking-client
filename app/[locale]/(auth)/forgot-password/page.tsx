"use client";
import React, { useState } from "react";
import styles from "./forgotPassword.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import DialogForm from "@/components/DialogForm";
import ButtonAccount from "@/components/ButtonAccount";
import ErrorMessage from "@/components/ErrorMessage";
import SuccessMessage from "@/components/SuccessMessage";
import { Link } from "@/i18n/routing";
import { useForgotPasswordMutation } from "@/services/authApi";

export default function ForgotPassword() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [forgotPassword, { isLoading, isSuccess: success, isError, error }] = useForgotPasswordMutation(); // Sử dụng hook từ RTK Query

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await forgotPassword(values.email).unwrap();
        if (response.code === 1000) {
          setIsSuccess(true);
        }
      } catch (err) {
        console.error("Failed to send reset email:", err);
      }
    },
  });

  return (
    <DialogForm>
      <div className={styles.contentInner}>
        <div className={styles.contentHeading}>
          <h2>Reset password</h2>
          <p>
            Enter the email address you used to sign up or book on Website. We will send you a link to reset your
            password.
          </p>
        </div>
        <div className={styles.main}>
          <SuccessMessage message="Your reset link with the instructions is on its way! Allow 10 minutes for the email to arrive." />
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            {formik.touched.email && formik.errors.email ? <ErrorMessage message={formik.errors.email} /> : null}

            <FloatingLabelInput
              id="email"
              disabled={isSuccess}
              label="Email Address"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="my-4"
              error={formik.touched.email && formik.errors.email}
            />

            <ButtonAccount type="submit" label={isLoading ? "Sending..." : "Send reset link"} />
          </form>
        </div>
        <div className={styles.hr}></div>
        <div className={styles.footer}>
          <div className={styles.footerInner}>
            <Link href="/sign-in">Sign In</Link>
            <Link href="/sign-up">Sign up</Link>
          </div>
        </div>
      </div>
    </DialogForm>
  );
}
