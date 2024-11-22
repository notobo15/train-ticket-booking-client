import clsx from "clsx";
import styles from "./ResultTrains.module.scss";

export default function CardSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div>
      <div className={clsx(styles.cardWrapper, "")}>
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={clsx(styles.cardContainerSkeleton, "min-h-[120px] w-full shadow-none hover:shadow-none mb-3")}
          >
            <div className={styles.cardMain}>
              <div className={styles.cardContent}>
                <div className={styles.topLeft}>
                  <h1 className=" w-[100px] h-[2rem] skeleton mb-3"></h1>
                  <p className=" w-[100px] h-[1rem] skeleton"></p>
                </div>
                <div className={styles.topRight}>
                  <div className={styles.topRightWrapper}>
                    <div className="skeleton w-6 h-6"></div>
                    <div className="skeleton w-6 h-6"></div>
                    <div className="skeleton w-6 h-6"></div>
                  </div>
                </div>
                <div className={styles.topCenter}>
                  <div className={styles.topCenterLeft}>
                    <div className={clsx(styles.topCenterLeftContent, "w-[100px]")}>
                      <span className={clsx(styles.topCenterLeftContentTime, "skeleton w-full h-[1.5rem]")}></span>
                      <span
                        className={clsx(styles.topCenterLeftContentStation, "skeleton w-full h-[1rem] my-2")}
                      ></span>
                      <span className={clsx(styles.topCenterLeftContentProvince, "skeleton w-full h-[0.8rem]")}></span>
                    </div>
                    <div className="flex justify-between w-full">
                      <div className="skeleton w-[30%] h-3"></div>
                      <div className="skeleton w-[30%] h-3"></div>
                      <div className="skeleton w-[40%] h-3"></div>
                    </div>
                  </div>
                  <div className={styles.topCenterRight}>
                    <div className={clsx(styles.topCenterLeftContent, "w-[100px]")}>
                      <span className={clsx(styles.topCenterLeftContentTime, "skeleton w-full h-[1.5rem]")}></span>
                      <span
                        className={clsx(styles.topCenterLeftContentStation, "skeleton w-full h-[1rem] my-2")}
                      ></span>
                      <span className={clsx(styles.topCenterLeftContentProvince, "skeleton w-full h-[0.8rem]")}></span>
                    </div>
                  </div>
                </div>
                <div className={styles.break}></div>
                <div className={styles.bottomLeft}>
                  <div className={styles.bottomLeftWrapper}>
                    <div className={clsx(styles.bottomLeftItem, "w-[50px] skeleton h-[20px] mr-3")}></div>
                    <div className={clsx(styles.bottomLeftItem, "w-[50px] skeleton h-[20px]")}></div>
                  </div>
                </div>
                <div className={clsx(styles.bottomRight, "w-[120px] rounded-md skeleton h-[20px]")}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
