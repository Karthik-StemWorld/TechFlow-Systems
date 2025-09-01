import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import {
  FiCloud, FiBarChart2, FiShield, FiTrendingDown, FiStar, FiCheck, FiClock, FiAward, FiGlobe, FiCpu, FiMessageSquare, FiPhone, FiMail, FiMapPin, FiFacebook, FiLinkedin, FiTwitter,
} from 'react-icons/fi';
import heroImage from './assets/computer.jpg'
import './App.css';

// --- Centralized Data Config ---
// Use React.ReactElement for JSX types
const ICONS: Record<string, React.ReactElement> = {
  FiShield: <FiShield className="text-indigo-600 w-5 h-5" />,
  FiCloud: <FiCloud className="text-indigo-600 w-5 h-5" />,
  FiAward: <FiAward className="text-indigo-600 w-5 h-5" />,
  FiGlobe: <FiGlobe className="text-indigo-600 w-5 h-5" />,
  FiTrendingDown: <FiTrendingDown className="text-indigo-600 w-5 h-5" />,
  FiCpu: <FiCpu className="text-indigo-600 w-5 h-5" />,
  FiMessageSquare: <FiMessageSquare className="text-indigo-600 w-5 h-5" />,
  FiClock: <FiClock className="text-indigo-600 w-5 h-5" />,
};

type Section = { id: string; label: string };
type HeroStat = { title: string; subtitle: string };
type Service = { title: string; description: string; features: string[]; img: string; icon: React.ReactElement };
type WhyPoint = { title: string; desc: string; icon: () => React.ReactElement };
type AboutStat = { value: string; label: string };
type Certification = { name: string; icon: keyof typeof ICONS };
type IndiaAdvantage = { title: string; desc: string; icon: keyof typeof ICONS };
type CaseStudy = {
  title: string;
  sector: string;
  description: string;
  delivery: string;
  costReduction?: string;
  uptime?: string;
  efficiencyGain?: string;
  img: string;
};
type Testimonial = {
  name: string;
  title: string;
  quote: string;
  rating: number;
  avatar: string;
};

