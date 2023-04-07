import React from "react";
import styled from "styled-components";

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
          <div className="btn hello">Say Hello</div>
          <div className="btn resume">Resume</div>
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
  }
`;
