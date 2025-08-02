import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-40"
        style={{
          backgroundImage: "url('/background.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      ></div>

      <div className="relative container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Uganda's Premier 
                <span className="text-orange-400 block">Technical Services Company</span>
              </h2>
              <p className="text-xl lg:text-2xl text-blue-100 max-w-2xl">
                From plumbing to solar systems, electrical to construction - we deliver excellence in every project in Uganda  and across borders.
              </p>
            </div>

            {/* Key benefits */}
            <div className="space-y-3">
              {[
                'Licensed & Certified Professionals',
                '24/7 Emergency Services Available',
                'Quality Guarantee on All Work',
                'Serving All Regions of Uganda'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2 group">
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View Our Services
              </button>
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
