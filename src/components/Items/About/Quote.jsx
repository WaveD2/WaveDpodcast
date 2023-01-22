import React from "react";
import styled from "styled-components";
import logo from "../../../asset/logoPng.png";
import start from "../../../asset/star.png";
import xoay from "../../../asset/Vector 4.png";
import icons from "../../../util/icons";

const { BsSpotify } = icons;

const Quotes = ({ title }) => {
  return (
    <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
      <Quote>
        <h5>{title}</h5>
        <Wrapper>
          <User>
            <img src={logo} alt="avatar" />
            <span>Dang Tung</span>
          </User>
          <Work>
            <BsSpotify />
            <h6>Social Community Manager</h6>
          </Work>
        </Wrapper>

        <Pos>
          <img src={xoay} alt="note" />
          <img src={start} alt="note" />
        </Pos>
      </Quote>
    </div>
  );
};

export default Quotes;

const Quote = styled.div`
  position: relative;
  background: #f7ede8;
  border-radius: 8px;
  padding: 40px 0 20px;
`;

const Pos = styled.div`
  img {
    position: absolute;
  }
  img:first-child {
    width: 120px;
    height: 120px;
    left: -60px;
    top: 40px;
  }
  img:last-child {
    width: 140px;
    height: 140px;
    right: -50px;
    top: -50px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 30px 14px 30px 0px;
  img {
    height: 50px;
    width: 50px;
    object-fit: cover;
  }
  span {
    font-family: "Montserrat Alternates";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    color: #000000;
  }
`;
const Work = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    width: 16px;
    height: 16px;
    color: #1ed760;
  }
`;
