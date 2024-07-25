"use client"

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { navItems } from "../public/data";

// Lazy load components
const Navbar = dynamic(() => import("./Components/Mainsections/Navbar/Navbar").then(mod => ({ default: mod.Navbar })), { ssr: false });
const About = dynamic(() => import("./Components/Mainsections/About/About"), { ssr: false });
const Hero = dynamic(() => import("./Components/Mainsections/Hero/Hero"), { ssr: false });
const Projects = dynamic(() => import("./Components/Mainsections/Projects/Projects"), { ssr: false });
const Experience = dynamic(() => import("./Components/Mainsections/Experience/Experience"), { ssr: false });
const Contact = dynamic(() => import("./Components/Mainsections/Contact/Contact"), { ssr: false });

export default function Home() {
  useEffect(() => {
    // Prefetching components for better performance
    import("./Components/Mainsections/Navbar/Navbar");
    import("./Components/Mainsections/About/About");
    import("./Components/Mainsections/Hero/Hero");
    import("./Components/Mainsections/Projects/Projects");
    import("./Components/Mainsections/Experience/Experience");
    import("./Components/Mainsections/Contact/Contact");
  }, []);

  return (
    <main>
      <GlobalStyles />
      <Navbar navItems={navItems} className="nav" />
      <div>
        <Hero idName="#hero" />
        <About />
        <Experience idName="" />
        <Projects idName="#projects" />
        <Contact />
      </div>
    </main>
  );
}
