import React from "react";
import styled from "styled-components";

//images
import Profile from "../../assets/profile-back.jpg";

const AboutMe = () => {
  return (
    <Container id="about">
      <div className="about-me-section">
        <div className="profile-section">
          <div className="pic">
            <img src={Profile} alt="Profile image png" className="profile-image-png" />
          </div>
          <div className="border"></div>
        </div>
        <div className="desc">
          <div className="title">about me;</div>
          <div className="p1 p">Hello, My name is Venura and I like to design and develop things for the internet. I enjoy learning new ideas and cutting-edge technology while developing full-stack applications. The frontend would be the visitor's first impression, thus i tend to give it a little more consideration than the backend.</div>
          <div className="p2 p">I'm currently an undergraduate of Computer Science at Eastern University of Sri Lanka. I began programming in 2018, and since then I've worked on various projects for clients as a freelancer, as well as several clone projects to copy the logic and concepts of other websites. (You can view my github here)</div>
          <div className="link">
            <a href="https://github.com/venuradesh">https://github.com/venuradesh</a>
          </div>
        </div>
      </div>
      <DevSteps>
        <div className="research box">
          <div className="title">Research</div>
          <div className="content">Understand the client's subject area entirely and build on previous expertise, getting deeply familiar with the topic matter. Determine methods for meeting the individual demands and requirements of the customer.</div>
        </div>
        <div className="design box">
          <div className="title">Design</div>
          <div className="content">Contrary to popular belief, design is much more than just a product's outward appearance. So I'm thinking about it a lot and making sure it's more appealing to the user.</div>
        </div>
        <div className="develop box">
          <div className="title">Develop</div>
          <div className="content">The research and design stages' findings are put to use in the creation of certain goods, including materials, systems, and processes. I enjoy starting from scratch when I'm programming anything and seeing my thoughts come to life in the browser.</div>
        </div>
      </DevSteps>
    </Container>
  );
};

export default AboutMe;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 70px;

  .about-me-section {
    width: 100%;
    height: 60%;
    display: flex;
    padding-inline: 50px;
    align-items: center;
    column-gap: 50px;

    .profile-section {
      flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      .pic {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        background-color: var(--bg-clr);
        height: max-content;
        width: max-content;
        z-index: 10;
        transition: all 0.3s ease;

        img {
          width: 220px;
          height: auto;
          object-fit: cover;
          opacity: 0.7;
          z-index: -1;
        }

        &:hover {
          & + .border {
            z-index: 0;
            transform: rotateZ(0deg) scale(1.2);
          }
        }
      }

      .border {
        position: absolute;

        width: 220px;
        height: 220px;
        border: 3px solid var(--theme1);
        transform-origin: center center;
        transform: rotateZ(45deg);
        z-index: 10;
        pointer-events: none;
        transition: all 0.3s ease;
      }
    }

    .desc {
      flex: 2;

      .title {
        font-size: var(--font-l);
        color: var(--theme1);
        margin-bottom: 30px;
        font-weight: var(--font-w-700);
        font-family: var(--mono-font);
      }

      .p {
        margin-bottom: 15px;
        color: var(--scroll-clr);
        font-weight: 100;
        line-height: 1.5;
        text-indent: 20px;
        text-align: justify;
        font-size: var(--font-s);
      }

      .link {
        margin-top: 30px;

        a {
          font-family: var(--mono-font);
          color: var(--white);
          font-weight: var(--font-w-300);

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .about-me-section {
      flex-direction: column-reverse;

      .profile-section {
        margin-bottom: 50px;
        margin-top: 150px;

        .pic {
          img {
            width: 150px;
          }
        }

        .border {
          width: 170px;
          height: 170px;
        }
      }

      .desc {
        height: max-content;
        height: 300px;
      }
    }
  }

  @media only screen and (max-width: 430px) {
    .about-me-section {
      width: 100%;
      padding-inline: 0px;

      .profile-section {
        margin-bottom: 30px;
        margin-top: 120px;

        .pic {
          img {
            width: 120px;
          }
        }

        .border {
          width: 130px;
          height: 130px;
        }
      }
    }
  }
`;

const DevSteps = styled.div`
  height: 40%;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 80px;
  row-gap: 30px;

  .box {
    width: 350px;
    height: 250px;
    border: 1px solid;
    border-radius: 18px;
    padding: 15px;
    padding-inline: 20px;

    .title {
      text-align: center;
      margin-bottom: 15px;
      font-size: var(--font-m);
      font-family: var(--mono-font);
      font-weight: var(--font-w-600);
    }

    .content {
      text-align: center;
      line-height: 1.8;
      font-size: var(--font-s);
    }
  }

  .research {
    border-color: var(--white);

    .title,
    .content {
      color: var(--white);
    }
  }

  .design {
    border-color: var(--theme2);

    .title,
    .content {
      color: var(--theme2);
    }
  }

  .develop {
    border-color: var(--theme1);

    .title,
    .content {
      color: var(--theme1);
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    column-gap: 20px;
    row-gap: 30px;
    padding-top: 30px;

    .box {
      width: 500px;
      height: max-content;
    }
  }
`;
