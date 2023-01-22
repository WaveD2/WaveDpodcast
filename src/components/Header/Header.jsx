import React from "react";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
import Button from "../Button/Button";
import Slider from "../Slider/Slider";
import Scribble from "../../asset/Scribble.png";
import Shining from "../../asset/Shining stars.png";
import Featured from "../Featured/Featured";

const Header = ({ active, text, title, des }) => {
  return (
    <Head>
      <Navbar />
      <Featured text={text} title={title} des={des} active={active} />
      <Icons>
        <img src={Scribble} alt="icon" />
        <img src={Shining} alt="icon" />
      </Icons>
      {active && <Slider />}
    </Head>
  );
};

export default Header;

const Head = styled.div`
  background: var(--pink-bg);
  overflow: hidden;
  position: relative;
  min-height: 100vh;
`;

const Icons = styled.div`
  img {
    position: absolute;
  }
  img:first-child {
    top: 200px;
    left: 14px;
    width: 200px;
    height: 300px;
    object-fit: contain;
    transform: rotate(20deg);
  }
  img:last-child {
    right: 40px;
    top: 150px;
    width: 100px;
    height: 150px;
  }
`;
