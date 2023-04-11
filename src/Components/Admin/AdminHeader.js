import React from "react";
import styled from "styled-components";

//images
import image from "../../assets/logo.png";
import Logout from "../../assets/log-out.png";

//components
import AdminItemTile from "../Parts/AdminItemTile";

function AdminHeader() {
  const logoutClicked = () => {
    window.localStorage.removeItem("admin-user");
    window.location.reload();
  };

  const itemData = ["Show Projects", "Create Project", "Edit Project", "Remove Project", "Featured Projects"];
  return (
    <Container>
      <div className="topbar">
        <div className="logo-section">
          <div className="logo-container">
            <img src={image} alt="Logo" className="logo" />
          </div>
          <div className="content-container">Admin Dashboard</div>
        </div>
        <div className="logout" onClick={() => logoutClicked()}>
          <img src={Logout} alt="logout" />
          Logout
        </div>
      </div>
      <div className="sidebar">
        <div className="container-element">
          {itemData.map((item, index) => (
            <AdminItemTile key={index} content={item} />
          ))}
        </div>
        <div className="settings">Settings</div>
      </div>
    </Container>
  );
}

export default AdminHeader;

const Container = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
  top: 0;
  left: 0;

  .topbar {
    width: 100%;
    height: 70px;
    padding-inline: 3%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 5px 1px var(--bg-clr-alt);
    z-index: -1;
    background-color: var(--bg-clr);

    .logo-section {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      column-gap: 30px;

      .logo-container {
        .logo {
          width: var(--logo-size);
          object-fit: cover;
        }
      }
    }

    .logout {
      display: flex;
      align-items: center;
      column-gap: 5px;
      color: var(--theme1);
      transition: all 0.3s ease;
      padding: 8px 20px;
      cursor: pointer;
      border-radius: 12px;
      font-size: var(--font-n);
      font-family: var(--mono-font);
      font-weight: var(--font-w-600);

      img {
        width: 35px;
      }

      &:hover {
        background-color: var(--bg-clr-alt);
      }
    }

    .content-container {
      color: var(--theme1);
      /* font-family: var(--mono-font); */
      font-size: var(--font-n);
      text-transform: uppercase;
    }
  }

  .sidebar {
    width: 330px;
    height: calc(100vh - 70px);
    position: fixed;
    top: 70px;
    box-shadow: 0 5px 5px 1px var(--bg-clr-alt);
    z-index: 10;
    background-color: var(--bg-clr);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .settings {
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      text-align: left;
      color: var(--theme2);
      font-family: var(--mono-font);
      font-size: var(--font-s);
      padding-inline: 50px;
      border-top: 1px solid var(--bg-clr-alt);
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: var(--bg-clr-alt);
      }
    }
  }
`;
