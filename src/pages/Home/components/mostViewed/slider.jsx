import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination, Autoplay, Navigation } from "swiper/modules";
import StartRating from "@/components/startViewRating/startRating";

export default function SliderMostViewed({ slides }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        loop={true}
        grid={{
          rows: 1,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Autoplay, Navigation]}
        navigation={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="mySwiper h-full"
      >
        {slides &&
          slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div>
                <img src={slide.picture} alt="" className="h-full object-cover rounded-t-lg" />
                <h2 className="font-bold text-lg">{slide.nombre}</h2>
                <span className="text-slate-500 font-medium">{slide.tutor}</span>
                <StartRating rating={4.5}/>
                <div>
                  <span className="font-bold pr-3">S/{slide.precio_oferta}</span>
                  <span className="font-medium text-gray-400 line-through">S/{slide.precio_normal}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
