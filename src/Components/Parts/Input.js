import React from "react";
import styled from "styled-components";

function Input({ type, content, name, setInput }) {
  return (
    <Container>
      <input type={type} name={name} id={name} required autoComplete="off" onChange={(e) => setInput(e.target.value)} />
      <label htmlFor={name}>
        <span>{content}</span>
      </label>
    </Container>
  );
}

export default Input;

const Container = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 15px;
  position: relative;

  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: var(--font-n);
    font-family: var(--normal-font);
    padding-top: 22px;
    color: var(--white);

    &:is(:focus, :valid) {
      & + label {
        &::after {
          right: 0%;
        }

        span {
          bottom: 30px;
          opacity: 0.5;
          font-size: 0.6rem;
        }
      }
    }
  }

  label {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-bottom: 1px solid var(--theme2);
    pointer-events: none;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0px;
      left: 0;
      right: 100%;
      border-bottom: 2px solid var(--theme2);
      transition: all 0.3s ease;
    }

    span {
      position: absolute;
      bottom: 0;
      color: var(--theme2);
      opacity: 0.8;
      transition: all 0.3s ease;
    }
  }
`;
