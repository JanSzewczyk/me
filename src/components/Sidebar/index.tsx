import { FC } from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap
} from "./SidebarElements";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onToggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={onToggle}>
      <Icon onClick={onToggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to={"about"} onClick={onToggle}>
            About
          </SidebarLink>
          <SidebarLink to={"about"} onClick={onToggle}>
            About
          </SidebarLink>
          <SidebarLink to={"about"} onClick={onToggle}>
            About
          </SidebarLink>
          <SidebarLink to={"about"} onClick={onToggle}>
            About
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to={"/signin"}>SignIn</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
