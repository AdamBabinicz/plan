import React from "react";
import {
  AiFillProfile,
  AiFillHome,
  AiFillCustomerService,
  AiOutlineProfile,
} from "react-icons/ai";
import {
  SidebarContainer,
  SidebarWrap,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarMenu,
} from "./SidebarElement";

const Sidebar = (props) => {
  return (
    <>
      <SidebarContainer isOpen={props.isOpen}>
        <SidebarWrap>
          <Icon onClick={props.toggle}>
            <CloseIcon />
          </Icon>
          <SidebarMenu>
            <SidebarLink to="Home" onClick={props.toggle}>
              <AiFillHome />
              Start
            </SidebarLink>
            <SidebarLink to="/About" onClick={props.toggle}>
              <AiFillProfile />
              About
            </SidebarLink>
            <SidebarLink to="/Marketing" onClick={props.toggle}>
              <AiFillCustomerService />
              Wiara
            </SidebarLink>
            <SidebarLink to="/Comment" onClick={props.toggle}>
              <AiFillProfile />
              Komentarz
            </SidebarLink>
            <SidebarLink to="/Blog" onClick={props.toggle}>
              <AiOutlineProfile />
              Blog
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrap>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
