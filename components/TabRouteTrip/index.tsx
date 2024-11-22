import React, { useState } from "react";
import styles from "./TabRouteTrip.module.scss";
import clsx from "clsx";

export default function Index({ isOutbound = true, onCallBack }: { isOutbound?: boolean; onCallBack?: () => void }) {
  const [activeTab, setActiveTab] = useState<boolean>(isOutbound);

  const handleTabClick = (isOutboundTab: boolean) => {
    onCallBack && onCallBack();
    // if (isOutboundTab !== activeTab) {
    //   setActiveTab(isOutboundTab);
    // }
  };

  return (
    <div className={styles.wrapper}>
      <div>
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
                  onClick={() => !activeTab && handleTabClick(false)} // Kích hoạt tab Return nếu không bị disabled
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
