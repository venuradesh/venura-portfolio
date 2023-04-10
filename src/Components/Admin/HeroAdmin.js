import React, { useEffect, useState } from "react";
import styled from "styled-components";

function HeroAdmin() {
  const [login, setLogin] = useState(false);

  useEffect(() => {}, []);

  return (
    <Container>
      {!login ? (
        <AdminPanel>
          <div className="container"></div>
        </AdminPanel>
      ) : (
        <Login>
          <div className="container"></div>
        </Login>
      )}
    </Container>
  );
}

export default HeroAdmin;

const Container = styled.div``;

const Login = styled.div``;

const AdminPanel = styled.div``;
