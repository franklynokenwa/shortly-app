import React, { useState } from "react";
import logo from "../images/logo.svg";
import Button from "./Button";
import StlyedNavBar from "./styles/Test2.styled";

const NavBar = () => {
  const [show, setShow] = useState();
  const [mobileNavColor, setMobileNavColor] = useState();
  console.log(show);

  const ToggleData = () => {
    setShow(!show);
    console.log(show);
  };

  return (
    <StlyedNavBar>
      <a href="#">
        <img src={logo} alt="The logo" />
      </a>
      <section>
        <nav>
          <p>Features</p>
          <p>Pricing</p>
          <p>Resources</p>
        </nav>
        {
          <div className="mobileNavBar">
            <div
              onClick={ToggleData}
              className="hamburgerIcon"
            >
              {!show ? <> &#8801;</> : <>&#10005;</>}

            </div>
            {show ? (
              <div className="responsiveNavContainer">
                <div className="responsiveNavItems">
                  <p>Features</p>
                  <p>Pricing</p>
                  <p>Resources</p>
                </div>

                <div className="mobileNavButtons">
                  <Button
                    name="Login"
                    backgroundColor="white"
                    borderRadius="50px"
                    color="hsl(0, 0%, 75%)"
                  />
                  <Button
                    name="Sign Up"
                    backgroundColor="hsl(180, 66%, 49%)"
                    hoverBackgroundColor={"hsl(180, 66%, 75%)"}
                    borderRadius="50px"
                    color="white"
                  />
                </div>
              </div>
            ) : null}
          </div>
        }

        <div className="navButtons">
          <Button
            name="Login"
            backgroundColor="white"
            borderRadius="50px"
            color="hsl(0, 0%, 75%)"
          />
          <Button
            name="Sign Up"
            backgroundColor="hsl(180, 66%, 49%)"
            hoverBackgroundColor={"hsl(180, 66%, 75%)"}
            borderRadius="50px"
            color="white"
          />
        </div>
      </section>
    </StlyedNavBar>
  );
};

export default NavBar;
