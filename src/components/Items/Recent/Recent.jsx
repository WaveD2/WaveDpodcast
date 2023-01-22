import React from "react";
import Title from "../../Title/Title";
import styled from "styled-components";
import { dataRecent } from "../../../data";

import ItemRecent from "./ItemRecent";
import Button from "../../Button/Button";
import IconConnect from "../../IconConnect/IconConnect";

const Recent = () => {
  return (
    <Wrapper id="Episodes">
      <IconConnect />

      <Title
        title={"Recent Episodes"}
        des={"Available on your favorite platform"}
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

      <Button text={"BROWSE ALL EPISODES"} />
    </Wrapper>
  );
};

export default Recent;
const Wrapper = styled.div`
  position: relative;
  padding: 40px 0;
  background: #f7ede8;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1160px;
  margin: 40px auto;
  justify-content: space-between;
  gap: 14px;
`;
