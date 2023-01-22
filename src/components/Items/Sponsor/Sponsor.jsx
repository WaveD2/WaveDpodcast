import React from "react";
import Title from "../../Title/Title";
import styled from "styled-components";
import { dataBenefit, dataPrice } from "../../../data";
import Price from "./Price";
import Benefit from "./Benefit";

const Sponsor = () => {
  return (
    <Wrapper id="Episodes">
      <Title
        title={"Become our sponsor"}
        des={"Get exclusive episodes, merch and more"}
      />

      <Container>
        {dataPrice?.map((item, index) => (
          <Price
            title={item.title}
            des={item.des}
            price={item.price}
            key={index}
          />
        ))}
        {dataBenefit?.map((item, index) => (
          <Benefit text={item.title} key={index} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default Sponsor;
const Wrapper = styled.div`
  position: relative;
  padding: 40px 0;
  background: #ffffff;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1160px;
  margin: 40px auto;
  gap: 10px;
`;
