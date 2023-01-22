/* eslint-disable react/style-prop-object */
import React from "react";
import logo from "../../asset/logoPng.png";
import styled from "styled-components";
import icons from "../../util/icons";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const { AiOutlineDown } = icons;
const Navbar = () => {
  return (
    <Wrapper>
      <Logo>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </Logo>
      <MenuNav>
        <Link to="/episodes">
          <li>Episodes</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Nav>
          More
          <span>
            <AiOutlineDown size={16} />
          </span>
          <ul>
            <Link to="/blog">
              <li>Blog</li>
            </Link>
            <Link to="/singerBlog">
              <li>SingerBlog</li>
            </Link>
          </ul>
        </Nav>
      </MenuNav>

      <Nav>
        <Button text={"RECENT EPISODES"} />
        <Button text={"SUBSCRIBE"} />
      </Nav>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  a {
    text-decoration: none;
  }
`;

const Logo = styled.div`
  height: 70px;
  width: 70px;

  img {
    padding: 2px;
    border-radius: 999px;
    border: 1px solid var(--black-color);
    height: 100%;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

const MenuNav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;

  li {
    list-style: none;
    font-size: var(--body-size);
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    color: var(--black-color);
    cursor: pointer;
  }
`;

const Nav = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;

  &:hover ul {
    display: flex;
  }
  ul {
    position: absolute;
    display: none;
    flex-direction: column;
    bottom: -66px;
    left: -10px;
    li {
      padding: 4px 8px;
      border-radius: 4px;
    }
    li:hover {
      background: #ccc;
    }
  }
`;
