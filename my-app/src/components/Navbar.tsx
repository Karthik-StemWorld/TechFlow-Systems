import React from "react";
import { sections } from "../data/sections";

const Navbar = ({ active }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="backdrop-blur-sm bg-white/70 border-b border-slate-200">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md flex items-center justify-center bg-gradient-to-tr from-indigo-500 to-purple-500 text-white font-bold">C</div>
              <div className="font-semibold">ConsultPro</div>
            </a>

            <div className="hidden md:flex items-center gap-6">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`text-sm hover:text-indigo-600 transition ${active === s.id ? "text-indigo-600 font-medium" : "text-slate-700"}`}
                >
                  {s.label}
                </a>
              ))}

              <a href="#contact" className="ml-4 inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-indigo-700">
                Get Consultation
              </a>
            </div>

            <MobileMenu sections={sections} />
          </div>
        </div>
      </nav>
    </header>
  );
};

const MobileMenu = ({ sections }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="md:hidden">
      <button onClick={() => setOpen((s) => !s)} aria-label="menu" className="p-2 rounded-md">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-4 mt-2 w-56 bg-white rounded-md shadow-lg py-3">
          <div className="flex flex-col">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setOpen(false)}>
                {s.label}
              </a>
            ))}
            <a href="#contact" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 mx-3 mt-2 rounded-md text-center" onClick={() => setOpen(false)}>
              Get Consultation
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;