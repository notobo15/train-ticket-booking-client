"use client";
import React, { useState } from "react";
import styles from "./resetPassword.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import DialogForm from "@/components/DialogForm";
import ButtonAccount from "@/components/ButtonAccount";
import ErrorMessage from "@/components/ErrorMessage";
import PasswordInput from "@/components/PasswordInput";
import { useSearchParams } from "next/navigation";
import { useResetPasswordMutation } from "@/services/authApi";
import { toast } from "react-toastify";
import { useRouter } from "@/i18n/routing";

export default function ResetPassword() {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const searchParams = useSearchParams();
  const rawToken = searchParams.get("token") || "";
  const token = rawToken.replace(/ /g, "+");
  const email = searchParams.get("email") || "";
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const validationSchema = Yup.object({
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await resetPassword({
          token,
          email,
          newPassword: values.password,
        }).unwrap();

        if (response.success) {
          setIsSuccess(true);
          toast.success(response.data || "Password has been reset successfully.", { autoClose: 2000 });
          // Redirect user to login after a short delay
          setTimeout(() => {
            router.push("/sign-in");
          }, 3000);
        } else {
          const apiErrors = Array.isArray(response.errors) ? response.errors : [];
          if (apiErrors.length > 0) {
            const errorMessages = apiErrors.map(
              (error) => (error.fieldName ? `${error.fieldName}: ` : "") + error.description
            );

            toast.error(
              <div>
                <strong>Reset Password Failed:</strong>
                <ul>
                  {errorMessages.map((message, index) => (
                    <li key={index}>{message}</li>
                  ))}
                </ul>
              </div>
            );
          } else {
            toast.error("Failed to reset password. Please try again.");
          }
        }
      } catch (err) {
        console.error("Failed to reset password:", err);
        toast.error("An unexpected error occurred. Please try again.", { autoClose: false });
      }
    },
  });

  return (
    <DialogForm isShowIconClose={false}>
      <div className={styles.contentInner}>
        <div className={styles.contentHeading}>
          <h2>Create new password</h2>
          <p>Once you’re done, you’ll be signed up automatically.</p>
        </div>
        <div className={styles.main}>
          {isSuccess ? (
            <p>Password reset successful! Redirecting to login...</p>
          ) : (
            <form onSubmit={formik.handleSubmit} className={styles.form}>
              <PasswordInput
                id="password"
                label="New Password*"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="my-4"
                error={formik.touched.password && formik.errors.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <ErrorMessage message={formik.errors.password} />
              ) : null}

              <PasswordInput
                id="confirmPassword"
                label="Confirm Password*"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                className="my-4"
                error={formik.touched.confirmPassword && formik.errors.confirmPassword}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <ErrorMessage message={formik.errors.confirmPassword} />
              ) : null}

              <ButtonAccount type="submit" label={isLoading ? "Resetting..." : "Confirm"} disabled={isLoading} />
            </form>
          )}
        </div>
      </div>
    </DialogForm>
  );
}
