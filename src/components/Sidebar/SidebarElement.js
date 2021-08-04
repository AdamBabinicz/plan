import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  width: 100%;
  height: 100%;
  position: fixed;
  background: #003;
  z-index: 999;
  align-items: center;
  top: 0;
  right: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  margin-right: 1rem;
`;

export const Icon = styled.div`
  top: 1.5rem;
  position: absolute;
  right: 2.5rem;
  outline: none;
  background: transparent;
  cursor: pointer;
  font-size: 2.4rem;
`;

export const SidebarWrap = styled.div`
  color: #fff;
  margin-top: 4rem;
`;

export const SidebarMenu = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  display: grid;
  justify-content: center;
`;

export const SidebarLink = styled(LinkS)`
  padding: 1rem 3rem;
  font-size: 2rem;
  color: #fff !important;
  display: flex;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
  margin: 1rem 2rem;
  transition: 0.3s;

  &:hover {
    color: #fff;
    background: #f54748;
  }
`;
