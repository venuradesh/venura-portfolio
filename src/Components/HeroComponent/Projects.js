import React from "react";
import styled from "styled-components";
import Project from "../Parts/Project";
//data
import projectData from "../../ProjectData/projectData";

const Projects = () => {
  return (
    <Container>
      <div className="title">Some Projects That i've built;</div>
      <div className="projects">
        {projectData.map((content, index) => (
          <Project key={index} data={content} />
        ))}
      </div>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  padding-inline: 50px;

  .title {
    font-size: var(--font-m);
    font-weight: var(--font-w-700);
    font-family: var(--mono-font);
    text-transform: lowercase;
    color: var(--theme1);
  }
`;
