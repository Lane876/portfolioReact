import React from "react";

const Drawer = props => {
  let open = "drawer";
  if (props.toggle) {
    open = "drawer x";
  }
  return (
    <div className={open}>
      <div className="projects">
        <li>
          <a href="/project">Projects</a>
        </li>
      </div>
      <div className="skills">
        <li>
          <a href="/skills">Skills</a>
        </li>
      </div>
      <div className="projects">
        <li>
          <a href="/contact">Get in Touch</a>
        </li>
      </div>
    </div>
  );
};

export default Drawer;
