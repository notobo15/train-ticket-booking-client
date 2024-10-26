"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./signup.module.scss";
import { FaFacebook } from "react-icons/fa";
import { GoogleOriginal } from "devicons-react";
import Link from "next/link";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import PasswordInput from "@/components/PasswordInput";
import DialogForm from "@/components/DialogForm";
import ButtonAccount from "@/components/ButtonAccount";
import ErrorMessage from "@/components/ErrorMessage";

export default function Index() {
  // Validation schema for the signup form
  const validationSchema = Yup.object({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Confirm password is required"),
  });

  // Formik form setup
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Signup form values:", values);
      // Handle the signup logic here
    },
  });

  return (
    <DialogForm>
      <div className={styles.contentInner}>
        <div className={styles.contentHeading}>
          <h2>Sign Up Now</h2>
        </div>
        <div className={styles.main}>
          <ButtonAccount
            icon={<FaFacebook size={20} />}
            label="Continue with Facebook"
          />
          <ButtonAccount
            icon={<GoogleOriginal size={20} />}
            bgColor="rgb(255, 255, 255)"
            color="rgb(32, 65, 91)"
            label="Continue with Google"
          />
          <div className={styles.labelTextOr}>
            <span>OR</span>
          </div>

          <form onSubmit={formik.handleSubmit} className={styles.form}>
            {formik.touched.firstname && formik.errors.firstname && (
              <ErrorMessage message={formik.errors.firstname} />
            )}
            <FloatingLabelInput
              id="firstname"
              label="First Name"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              className="my-4"
              error={formik.touched.firstname && formik.errors.firstname}
            />

            {formik.touched.lastname && formik.errors.lastname && (
              <ErrorMessage message={formik.errors.lastname} />
            )}
            <FloatingLabelInput
              id="lastname"
              label="Last Name"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              className="my-4"
              error={formik.touched.lastname && formik.errors.lastname}
            />

            {formik.touched.email && formik.errors.email && (
              <ErrorMessage message={formik.errors.email} />
            )}
            <FloatingLabelInput
              id="email"
              label="Email Address"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="my-4"
              error={formik.touched.email && formik.errors.email}
            />

            {formik.touched.password && formik.errors.password && (
              <ErrorMessage message={formik.errors.password} />
            )}
            <PasswordInput
              id="password"
              label="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="my-4"
              error={formik.touched.password && formik.errors.password}
            />

            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <ErrorMessage message={formik.errors.confirmPassword} />
              )}
            <PasswordInput
              id="confirmPassword"
              label="Confirm Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              className="my-4"
              error={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />

            <ButtonAccount type="submit" label="Sign Up with Email" />
          </form>

          <div className="text-center text-color-secondary mb-[28px]">
            <p className="text-size-75 leading-100 mb-300">
              By creating an account, you accept A&apos;s&nbsp;
              <Link
                className="underline text-color-scheme-interactive-link-600"
                href="/terms-of-use/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Terms
              </Link>
              &nbsp;and&nbsp;
              <Link
                className="underline text-color-scheme-interactive-link-600"
                href="/privacy-policy/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Privacy Policy
              </Link>
              &nbsp; and agree to receive emails, to which you can unsubscribe
              at any time.
            </p>
          </div>

          <div className={styles.hr}></div>
          <div className={styles.footer}>
            <div className={styles.footerInner}>
              Already have an account?&nbsp;
              <Link href="/signin">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </DialogForm>
  );
}
