import React from "react";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import { dataPageAbout } from "../../data";
import AboutListen from "./AboutListen";
import Testimonials from "../../components/Items/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";
import Form from "./Form";

const About = () => {
  return (
    <Wrapper>
      <Header
        text={"About"}
        title={"Pod of Cast"}
        des={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,eiusmod tempor in labore et dolore magna aliqua. Ut enim ad minim veniam–quis."
        }
      />
      <Boxs>
        {dataPageAbout[0].header?.map((item, index) => (
          <div>
            <h4>{item.number}</h4>
            <p>{item.des}</p>
          </div>
        ))}
      </Boxs>

      <AboutListen />

      <Testimonials
        title={"Our Sponsor"}
        des={"Our current official sponsor"}
      />

      <Form />

      <Footer />
    </Wrapper>
  );
};

export default About;
const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  header {
    height: 100vh;
  }
`;
const Boxs = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  gap: 10px;
  bottom: 46px;
  div {
    width: 300px;
    background: #ffffff;
    border: 1.5px solid #000000;
    border-radius: 8px;
    padding: 40px;

    &:hover {
      box-shadow: 6px 6px 0px #cd4631;
    }
    &:hover h4 {
      color: #cd4631;
    }

    h4 {
      width: 100%;
    }
    p {
      margin: 14px auto;
      font-family: "Montserrat Alternates";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 160%;
      color: #4d4d4d;
    }
  }
`;
