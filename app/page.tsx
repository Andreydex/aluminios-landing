import Navbar from './Components/navbar';
import Image from "next/image";
import Hero from "./Components/Hero";
import Features from "./Components/Features";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
     
    </main>
  );
}
