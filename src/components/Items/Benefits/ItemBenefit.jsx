import React from "react";
import styled from "styled-components";

const ItemBenefit = ({ img, title, des }) => {
  return (
    <Box>
      <img src={img} alt="ảnh" />
      <h6>{title}</h6>
      <p>{des}</p>
    </Box>
  );
};

export default ItemBenefit;
const Box = styled.div`
  width: 356px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;

  img {
    width: 78px;
    height: 78px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  p {
    font-family: "Montserrat Alternates";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    text-align: center;
    color: #000000;
    margin-top: 30px;
  }
`;
