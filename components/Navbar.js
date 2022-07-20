import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import COLORS from "../Data/colors";

const NavCont = styled.nav`
  display: flex;
  height: 70px;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);
  margin-bottom: 2rem;

  .white {
    background-color: #fff;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    &:hover {
      color: #fff;
      background-color: ${(props) => props.colors.darkBlue};
    }
  }
  h3 {
    text-shadow: 2px 2px 2px rgba(1, 1, 1, 0.25);
    cursor: pointer;
    padding: 10px;
    &:nth-of-type(2) {
      border-right: 1px solid black;
      border-left: 1px solid black;
    }
    &:nth-of-type(3) {
      border-right: 1px solid black;
    }
    &:hover {
      background-color: #fff;
    }
  }
  @media only screen and (max-width: 767px) {
    padding: 0 0;
  }
`;

const NavRight = styled.div`
  display: flex;

  @media only screen and (max-width: 767px) {
    margin: 0 auto;
  }
  @media only screen and (max-width: 600px) {
    h3 {
      font-size: 4vw;
    }
  }
`;
const Title = styled.h2`
  text-shadow: 3px 3px 5px rgba(1, 1, 1, 0.5);
  cursor: pointer;
  line-height: 1;
  &:hover {
    background-color: #fff;
  }
`;
const MobileNav = styled.div`
  padding: 16px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  .nav-hamburger {
    &:hover {
      cursor: pointer;
    }
  }
  .lrg-icon {
    transition: transform 0.25s ease;
    &:hover {
      color: ${(props) => props.colors.green};
      transform: translateY(-2px);
    }
  }
`;

const NavDropdown = styled.div`
  position: absolute;
  z-index: 1;
  top: -100%;
  height: 100%;
  width: 100%;
  left: 0px;
  transition: top 0.5s ease;
  background-color: ${(props) => props.colors.darkBlue};
  .active-dropdown {
    top: 70px;
  }
`;
const Navbar = () => {
  const [active, setActive] = useState(false);

  function ToggleDropdown() {
    setActive(!active);
  }
  return (
    <NavCont colors={COLORS} name="top">
      <div className="desktop">
        <Link passHref href="/introduction" clasName="link">
          <Title>Primal Enjoyer</Title>
        </Link>
      </div>
      <NavRight className="tablet">
        <Link passHref href="/" className="link">
          <h3 className="white">Search</h3>
        </Link>
        <Link passHref href="/introduction" className="link">
          <h3>Home</h3>
        </Link>
        <Link passHref href="/account">
          <h3>Account</h3>
        </Link>

        <div className="mobile-sm">
          <Link passHref href="/contact" className="link">
            <h3>Contact</h3>
          </Link>
        </div>
      </NavRight>
      <MobileNav colors={COLORS} className="mobile">
        {(!active && (
          <MenuIcon
            onClick={ToggleDropdown}
            className="lrg-icon nav-hamburger"
          />
        )) || <div onClick={ToggleDropdown} className="arrow-up"></div>}
        <NavDropdown className="active-dropdown" colors={COLORS}>
          hello
        </NavDropdown>
      </MobileNav>
    </NavCont>
  );
};

export default Navbar;
