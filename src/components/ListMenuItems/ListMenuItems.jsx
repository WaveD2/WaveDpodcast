import React from "react";
import styled from "styled-components";

const ListMenuItems = ({ title, meneItems }) => {
  return (
    <Wrapper>
      <h5>{title}</h5>
      <ul>
        {meneItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default ListMenuItems;

const Wrapper = styled.div`
  h5 {
    padding: 40px 0;
  }
  & > ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    li {
      list-style: none;
      font-family: "Montserrat Alternates";
      font-style: normal;
      font-weight: 500;
      font-size: 22.65px;
      line-height: 160%;
      color: #4d4d4d;
      &:hover {
        color: #cd4631;
      }
    }
  }
`;
