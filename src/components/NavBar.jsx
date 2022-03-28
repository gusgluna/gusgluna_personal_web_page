import React from "react";
import NavItem from "./NavItem";
import gusgluna_logo from "@logos/logo_gusgluna.svg"
import Button from "./Button";

const NavBar = () => {
  return (
    <header className="fixed top-0 w-full h-20 z-10 bg-white">
        <nav className="container flex flex-row mx-auto px-1.5 py-2.5">
          <img className="h-16 w-16 ml-6" src={gusgluna_logo} alt="gusgluna" />
          <ul className="flex flex-row ml-auto">
            <NavItem text="Home" link="#home"/>
            <NavItem text="About me" link="#about-me"/>
            <NavItem text="My Work" link="#work"/>
            <li className="ml-8 hidden sm:flex items-center justify-center">
              <Button text="Blog" />
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default NavBar;
