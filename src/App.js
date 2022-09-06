import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

//components
import Header from "./Components/Header/Header";
import Hero from "./Components/HeroComponent/Hero";
import Connect from "./Components/Connect/Connect";

function App() {
  let observer = null;
  const [scrolled, setScrolled] = useState(false);
  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
  }, []);

  const callBackFunction = (entries) => {
    if (entries[0].isIntersecting) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useMemo(() => {
    observer = new IntersectionObserver(callBackFunction, options);
  }, []);

  return (
    <Router>
      <Container>
        <Header scrolled={scrolled} />
        <Connect />
        <Content>
          <Routes>
            <Route exact path="/" element={<Hero observer={observer} />} />{" "}
          </Routes>
        </Content>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: max-content;
  min-height: 100vh;
  padding: 0 0;
  position: relative;
`;

const Content = styled.div`
  padding: 0 10%;
`;
