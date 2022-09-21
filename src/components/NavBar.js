import React, { useState } from "react";
import logo from "../images/logo.svg";
import Button from "./Button";
import StlyedNavBar from "./styles/NavBar.styled";

const NavBar = () => {
  const [navItems, setNavItems] = useState(false);

//   const mobileNavigation = () => {
//     setNavItems(!navItems);
//     console.log("clicked");
//     console.log(navItems);

//     if(navItems){
//         console.log('true');
//       } else {
//         console.log('false');
//       }
//   }
  
  //className={navItems === true ? "navShow" : "navHide"}
  return (
    <StlyedNavBar navItems={navItems}>
      <a href="#">
        <img src={logo} alt="The logo" />
      </a>
      <section className = {navItems ? "sectionExpanded" : "sectionClosed" }>
        <nav> 
          <p>Features</p>
          <p>Pricing</p>
          <p>Resources</p>
        </nav>
        {/* <section>
                <p>Features</p>
                <p>Pricing</p>
                <p>Resources</p>
            </section> */}
        <div>
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
      <aside onClick={() => setNavItems(!navItems)}>
      {navItems ? <>&#10005;</> : <> &#8801;</>}
      </aside>
    </StlyedNavBar>
  );
};

export default NavBar;
