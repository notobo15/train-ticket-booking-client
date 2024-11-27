"use client";
import { useState, useEffect, startTransition, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./signin.module.scss";
import { signIn, useSession } from "next-auth/react";
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
import { setIsLoading } from "@/redux/slices/rootSlice";

export default function Index() {
  const [isShowFormSignIn, setIsShowFormSignIn] = useState(false);
  const router = useRouter();
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const { data: session, status } = useSession();

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    validateOnChange: true,
    onSubmit: async (values) => {
      dispatch(setIsLoading(true));
      startTransition(() => {
        signIn("credentials", {
          username: values.username,
          password: values.password,
          redirect: false,
        })
          .then((response) => {
            if (response?.ok) {
              toast.success("Signed In Successfully!", { autoClose: 1000 });
            } else {
              formik.resetForm();
              if (usernameRef.current) {
                usernameRef.current.focus();
              }
              toast.error("Failed to sign in. Please check your credentials.");
            }
            dispatch(setIsLoading(false));
          })
          .catch((error) => {
            dispatch(setIsLoading(false));
            toast.error("An error occurred. Please try again.");
          });
      });
    },
  });

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/home");
    }
  }, [status, router]);

  return (
    <DialogForm>
      <div className={styles.contentInner}>
        <div className={styles.contentHeading}>
          <h2>Welcome back!</h2>
        </div>
        <div className={styles.main}>
          <FacebookAuthButton />
          <GoogleAuthButton />
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
                id="username"
                label="Username Address"
                type="text"
                value={formik.values.username}
                onChange={formik.handleChange}
                className="my-4"
                error={formik.touched.username && formik.errors.username}
              />
              {formik.touched.username && formik.errors.username && <ErrorMessage message={formik.errors.username} />}
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
            <Link href="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </DialogForm>
  );
}
