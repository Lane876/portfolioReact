import React from "react";

const Hamburger = props => {
  let drawerOpen = "hamburger";
  if (props.btn) {
    drawerOpen = "hamburger close";
  }
  return (
    <div className={drawerOpen} onClick={props.toggle}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
