import React from "react";
import { Link } from "react-router-dom";
import navIcon from "../../images/nav-icon.svg";
import "./Navbar.scss"

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="nav">
      <Link to="/"><img className="nav__icon" src={navIcon} alt="icon for navbar" /></Link>
      <li className="nav__list">
        <Link to="about">About</Link>
        <Link to="solutions">Solutions</Link>
        <Link to="works">Works</Link>
        <Link to="contacts">Contacts</Link>
      </li>
    </nav>
  );
}
