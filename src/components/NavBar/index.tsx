import { animateScroll as scroll } from "react-scroll";

import {
  MobileIcon,
  Nav,
  NavBarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu
} from "./NavBarElements";
import { FaBars } from "react-icons/all";
import { FC, useEffect, useState } from "react";

interface NavBarProps {
  onToggle: () => void;
}

const NavBar: FC<NavBarProps> = ({ onToggle }) => {
  const handleToggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav>
      <NavBarContainer>
        <NavLogo to={"/"} onClick={handleToggleHome}>
          Jan
        </NavLogo>
        <MobileIcon onClick={onToggle}>
          <FaBars />
        </MobileIcon>

        <NavMenu>
          <NavItem>
            <NavLinks to={"home"} smooth={true} duration={500} spy={true} offset={-80}>
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to={"about"} smooth={true} duration={500} spy={true} offset={-80}>
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to={"discover"}>Discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to={"services"}>Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to={"job"}>Job</NavLinks>
          </NavItem>
        </NavMenu>
      </NavBarContainer>
    </Nav>
  );
};

export default NavBar;
