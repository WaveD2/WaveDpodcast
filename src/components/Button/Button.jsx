import React from "react";
import styled from "styled-components";

const Button = ({ text }) => {
  return <Btn>{text}</Btn>;
};

export default Button;

const Btn = styled.div`
  width: max-content;
  margin: 0 auto;
  padding: 12px 24px;
  border: 2px solid #000000;
  border-radius: 8px;
  cursor: pointer;
  font-family: "Montserrat Alternates";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  color: #4d4d4d;

  &:hover {
    background: #000000;
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    color: #fff;
  }
`;
