import React from "react";
import {
  AiOutlineUser,
  AiOutlineFire,
  AiOutlineHome,
  AiOutlineEdit,
  AiOutlineRead,
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
              <AiOutlineHome />
              &nbsp; Start
            </SidebarLink>
            <SidebarLink to="/About" onClick={props.toggle}>
              <AiOutlineUser />
              &nbsp; Beata
            </SidebarLink>
            <SidebarLink to="/Marketing" onClick={props.toggle}>
              <AiOutlineFire />
              &nbsp; Wiara
            </SidebarLink>
            <SidebarLink to="/Comment" onClick={props.toggle}>
              <AiOutlineRead />
              &nbsp; Słowo
            </SidebarLink>
            <SidebarLink to="/Blog" onClick={props.toggle}>
              <AiOutlineEdit />
              &nbsp; Blog
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrap>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
