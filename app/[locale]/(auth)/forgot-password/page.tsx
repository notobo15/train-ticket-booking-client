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
import { toast } from "react-toastify"; // Thêm toast để hiển thị thông báo lỗi

export default function ForgotPassword() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation(); // Sử dụng hook từ RTK Query

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
        const response = await forgotPassword({ email: values.email }).unwrap(); // Gửi yêu cầu API
        if (response.success) {
          setIsSuccess(true); // Hiển thị thông báo thành công
        } else {
          const apiErrors = Array.isArray(response.errors) ? response.errors : [];
          if (apiErrors.length > 0) {
            const errorMessages = apiErrors.map((error: { fieldName: string | null; description: string }) =>
              error.fieldName ? `${error.fieldName}: ${error.description}` : error.description
            );

            // Hiển thị danh sách lỗi trong toast
            toast.error(
              <div>
                <strong>Failed to reset password:</strong>
                <ul>
                  {errorMessages.map((message, index) => (
                    <li key={index}>{message}</li>
                  ))}
                </ul>
              </div>
            );
          } else {
            toast.error("An unexpected error occurred. Please try again.");
          }
        }
      } catch (err) {
        console.error("Failed to send reset email:", err);
        toast.error("An error occurred. Please try again.");
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
          {isSuccess && (
            <SuccessMessage message="Your reset link with the instructions is on its way! Allow 10 minutes for the email to arrive." />
          )}
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            {formik.touched.email && formik.errors.email ? <ErrorMessage message={formik.errors.email} /> : null}

            <FloatingLabelInput
              id="email"
              disabled={isSuccess || isLoading} // Vô hiệu hóa khi thành công hoặc đang gửi
              label="Email Address"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="my-4"
              error={formik.touched.email && formik.errors.email}
            />

            <ButtonAccount
              type="submit"
              label={isLoading ? "Sending..." : "Send reset link"}
              disabled={isLoading} // Vô hiệu hóa nút khi đang gửi
            />
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
