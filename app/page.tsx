import Image from "next/image";
import { Navbar } from "./Components/Mainsections/Navbar/Navbar";
import About from "./Components/Mainsections/About/About";
import Hero from "./Components/Mainsections/Hero/Hero";
import { navItems } from "./Data";



export default function Home() {
  return (
    <main>
      <Navbar navItems={navItems} className="nav" />
      <div>
        <Hero />
        <About />
      </div>
    </main>
  );
}
