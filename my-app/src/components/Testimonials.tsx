import React from 'react';
import { testimonialsData } from '../data/testimonials';
import { ImageUrls } from '../data/images';

function Testimonials() {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Client Testimonials</h2>
        <p className="mt-2 text-slate-600">What our clients say about working with us.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {testimonialsData.map((t) => (
          <div key={t.name} className="rounded-lg p-6 border bg-white shadow-sm">
            <div className="flex items-center gap-4">
              <img src={ImageUrls[t.imageKey]} alt={t.name} className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-semibold" />
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-slate-500">{t.title}</div>
              </div>
            </div>
            <p className="mt-4 text-slate-700">“{t.quote}”</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;