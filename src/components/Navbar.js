import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import Drawer from "./Drawer";

class Navbar extends Component {
  state = {
    drawerOpen: false,
  };

  toggleDrawer = () => {
    this.setState((prevState) => {
      return { drawerOpen: !prevState.drawerOpen };
    });
  };

  render() {
    // let sideDrawer;
    // if (this.state.drawerOpen) {
    //   sideDrawer =
    // }

    return (
      <div className="wraper">
        <div className="logo">
          <a href="/">
            <h3>M.</h3>
          </a>
        </div>
        <div className="spacer"></div>
        <nav>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Get in touch</Link>
        </nav>
        <Hamburger toggle={this.toggleDrawer} btn={this.state.drawerOpen} />
        <Drawer toggle={this.state.drawerOpen} openclose={this.toggleDrawer} />
      </div>
    );
  }
}

export default Navbar;
