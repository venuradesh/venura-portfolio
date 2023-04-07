import React from "react";
import styled from "styled-components";

//images
import { ReactComponent as Host } from "../../assets/SVG/host.svg";
import { ReactComponent as Linkedin } from "../../assets/SVG/linkedin.svg";

function Project({ data, index }) {
  console.log(data);

  return (
    <Container cover={data.cover} className={index % 2 == 0 ? "right-align" : "left-align"}>
      <div className="cover-container"></div>
      <div className="content-container">
        <div className="background"></div>
        <div className="caption">featured project</div>
        <div className="title">{data.title}</div>
        <div className="desc">{data.desc}</div>
        <div className="skills">
          <div className="heading">Tools used:</div>
          <div className="items">
            {data.skills.map((skill, key) => (
              <div className="item" key={key}>
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className="links">
          <a href={data.links.linkedin} className="linkedin link">
            <Linkedin className="img" />
          </a>
          {data.links.host ? (
            <a href={data.links.host} className="host link">
              <Host className="img" />
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Project;

const Container = styled.div`
  width: 100%;
  height: 70vh;
  margin-bottom: 20px;
  position: relative;
  z-index: 0;

  .cover-container {
    width: 90%;
    height: 100%;
    background-image: url(${(props) => props.cover});
    background-size: contain;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    background-color: var(--bg-clr);
    opacity: 0.8;
  }

  &.right-align {
    .cover-container {
      bottom: 0;
      right: 0;
      background-position: right;
    }

    .content-container {
      left: 0;
    }
  }

  &.left-align {
    .cover-container {
      bottom: 0;
      left: 0;
      background-position: left;
    }

    .content-container {
      right: 0;
    }
  }

  .content-container {
    width: 500px;
    height: max-content;
    position: absolute;
    padding: 20px;
    z-index: 0;
    top: 50%;
    transform: translateY(-50%);
    backdrop-filter: blur(4px);

    .caption {
      color: var(--theme1);
      z-index: 100;
      margin-bottom: 20px;
      opacity: 0.7;
    }

    .background {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: var(--bg-clr-alt);
      z-index: -1;
      opacity: 0.9;
    }

    .title {
      margin-bottom: 20px;
      color: var(--theme2);
      font-size: 1.2rem;
      text-transform: uppercase;
    }

    .desc {
      font-size: var(--font-s);
      color: var(--white);
      opacity: 0.7;
    }

    .skills {
      margin-top: 20px;
      padding-top: 0px;
      height: max-content;

      .heading {
        font-size: var(--font-s);
        color: var(--white);
        margin-bottom: 10px;
      }

      .items {
        display: flex;
        flex-wrap: wrap;
        column-gap: 20px;
        row-gap: 10px;

        .item {
          padding: 10px 20px;
          background-color: var(--bg-clr);
          border-radius: 50px;
          font-size: var(--font-s);
          color: var(--theme2);
        }
      }
    }

    .links {
      margin-top: 20px;

      .link {
        margin-right: 10px;

        .img {
          width: 20px;
          height: 20px;

          .path {
            fill-opacity: 1;
            stroke: var(--theme1);
            stroke-width: 1px;
            stroke-dashoffset: 0;
            stroke-dasharray: 5000;
            animation: pathAnimation 10s ease-in-out;
            opacity: 0.6;
          }
        }

        &:hover {
          .img {
            .path {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
