import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import AboutMe from "./AboutMe";

//images
import Image from "../../assets/landing-page-image.png";
import Skills from "./Skills";

function Hero({ observer }) {
  const containerRef = useRef(null);

  const animationOnImage = (e) => {
    const speed = -2;
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    document.querySelector(".landing-page-image").style.transform = `translateX(${x}px) translateY(${y}px)`;
  };

  useEffect(() => {
    document.querySelector(".landing-page-image").addEventListener("mousemove", animationOnImage);
    if (containerRef) observer.observe(containerRef.current);
  }, [containerRef]);

  return (
    <Container>
      <div className="landing-page">
        <div className="content">
          <div className="intro">Hi, my name is</div>
          <div className="name">Venura Warnasooriya</div>
          <div className="title">
            <span className="span1">I'm a </span>
            <span className="span2">Full Stack Web Developer</span>
          </div>
          <div className="btn-container">
            <div className="contact btn">Contact me</div>
          </div>
        </div>
        <div className="landing-page-image">
          <img src={Image} alt="landing page image" />
        </div>
      </div>
      <div className="about-me" ref={containerRef}>
        <AboutMe />
      </div>
      <div className="skills">
        <Skills />
      </div>
    </Container>
  );
}

export default Hero;
const Container = styled.div`
  width: 100%;

  .landing-page {
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;

    .content {
      width: max-content;

      .intro {
        font-size: var(--font-s);
        color: var(--theme1);
      }

      .name {
        font-size: var(--font-l);
        color: var(--white);
      }

      .title {
        font-size: var(--font-xl);

        .span1 {
          color: var(--theme1);
        }

        .span2 {
          color: var(--theme2);
        }
      }

      .btn-container {
        margin-top: 15px;

        .btn {
          border: 1px solid var(--theme1);
          width: max-content;
          color: var(--theme1);
          padding: 10px 15px;
          font-size: var(--font-s);
          border-radius: 8px;
        }
      }
    }

    .landing-page-image {
      width: 600px;
      height: 600px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
      }
    }
  }

  .about-me {
    width: 100%;
    height: 100vh;
    padding-top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .skills {
    width: 100%;
    height: 100vh;
    padding-top: 70px;
  }
`;
