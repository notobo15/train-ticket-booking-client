"use client";
import React from "react";
import styles from "./resetPassword.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import DialogForm from "@/components/DialogForm";
import ButtonAccount from "@/components/ButtonAccount";
import ErrorMessage from "@/components/ErrorMessage";
import { Link } from "@/i18n/routing";
import PasswordInput from "@/components/PasswordInput";
export default function Index() {
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
    onSubmit: (values) => {
      console.log("Form values:", values);
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
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <PasswordInput
              id="password"
              label="New Password*"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="my-4"
              error={formik.touched.password && formik.errors.password && !formik.isSubmitting}
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
              error={formik.touched.confirmPassword && formik.errors.confirmPassword && !formik.isSubmitting}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <ErrorMessage message={formik.errors.confirmPassword} />
            ) : null}
            <div className={styles.hr}></div>
            <div className={styles.footer}>
              <Link className={styles.backBtn} href="/sign-in">
                <span>Cancel</span>
              </Link>
              <button className={styles.submitBtn} type="submit">
                <span>Confirm</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </DialogForm>
  );
}
