import React from "react";
import styled from "styled-components";

const ItemRecent = ({ imgL, imgM, title, des, order, hashtag, content }) => {
  return (
    <Boxs>
      <Box1>
        <img src={imgL} alt="img" />
        <div>
          <section>
            <span>{order}</span>
            <h6>{title}</h6>
          </section>
          <p>{des}</p>
        </div>
      </Box1>
      <Box2>
        <Hashtag>
          {hashtag?.map((text, index) => (
            <button key={index}>{text}</button>
          ))}
        </Hashtag>
        <Viewer>
          <span>{content}</span>

          {imgM?.map((img, index) => (
            <img src={img} alt="img" key={index} />
          ))}
        </Viewer>
      </Box2>
    </Boxs>
  );
};

export default ItemRecent;
const Boxs = styled.div`
  width: 530px;
  padding: 20px;
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 12px;

  &:hover {
    box-shadow: 10px 10px 0px #81adc8;
  }
`;
const Box1 = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  img {
    width: 166px;
    height: 166px;
    object-fit: cover;
    border-radius: 8px;
  }

  div {
    width: max-content;

    section {
      span {
        font-family: "Montserrat Alternates";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 160%;
        color: #cd4631;
      }
      h6 {
        text-align: left;
      }
    }
    p {
      font-family: "Montserrat Alternates";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 160%;
      color: #4d4d4d;
      margin: 20px 0;
    }
  }
`;
const Box2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
const Viewer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;

  span {
    font-family: "Montserrat Alternates";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 160%;
    color: #4d4d4d;
  }
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  img:last-child {
    position: absolute;
    left: 94px;
  }
`;
