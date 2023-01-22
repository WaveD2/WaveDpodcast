import React from "react";
import styled from "styled-components";
import Button from "../../Button/Button";

const Price = ({ title, des, price }) => {
  return (
    <Box>
      <h5>{title}</h5>
      <h7>{des}</h7>
      <div>
        <Button text={"SUBSCRIBE"} />
        <section>
          <h6>{price}</h6>
          <p>/month</p>
        </section>
      </div>
    </Box>
  );
};

export default Price;

const Box = styled.div`
  width: 320px;
  padding: 24px;
  background: #ffffff;
  border: 1.5px solid #000000;
  border-radius: 8px;
  text-align: left;

  &:nth-child(2) {
    background: #f7ede8;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 10px;
    section {
      h6 {
        color: #cd4631;
      }
    }
  }
`;
