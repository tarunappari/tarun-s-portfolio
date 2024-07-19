import Image from "next/image";
import Hero from "./Components/Mainsections/Hero";
import { Navbar } from "./Components/Navbar";


const navItems = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projets' },
  { name: 'Contact', link: '#contact' },
];


export default function Home() {
  return (
    <main>
      <div>
      <Navbar navItems={navItems} className="nav" />
        <Hero />
      </div>
    </main>
  );
}
