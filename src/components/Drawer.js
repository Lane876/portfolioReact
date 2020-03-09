import React from "react";
import { Link } from "react-router-dom";

const Drawer = props => {
  let classToggler = "drawer";
  if (props.toggle) {
    classToggler = "drawer open";
  }

  return (
    <div className={classToggler}>
      <div className="drawer-links">
        <ul>
          <li>
            <Link to="/" onClick={props.openclose}>
              <a className="logo" href="/">
                M.
              </a>
            </Link>
          </li>

          <li>
            <Link to="/projects" onClick={props.openclose}>
              <a href="/">Projects</a>
            </Link>
          </li>

          <li>
            <Link to="/skills" onClick={props.openclose}>
              <a href="/skills">Skills</a>
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={props.openclose}>
              <a href="/contact">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
