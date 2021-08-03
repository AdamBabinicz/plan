import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "#003")};
  width: 100%;
  height: 122px;
  position: sticky;
  align-items: center;
  top: 0;
  right: 0;
  display: flex;
  z-index: 10;
  font-size: 1rem;

  @media (max-width: 768px) {
    height: 60px;
    background: #fff;
  }
`;

export const NavbarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
`;

export const NavLogo = styled(LinkS)`
  width: 180px;
  justify-self: flex-start;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 991px) {
    width: 100px;
  }

  &::before {
    content: "";
    position: absolute;
    width: 200px;
    background: #fff;
    bottom: 0;
    top: 0;
    z-index: -1;
    transform: skew(30deg);

    @media (max-width: 875px) {
      width: 110px;
    }

    @media (max-width: 678px) {
      width: 160px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 200px;
    background: #fff;
    left: 0;
    top: 0;
    z-index: -1;

    @media (max-width: 991px) {
      width: 100px;
    }
  }
`;

export const ImgLogo = styled.img`
  width: 100%;
  max-width: 100%;
  align-items: center;
`;

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    z-index: 1000;
    color: #000;
    font-size: 2.4rem;
    text-align: right;
    top: 2rem;
  }
`;

export const NavMenu = styled.ul`
  margin: 0;
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DropdownMenu = styled.ul`
  width: 200px;
  position: absolute;
  display: none;
  top: 2.7rem;
  list-style: none;
  text-align: start;
  right: 0;
  left: 0;
  background: #f54748;
  padding: 0;
  border-radius: 0.2rem;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  font-size: 1.7rem;
  align-items: center;
  padding: 2rem 1rem;
  margin-right: 1.3rem;
  position: relative;
  font-weight: 500;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #f54748;

    /*.dropdownMenu {
      display: block;
      top: 6rem;
    }
  } */
  }

  &.active {
    background: #f54748;
    transition: 0.3s;
    color: #fff;
    padding: 0.9rem 1rem;

    /* .dropdownMenu {
      top: 4.4rem;
    } */
  }
`;

export const DropdownLink = styled(LinkS)`
  display: block;
  font-size: 1.5rem;
  width: 100%;
  text-decoration: none;
  color: #fff;
  padding: 1.6rem 2rem;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

export const NavBtn = styled.div`
  display: flex;
`;

export const NavBtnLink = styled(LinkS)`
  width: 100%;
  background: transparent;
  color: #fff;
  padding: 0.5rem 2rem;
  font-weight: 600;
  border: 0.2rem solid #f54748;
  border-radius: 5rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #f54748;
    color: #fff;
  }
`;
