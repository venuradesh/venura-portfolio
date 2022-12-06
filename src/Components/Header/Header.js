import React from "react";
import styled from "styled-components";

import image from "../../assets/logo.png";

function Header({ scrolled }) {
  console.log(scrolled);
  return (
    <Container className={scrolled ? "scrolled" : ""}>
      <div className="logo-container">
        <img src={image} alt="Logo" className="logo" />
      </div>
      <div className="naviagtions">
        <a className="about nav-item" href="#about">
          About
        </a>
        <div className="skills nav-item">Skills</div>
        <div className="project nav-item">Projects</div>
        <div className="contact nav-item">Contact</div>
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

  .naviagtions {
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
`;
