import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SectionEQ from "./components/SectionEQ";
import Cards from "./components/Cards";
import Motivation from "./components/Motivation";
import Timeline from "./components/Timeline";
import Social from "./components/Social";
import Quote from "./components/Quote";
import WorkWithUs from "./components/WorkWithUs";
import Vacancies from "./components/Vacancies";
import Footer from "./components/Footer";

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
      <Social />
      <Quote />
      <WorkWithUs />
      <Vacancies />
      <hr style={{ width: "70%", marginInline: "auto" }} />
      <Footer />
    </>
  );
}

export default App;
