import React from 'react';
import { aboutData } from '../data/about';
import { images } from '../data/images';

const About = () => {
  return (
    <div className="rounded-lg p-8 bg-white shadow-sm border">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="md:w-1/3">
          <img src={images.aboutImage} alt="About ConsultPro" className="rounded-lg w-full h-56 object-cover" />
        </div>

        <div className="md:flex-1">
          <h3 className="text-2xl font-bold">{aboutData.title}</h3>
          <p className="mt-3 text-slate-600">{aboutData.description}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-md bg-slate-50">
              <div className="text-sm text-slate-500">Company Size</div>
              <div className="mt-1 font-semibold">{aboutData.companySize}</div>
            </div>

            <div className="p-4 rounded-md bg-slate-50">
              <div className="text-sm text-slate-500">Founded</div>
              <div className="mt-1 font-semibold">{aboutData.foundedYear}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;