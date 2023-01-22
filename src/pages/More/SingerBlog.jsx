import React from "react";
import Header from "../../components/Header/Header";
import { dataSingerBlog } from "../../data";
import Button from "../../components/Button/Button";
import styled from "styled-components";
import icons from "../../util/icons";
import Quotes from "../../components/Items/About/Quote";
import Article from "../../components/Items/Aricle/Aricle";
import Footer from "../../components/Footer/Footer";

const { ImYoutube, BsSpotify, SiTiktok, AiOutlineInstagram, AiOutlineTwitter } =
  icons;
const SingerBlog = () => {
  return (
    <Wrapper>
      <Box style={{ position: "relative", paddingBottom: "30px" }}>
        <Header text={"Doodle Artwork 101"} title={"TIPS & TRICKS"} />
        <section>
          {dataSingerBlog[0].btn.map((item, index) => (
            <Button text={item} key={index} />
          ))}
        </section>

        <section>
          <ImYoutube size={22} style={{ color: "#ff0000" }} />
          <BsSpotify size={20} style={{ color: "#1ed760" }} />
          <SiTiktok size={20} style={{ color: "black" }} />
          <AiOutlineInstagram size={20} style={{ color: "pink" }} />
          <AiOutlineTwitter size={22} style={{ color: "#19a4ff" }} />
        </section>
      </Box>

      <div style={{ padding: "60px 0px 30px", borderTop: "1px solid #ccc" }}>
        <Quotes title={"Quote example goes in here..."} />
      </div>

      <Article />

      <Footer />
    </Wrapper>
  );
};

export default SingerBlog;

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const Box = styled.div`
  & > section {
    position: absolute;
    bottom: 20%;
    left: 38%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  & > section:last-child {
    left: 45%;
    bottom: 10%;

    svg:hover {
      cursor: pointer;
      transform: scale(1.3);
    }
  }
`;
