import styled from "styled-components";

const StlyedNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 8rem;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: white;
  width: 100%;

  section {
    width: 100%;
    display: flex;

    justify-content: space-between;
  }

  nav {
    display: flex;
    justify-content: space-around;
    width: 40%;
    align-items: center;
  }

  a {
    text-decoration: none;
  }
  p {
    color: hsl(0, 0%, 75%);
    cursor: pointer;
  }
  p:hover {
    color: hsl(0, 0%, 49%);
  }

  img {
    width: 13rem;
    height: 4rem;
    padding-left: 2rem;
    margin-top: 2rem;
    cursor: pointer;
    align-items: center;
  }
  .navButtons {
    display: flex;
    width: 15rem;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 8rem;
  }
  aside {
    display: none;
  }
  .mobileNavBar {
    display: none;
  }

  @media screen and (max-width: 768px) {
    nav {
      display: none;
    }
    .hamburgerIcon {
      font-size: 4rem;
      width: 100vh;
      cursor: pointer;
      position: relative;
      right: -41.5rem;
    }
    .navButtons {
      display: none;
    }
    .responsiveNavItems {
      text-align: center;
    }
    .mobileNavBar {
      display: block;
      position: relative;
      left: -20rem;
    }
    .mobileNavButtons {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .mobileNavButtons button {
      margin-bottom: 2rem;
      width: 10rem;
    }
    .responsiveNavItems p {
      padding: 1rem;
    }
    .responsiveNavMainContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 55rem;
      background-color: rgba(0, 0, 0, 0.5);
      position: fixed;
      margin-top: 1rem;
      z-index: 1;
    }
    .responsiveNavContainer {
      display: flex;
      flex-direction: column;
      width: 30rem;
      border-radius: 10px;
      position: relative;
      margin-top: -14rem;
      background-color: #3a3052;
    }
  }

  @media screen and (max-width: 500px) {
    .responsiveNavContainer {
      position: relative;
      width: 20rem;
      left: -7rem;
    }
    img {
      width: 11rem;
      height: 3rem;
    }

    .hamburgerIcon {
      right: -30rem;
    }
  }

  @media screen and (max-width: 414px) {
    .responsiveNavContainer {
      left: -9rem;
    }

    .hamburgerIcon {
      right: -25rem;
    }
  }

  @media screen and (max-width: 375px) {
    .responsiveNavContainer {
      left: -10.5rem;
    }
    .hamburgerIcon {
      right: -23rem;
    }
  }

  @media screen and (max-width: 320px) {
    .responsiveNavContainer {
      left: -9.5rem;
      top: 3rem;
      width: 17rem;
    }
    img {
      width: 9rem;
      height: 3rem;
      margin-left: -1rem;
    }
    .responsiveNavItems p {
      padding: 0rem;
    }

    .hamburgerIcon {
      right: -23rem;
    }
  }
`;

export default StlyedNavBar;
