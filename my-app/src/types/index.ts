export interface Section {
  id: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  features: string[];
  icon: JSX.Element;
}

export interface WhyChoose {
  title: string;
  desc: string;
  icon: JSX.Element;
}

export interface About {
  companySize: string;
  founded: number;
}

export interface CaseStudy {
  title: string;
  sector: string;
  costReduction: string;
  uptime: string;
  delivery: string;
  img: string;
}

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
}

export interface ImageUrls {
  hero: string;
  services: string[];
  about: string;
  caseStudies: string[];
  testimonials: string[];
}