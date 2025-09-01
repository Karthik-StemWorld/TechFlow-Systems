import React, { useRef } from 'react';

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(formRef.current);
    console.log(Object.fromEntries(fd.entries()));
    alert("Thanks! We'll reach out to schedule your consultation.");
    formRef.current.reset();
  };

  return (
    <div className="rounded-lg p-8 bg-white border shadow-sm">
      <h3 className="text-2xl font-bold">Get a Consultation</h3>
      <p className="mt-2 text-slate-600">Fill the form and our team will contact you to schedule a short discovery call.</p>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-6 grid gap-4">
        <input name="name" required placeholder="Full name" className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        <input name="email" type="email" required placeholder="Email address" className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        <input name="company" placeholder="Company (optional)" className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        <textarea name="message" rows={4} placeholder="Tell us briefly about your challenge" className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200" />

        <div className="flex items-center gap-4">
          <button type="submit" className="rounded-md bg-indigo-600 px-5 py-3 text-white font-semibold hover:bg-indigo-700">Request Consultation</button>
          <a href="mailto:hello@consultpro.example" className="text-sm text-slate-500">Or email us at hello@consultpro.example</a>
        </div>
      </form>
    </div>
  );
};

export default Contact;