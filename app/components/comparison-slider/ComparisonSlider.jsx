'use client';
import React from "react";
import Image from "next/image";
import "./comparison-slider.scss";
import img from "../../assets/images/spectrum-directtv.jpg";
import Swiper from "../Swiper/Swiper";
import SwiperSlide from "../Swiper/SwiperSlide"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const ComparisonSlider = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 170,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{clickable:true}}
      navigation={true}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="comparison-slider"
    >
      <SwiperSlide>
        <Image src={img} alt="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img} alt="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img} alt="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img} alt="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img} alt="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img} alt="slide" />
      </SwiperSlide> 
    </Swiper>
  );
};

export default ComparisonSlider;
