import React from 'react';
import { ArrowUpRight, Mail, MapPin, Phone, Wrench } from 'lucide-react';

const Footer = () => {
  const services = [
    'Plumbing Services',
    'Irrigation & Drainage',
    'Solar Water Systems',
    'Electrical Installations',
    'Air Conditioning',
    'House Finishes',
    'Construction',
    'Renovations & Maintenance',
  ];

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Community Impact', href: '#community' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Get a Quote', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr]">
          <div>
            <a href="#home" className="mb-5 inline-flex items-center gap-3">
              <span className="rounded-xl bg-orange-500 p-3 text-white">
                <Wrench className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xl font-extrabold tracking-tight">
                  Geer<span className="text-orange-400">Technical</span>
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Services Limited</span>
              </span>
            </a>
            <p className="max-w-sm leading-7 text-slate-400">
              Uganda's premier technical services company, delivering quality solutions for all your construction and maintenance needs.
            </p>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-400 transition hover:text-orange-300">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm text-slate-400 transition hover:text-orange-300">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-white">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-400 transition hover:text-orange-300">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-white">Get in touch</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-400" />
                <p className="text-sm leading-6 text-slate-400">Clive Road, Jinja East<br />Jinja, Uganda</p>
              </div>
              <a href="tel:+256755593320" className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-white">
                <Phone className="h-5 w-5 flex-shrink-0 text-orange-400" />
                <span>+256 755 593 320<br />+256 787 758 585</span>
              </a>
              <a href="mailto:geertechnicalservices@gmail.com" className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-white">
                <Mail className="h-5 w-5 flex-shrink-0 text-orange-400" />
                <span className="break-all">geertechnicalservices@gmail.com</span>
              </a>
            </div>
            <a
              href="https://wa.me/256755593320"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-xl bg-green-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-green-700"
            >
              24/7 Emergency WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col gap-3 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Geer Technical Services Limited. All rights reserved.</p>
          <a href="#home" className="font-medium transition hover:text-orange-300">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
