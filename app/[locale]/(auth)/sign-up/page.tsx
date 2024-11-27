"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./signup.module.scss";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import PasswordInput from "@/components/PasswordInput";
import DialogForm from "@/components/DialogForm";
import ButtonAccount from "@/components/ButtonAccount";
import ErrorMessage from "@/components/ErrorMessage";
import { Link, useRouter } from "@/i18n/routing";
import FacebookAuthButton from "../_components/FacebookAuthButton";
import GoogleAuthButton from "../_components/GoogleAuthButton";
import axios from "axios";
import { toast } from "react-toastify";

export default function Index() {
  const router = useRouter();

  const validationSchema = Yup.object({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
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
    onSubmit: async (values) => {
      const userData = {
        username: `${values.firstname} ${values.lastname}`,
        email: values.email,
        password: values.password,
      };

      try {
        const response = await axios.post("http://localhost:8080/api/auth/signup", userData);

        if (response.data) {
          toast.success("Sign Up Successful!", { autoClose: 2000 });
          router.push("/sign-in");
        }
      } catch (error) {
        toast.error("Sign Up Failed. Please try again.", { autoClose: 2000 });
      }
    },
  });

  const [isShowForm, setIsShowForm] = useState(false);

  return (
    <DialogForm>
      <div className={styles.contentInner}>
        <div className={styles.contentHeading}>
          <h2>Sign Up Now</h2>
        </div>
        <div className={styles.main}>
          <FacebookAuthButton />
          <GoogleAuthButton />
          <div className={styles.labelTextOr}>
            <span>OR</span>
          </div>
          {!isShowForm ? (
            <ButtonAccount
              bgColor="rgba(46, 175, 255, 0.1)"
              color="rgb(5, 147, 255)"
              label="Continue with Email"
              onClick={() => setIsShowForm(true)}
            />
          ) : (
            <form onSubmit={formik.handleSubmit} className={styles.form}>
              <FloatingLabelInput
                id="firstname"
                label="First Name"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                className="my-4"
                error={formik.touched.firstname && formik.errors.firstname}
              />
              {formik.touched.firstname && formik.errors.firstname && (
                <ErrorMessage message={formik.errors.firstname} />
              )}
              <FloatingLabelInput
                id="lastname"
                label="Last Name"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                className="my-4"
                error={formik.touched.lastname && formik.errors.lastname}
              />
              {formik.touched.lastname && formik.errors.lastname && <ErrorMessage message={formik.errors.lastname} />}

              <FloatingLabelInput
                id="email"
                label="Email Address"
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
                error={formik.touched.password && formik.errors.password}
              />
              {formik.touched.password && formik.errors.password && <ErrorMessage message={formik.errors.password} />}

              <PasswordInput
                id="confirmPassword"
                label="Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                className="my-4"
                error={formik.touched.confirmPassword && formik.errors.confirmPassword}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <ErrorMessage message={formik.errors.confirmPassword} />
              )}
              <ButtonAccount type="submit" label="Sign Up with Email" className="mt-4" />
            </form>
          )}

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
              &nbsp; and agree to receive emails, to which you can unsubscribe at any time.
            </p>
          </div>

          <div className={styles.hr}></div>
          <div className={styles.footer}>
            <div className={styles.footerInner}>
              Already have an account?&nbsp;
              <Link href="/sign-in">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </DialogForm>
  );
}
