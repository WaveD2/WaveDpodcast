import React from "react";
import styled from "styled-components";
import ItemRecent from "../../components/Items/Recent/ItemRecent";
import { dataRecent } from "../../data";
import Footer from "../../components/Footer/Footer";
import ListMenuItems from "../../components/ListMenuItems/ListMenuItems";

const Latest = () => {
  return (
    <Wrapper>
      <ListMenuItems
        title={"Latest Episode"}
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
        {dataRecent?.map((item, index) => (
          <ItemRecent
            imgL={item.imgL}
            imgM={item.imgM}
            title={item.title}
            des={item.des}
            order={item.order}
            hashtag={item.hashtag}
            content={item.content}
            key={index}
          />
        ))}
      </Container>

      <Footer />
    </Wrapper>
  );
};

export default Latest;

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

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1160px;
  margin: 40px auto 70px;
  justify-content: space-between;
  gap: 14px;
`;
