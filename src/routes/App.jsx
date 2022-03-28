import React from "react";
import NavBar from "@components/NavBar";
import Hero from "@components/Hero";
import AboutMe from "@components/AboutMe";
import MyWork from "@components/MyWork";
import Footer from "@components/Footer"
import "../styles/main.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <MyWork />
      <Footer/>
    </>
  );
};

export default App;
