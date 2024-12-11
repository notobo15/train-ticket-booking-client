"use client";
import React, { useRef } from "react";
import Carriage from "../Carriage";
import styles from "./CarriageList.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function CarriageList({ carriages, onClickCarriage }: { carriages: Carriage[]; onClickCarriage: any }) {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  return (
    <div className={styles.carriageContainer}>
      <div className={styles.btnPrev} ref={prevRef}>
        <FaAngleLeft size={24} />
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        pagination={{ clickable: true }}
        scrollbar={{ enabled: true, draggable: true }}
        modules={[Navigation, Scrollbar]}
        navigation={{
          enabled: true,
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {carriages.map((carriage, index) => (
          <SwiperSlide key={index}>
            {/* {index === 0 && <div className={styles.trainHead}></div>} */}
            <Carriage
              onClickCarriage={onClickCarriage}
              {...carriage}
              // seats={carriage.seats}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.btnNext} ref={nextRef}>
        <FaAngleRight size={24} />
      </div>
    </div>
  );
}
