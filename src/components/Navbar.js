import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
