import React from "react";
import Hotel from "../images/hotel.png";

const Projects = () => {
  return (
    <div className="project">
      <div className="directory-menu">
        <div className="menu-item">
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${Hotel})`
            }}
          />
          <div className="content">
            <a
              href="https://Lane876.github.io/Hotel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="title">
                <h2>Hotel website</h2>
                <h3>Created with ReactJS</h3>
              </div>
            </a>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">
              <h2>In</h2>
              <h3>Progress</h3>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">
              <h2>In</h2>
              <h3>Progress</h3>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">
              <h2>In</h2>
              <h3>Progress</h3>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">
              <h2>In</h2>
              <h3>Progress</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
