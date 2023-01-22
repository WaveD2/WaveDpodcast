import React from "react";
import styled from "styled-components";

const ItemArticle = ({ img, title, des, text, hashtag, date }) => {
  return (
    <Box>
      <img src={img} alt="img" />
      <h7>{title}</h7>
      <h5>{text}</h5>
      <p>{des}</p>
      <div>
        <Hashtag>
          {hashtag?.map((text, index) => (
            <button key={index}>{text}</button>
          ))}
        </Hashtag>

        <label>
          <p>{date}</p>
        </label>
      </div>
    </Box>
  );
};

export default ItemArticle;

const Box = styled.div`
  width: 570px;
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 8px;
  padding: 12px;
  transition: 0.4s;
  &:hover {
    box-shadow: 10px 10px 0px #000000;

    h5 {
      color: #cd4631;
    }
  }

  img {
    width: 538px;
    height: 320px;
    border-radius: 8px;
    object-fit: cover;
    margin: 0 auto 12px;
  }

  p {
    font-family: "Montserrat Alternates";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    color: #4d4d4d;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;

    label {
      p {
        padding-bottom: 0;
      }
    }
  }
`;
const Hashtag = styled.div`
  button {
    outline: none;
    padding: 6px 12px;
    border: 1px solid #4d4d4d;
    border-radius: 4px;
    margin-right: 8px;
    cursor: pointer;
    font-family: "Montserrat Alternates";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 160%;
    color: #4d4d4d;

    &:hover {
      background: #ccc;
    }
  }
`;
