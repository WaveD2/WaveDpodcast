import React from "react";
import Header from "../../components/Header/Header";
import ListMenuItems from "../../components/ListMenuItems/ListMenuItems";
import styled from "styled-components";
import icons from "../../util/icons";
import { dataBlogLatest } from "../../data";
import ItemArticle from "../../components/Items/Aricle/ItemAricle";
import Footer from "../../components/Footer/Footer";

const { AiOutlineSearch } = icons;
const Blog = () => {
  return (
    <Wrapper>
      <div style={{ position: "relative" }}>
        <Header
          text={"Article and "}
          des={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis."
          }
          title={"News"}
        />
        <label for="search">
          <AiOutlineSearch
            size={20}
            style={{
              position: "absolute",
              bottom: "0px",
              left: "31%",
              zIndex: 10,
            }}
          />
        </label>
        <input placeholder="Search" type="text" id="search" />
      </div>

      <ListMenuItems
        title={"Latest Posts"}
        meneItems={[
          "All",
          "Business",
          "Comedy",
          "Education",
          "Health",
          "News",
          "Tech",
        ]}
      />
      <Container>
        {dataBlogLatest?.map((item, index) => (
          <ItemArticle
            img={item.img}
            title={item.title}
            des={item.des}
            text={item.text}
            hashtag={item.hashtag}
            date={item.date}
          />
        ))}
      </Container>

      <Footer />
    </Wrapper>
  );
};

export default Blog;

const Wrapper = styled.div`
  input {
    position: absolute;
    bottom: -20px;
    left: 30%;
    padding: 16px 20px 16px 50px;
    margin: 0 auto;
    width: 570px;
    background: #ffffff;
    border: 1.5px solid #000000;
    border-radius: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;

    &:hover {
      box-shadow: 6px 6px 0px #81adc8;
    }
  }
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
