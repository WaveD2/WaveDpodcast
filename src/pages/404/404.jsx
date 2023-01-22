import React from "react";
import styled from "styled-components";
import ellipse from "../../asset/Ellipse 1.png";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const PageError = () => {
  return (
    <div
      style={{
        maxWidth: "1440px",
        height: "100vh",
        background:
          "linear-gradient(180deg, #384C65 0%, rgba(76, 125, 155, 0.94375) 69.27%, #6DCFF6 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Box>
        <span>
          4 <img src={ellipse} alt="" /> 4
        </span>
      </Box>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          fontSize: "28px",
          color: "color: #F5F5F5",
          fontWeight: 700,
        }}>
        <Button text={"Go Home"} />
      </Link>
    </div>
  );
};

export default PageError;

const Box = styled.div`
  span {
    font-family: "ABeeZee";
    font-style: normal;
    font-weight: 400;
    font-size: 250px;
    line-height: 296px;
    letter-spacing: 0.3em;
    color: #f7d87a;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  a {
    list-style: none;
    text-decoration: none;
    font-size: 20px;
  }
`;
