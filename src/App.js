import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import gsap from "gsap";
import "./Style/App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import IntroOverlay from "./components/IntroOverlay";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".main.title h2", 1.8, {
      opacity: 0,
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 10,
      stagger: {
        amount: 0.3
      }
    }).to(".intro", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4
    });
  }, []);

  return (
    <div className="App">
      <IntroOverlay />
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
