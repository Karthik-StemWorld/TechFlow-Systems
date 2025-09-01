import React from 'react';
import { caseStudies } from '../data/caseStudies';
import { images } from '../data/images';

function CaseStudies() {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Selected Case Studies</h2>
        <p className="mt-2 text-slate-600">Real results from industry-leading engagements.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {caseStudies.map((c) => (
          <div key={c.title} className="rounded-lg overflow-hidden border bg-white shadow-sm">
            <img src={images[c.imgKey]} alt={c.title} className="w-full h-44 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold">{c.title}</h4>
              <div className="mt-2 text-sm text-slate-600">Sector: <span className="font-medium">{c.sector}</span></div>

              <div className="mt-4 flex items-center justify-between text-sm">
                <div>
                  <div className="text-xs text-slate-500">Cost reduction</div>
                  <div className="font-semibold">{c.costReduction}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Uptime</div>
                  <div className="font-semibold">{c.uptime}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Delivery</div>
                  <div className="font-semibold">{c.delivery}</div>
                </div>
              </div>

              <div className="mt-4">
                <a href="#contact" className="inline-block rounded-md bg-indigo-600 px-3 py-2 text-white text-sm font-medium">Discuss this case</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaseStudies;