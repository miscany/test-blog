import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import {
  MenuIcon,
  SearchIcon,
  HomeIcon,
  UserIcon,
  MailIcon,
} from "@heroicons/react/solid";
import COLORS from "../Data/colors";

const NavCont = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  height: 70px;
  padding: 0 5%;
  .active-dropdown {
    top: 70px;
  }

  border-bottom: 1px solid black;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);
  margin-bottom: 2rem;
  background-color: ${(props) => props.colors.grey};
  z-index: 5;
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
  .nav-flex-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
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
  height: 100%;
  position: relative;
  background-color: ${(props) => props.colors.grey};
  z-index: 101;
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
  position: fixed;
  z-index: 1;
  top: -100%;
  height: 100%;
  width: 100%;
  left: 0px;
  transition: top 0.5s ease;
  background-color: ${(props) => props.colors.darkBlue};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 64px;
  gap: 32px;
  .nav-line {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 32px;
    .nav-flex {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .nav-icon {
      color: ${(props) => props.colors.veryLightBlue};
      width: 40px;
      height: 40px;
    }
    &:hover {
      h2 {
        color: ${(props) => props.colors.green};
      }
      .nav-icon {
        color: ${(props) => props.colors.green};
      }
    }
    h2 {
      color: ${(props) => props.colors.veryLightBlue};
    }
    .line {
      width: 50%;
      height: 4px;
      background-color: ${(props) => props.colors.veryLightBlue};
    }
  }
`;
const Navbar = () => {
  const [active, setActive] = useState(false);

  function ToggleDropdown() {
    setActive(!active);
  }
  return (
    <NavCont colors={COLORS} name="top">
      <div className="nav-flex-header tablet">
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
      </div>

      <MobileNav colors={COLORS} className="mobile">
        {(!active && (
          <MenuIcon
            onClick={ToggleDropdown}
            className="lrg-icon nav-hamburger"
          />
        )) || <div onClick={ToggleDropdown} className="arrow-up"></div>}
      </MobileNav>
      <NavDropdown
        className={active ? "active-dropdown mobile" : "mobile"}
        colors={COLORS}
      >
        <div className="nav-line">
          <Link href="/" passHref>
            <a
              onClick={ToggleDropdown}
              title="Search"
              rel="noopener noreferrer"
            >
              <div className="nav-flex">
                <SearchIcon className=" nav-icon" />
                <h2>Search</h2>
              </div>
            </a>
          </Link>
          <div className="line"></div>
        </div>
        {/* End of nav line*/}

        <div className="nav-line">
          <Link href="/introduction" passHref>
            <a onClick={ToggleDropdown} title="Home" rel="noopener noreferrer">
              <div className="nav-flex">
                <HomeIcon className="nav-icon" />
                <h2>Home</h2>
              </div>
            </a>
          </Link>
          <div className="line"></div>
        </div>
        {/* End of nav line*/}

        <div className="nav-line">
          <Link href="/account" passHref>
            <a
              onClick={ToggleDropdown}
              title="Account"
              rel="noopener noreferrer"
            >
              <div className="nav-flex">
                <UserIcon className="nav-icon" />
                <h2>Account</h2>
              </div>
            </a>
          </Link>
          <div className="line"></div>
        </div>
        {/* End of nav line*/}

        <div className="nav-line">
          <Link href="/contact" passHref>
            <a
              onClick={ToggleDropdown}
              title="Contact"
              rel="noopener noreferrer"
            >
              <div className="nav-flex">
                <MailIcon className="nav-icon" />
                <h2>Contact</h2>
              </div>
            </a>
          </Link>
        </div>
        {/* End of nav line*/}
      </NavDropdown>
    </NavCont>
  );
};

export default Navbar;
