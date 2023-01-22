import React from "react";
import styled from "styled-components";
import { dataBenefits } from "../../../data";
import ItemBenefit from "./ItemBenefit";
import Button from "../../Button/Button";
import icon from "../../../asset/Scribble (1).png";
import Title from "../../Title/Title";

const Benefits = () => {
  return (
    <Wrapper id="Benefits">
      <img src={icon} alt="icon" />
      <Title
        title={"Membership benefits"}
        des={"Become our sponsor and get all benefits"}
      />

      <Container>
        {dataBenefits?.map((item, index) => (
          <ItemBenefit title={item.title} img={item.img} des={item.des} />
        ))}
      </Container>

      <Button text={"SEE PRICING"} />
    </Wrapper>
  );
};

export default Benefits;

const Wrapper = styled.div`
  position: relative;
  padding: 40px 0;
  background: #fff;

  & > img {
    position: absolute;
    top: 10px;
    right: 300px;
    width: 100px;
    height: 100px;
    transform: rotate(15deg);
  }
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1160px;
  margin: 40px auto;
  justify-content: space-between;
`;
