import React from "react";
import styled from "styled-components";

const Skills = () => {
  return (
    <Container>
      <div className="title">skills that i possess;</div>
      <div className="skills-section">
        <Languages>
          <div className="designing lang">
            <div className="title">Designing</div>
            <div className="desc">I value clear design patterns, straightforward content structures, and considerate user interactions. My design tools include the following:</div>
            <div className="items">
              <span>Adobe XD</span>
              <span>Adobe Photoshop</span>
              <span>Draw.io</span>
              <span>Figma</span>
            </div>
          </div>
          <div className="frontend-dev lang">
            <div className="title">Frontend Development</div>
            <div className="desc">Languages I speak</div>
            <div className="items">
              <span>HTML, CSS</span>
              <span>SAAS preprocessor</span>
              <span>JavaScript</span>
              <span>React Js</span>
              <span>Styled Components</span>
              <span>Material UI</span>
            </div>
          </div>
          <div className="backend-dev lang">
            <div className="title">Backend Development</div>
            <div className="desc">Coding is enjoyable till the backend gets in the way. However, since the backend includes the programming's logic and beauty, I also like developing it. Technologies I employ are</div>
            <div className="items">
              <span>Node Js</span>
              <span>Express Js</span>
            </div>
            <div className="desc">Databases I frequently use</div>
            <div className="items">
              <span>Firebase</span>
              <span>Mongo DB</span>
              <span>MySQL</span>
            </div>
          </div>
          <div className="other lang">
            <div className="title">Other Languages</div>
            <div className="desc">I don't usually use these languages and I'm not particularly skilled in them. I can, however, handle any of these languages.</div>
            <div className="items">
              <span>Java</span>
              <span>PHP</span>
              <span>Python</span>
              <span>C++</span>
            </div>
          </div>
        </Languages>
        <IDEs>
          <div className="title">familiar IDEs</div>
          <div className="items">
            <span>Visual Studio Code</span>
            <span>ATOM</span>
          </div>
        </IDEs>
      </div>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 30px;

  .title {
    font-size: var(--font-m);
    font-family: var(--mono-font);
    font-weight: var(--font-w-700);
    color: var(--theme1);
  }

  .skills-section {
    width: 100%;
    height: 100%;
    background-color: var(--bg-clr-alt);
    border-radius: 18px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Languages = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;

  .lang {
    width: 100%;
    height: max-content;
    text-align: center;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 20px;

    .title {
      font-size: var(--normal);
      color: var(--theme2);
    }

    .desc {
      font-size: var(--font-s);
      font-weight: var(--font-w-300);
      color: var(--scroll-clr);
    }

    .items {
      color: var(--white);
      font-size: var(--font-s);
      font-weight: var(--font-w-300);
      display: flex;
      flex-direction: column;
      row-gap: 10px;
    }
  }
`;

const IDEs = styled.div`
  display: flex;
  column-gap: 30px;

  .title {
    font-size: var(--normal);
    color: var(--theme2);
  }

  .items {
    display: flex;
    column-gap: 15px;
    color: var(--white);
    font-size: var(--font-s);
    font-weight: var(--font-w-300);
  }
`;
