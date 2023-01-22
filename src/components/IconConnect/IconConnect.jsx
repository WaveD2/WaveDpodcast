import React from "react";
import icons from "../../asset/Scribble.png";
import styled from "styled-components";

const IconConnect = () => {
  return (
    <Icons>
      <img src={icons} alt="" />
      <img src={icons} alt="" />
    </Icons>
  );
};

export default IconConnect;
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
