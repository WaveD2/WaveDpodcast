import React from "react";
import styled from "styled-components";
import icons from "../../util/icons";
import { dataPageAbout } from "../../data";

const { ImYoutube, BsSpotify, SiTiktok, AiOutlineInstagram } = icons;

const AboutListen = () => {
  return (
    <Wrapper>
      <section>
        <h4>What our listeners say</h4>
        <p>Their experience throughout every platform</p>
        <div>
          <img
            src="https://i.pinimg.com/236x/59/47/2d/59472d4c2162cda33a150eb8ea902f3e.jpg"
            alt="ảnh"
          />
        </div>
      </section>

      <section>
        <h4>Founder and Main Host</h4>
        <Boxs>
          {dataPageAbout[1].listen?.map((item, index) => (
            <div key={index}>
              <img src={item.img} alt="ảnh" />
              <Content>
                <img
                  src={item.icon}
                  alt="ảnh"
                  style={{
                    width: "130px",
                    height: "130px",
                    position: "absolute",
                    top: "-150px",
                    right: "0px",
                    transform: "rotate(45deg)",
                  }}
                />
                <label>
                  <span>{item.number}</span>
                  <h5>{item.title}</h5>
                  <p>{item.des}</p>
                </label>
                <label>
                  <span>{item.text}</span>
                  <>
                    <ImYoutube size={22} style={{ color: "red" }} />
                    <BsSpotify size={20} style={{ color: "green" }} />
                    <SiTiktok size={20} style={{ color: "black" }} />
                    <AiOutlineInstagram size={22} style={{ color: "orange" }} />
                  </>
                </label>
              </Content>
            </div>
          ))}
        </Boxs>
      </section>
    </Wrapper>
  );
};

export default AboutListen;

const Wrapper = styled.div`
  h4 {
    font-family: "Montserrat Alternates";
  }
  p {
    font-family: "Montserrat Alternates";
    font-style: normal;
    font-weight: 500;
    font-size: 22.65px;
    line-height: 160%;
    text-align: center;
    color: #4d4d4d;
  }
  div {
    width: 1140px;
    height: 540px;
    margin: 12px auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
      border-radius: 8px;
    }
  }
`;

const Boxs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  div {
    position: relative;
    display: flex;
    align-items: center;
    gap: 14px;
    width: 500px;
    height: 480px;
    padding: 6px;
    background: #ffffff;
    border: 2px solid #000000;
    border-radius: 8px;
    transition: 0.5s;

    &:hover {
      box-shadow: 10px 10px 0px #000000;
    }
    img {
      width: 50%;
      object-fit: cover;
    }
  }
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 140px;
  position: relative;

  label {
    h5 {
      margin: 20px 0;
      font-size: 20px;
      text-align: left;
    }
    p {
      text-align: left;
      font-size: 14px;
      margin-bottom: 30px;
    }
  }

  label:last-child {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      font-family: "Montserrat Alternates";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 160%;
      color: #4d4d4d;
    }
    svg {
      cursor: pointer;
    }
  }
`;
