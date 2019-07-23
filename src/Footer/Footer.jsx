import React from "react";
import {Link} from "react-router-dom";

import style from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={style.footer}>
      <hr/>
      <nav className={style.footerNav}>
        <Link to="/">Home</Link>
        <Link to="/schools">Schools</Link>
        <Link to="/degrees">Degrees</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Directions and Contact</Link>
      </nav>
      <address>&copy; Seattle Technological University</address>
    </div>
  )
};

export default Footer;