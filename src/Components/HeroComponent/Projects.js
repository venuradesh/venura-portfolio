import React from "react";
import styled from "styled-components";
import Project from "../Parts/Project";
//data
import projectData from "../../ProjectData/projectData";

//images
import Seemore from "../../assets/see-more.png";

const Projects = () => {
  return (
    <Container>
      <div className="title">Some Projects That i've built;</div>
      <div className="projects">
        {projectData.map((content, index) => (
          <Project key={index} data={content} index={index} />
        ))}
      </div>
      <div className="see-more-section">
        <div className="seemore">
          see more <img src={Seemore} alt="see-more" />
        </div>
      </div>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  padding-inline: 50px;
  margin-bottom: 50px;

  .title {
    font-size: var(--font-m);
    font-weight: var(--font-w-700);
    font-family: var(--mono-font);
    text-transform: lowercase;
    color: var(--theme1);
  }

  .see-more-section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    .seemore {
      color: var(--theme1);
      font-size: var(--font-s);
      display: flex;
      column-gap: 10px;
      align-items: center;

      img {
        width: 15px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0px;
    margin-bottom: 0px;

    .projects {
      display: flex;
      flex-direction: column;
      row-gap: 80px;
    }
  }

  @media only screen and (max-width: 430px) {
    margin-bottom: 50px;

    .projects {
      row-gap: 10px;
    }
  }
`;
