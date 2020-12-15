import React, { useState } from "react";
import Navbar from "../Navbar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";
import Sidebar from "../Sidebar";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    // console.log("davs");
    setIsOpen(!isOpen);
  };
  // console.log(isOpen);
  return (
    <>
      <HeroContainer>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroContent>
          <HeroItems>
            <HeroH1> Greatest Pizza Ever</HeroH1>
            <HeroP>Ready in 60 seconds</HeroP>
            <HeroBtn> Place Order</HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </>
  );
}

export default Hero;
