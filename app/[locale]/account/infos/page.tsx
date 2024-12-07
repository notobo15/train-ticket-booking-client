"use client";
import React, { useState } from "react";
import styles from "./infos.module.scss";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import PasswordInput from "@/components/PasswordInput";

export default function Index() {
  const [data, setData] = useState({ email: "test@gmail.com" });
  const [password, setPassword] = useState("");
  return (
    <div className={styles.wrapper}>
      <div className={styles.formGroup}>
        <div className={styles.formGroup}>
          <div className={styles.formGroupHeading}>
            <span className={styles.headingLabel}>Email address</span>
            <span className={styles.headingDes}>
              This is where your confirmation email, tickets, and notifications will be sent.
            </span>
          </div>
          <form action="">
            <FloatingLabelInput
              id="username"
              label="Username"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="my-4"
            />
          </form>
        </div>
      </div>

      <div className={styles.formGroup}>
        <div className={styles.formGroup}>
          <div className={styles.formGroupHeading}>
            <span className={styles.headingLabel}>Update password</span>
            <span className={styles.headingDes}>Enter both fields to update your password.</span>
          </div>
          <form action="">
            <PasswordInput
              id="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="my-4"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