const DATA = {
  sections: [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "why", label: "Why Choose Us" },
    { id: "about", label: "About" },
    { id: "cases", label: "Case Studies" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ] as Section[],
  hero: {
    img: heroImage,
    title: (
      <>
        Premium <span className="text-amber-300">Technology</span> Integration Solutions for Global Businesses
      </>
    ),
    subtitle: "Cost-effective cloud solutions, enterprise applications and managed services that accelerate business growth.",
    stats: [
      { title: "Up to 40% Cost Savings", subtitle: "Optimized solutions for your business" },
      { title: "24/7 Expert Support", subtitle: "Always-on technical assistance" },
      { title: "500+ Projects Delivered", subtitle: "Proven track record" },
      { title: "Global Coverage", subtitle: "Multi-region & timezone support" },
    ] as HeroStat[],
  },
  services: [
    {
      title: "Cloud Services",
      description: "AWS, Azure, GCP migration and optimization. Reduce infrastructure costs by up to 50%.",
      features: ["Cloud Migration", "Infrastructure Optimization", "Multi-Cloud Strategy"],
      img: "https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2021/08/12060931/Untitled-design-88.png", // cloud image
      icon: <FiCloud />,
    },
    {
      title: "Enterprise Applications",
      description: "Custom enterprise solutions, ERP implementations, and system integrations.",
      features: ["ERP Implementation", "Custom Development", "API Integrations"],
      img: "https://oecko.com/wp-content/uploads/2021/01/Image-article-1080x675.jpg", // enterprise image
      icon: <FiBarChart2 />,
    },
    {
      title: "Application Development and Testing",
      description: "End-to-end application development, rigorous testing, and continuous improvement to deliver robust solutions.",
      features: ["Custom Application Development", "Automated & Manual Testing", "Continuous Integration/Delivery"],
      img: "https://static.vecteezy.com/system/resources/thumbnails/037/471/685/small_2x/close-up-female-hands-of-unrecognizable-business-woman-professional-user-worker-using-typing-on-laptop-cropped-view-unknown-girl-working-with-computer-keyboard-sit-at-home-office-working-online-chat-photo.jpg", // dev/testing
      icon: <FiCpu />,
    },
    {
      title: "Gen AI / AI Services",
      description: "Cutting-edge AI solutions leveraging Generative AI, ML models, and automation to drive innovation.",
      features: ["AI/ML Model Development", "Generative AI Solutions", "AI Consulting & Strategy"],
      img: "https://pub-e93d5c9fdf134c89830082377f6df465.r2.dev/2024/11/Generative-AI-edited.webp", // AI image
      icon: <FiGlobe />,
    },
  ] as Service[],
  why: [
    { title: "40-60% Cost Reduction", desc: "Get the same quality of work at a fraction of the cost compared to local providers.", icon: () => <FiTrendingDown width={20} height={20} stroke="#4f46e5" /> },
    { title: "Top-Tier Technical Talent", desc: "Our team consists of certified professionals from top Indian technical institutes.", icon: () => <FiStar width={20} height={20} stroke="#4f46e5" /> },
    { title: "Time Zone Advantage", desc: "Round-the-clock development and support with our strategic global time zone coverage.", icon: () => <FiClock width={20} height={20} stroke="#4f46e5" /> },
    { title: "Proven Track Record", desc: "500+ successful projects delivered for clients across 25+ countries.", icon: () => <FiAward width={20} height={20} stroke="#4f46e5" /> },
  ] as WhyPoint[],
  about: {
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
    title: "About TechFlow Systems",
    intro: "A leading Indian system integrator with 8+ years of experience delivering world-class technology solutions to global clients.",
    stats: [
      { value: "500+", label: "Projects Completed" },
      { value: "25+", label: "Countries Served" },
      { value: "98%", label: "Client Satisfaction" },
    ] as AboutStat[],
    mission: "To bridge the gap between high-quality technology solutions and cost-effectiveness by leveraging India's exceptional technical talent pool and innovative approach to system integration.",
    certifications: [
      { name: "ISO 27001 Certified", icon: "FiShield" },
      { name: "AWS Partner", icon: "FiCloud" },
      { name: "Microsoft Gold Partner", icon: "FiAward" },
      { name: "Google Cloud Partner", icon: "FiGlobe" },
    ] as Certification[],
    indiaAdvantage: [
      { title: "Cost Efficiency", desc: "Deliver premium quality at 40-60% lower costs than global competitors", icon: "FiTrendingDown" },
      { title: "Technical Excellence", desc: "Access to the world's largest pool of IT professionals", icon: "FiCpu" },
      { title: "English Proficiency", desc: "Seamless communication with global clients", icon: "FiMessageSquare" },
      { title: "Time Zone Coverage", desc: "24/7 support and development capabilities", icon: "FiClock" },
    ] as IndiaAdvantage[],
  },
  cases: [
    {
      title: "Retail Chain Cloud Migration",
      sector: "E-COMMERCE",
      description: "Migrated 500+ stores to AWS, reducing infrastructure costs by 45% while improving performance.",
      delivery: "6 months",
      costReduction: "45%",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    },
    {
      title: "Banking ERP Implementation",
      sector: "FINANCIAL SERVICES",
      description: "Implemented core banking system for regional bank, processing 100K+ daily transactions.",
      delivery: "18 months",
      uptime: "99.9%",
      img: "https://images.unsplash.com/photo-1579621970795-87facc2f976d",
    },
    {
      title: "Hospital Management System",
      sector: "HEALTHCARE",
      description: "Deployed comprehensive HIS across 50 hospitals, improving patient care efficiency by 60%.",
      delivery: "12 months",
      efficiencyGain: "60%",
      img: "https://rmsresults.com/wp-content/uploads/2017/07/blog-hospital-case-study-3.jpg",
    },
  ] as CaseStudy[],
  testimonials: [
    {
      name: "Michael Chen",
      title: "CTO, RetailTech Solutions",
      quote: "TechFlow delivered our cloud migration project 2 weeks ahead of schedule and 30% under budget. Their team's expertise in AWS is outstanding.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah Johnson",
      title: "CFO, FinanceFirst Corp",
      quote: "The cost savings have been incredible - 50% reduction in our IT operational costs while improving system performance. Highly recommended!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "David Rodriguez",
      title: "VP Engineering, HealthTech Innovations",
      quote: "Exceptional communication and technical skills. The team understood our requirements perfectly and delivered exactly what we needed.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ] as Testimonial[],
};

// --- Main App ---
export default function App() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const obs = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
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
      <Navbar sections={DATA.sections} active={active} />
      <main className="mt-16">
        <section id="home"><Hero {...DATA.hero} /></section>
        <section id="services" className="py-20 px-6"><div className="container mx-auto"><Services services={DATA.services} /></div></section>
        <section id="why" className="py-20 bg-slate-50 px-6"><div className="container mx-auto"><WhyChoose points={DATA.why} /></div></section>
        <section id="about" className="py-20 px-6"><div className="container mx-auto !max-w-[1100px]"><About {...DATA.about} /></div></section>
        <section id="cases" className="py-20 px-6 bg-white"><div className="container mx-auto"><CaseStudies cases={DATA.cases} /></div></section>
        <section id="testimonials" className="py-20 px-6 bg-slate-50"><div className="container mx-auto max-w-5xl"><Testimonials items={DATA.testimonials} /></div></section>
        <section id="contact" className="py-20 px-6"><div className="container mx-auto max-w-3xl"><Contact /></div></section>
      </main>
      <Footer />
    </div>
  );
}

