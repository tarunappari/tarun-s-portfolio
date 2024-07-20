import Image from "next/image";
import Hero from "./Components/Mainsections/Hero";
import { Navbar } from "./Components/Mainsections/Navbar/Navbar";
import About from "./Components/Mainsections/About/About";



export default function Home() {
  return (
    <main>
      <div>
        {/* <Navbar navItems={[
          { name: 'Home', link: '#home' },
          { name: 'About', link: '#about' },
          { name: 'Projects', link: '#projets' },
          { name: 'Contact', link: '#contact' },
        ]} className="navb" /> */}
        <Hero />
        <About />
      </div>
    </main>
  );
}
