import { animateScroll as scroll } from "react-scroll";

import { MobileIcon, Nav, NavBarContainer, NavItem, NavLinks, NavLogo, NavMenu } from "./NavBarElements";
import { FaBars } from "react-icons/all";
import { FC, useEffect, useState } from "react";

interface NavBarProps {
  onToggle: () => void;
}

const NavBar: FC<NavBarProps> = ({ onToggle }) => {
  const [scrollNav, setScrollNav] = useState<boolean>(false);

  const handleToggleHome = () => {
    scroll.scrollToTop();
  };

  const handleChangeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleChangeNav);
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
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
            <NavLinks to={"skills"} smooth={true} duration={500} spy={true} offset={-80}>
              Skills
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to={"qualification"} smooth={true} duration={500} spy={true} offset={-80}>
              Qualification
            </NavLinks>
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
