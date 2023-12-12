import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Slider({ slides }) {
  return (
    <>
      {slides && (
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="mySwiper h-full"
        >
          {slides &&
            slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <img src={slide.url} alt="" className="object-cover w-full h-full" />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </>
  );
}
