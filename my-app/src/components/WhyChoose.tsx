import React from 'react';
import { TeamIcon, DataIcon, DeliveryIcon } from '../icons'; // Assuming you have an icons file for the icons

const reasons = [
  {
    title: "Experienced Team",
    desc: "Consultants with decades of cross-industry experience.",
    icon: <TeamIcon />,
  },
  {
    title: "Data-driven",
    desc: "Decisions backed by data, not just opinions.",
    icon: <DataIcon />,
  },
  {
    title: "End-to-end Delivery",
    desc: "From strategy to execution — we stay through delivery.",
    icon: <DeliveryIcon />,
  },
];

const WhyChoose = () => {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Why Choose ConsultPro</h2>
        <p className="mt-2 text-slate-600">We blend insight, practicality, and delivery capability to ensure lasting outcomes.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {reasons.map((reason) => (
          <div key={reason.title} className="rounded-lg p-6 border bg-white shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-indigo-50 flex items-center justify-center">
                {reason.icon}
              </div>
              <div>
                <h4 className="font-semibold">{reason.title}</h4>
                <p className="text-sm mt-1 text-slate-600">{reason.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;