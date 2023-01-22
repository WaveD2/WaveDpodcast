import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import icons from "../../../asset/Scribble.png";

import styled from "styled-components";
import ItemsTestimonials from "./ItemsTestimonials";
import { dataTestimonials } from "../../../data";
const Testimonials = ({ active, title, des }) => {
  return (
    <Wrapper id="Testimonials">
      {active && (
        <Icons>
          <img src={icons} alt="" />
          <img src={icons} alt="" />
        </Icons>
      )}
      <h4>{title}</h4>
      <h6>{des}</h6>
      <Box>
        <Swiper
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper">
          <SwiperSlide>
            {dataTestimonials?.map((item, index) => (
              <ItemsTestimonials
                img={item.img}
                name={item.name}
                des={item.des}
              />
            ))}
          </SwiperSlide>
        </Swiper>
      </Box>
    </Wrapper>
  );
};

export default Testimonials;

const Wrapper = styled.div`
  position: relative;
  padding: 20px 0;
  background: #edf3f7;
`;
const Box = styled.div`
  max-width: 1160px;
  margin: 20px auto;

  .swiper-slide {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
const Icons = styled.div`
  img {
    position: absolute;
    height: 75px;
    z-index: 10;
  }
  img:first-child {
    top: -40px;
    left: 50%;
  }
  img:last-child {
    bottom: -40px;
    left: 50%;
  }
`;
