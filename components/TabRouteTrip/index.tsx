import React, { useState } from "react";
import styles from "./TabRouteTrip.module.scss";
import clsx from "clsx";
import { usePathname, useSearchParams } from "next/navigation";

export default function Index({ isOutbound = true }: { isOutbound?: boolean }) {
  const [activeTab, setActiveTab] = useState<boolean>(isOutbound);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Cập nhật URL với tham số step
  const handleTabClick = (isOutboundTab: boolean) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("step", isOutboundTab ? "outbound" : "return"); // Cập nhật tham số step

    // Cập nhật URL mà không reload trang
    const newUrl = `${pathname}?${newParams.toString()}`;
    window.history.pushState({}, "", newUrl); // Cập nhật URL trong thanh địa chỉ mà không reload trang

    setActiveTab(isOutboundTab); // Cập nhật trạng thái activeTab
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.layoutMobile}></div>
        <div className={styles.layoutWeb}>
          <div className={styles.layoutWebWrapper}>
            <div className={styles.layoutWebMain}>
              <div className={styles.tabList}>
                <div
                  className={clsx(styles.tabItem, {
                    [styles.active]: activeTab,
                  })}
                  onClick={() => handleTabClick(true)} // Kích hoạt tab Outbound
                >
                  <span className={styles.tabLabel}>
                    <span>Outbound</span>
                  </span>
                </div>
                <div
                  className={clsx(styles.tabItem, {
                    [styles.active]: !activeTab,
                    [styles.disabled]: activeTab, // Tab "Return" chỉ khả dụng khi Outbound không active
                  })}
                  onClick={() => handleTabClick(false)} // Kích hoạt tab Return
                >
                  <span className={styles.tabLabel}>
                    <span>Return</span>
                  </span>
                </div>
              </div>
              <div
                className={clsx(styles.tabIndicator, {
                  [styles.right]: !isOutbound,
                })}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
