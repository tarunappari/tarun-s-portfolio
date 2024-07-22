"use client"

import { Navbar } from "./Components/Mainsections/Navbar/Navbar";
import About from "./Components/Mainsections/About/About";
import Hero from "./Components/Mainsections/Hero/Hero";
import { navItems } from "./data";
import Projects from "./Components/Mainsections/Projects/Projects";
import { GlobalStyles } from './GlobalStyles'
import Testing from './Components/Mainsections/Testing'
import Experience from "./Components/Mainsections/Experience/Experience";

export default function Home() {

  return (
    <main>
      <GlobalStyles />
      <Navbar navItems={navItems} className="nav" />
      <div>
        <Hero />
        <About />
        <Projects />
        <Experience />
      </div>
    </main>
  );
}
