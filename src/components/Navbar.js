import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";
const Navbar = props => {
  const [drawerOpen, setdrawerOpen] = useState(false);
  let toggle = drawerOpen;
  if (toggle) {
    toggle = "hamburger close";
  } else {
    toggle = "hamburger";
  }

  return (
    <div className="wraper">
      <div className="logo">
        <a href="/">
          <h3>M.</h3>
        </a>
      </div>
      <div className="spacer"></div>
      <nav>
        <Link to="/projects">
          <a href=".projects">Projects</a>
        </Link>
        <Link to="/skills">
          <a href="/">Skills</a>
        </Link>
        <Link to="/contact">
          <a href="/">Get in touch</a>
        </Link>
      </nav>
      <div className={toggle} onClick={() => setdrawerOpen(!drawerOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Drawer toggle={toggle} />
    </div>
  );
};

export default Navbar;
