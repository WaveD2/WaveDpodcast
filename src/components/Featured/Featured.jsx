import React from "react";
import Button from "../Button/Button";
import styled from "styled-components";

const Featured = ({ text, title, des, active }) => {
  return (
    <Content>
      <h2>
        {text} <p>{title}</p>
      </h2>
      <h6>{des}</h6>
      {active && <Button style={"active"} text={"SUBSCRIBE"} />}
    </Content>
  );
};

export default Featured;

const Content = styled.div`
  width: max-content;
  margin: 70px auto;
  text-align: center;
  h2 {
    font-family: "Montserrat Alternates";
    font-style: normal;
    font-weight: 700;
    font-size: 96px;
    line-height: 100%;
    color : var( --black-color)
    letter-spacing: -0.04em;

    p {
      text-align: center;
      color: var(--orange-color);
    }
  }

 h6{
  max-width : 766px;
margin:40px 0;
font-family: 'Montserrat Alternates';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 160%;
text-align: center;
color: #4D4D4D;
  }

`;
