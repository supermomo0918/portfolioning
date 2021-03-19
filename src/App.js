import React,{useState,useEffect,useRef} from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import "./App.scss";
function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
