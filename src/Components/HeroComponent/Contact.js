import React from "react";
import styled from "styled-components";

//documents
import CV from "../../assets/venura-warnasooriya.pdf";

//images
import { ReactComponent as Facebook } from "../../assets/SVG/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/SVG/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/SVG/twitter.svg";
import { ReactComponent as LinkedIn } from "../../assets/SVG/linkedin.svg";
import { ReactComponent as Github } from "../../assets/SVG/github.svg";

function Contact() {
  return (
    <Container>
      <div className="container">
        <div className="heading">Get in Touch</div>
        <div className="desc">
          I'm always open to new opportunities, and my mailbox is always open.
          <br />
          I'll do my best to respond you, whether you're asking a question or <br />
          simply wants to say hello!
        </div>
        <div className="btn-container">
          <a className="btn hello" href="mailto:venurawarnasooriya@gmail.com">
            Say Hello
          </a>
          <a className="btn resume" href={CV} download={"venura-warnasooriya-cv.pdf"}>
            Resume
          </a>
        </div>
        <div className="other-contacts">
          <a href="https://www.facebook.com/venura.warnasooriya" target="_blank">
            <Facebook className="img" />
          </a>
          <a href="https://www.instagram.com/_desh9879_/" target="_blank">
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
        </div>
      </div>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .heading {
      font-size: var(--font-l);
      font-weight: var(--font-w-600);
      color: var(--white);
      margin-bottom: 20px;
    }

    .desc {
      text-align: center;
      font-size: var(--font-s);
      color: var(--theme2);
      margin-bottom: 30px;
    }

    .btn-container {
      display: flex;
      width: 100%;
      column-gap: 20px;

      .btn {
        flex: 1;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid var(--theme1);
        color: var(--theme1);
        cursor: pointer;
        position: relative;
        overflow: hidden;
        z-index: 0;

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

    .other-contacts {
      width: 80%;
      justify-content: space-between;
      margin-top: 50px;
      display: none;

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
        display: flex;
      }
    }
  }
`;
