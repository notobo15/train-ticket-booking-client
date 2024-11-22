import Header from "@/components/Header";
import React from "react";
import styles from "./AccountLayout.module.scss";
import Footer from "@/components/Footer";
import SidebarAccount from "@/components/SidebarAccount";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="grid grid-cols-[minmax(0,80rem)] justify-center pe-[5vw] ps-[5vw] md:pe-[6.25vw] md:ps-[6.25vw] [background:var(--header-gradient)]">
        <Header />
      </div>
      <div className="content">
        <div className={styles.main}>
          <div className={styles.layout}>
            <div className={styles.wrapper}>
              <SidebarAccount />
              <div className={styles.content}>
                <div className={styles.contentInner}>{children}</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