// --- Navbar ---
function Navbar({ sections, active }: { sections: Section[]; active: string }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="backdrop-blur-sm bg-white/70 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md flex items-center justify-center bg-gradient-to-tr from-indigo-500 to-purple-500 text-white font-bold">T</div>
              <div className="font-semibold">TechFlow Systems</div>
            </a>
            <div className="hidden md:flex items-center gap-6">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className={`text-sm hover:text-indigo-600 transition ${active === s.id ? "text-indigo-600 font-medium" : "text-slate-700"}`}>{s.label}</a>
              ))}
              <a href="#contact" className="ml-4 inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-indigo-700">Get Consultation</a>
            </div>
            <MobileMenu sections={sections} />
          </div>
        </div>
      </nav>
    </header>
  );
}

function MobileMenu({ sections }: { sections: Section[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button onClick={() => setOpen((s) => !s)} aria-label="menu" className="p-2 rounded-md">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
      {open && (
        <div className="absolute right-4 mt-2 w-56 bg-white rounded-md shadow-lg py-3">
          <div className="flex flex-col">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setOpen(false)}>{s.label}</a>
            ))}
            <a href="#contact" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 mx-3 mt-2 rounded-md text-center" onClick={() => setOpen(false)}>Get Consultation</a>
          </div>
        </div>
      )}
    </div>
  );
}

// --- Hero ---
function Hero({ img, title, subtitle, stats }: { img: string; title: React.ReactElement; subtitle: string; stats: HeroStat[] }) {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <img
        src={img}
        alt="consulting"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/70"></div>

      {/* Hero Content */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 z-10 text-center flex flex-col items-center justify-center py-16">
        {/* Title & Subtitle */}
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-snug drop-shadow-lg">
          {title}
        </h1>
        <p className="mt-4 text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-3 text-white text-sm sm:text-base font-semibold shadow-lg hover:scale-105 hover:bg-indigo-700 transition"
          >
            Get Consultation
          </a>
          <a
            href="#services"
            className="inline-flex items-center rounded-md border border-white/30 bg-white/10 px-5 py-3 text-white text-sm sm:text-base font-medium hover:bg-white/20 transition"
          >
            Our Services
          </a>
        </div>

        {/* Stats Cards */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full max-w-4xl">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white/10 rounded-xl p-3 sm:p-5 backdrop-blur-sm shadow-md border border-white/20 text-white flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-base sm:text-lg font-bold">{stat.title}</div>
              <div className="text-xs sm:text-sm mt-1 opacity-90">{stat.subtitle}</div>
            </div>
          ))}
        </div>

        {/* Cost Savings Badge (Visible & Centered on Mobile) */}
        <div className="mt-8 sm:hidden flex justify-center">
          <div className="bg-indigo-600 text-white w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-white/30">
            <div className="text-lg font-bold">40-60%</div>
            <div className="text-[10px] opacity-90 mt-1">Cost Savings</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Services ---
