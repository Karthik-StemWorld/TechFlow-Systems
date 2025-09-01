import React from 'react';
import { images } from '../data/images';

const Footer = () => {
  return (
    <footer className="mt-16 border-t bg-slate-50 border-slate-200">
      <div className="container mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={images.logo} alt="ConsultPro Logo" className="w-9 h-9 rounded-md" />
          <div>
            <div className="font-semibold">ConsultPro</div>
            <div className="text-sm text-slate-500">© {new Date().getFullYear()} ConsultPro — All rights reserved</div>
          </div>
        </div>

        <div className="text-sm text-slate-600">Built with ❤️ for modern businesses</div>
      </div>
    </footer>
  );
};

export default Footer;