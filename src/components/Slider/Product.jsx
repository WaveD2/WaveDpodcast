import React from "react";
import styled from "styled-components";
import icons from "../../util/icons";

const { ImYoutube, BsSpotify } = icons;
const Product = ({ img, text }) => {
  return (
    <Box>
      <img src={img} alt="images" />
      <Icons>
        <ImYoutube size={24} />
        <BsSpotify size={24} />
      </Icons>

      <Text>{text}</Text>
    </Box>
  );
};

export default Product;

const Box = styled.div`
  width: 373px;
  height: 373px;
  border-radius: 12px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 12px;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

const Icons = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: #ccc;
`;

const Text = styled.div`
  position: absolute;
  left: 20px;
  top: 309px;

  font-family: "Montserrat Alternates";
  font-style: normal;
  font-weight: 700;
  font-size: var(--h2-size);
  line-height: 120%;

  letter-spacing: -0.08em;
  font-feature-settings: "liga" off;

  color: var(--text-color);
`;
