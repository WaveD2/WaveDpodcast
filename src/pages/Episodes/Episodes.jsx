import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";
import ItemRecent from "../../components/Items/Recent/ItemRecent";
import Product from "../../components/Slider/Product";
import Button from "../../components/Button/Button";
import Latest from "./Latest";

const Episodes = () => {
  return (
    <>
      <div style={{ background: "  var(--blue-bg)" }}>
        <Navbar />
        <Box>
          <Product
            img={
              "https://i.pinimg.com/564x/ca/13/58/ca1358dfa0c2b33c399e4453055083cf.jpg"
            }
            text={"Perplexed Mind"}
          />
          <section>
            <div>
              <h5>Are you a Perplexed Mind Person?</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud.
              </p>
            </div>
            <section
              style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <Button text={"SUBSCRIBE"} />
              <Button text={"LISTEN NOW (46 min)"} />
            </section>
          </section>
        </Box>
      </div>

      <Latest />
    </>
  );
};

export default Episodes;

const Box = styled.div`
  max-width: 1160px;
  height: 70vh;
  margin: 30px auto 0;
  display: flex;
  justify-content: center;
  gap: 80px;

  & > section {
    width: 50%;
    div {
      margin-top: 30px;
      h5 {
        text-align: left !important ;
        padding: 14px 0;
        border-bottom: 1px solid #ccc;
      }
      p {
        font-family: "Montserrat Alternates";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 160%;
        color: #4d4d4d;
        padding: 14px 0 30px;
      }
    }
  }
`;
