import React from 'react';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-blue-950 text-white">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-950/30"
        style={{
          backgroundImage: "url('/background.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="relative container mx-auto px-4 py-20 sm:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left content */}
          <div className="max-w-3xl space-y-8">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-200 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-orange-400"></span>
                Trusted technical experts in Uganda
              </span>
              <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Uganda's Premier 
                <span className="mt-2 block text-orange-400">Technical Services Company</span>
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-blue-100 sm:text-xl">
                From plumbing and drainage to construction, solar, and electrical installations, we bring dependable expertise to every project.
              </p>
            </div>

            {/* Key benefits */}
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                'Licensed & Certified Professionals',
                '24/7 Emergency Services Available',
                'Quality Guarantee on All Work',
                'Serving All Regions of Uganda'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-sm font-medium text-blue-50 sm:text-base">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-orange-400" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-4 text-base font-bold text-white shadow-lg shadow-orange-950/30 transition hover:-translate-y-0.5 hover:bg-orange-600 sm:text-lg">
                <span>Get Free Quote</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/5 px-7 py-4 text-base font-bold text-white transition hover:bg-white hover:text-blue-950 sm:text-lg">
                View Our Services
              </a>
            </div>
          </div>

          <div className="hidden justify-end lg:flex">
            <div className="max-w-sm rounded-2xl border border-white/15 bg-blue-950/55 p-7 shadow-2xl backdrop-blur-md">
              <div className="mb-6 inline-flex rounded-xl bg-orange-500 p-3 text-white shadow-lg shadow-orange-950/30">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-200">Built on trust</p>
              <p className="mt-3 text-2xl font-bold leading-snug">Quality workmanship, from the first call to project handover.</p>
              <a href="#projects" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-100 transition hover:text-orange-300">
                See our recent work <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-orange-400 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
