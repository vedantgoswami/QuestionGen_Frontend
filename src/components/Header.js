import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
// import logo from "../images/Logo-Icon-600x600"

const Header=()=> {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require('../images/Logo-Icon-600x600.png')} width='90px' style={{marginTop: "15px"}}/>
        </NavLink>
        <Bars/>
        <NavMenu>
          <NavLink to="/about" activeStyle>
              About
          </NavLink>
          <NavLink to="/Services" activeStyle>
              Services
          </NavLink>
          <NavLink to="/contact" activeStyle>
              Contact Us
          </NavLink>
          <NavLink to="/signup" activeStyle>
              Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}
export default Header;