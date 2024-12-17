"use client";
import { useState, useEffect, startTransition, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./signin.module.scss";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import PasswordInput from "@/components/PasswordInput";
import DialogForm from "@/components/DialogForm";
import ButtonAccount from "@/components/ButtonAccount";
import ErrorMessage from "@/components/ErrorMessage";
import { Link, useRouter } from "@/i18n/routing";
import GoogleAuthButton from "../_components/GoogleAuthButton";
import FacebookAuthButton from "../_components/FacebookAuthButton";
import { toast } from "react-toastify";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useAppDispatch } from "@/redux/hooks";
import { setIsLoading } from "@/redux/slices/homeSlice";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import axios from "axios";
import { useLoginMutation } from "@/services/authApi"; // Import the login mutation
import { setToken, setUser } from "@/redux/slices/authSlice";

import { getCookie, getCookies, setCookie, deleteCookie, hasCookie } from "cookies-next";
import GithubAuthButton from "../_components/GithubAuthButton";
export default function Index() {
  const [isShowFormSignIn, setIsShowFormSignIn] = useState(false);
  const router = useRouter();
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  // Use login mutation
  const [login, { isLoading, isError, error, data }] = useLoginMutation();

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    validateOnChange: true,
    onSubmit: async (values) => {
      dispatch(setIsLoading(true));
      startTransition(() => {
        login({
          username: values.email,
          password: values.password,
        })
          .unwrap()
          .then(async (response) => {
            if (response.success) {
              toast.success("Signed In Successfully!", { autoClose: 1000 });
              // dispatch(setToken(response.data.jwToken));
              dispatch(setUser(response.data));
              // Redirect to home page
              router.push("/home");
            }
          })
          .catch((error) => {
            dispatch(setIsLoading(false));

            // Kiểm tra lỗi HTTP 400
            if (error?.status === 400 && error?.data?.errors) {
              const apiErrors = error.data.errors;
              const errorMessages = apiErrors.map(
                (err: { fieldName: string; description: string }) => `${err.fieldName}: ${err.description}`
              );

              toast.error(
                <div>
                  <strong>Failed to sign in:</strong>
                  <ul>
                    {errorMessages.map((message: string, index: number) => (
                      <li key={index}>{message}</li>
                    ))}
                  </ul>
                </div>
              );
            } else {
              toast.error("An unexpected error occurred. Please try again.");
            }
          })
          .finally(() => {
            dispatch(setIsLoading(false));
          });
      });
    },
  });
  return (
    <>
      <DialogForm>
        <div className={styles.contentInner}>
          <div className={styles.contentHeading}>
            <h2>Welcome back!</h2>
          </div>
          <div className={styles.main}>
            <FacebookAuthButton />
            <GoogleAuthButton />
            <GithubAuthButton />
            <div className={styles.labelTextOr}>
              <span>OR</span>
            </div>
            {!isShowFormSignIn ? (
              <ButtonAccount
                bgColor="rgba(46, 175, 255, 0.1)"
                color="rgb(5, 147, 255)"
                label="Continue with Email"
                onClick={() => setIsShowFormSignIn(true)}
              />
            ) : (
              <form onSubmit={formik.handleSubmit} className={styles.form}>
                <FloatingLabelInput
                  ref={usernameRef}
                  id="email"
                  label="Email Address"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="my-4"
                  error={formik.touched.email && formik.errors.email}
                />
                {formik.touched.email && formik.errors.email && <ErrorMessage message={formik.errors.email} />}
                <PasswordInput
                  id="password"
                  label="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className="my-4"
                  error={formik.touched.password && formik.errors.password && !formik.isSubmitting}
                />
                {formik.touched.password && formik.errors.password && <ErrorMessage message={formik.errors.password} />}
                <ButtonAccount type="submit" label="Sign In with Email" className="mt-4" />
              </form>
            )}

            <Link href="/forgot-password" className={styles.forgotPassword}>
              Forgot your password?
            </Link>
          </div>
          <div className={styles.hr}></div>
          <div className={styles.footer}>
            <div className={styles.footerInner}>
              New to Busbud? &nbsp;
              <Link href="/sign-up">Sign up</Link>
            </div>
          </div>
        </div>
      </DialogForm>
    </>
  );
}
