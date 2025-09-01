import React from "react";
import { heroImage } from "../data/images";

const Hero = () => {
  return (
    <div className="relative h-[80vh] min-h-[520px] flex items-center">
      <img src={heroImage} alt="Consulting" className="absolute inset-0 w-full h-full object-cover brightness-75" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>

      <div className="container mx-auto max-w-4xl px-6 z-10 text-center">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Strategic Consulting that moves your business forward
        </h1>
        <p className="mt-4 text-white/90 text-lg sm:text-xl">
          We combine domain expertise, actionable insights and delivery muscle — to help you grow, scale and transform.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#contact" className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-white text-lg font-semibold shadow hover:bg-indigo-700">
            Get Consultation
          </a>
          <a href="#services" className="inline-flex items-center rounded-md border border-white/30 bg-white/10 px-5 py-3 text-white text-lg font-medium hover:bg-white/20">
            Our Services
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left text-white/90">
          <MiniStat title="10+ Years" subtitle="Industry experience" />
          <MiniStat title="150+" subtitle="Projects delivered" />
          <MiniStat title="98%" subtitle="Client satisfaction" />
        </div>
      </div>
    </div>
  );
};

const MiniStat = ({ title, subtitle }) => {
  return (
    <div className="bg-white/8 rounded-md p-4 backdrop-blur-sm">
      <div className="text-2xl font-bold">{title}</div>
      <div className="text-sm mt-1 opacity-90">{subtitle}</div>
    </div>
  );
};

export default Hero;