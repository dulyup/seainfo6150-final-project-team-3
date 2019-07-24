import React from "react";
import {Link} from "react-router-dom";

import style from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={style.header}>
        <Link to={"/"}>
          <h1 className={style.logo}>Seattle Technological University</h1>
        </Link>
        {/*<div>*/}
          {/*<input type={"text"} placeholder={"search"}/>*/}
          {/*<Link to={"/signup"} className={style.signUp}>Sign up</Link>*/}
          {/*<Link to={"/signin"}>Sign in</Link>*/}
        {/*</div>*/}
      </div>
      <nav className={style.headerNav}>
        <Link to="/">Home</Link>
        <Link to="/schools">Schools</Link>
        <Link to="/degrees">Degrees</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Directions and Contact</Link>
      </nav>
    </div>
  )
};

export default Header;