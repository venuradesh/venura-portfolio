import React, { useState } from "react";
import styled from "styled-components";

import image from "../../assets/logo.png";

function Header({ scrolled }) {
  const [hamClicked, setHamClicked] = useState(false);

  return (
    <Container className={scrolled ? "scrolled" : ""}>
      <div className="logo-container">
        <img src={image} alt="Logo" className="logo" />
      </div>
      <div className="navigations">
        <a className="about nav-item" href="#about">
          About
        </a>
        <div className="skills nav-item">Skills</div>
        <div className="project nav-item">Projects</div>
        <div className="contact nav-item">Contact</div>
      </div>

      <div className="hamburger">
        {hamClicked ? <div className="backdrop"></div> : <></>}
        <div className={`hamburger-icon ${hamClicked ? "active" : ""}`} onClick={() => setHamClicked(!hamClicked)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`ham-menu ${hamClicked ? "active" : ""}`}>
          <a className="about nav-item" href="#about">
            About
          </a>
          <div className="skills nav-item">Skills</div>
          <div className="project nav-item">Projects</div>
          <div className="contact nav-item">Contact</div>
        </div>
      </div>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: sticky;
  top: 0;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg-clr-blur);
  backdrop-filter: blur(5px);
  padding: 0 4%;
  z-index: 100;

  &.scrolled {
    box-shadow: 0 0 5px 1px var(--bg-clr-alt);
  }

  .logo-container {
    .logo {
      width: var(--logo-size);
      object-fit: cover;
    }
  }

  .navigations {
    display: flex;
    column-gap: 40px;
    color: var(--theme1);
    font-family: var(--mono-font);
    font-size: var(--font-s);
    font-weight: var(--font-w-600);

    .nav-item {
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        text-decoration: underline;
        transform: scale(1.03);
      }
    }
  }

  .hamburger {
    display: none;
    width: 200px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    z-index: 0;

    .backdrop {
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      background-color: var(--bg-clr-blur);
      opacity: 0.9;
      z-index: -1;
    }

    .hamburger-icon {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      row-gap: 5px;
      justify-content: center;
      align-items: flex-end;
      z-index: 10;

      span {
        width: 25px;
        height: 3px;
        background-color: var(--theme1);
      }

      &.active {
        span {
          transform-origin: left;
          transition: all 0.3s ease;
        }

        span:nth-of-type(2) {
          display: none;
        }

        span:nth-of-type(1) {
          transform: rotateZ(50deg) translateY(-9px);
        }

        span:nth-of-type(3) {
          transform: rotateZ(-50deg) translateY(8px);
        }
      }
    }

    .ham-menu {
      position: absolute;
      top: 60px;
      background-color: var(--theme1);
      transform-origin: top;
      transform: scaleY(0);
      transition: all 0.3s ease;

      &.active {
        transform: scaleY(1);
      }

      .nav-item {
        width: 300px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-inline: 30px;
        color: var(--bg-clr);
        transition: all 0.3s ease;

        &:hover {
          background-color: var(--theme2);
          color: var(--white);
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .navigations {
      display: none;
    }

    .hamburger {
      display: flex;
    }
  }
`;
