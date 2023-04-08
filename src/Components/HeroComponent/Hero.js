import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import AboutMe from "./AboutMe";

//images
import Image from "../../assets/landing-page-image.png";

//components
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

//files
import CV from "../../assets/venura-warnasooriya.pdf";

function Hero({ observer }) {
  const containerRef = useRef(null);

  const animationOnImage = (e) => {
    const speed = -2;
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    document.querySelector(".landing-page-image").style.transform = `translateX(${x}px) translateY(${y}px)`;
  };

  useEffect(() => {
    // document.querySelector(".landing-page-image").addEventListener("mousemove", animationOnImage);
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
            <span className="span2">Full Stack Developer</span>
          </div>
          <div className="btn-container">
            <div className="contact btn">
              <a href="mailto:venurawarnasooriya@gmail.com">Contact me</a>
            </div>
            <div className="resume btn">
              <a href={CV} download={"venura-warnasooriya-cv.pdf"}>
                Resume
              </a>
            </div>
          </div>
        </div>
        <div className="landing-page-image">
          <img src={Image} alt="landing page image" />
        </div>
      </div>
      <div className="contents" ref={containerRef}>
        <div className="about-me">
          <AboutMe />
        </div>
        <div className="skills">
          <Skills />
        </div>
        <div className="projects">
          <Projects />
        </div>
        <div className="contact">
          <Contact />
        </div>
        <div className="footer">Designed & Developed by Venura Warnasooriya 🚀🚀</div>
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
        display: flex;
        align-items: center;
        column-gap: 20px;

        .btn {
          border: 1px solid var(--theme1);
          width: max-content;
          color: var(--theme1);
          padding: 10px 15px;
          font-size: var(--font-s);
          border-radius: 8px;
          position: relative;
          overflow: hidden;

          &:after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: var(--theme1);
            transform-origin: left;
            transform: translateX(-100%);
            transition: all 0.3s ease;
            z-index: -1;
          }

          &:hover {
            color: var(--white);

            &:after {
              transform: translateX(0%);
            }
          }
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

  .projects {
    width: 100%;
    height: max-content;
    padding-top: 70px;
  }

  .footer {
    height: 20vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: var(--font-s);
    font-family: var(--mono-font);
  }

  @media only screen and (max-width: 768px) {
    .landing-page {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }

      .landing-page-image {
        width: 100%;
        display: flex;
        justify-content: center;

        img {
          width: 500px;
          height: 500px;
        }
      }
    }
  }

  @media only screen and (max-width: 430px) {
    .landing-page {
      .content {
        .title {
          display: flex;
          flex-direction: column;
          align-items: center;

          .span1 {
            font-size: var(--font-s);
          }
        }
      }

      .landing-page-image {
        height: 60%;
        align-items: center;

        img {
          width: 320px;
          height: 320px;
        }
      }
    }
  }
`;
