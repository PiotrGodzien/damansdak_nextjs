
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);

export default function SwiperCarousel() {
  return (
    <div>
      <Swiper slidesPerView={1} loop={true} pagination={{"clickable":true}} speed={800} className="mySwiper" transitionTime autoplay={{"delay":2500, "disableOnInteraction":true}}>
        <SwiperSlide>
          <img className="object-cover w-full h-screen" src="https://damansdak.s3.eu-central-1.amazonaws.com/blonie_realizacja.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="object-cover w-full h-screen" src="https://damansdak.s3.eu-central-1.amazonaws.com/lublin_realizacja.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="object-cover w-full h-screen" src="https://damansdak.s3.eu-central-1.amazonaws.com/ruda_slaska_realizacja.jpeg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
} ;