import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";

function index() {
  return (
    <>
      <Nav>
        <NavLink to="/">Navbar</NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
}

export default index;
