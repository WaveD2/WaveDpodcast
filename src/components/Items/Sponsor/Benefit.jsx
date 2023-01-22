import React from "react";
import styled from "styled-components";

const Benefit = ({ text }) => {
  return (
    <Benefits>
      <h7>What’s included:</h7>
      <ul>
        {text?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Benefits>
  );
};

export default Benefit;

const Benefits = styled.div`
  width: 320px;
  padding: 40px;
  background: #ffffff;
  border: 1.5px solid #000000;
  border-radius: 8px;
  text-align: left;

  &:nth-child(2) {
    background: #f7ede8;
  }

  ul {
    li {
      font-family: "Montserrat Alternates";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 160%;
      color: #000000;
      margin: 10px 0;
    }
  }
`;
