import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Technology from "./components/Technology";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="block w-6 h-[2px] bg-zinc-900" />
      <span className="text-xs font-bold tracking-widest text-zinc-900 uppercase">
        {children}
      </span>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Products />
        <Technology />
        <Benefits />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
