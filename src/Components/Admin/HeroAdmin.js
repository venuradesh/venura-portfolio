import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../Parts/Input";
import axios from "axios";

const API_URL = "http://localhost:8080";

function HeroAdmin() {
  const localStorage = window.localStorage;
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    if (localStorage.getItem("admin-user")) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  const LoginClicked = () => {
    if (username && password) {
      setErr("");
      axios
        .get(`${API_URL}/checkUser`, {
          headers: {
            username: username,
            password: password,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.message === "invalid") {
            setErr("Incorrect Password");
          } else {
            setLogin(true);
            localStorage.setItem("admin-user", username);
          }
        })
        .catch((err) => {
          setErr(err.response.data.message);
        });
    } else {
      setErr("Enter username and password");
    }
  };

  return (
    <>
      {login ? (
        <Container>
          <div className="container">Hero admin</div>
        </Container>
      ) : (
        <Login className="login-container">
          <div className="container">
            <div className="heading">Admin Login</div>
            <div className="content-form">
              <Input content="User name" name="username" type="text" setInput={setUsername} />
              <Input content="Password" name="user-password" type="password" setInput={setPassword} />
            </div>
            {err ? <div className="error-container">*{err}</div> : <></>}
            <div className="btn-container">
              <div className="btn" onClick={() => LoginClicked()}>
                Login
              </div>
            </div>
          </div>
        </Login>
      )}
    </>
  );
}

export default HeroAdmin;

const Container = styled.div`
  width: calc(100vw - 330px);
  height: calc(100vh - 70px);
  z-index: 10;
  position: relative;
  left: 330px;
  top: 70px;
  padding: 20px;
`;

const Login = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  /* background-color: red; */
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 400px;
    height: max-content;
    background-color: var(--bg-clr);
    box-shadow: 0 0 5px 1px var(--theme2);
    padding: 20px;
    border-radius: 12px;

    .heading {
      color: var(--theme2);
      font-size: var(--font-m);
      text-align: center;
      margin-bottom: 20px;
    }

    .error-container {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--font-s);
      color: var(--theme1);
      margin-bottom: -15px;
    }

    .btn-container {
      width: 100%;
      height: 50px;
      background-color: var(--theme2);
      border-radius: 12px;
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white);
      cursor: pointer;
    }
  }
`;
