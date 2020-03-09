import React from "react";

const Home = () => {
  return (
    <div className="main">
      <div className="title">
        <h2>
          Hi,{" "}
          <span className="media">
            I am <span className="logo">M</span>ilan,
          </span>
        </h2>
        <h2>A Frontend Developer</h2>
      </div>
      <div className="spacer"></div>
      <div className="spacer-social">
        <a
          href="https://github.com/Lane876"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-3x"></i>
        </a>
        <a
          href="https://twitter.com/Lane8765"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter fa-3x"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
