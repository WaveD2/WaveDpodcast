import React from "react";
import styled from "styled-components";
import note from "../../../asset/“.png";

const ItemsTestimonials = ({ img, name, des }) => {
  return (
    <Content>
      <div>
        <img src={note} alt="icons" />
      </div>
      <h6>{des}</h6>
      <div>
        <img src={img} alt="avatar" />
        <h7>{name}</h7>
      </div>
    </Content>
  );
};

export default ItemsTestimonials;
const Content = styled.div`
  background: #ffffff;
  border-radius: 8px;
  width: 490px;
  padding: 20px;

  h6 {
    text-align: left;
  }
  div:first-child {
    width: 48px;
    height: 48px;
    margin: 20px 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  div:last-child {
    display: flex;
    align-items: center;
    margin: 20px 0;
    gap: 12px;
    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`;
