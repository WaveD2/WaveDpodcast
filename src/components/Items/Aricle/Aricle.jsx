import React from "react";
import Title from "../../Title/Title";
import styled from "styled-components";
import { dataArticle } from "../../../data";
import icon from "../../../asset/Scribble (1).png";
import start from "../../../asset/Star (1).png";
import ItemArticle from "./ItemAricle";
import Button from "../../Button/Button";
import IconConnect from "../../IconConnect/IconConnect";

const Article = () => {
  return (
    <Wrapper id="Pricing">
      <IconConnect />
      <Title title="Article and News" des="News, tips, tricks and more" />

      <Container>
        {dataArticle?.map((item, index) => (
          <ItemArticle
            img={item.img}
            title={item.title}
            des={item.des}
            text={item.text}
            hashtag={item.hashtag}
            date={item.date}
          />
        ))}
        <Icons>
          <img src={start} alt="" />
          <img src={icon} alt="" />
        </Icons>
      </Container>

      <Button text={"BROWSE ALL"} />
    </Wrapper>
  );
};

export default Article;

const Wrapper = styled.div`
  background: #f7ede8;
  padding: 40px 0;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1160px;
  margin: 40px auto;
  gap: 20px;
  position: relative;
`;

const Icons = styled.div`
  img {
    position: absolute;
    height: 100px;
  }
  img:first-child {
    top: -44px;
    left: -50px;
    transform: rotate(21.97deg);
  }
  img:last-child {
    bottom: -48px;
    right: -42px;
    transform: rotate(135deg);
  }
`;
