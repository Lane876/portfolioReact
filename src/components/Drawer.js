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
            <Link to="/home" onClick={props.openclose} className="logo">
              M.
            </Link>
          </li>

          <li>
            <Link to="/projects" onClick={props.openclose}>
              Projects
            </Link>
          </li>

          <li>
            <Link to="/skills" onClick={props.openclose}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={props.openclose}>
              contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
