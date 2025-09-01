import React from "react";
import { services } from "../data/services";
import { Tick } from "./Tick"; // Assuming Tick is a separate component for checkmarks

const Services = () => {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Our Core Services</h2>
        <p className="mt-2 text-slate-600">Practical consulting across strategy, technology, and operations.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="rounded-xl border border-slate-200 p-6 shadow-sm bg-white">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center">
                <img src={service.icon} alt={service.title} className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{service.description}</p>
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Tick />
                  <span className="text-sm text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <a href="#contact" className="inline-block rounded-md bg-indigo-600 px-4 py-2 text-white text-sm font-medium hover:bg-indigo-700">
                Request Consultation
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;