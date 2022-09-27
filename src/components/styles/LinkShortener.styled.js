import styled from "styled-components";
import linkContainerBackgroundImage from "../../images/bg-shorten-desktop.svg";

const StyledLinkSection = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap");
  background: url(${linkContainerBackgroundImage});
  background-color: hsl(257, 27%, 26%);
  width: 60rem;
  height: 8rem;
  margin-top: 2rem;
  margin-bottom: 5rem;
  border-radius: 10px;
  margin-left: 4rem;
  margin: 4rem;
  position: relative;
  top: 8rem;
  padding-left: 1rem;
  padding-right: 1rem;

  form {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 8rem;
  }
  input {
    width: 45rem;
    height: 3rem;
    border: none;
    border-radius: 10px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: hsl(0, 0%, 15%);
    caret-color: hsl(0, 0%, 75%);
  }
  input:focus {
    outline: 2px solid purple;
  }
  input::placeholder {
    padding-left: 1rem;
  }

  Button {
    width: 8rem;
    color: white;
  }
  span i {
    position: relative;
    top: -2rem;
    left: 2rem;
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    width: 38rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    form {
      flex-direction: column;
    }
    input {
      width: 36rem;
      height: 6rem;
      margin-bottom: 1rem;
    }
    Button {
      width: 36rem;
      height: 6rem;
      margin-top: 1rem;
    }
    span i {
      top: -5rem;
      left: 1rem;
    }
  }
  @media screen and (max-width: 500px) {
    width: 25rem;
    margin: 0 2rem;

    input {
      width: 25rem;
    }
    Button {
      width: 25rem;
    }
    span i {
      top: -5rem;
      left: -0.2rem;
    }
  }
  @media screen and (max-width: 414px) {
    width: 20rem;

    input {
      width: 20rem;
    }
    Button {
      width: 20rem;
    }
  }
  @media screen and (max-width: 375px) {
    width: 18rem;

    input {
      width: 18rem;
    }
    Button {
      width: 18rem;
    }
  }
  @media screen and (max-width: 320px) {
    width: 14rem;

    input {
      width: 14rem;
    }
    Button {
      width: 14rem;
    }
  }
`;

export default StyledLinkSection;
