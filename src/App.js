import React from "react";
// import NavBar from './components/NavBar';
import StyledApp from "./App.styled";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LinkShortener from "./components/LinkShortener";
import NavBar from "./components/NavBar";
import ShortlyDetails from "./components/ShortlyDetails";
import GlobalStyles from "./components/styles/GlobalStyles.js";

const App = () => {
  return (
    <StyledApp>
      <GlobalStyles />
      <NavBar />
      <Hero />
      <LinkShortener />
      <ShortlyDetails />
      <Boost />
      <Footer />
    </StyledApp>
  );
};

export default App;