function Services({ services }: { services: Service[] }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Our Core Services</h2>
          <p className="mt-3 text-slate-600 text-lg">
            Comprehensive system integration solutions tailored for modern businesses. 
            Quality Indian expertise at competitive global rates.
          </p>
        </div>

        {/* Responsive Flex Container */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((s) => (
            <motion.div
              key={s.title}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1rem)] max-w-sm rounded-xl border border-slate-200 shadow-md bg-white overflow-hidden"
            >
              {/* Service Image */}
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-[15rem] object-cover"
              />

              {/* Card Content */}
              <div className="p-6">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 text-2xl mb-3">
                  {s.icon}
                </div>

                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {s.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Tick />
                      <span className="text-sm text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function Tick() {
  return <FiCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />;
}

// --- Why Choose ---
function WhyChoose({ points }: { points: WhyPoint[] }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Why Choose Indian Expertise?</h2>
          <p className="mt-2 text-slate-600">
            Leverage India's world-class technical talent and cost advantages
            without compromising on quality.
          </p>
        </div>

        {/* Flex layout for better centering */}
        <div className="flex flex-wrap justify-center gap-8">
          {points.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1rem)] max-w-sm rounded-lg p-6 border bg-white shadow-md text-center"
            >
              {/* Icon on top */}
              <div className="w-16 h-16 mx-auto rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 text-2xl mb-4">
                <p.icon />
              </div>
              <h4 className="font-semibold text-lg">{p.title}</h4>
              <p className="text-sm mt-2 text-slate-600">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// --- About ---
function About({
  img,
  title,
  intro,
  stats,
  mission,
  certifications,
  indiaAdvantage,
}: {
  img: string;
  title: string;
  intro: string;
  stats: AboutStat[];
  mission: string;
  certifications: Certification[];
  indiaAdvantage: IndiaAdvantage[];
}) {
  return (
    <div className="rounded-lg bg-white shadow-sm border overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        {/* Background Header Section */}
        <div className="relative h-[22rem] flex items-center justify-center text-center text-white">
          <img
            src={img}
            alt="About TechFlow Systems"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="z-10 px-6">
            <h3 className="text-4xl font-bold">{title}</h3>
            <p className="mt-3 text-lg max-w-2xl mx-auto">{intro}</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="p-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {stats.map((s, index) => (
              <div
                key={`${s.label}-${index}`}
                className="p-6 bg-indigo-50 rounded-lg shadow-sm"
              >
                <div className="text-3xl font-bold text-indigo-700">
                  {s.value}
                </div>
                <div className="mt-2 text-slate-700">{s.label}</div>
              </div>
            ))}

            {/* Mission */}
            <div className="flex flex-col sm:col-span-3">
              <div className="mt-10">
                <h4 className="text-xl font-semibold mb-3">Our Mission</h4>
                <p className="text-slate-600 leading-relaxed">{mission}</p>
              </div>

              {/* Certifications */}
              <div className="mt-10">
                <h4 className="text-xl font-semibold mb-3">
                  Certifications & Standards
                </h4>
                <ul className="grid sm:grid-cols-2 gap-4 text-slate-700">
                  {certifications.map((cert, index) => (
                    <li
                      key={`${cert.name}-${index}`}
                      className="flex items-center gap-3 p-3 border rounded-md bg-slate-50 shadow-sm"
                    >
                      {ICONS[cert.icon]}
                      <span>{cert.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* India Advantage */}
              <div className="mt-10">
                <h4 className="text-xl font-semibold mb-3">India Advantage</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {indiaAdvantage.map((item, index) => (
                    <div
                      key={`${item.title}-${index}`}
                      className="flex items-start gap-3 p-4 border rounded-md bg-white shadow-sm"
                    >
                      <div className="mt-1">{ICONS[item.icon]}</div>
                      <div>
                        <h5 className="font-semibold text-indigo-700">
                          {item.title}
                        </h5>
                        <p className="text-slate-600 mt-1 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


// --- Case Studies ---
function CaseStudies({ cases }: { cases: CaseStudy[] }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Portfolio & Case Studies</h2>
          <p className="mt-2 text-slate-600">
            Real results for real businesses. See how we've helped companies transform their technology infrastructure.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {cases.map((c, idx) => (
            <div key={`${c.title}-${idx}`} className="w-full md:w-[calc(33%-1rem)] max-w-sm rounded-lg overflow-hidden border bg-white shadow-sm transition transform hover:scale-105 hover:shadow-lg">
              <img src={c.img} alt={c.title} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">{c.title}</h4>
                <div className="mt-1 text-xs text-indigo-600 uppercase">{c.sector}</div>
                <p className="mt-2 text-sm text-slate-600">{c.description}</p>
                <div className="mt-4 grid grid-cols-3 text-sm text-slate-600 gap-2">
                  <div>
                    <div className="text-xs">Delivery</div>
                    <div className="font-medium">{c.delivery}</div>
                  </div>
                  {'costReduction' in c && (
                    <div>
                      <div className="text-xs">Cost Reduction</div>
                      <div className="font-medium">{c.costReduction}</div>
                    </div>
                  )}
                  {'uptime' in c && (
                    <div>
                      <div className="text-xs">Uptime</div>
                      <div className="font-medium">{c.uptime}</div>
                    </div>
                  )}
                  {'efficiencyGain' in c && (
                    <div>
                      <div className="text-xs">Efficiency Gain</div>
                      <div className="font-medium">{c.efficiencyGain}</div>
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <a href="#contact" className="inline-block rounded-md bg-indigo-600 px-3 py-2 text-white text-sm font-medium">
                    Discuss this case
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// --- Testimonials ---
function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Client Testimonials</h2>
          <p className="mt-2 text-slate-600">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {items.map((t, idx) => (
            <div
              key={`${t.name}-${idx}`}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1rem)] max-w-sm rounded-lg p-6 border bg-white shadow-sm hover:shadow-md transition"
            >
              {/* Avatar & Info */}
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.title}</div>
                </div>
              </div>

              {/* Quote */}
              <p className="mt-4 text-slate-700 italic">“{t.quote}”</p>

              {/* Rating */}
              <div className="mt-4 flex gap-1 text-yellow-500">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 fill-yellow-500" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// --- Contact & Footer ---
function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    const fd = new FormData(formRef.current);
    console.log(Object.fromEntries(fd.entries()));
    alert("Thanks! We'll reach out to schedule your consultation.");
    formRef.current.reset();
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-indigo-700">
            Get Started Today
          </h2>
          <p className="mt-3 text-lg text-slate-700 leading-relaxed">
            Ready to reduce costs and improve efficiency? Let's discuss your project requirements.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden shadow-lg border bg-white">
          {/* Left Info Panel */}
          <div className="bg-indigo-50 p-4 sm:p-10 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
              Contact Information
            </h3>
            <div className="space-y-4 text-slate-700">
              <div className="flex items-center gap-3">
                <FiMapPin className="text-indigo-600 w-5 h-5" />
                <span>Bangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="text-indigo-600 w-5 h-5" />
                <span>+91 80 4567 8901</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="text-indigo-600 w-5 h-5" />
                <span>contact@techflowsystems.com</span>
              </div>
            </div>
            <div className="mt-10">
              <h4 className="font-semibold text-indigo-700 mb-3">Why Start With Us?</h4>
              <ul className="space-y-3 text-slate-700 text-sm">
                {[
                  "Free initial consultation and project assessment",
                  "Detailed cost-benefit analysis",
                  "No commitment required for initial discussions",
                  "24-48 hour response time guarantee",
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FiCheck className="text-green-600" /> {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="p-4 sm:p-10 min-w-0">
            <h3 className="text-2xl font-bold mb-6 text-center text-indigo-700">Request Free Consultation</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  name="firstName"
                  required
                  placeholder="First Name"
                  className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
                <input
                  name="lastName"
                  required
                  placeholder="Last Name"
                  className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <input
                name="company"
                placeholder="Company"
                className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
              <select
                name="service"
                className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
              >
                <option value="">Select a service</option>
                <option>Cloud Migration</option>
                <option>ERP Implementation</option>
                <option>Healthcare Solutions</option>
                <option>Custom Development</option>
              </select>
              <textarea
                name="details"
                rows={5}
                placeholder="Tell us about your project requirements..."
                className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition"
              >
                Request Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-slate-50 border-slate-200">
      <div className="max-w-[1300px] mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md flex items-center justify-center bg-gradient-to-tr from-indigo-500 to-purple-500 text-white font-bold text-lg">
              T
            </div>
            <span className="text-lg font-bold">TechFlow Systems</span>
          </div>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed">
            Leading Indian system integrator delivering cost-effective cloud services, enterprise applications, and managed IT solutions to global clients.
          </p>
          <div className="flex gap-4 mt-6 text-slate-600">
            <a href="#" aria-label="Facebook" className="hover:text-indigo-600 transition">
              <FiFacebook size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-indigo-600 transition">
              <FiLinkedin size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-indigo-600 transition">
              <FiTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-slate-800 mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><a href="#" className="hover:text-indigo-600 transition">Cloud Services</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Enterprise Applications</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Support Contracts</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Managed Services</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-slate-800 mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><a href="#" className="hover:text-indigo-600 transition">About Us</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Portfolio</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Careers</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-slate-800 mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><a href="#" className="hover:text-indigo-600 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 mt-10 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} TechFlow Systems. All rights reserved.
      </div>
    </footer>
  );
}
