import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import styled from "styled-components";
import Product from "./Product";

import { dataSlider } from "../../data";
const Slider = () => {
  return (
    <Boxs>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper">
        {dataSlider?.map((slide, index) => (
          <SwiperSlide>
            <Product img={slide.img} text={slide.text} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Boxs>
  );
};

export default Slider;
const Boxs = styled.div`
  margin: 20px 70px;
  border-radius: 12px;
`;
