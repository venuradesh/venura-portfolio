import React from "react";
import styled from "styled-components";

function Project({ data }) {
  console.log(data);

  return (
    <Container>
      <div className="cover-container"></div>
      <div className="content-container">
        <div className="caption">featured project</div>
        <div className="title">{data.title}</div>
        <div className="desc">{data.desc}</div>
        <div className="skills">
          {data.skills.map((skill, key) => (
            <div className="item" key={key}>
              {skill}
            </div>
          ))}
        </div>
        <div className="links">
          <div className="github"></div>
        </div>
      </div>
    </Container>
  );
}

export default Project;

const Container = styled.div``;
