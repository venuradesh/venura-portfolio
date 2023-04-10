import React from "react";
import styled from "styled-components";

function AdminItemTile({ content }) {
  return <Container>{content}</Container>;
}

export default AdminItemTile;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  text-align: left;
  color: var(--theme2);
  font-family: var(--mono-font);
  font-size: var(--font-s);
  padding-inline: 50px;
  border-bottom: 1px solid var(--bg-clr-alt);
  cursor: pointer;

  &:first-of-type {
    border-top: 1px solid var(--bg-clr-alt);
  }

  &:hover {
    background-color: var(--bg-clr-alt);
  }
`;
