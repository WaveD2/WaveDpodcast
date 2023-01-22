import React from "react";
import styled from "styled-components";
import Title from "../Title/Title";
import Button from "../Button/Button";
import icons from "../../util/icons";
import Home from "../../asset/Home.png";
import logo from "../../asset/logoPng.png";
import Play from "../../asset/play.png";
import Youtube from "../../asset/Youtube.png";
import Spotify from "../../asset/Spotify.png";
import Podcast from "../../asset/Google Podcast.png";

const {
  BsSpotify,
  ImYoutube,
  SiTiktok,
  AiOutlineInstagram,
  AiOutlineTwitter,
  IoLogoGooglePlaystore,
  IoLogoAppleAppstore,
} = icons;

const Footer = () => {
  return (
    <div>
      <Top>
        <section>
          <Title title={"Available now Pod of Cast App"} />
        </section>
        <Button text={"DOWNLOAD NOW"} />

        <Work>
          <p>Content also available on:</p>
          <div>
            <BsSpotify size={24} />
            <ImYoutube size={24} />
          </div>
        </Work>

        <Icons>
          <img src={Home} alt="" />
          <img src={Play} alt="" />
        </Icons>
      </Top>
      <Bottom>
        <Menu>
          <section>
            <img src={logo} alt="logo" />
          </section>
          <section>
            <ul>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#Features">Features</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#Episodes">Episodes</a>
              </li>
              <li>
                <a href="#Pricing">Pricing</a>
              </li>
              <li>
                <a href="#Blog">Blog</a>
              </li>
            </ul>
          </section>
          <label>
            <p>Listen to episodes on your fav platform:</p>
            <Product>
              <img src={Youtube} alt="" />
              <img src={Podcast} alt="" />
              <img src={Spotify} alt="" />
            </Product>
          </label>
        </Menu>
        <Menu>
          <Icons>
            <span>
              <SiTiktok size={20} />
            </span>
            <span>
              <AiOutlineInstagram size={22} />
            </span>
            <span>
              <AiOutlineTwitter size={22} />
            </span>
          </Icons>
          <div>
            <p>App available on:</p>
            <Icons>
              <label>
                <IoLogoAppleAppstore size={30} />
              </label>
              <label>
                <IoLogoGooglePlaystore size={30} />
              </label>
            </Icons>
          </div>
        </Menu>
      </Bottom>
    </div>
  );
};

export default Footer;

const Top = styled.div`
  position: relative;
  overflow: hidden;
  background: #edf3f7;

  section {
    padding: 60px 0 100px;
  }
`;
const Work = styled.div`
  padding: 20px 0;
  p {
    text-align: center;
    margin: 12px 0;
    font-family: "Montserrat Alternates";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    color: #4d4d4d;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 20px;
  span:hover {
    color: #cd4631;
    cursor: pointer;
  }
  img {
    position: absolute;
  }
  label:first-child {
    color: #1f65eb ;
  margin-top : 12px; cursor: pointer;
  }
  label:last-child {
    color green;
  margin-top : 12px; cursor: pointer;
  }

  img:first-child {
    width: 200px;
    height: 500px;
    left: 75.25px;
    top: 150px;
    border-radius: 39.7867px;

    &:hover {
      border: 6px solid #000000;
      background: #ffffff;
      box-shadow: 10px 20px 0px #81adc8;
      transform: rotate(10deg);
    }
  }
  img:last-child {
    width: 200px;
    height: 500px;
    left: 1071px;
    top: 100px;
    border-radius: 39.7867px;

    &:hover {
      background: #ffffff;
      border: 6px solid #000000;
      box-shadow: -8px 40px 0px #81adc8;
      transform: rotate(-15deg);
    }
  }
`;
const Bottom = styled.div``;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  img {
    width: 74px;
    height: 74px;
    object-fit: contain;
  }
  section {
    display: flex;
    justify-content: space-around;
    gap: 20px;

    li {
      list-style: none;
      font-family: "Montserrat Alternates";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 160%;
      transition: 0.3s;
      cursor: pointer;

      a {
        text-decoration: none;
        color: #000000;
        transition: all 0.3s ease;
      }
      a:hover {
        color: #cd4631;
      }
    }
  }
  label {
    text-align: center;
  }
`;
const Product = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 122px;
    height: 20px;
    object-fit: contain;
  }
`;
