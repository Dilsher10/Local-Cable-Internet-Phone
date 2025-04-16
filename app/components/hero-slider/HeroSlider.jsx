'use client'
import React from 'react'
import Swiper from "../Swiper/Swiper";
import SwiperSlide from "../Swiper/SwiperSlide";
import Image from "next/image";
import img from "../../assets/images/resources-slider-1.jpg";
import tabletImg from "../../assets/images/resource-slider-tablet.png";
import mobileImg from "../../assets/images/resource-slider-mobile.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const HeroSlider = () => {
  return (
    <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="resources-slider"
      >
        <SwiperSlide>
          <Image className="desktopImg" src={img} alt="slide" />
          <Image className="tabletImg" src={tabletImg} alt="tabletSlide" />
          <Image className="mobileImg" src={mobileImg} alt="mobileSlide" />
          <div className="resources-slide-content">
            <h4 className="heading">
              Best TV Service Providers for 2024: Plans, Prices, and More
            </h4>
            <div className="metadata">
              <p>by Randy Harward Jan 1, 2023 | Best Of, Featured, Reviews</p>
              {/* <p className="writer-name">by Randy Harward</p>
              <p className="date">Jan 1, 2023</p>
              <div className="categories">
                <p>Best Of</p>
                <p>Featured</p>
                <p>Reviews</p>
              </div> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="desktopImg" src={img} alt="slide" />
          <Image className="tabletImg" src={tabletImg} alt="tabletSlide" />
          <Image className="mobileImg" src={mobileImg} alt="mobileSlide" />
          <div className="resources-slide-content">
            <h4 className="heading">
              Best TV Service Providers for 2024: Plans, Prices, and More
            </h4>
            <div className="metadata">
              <p>by Randy Harward Jan 1, 2023 | Best Of, Featured, Reviews</p>
              {/* <p className="writer-name">by Randy Harward</p>
              <p className="date">Jan 1, 2023</p>
              <div className="categories">
                <p>Best Of</p>
                <p>Featured</p>
                <p>Reviews</p>
              </div> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="desktopImg" src={img} alt="slide" />
          <Image className="tabletImg" src={tabletImg} alt="tabletSlide" />
          <Image className="mobileImg" src={mobileImg} alt="mobileSlide" />
          <div className="resources-slide-content">
            <h4 className="heading">
              Best TV Service Providers for 2024: Plans, Prices, and More
            </h4>
            <div className="metadata">
              <p>by Randy Harward Jan 1, 2023 | Best Of, Featured, Reviews</p>
              {/* <p className="writer-name">by Randy Harward</p>
              <p className="date">Jan 1, 2023</p>
              <div className="categories">
                <p>Best Of</p>
                <p>Featured</p>
                <p>Reviews</p>
              </div> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="desktopImg" src={img} alt="slide" />
          <Image className="tabletImg" src={tabletImg} alt="tabletSlide" />
          <Image className="mobileImg" src={mobileImg} alt="mobileSlide" />
          <div className="resources-slide-content">
            <h4 className="heading">
              Best TV Service Providers for 2024: Plans, Prices, and More
            </h4>
            <div className="metadata">
              <p>by Randy Harward Jan 1, 2023 | Best Of, Featured, Reviews</p>
              {/* <p className="writer-name">by Randy Harward</p>
              <p className="date">Jan 1, 2023</p>
              <div className="categories">
                <p>Best Of</p>
                <p>Featured</p>
                <p>Reviews</p>
              </div> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="desktopImg" src={img} alt="slide" />
          <Image className="tabletImg" src={tabletImg} alt="tabletSlide" />
          <Image className="mobileImg" src={mobileImg} alt="mobileSlide" />
          <div className="resources-slide-content">
            <h4 className="heading">
              Best TV Service Providers for 2024: Plans, Prices, and More
            </h4>
            <div className="metadata">
              <p>by Randy Harward Jan 1, 2023 | Best Of, Featured, Reviews</p>
              {/* <p className="writer-name">by Randy Harward</p>
              <p className="date">Jan 1, 2023</p>
              <div className="categories">
                <p>Best Of</p>
                <p>Featured</p>
                <p>Reviews</p>
              </div> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="desktopImg" src={img} alt="slide" />
          <Image className="tabletImg" src={tabletImg} alt="tabletSlide" />
          <Image className="mobileImg" src={mobileImg} alt="mobileSlide" />
          <div className="resources-slide-content">
            <h4 className="heading">
              Best TV Service Providers for 2024: Plans, Prices, and More
            </h4>
            <div className="metadata">
              <p>by Randy Harward Jan 1, 2023 | Best Of, Featured, Reviews</p>
              {/* <p className="writer-name">by Randy Harward</p>
              <p className="date">Jan 1, 2023</p>
              <div className="categories">
                <p>Best Of</p>
                <p>Featured</p>
                <p>Reviews</p>
              </div> */}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
  )
}

export default HeroSlider