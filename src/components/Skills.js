import React from "react";

const Skills = () => {
  return (
    <div className="skills">
      <div className="rocking">
        <h2 className="rocking-title">Rocking at...</h2>
        <div className="icons">
          <i className="fab fa-html5 fa-4x"></i>
          <i className="fab fa-css3-alt fa-4x"></i>
          <i className="fab fa-sass fa-4x"></i>
          <i className="fab fa-js fa-4x"></i>
          <i className="fab fa-react  fa-4x"></i>
          <i className="fab fa-git  fa-4x"></i>
        </div>
      </div>
      <div className="want">
        <h2 className="want-title">Interested in learning...</h2>
        <i className="fab fa-node fa-4x"></i>
      </div>
    </div>
  );
};

export default Skills;
