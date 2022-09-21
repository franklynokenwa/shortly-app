import styled from "styled-components";

const StlyedNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 8rem;
  padding: 0 2rem;

  section {
    width: 100%;
    display: flex;

    justify-content: space-between;
  }

  nav {
    display: flex;
    justify-content: space-around;
    width: 50%;
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
    width: 15rem;
    height: 5rem;
    padding-left: 1.2rem;
    margin-top: 1.5rem;
    cursor: pointer;
  }
  .navButtons {
    display: flex;
    width: 15rem;
    justify-content: space-evenly;
    align-items: center;
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
      z-index: 1;
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
      z-index: 1;
      position: fixed;
      position: relative;
      left: -20rem;
    }
    .mobileNavButtons {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .mobileNavButtons button {
      margin-bottom: 1rem;
      margin: 2rem;
    }
    .responsiveNavItems p {
      padding: 2rem;
    }
    .responsiveNavContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
      position: relat;
      background-color: blue;
      z-index: 1;
      padding-right: 22rem;
      position: fixed;

    }
  }
`;

export default StlyedNavBar;
