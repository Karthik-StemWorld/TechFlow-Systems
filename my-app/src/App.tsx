import React, { useEffect, useRef, useState } from "react";
import { sections } from './data/sections';
import { images } from './data/images';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-30% 0px -40% 0px", threshold: 0 }
    );

    document.querySelectorAll("section[id]").forEach((sec) => obs.observe(sec));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="text-slate-900 antialiased">
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <Navbar sections={sections} active={active} />

      <main className="mt-16">
        <section id="home">
          <Hero image={images.hero} />
        </section>

        <section id="services" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <Services />
          </div>
        </section>

        <section id="why" className="py-20 bg-slate-50 px-6">
          <div className="container mx-auto max-w-6xl">
            <WhyChoose />
          </div>
        </section>

        <section id="about" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <About />
          </div>
        </section>

        <section id="cases" className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <CaseStudies />
          </div>
        </section>

        <section id="testimonials" className="py-20 px-6 bg-slate-50">
          <div className="container mx-auto max-w-5xl">
            <Testimonials />
          </div>
        </section>

        <section id="contact" className="py-20 px-6">
          <div className="container mx-auto max-w-3xl">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}