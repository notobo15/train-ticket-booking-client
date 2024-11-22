"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./signin.module.scss";
import { FaFacebook } from "react-icons/fa";
import { GoogleOriginal } from "devicons-react";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import PasswordInput from "@/components/PasswordInput";
import DialogForm from "@/components/DialogForm";
import ButtonAccount from "@/components/ButtonAccount";
import ErrorMessage from "@/components/ErrorMessage";
import { Link } from "@/components/Navigation";

export default function Index() {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Sign In values:", values);
    },
  });

  const [isShowFormSignIn, setIsShowFormSignIn] = useState(false);
  return (
    <DialogForm>
      <div className={styles.contentInner}>
        <div className={styles.contentHeading}>
          <h2>Welcome back!</h2>
        </div>
        <div className={styles.main}>
          <ButtonAccount icon={<FaFacebook size={20} />} label="Continue with Facebook" />
          <ButtonAccount
            icon={<GoogleOriginal size={20} />}
            bgColor="rgb(255, 255, 255)"
            color="rgb(32, 65, 91)"
            label="Continue with Google"
          />
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
              {formik.touched.email && formik.errors.email && <ErrorMessage message={formik.errors.email} />}
              <FloatingLabelInput
                id="email"
                label="Email Address"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="my-4"
                error={formik.touched.email && formik.errors.email}
              />

              {formik.touched.password && formik.errors.password && <ErrorMessage message={formik.errors.password} />}
              <PasswordInput
                id="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="my-4"
                error={formik.touched.password && formik.errors.password}
              />

              <ButtonAccount type="submit" label="Sign In with Email" />
            </form>
          )}

          <Link href={"/forgot-password"} className={styles.forgotPassword}>
            Forgot your password?
          </Link>
        </div>
        <div className={styles.hr}></div>
        <div className={styles.footer}>
          <div className={styles.footerInner}>
            New to Busbud? &nbsp;
            <Link href="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </DialogForm>
  );
}
