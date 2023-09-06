import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SectionEQ from "./components/SectionEQ";
import Cards from "./components/Cards";
import Motivation from "./components/Motivation";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <SectionEQ />
      <Cards />
      <Motivation />
      <Timeline />
      <SectionEQ />
    </>
  );
}

export default App;
