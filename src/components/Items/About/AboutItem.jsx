import React from "react";
import styled from "styled-components";
import think from "../../../asset/think.png";
import light from "../../../asset/light.png";
import note from "../../../asset/“.png";
import Quotes from "./Quote";

const AboutItem = () => {
  return (
    <Boxs id="About">
      <Note>
        <img src={note} alt="note" />
      </Note>

      <h4>Talk. Listen. Get inspired by every minute of it.</h4>
      <Box>
        <Item>
          <img src={think} alt="img" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio.
          </p>
        </Item>
        <Item>
          <img src={light} alt="img" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio.
          </p>
        </Item>
      </Box>

      <Quotes
        title={
          "One of the best daily podcasts that covers every topic on Spotify."
        }
      />
    </Boxs>
  );
};

export default AboutItem;

const Boxs = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 20px 0;
`;
const Note = styled.div`
  width: 48px;
  margin: 0px auto;

  img {
    width: 100%;
    object-fit: cover;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 175px;
    height: 175px;
    object-fit: cover;
    margin: 30px auto;
  }
  p {
    margin: 20px 0;
    width: 472px;
    font-family: "Montserrat Alternates";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    text-align: center;
    color: #000000;
  }
`;
