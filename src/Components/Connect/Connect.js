import React from "react";
import styled from "styled-components";

//images
import { ReactComponent as Facebook } from "../../assets/SVG/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/SVG/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/SVG/twitter.svg";
import { ReactComponent as LinkedIn } from "../../assets/SVG/linkedin.svg";
import { ReactComponent as Github } from "../../assets/SVG/github.svg";

function Connect() {
  return (
    <Container>
      <LeftSide>
        <div className="line"></div>
        <a href="https://www.facebook.com/venura.warnasooriya" target="_blank">
          <Facebook className="img" />
        </a>
        <a href="">
          <Instagram className="img" />
        </a>
        <a href="https://twitter.com/VenuraWarnasoo2" target="_blank">
          <Twitter className="img" />
        </a>
        <a href="www.linkedin.com/in/venurawarnasooriya" target="_blank">
          <LinkedIn className="img" />
        </a>
        <a href="https://github.com/venuradesh" target="_blank">
          <Github className="img" />
        </a>
      </LeftSide>
      <RightSide>
        <div className="line"></div>
        <a className="email" href="mailto:venurawarnasooriya@gmail.com" target="_blank">
          venurawarnasooriya@gmail.com
        </a>
      </RightSide>
    </Container>
  );
}

export default Connect;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: calc(100vw - 10%);
  display: flex;
  justify-content: space-between;

  .line {
    height: 120px;
    width: 2px;
    background-color: var(--theme1);
  }

  .img {
    width: var(--icon-size);
    height: var(--icon-size);
    position: relative;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    .path {
      fill-opacity: 0;
      stroke: var(--theme1);
      stroke-width: 1px;
      stroke-dashoffset: 0;
      stroke-dasharray: 5000;
      animation: pathAnimation 10s ease-in-out;
    }
  }
  @keyframes pathAnimation {
    0% {
      stroke-dashoffset: 5000;
    }

    100% {
      stroke-dashoffset: 0;
    }
  }

  @media only screen and (max-width: 430px) {
    display: none;
  }
`;

const LeftSide = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  bottom: 0;
  left: calc(4% + 10px);
  flex-direction: column-reverse;
  row-gap: 20px;
`;

const RightSide = styled.div`
  position: fixed;
  right: 4%;
  bottom: 0;
  display: flex;
  flex-direction: column-reverse;
  row-gap: 20px;
  align-items: center;
  max-width: 10px;

  .email {
    transform: rotateZ(90deg);
    color: var(--theme1);
    position: relative;
    bottom: 100px;
    transition: all 0.3s ease;
    font-family: var(--mono-font);
    font-size: var(--font-s);
    /* font-weight: var(--font-w-600); */

    &:hover {
      transform: rotateZ(90deg) scale(1.05);
    }
  }
`;
