import React from 'react';
import { 
  Wrench, Droplets, Sun, Zap, Wind, Palette, Hammer, RotateCcw 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Plumbing Services',
      description: 'Professional plumbing installation, repair, and maintenance for residential and commercial properties.',
      images: ['/OIP.webp']
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Poultry Plumbing',
      description: 'Water storage, pipework, and drinking-water systems designed for poultry houses and farms.',
      images: [
        `/poultry/${encodeURIComponent('WhatsApp Image 2026-10-27 at 11.01.49 (1).jpeg')}`,
        `/poultry/${encodeURIComponent('WhatsApp Image 2026-10-27 at 11.01.49.jpeg')}`,
        `/poultry/${encodeURIComponent('WhatsApp Image 2026-10-27 at 11.01.50 (1).jpeg')}`,
        `/poultry/${encodeURIComponent('WhatsApp Image 2026-10-27 at 11.01.50.jpeg')}`
      ]
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Irrigation & Drainage',
      description: 'Complete irrigation systems and drainage solutions for gardens, farms, and commercial landscapes.',
      images: ['/irrigation.webp']
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Rainwater Harvesting',
      description: 'Rainwater collection systems with roof gutters, downpipes, storage tanks, and plumbing for homes and institutions.',
      images: [
        `/rain_harvest/${encodeURIComponent('WhatsApp Image 2026-10-27 at 10.54.49.jpeg')}`,
        `/rain_harvest/${encodeURIComponent('WhatsApp Image 2026-10-27 at 10.54.50 (2).jpeg')}`
      ]
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: 'Solar Water Systems',
      description: 'Eco-friendly solar water heating systems for sustainable and cost-effective hot water solutions.',
      images: ['/solarWater.webp']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Electrical Installations',
      description: 'Safe and reliable electrical work including wiring, lighting, and power system installations.',
      images: ['/electric1.jpeg', '/electric2.jpeg']
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'Air Conditioning',
      description: 'HVAC installation, repair, and maintenance for optimal indoor climate control.',
      images: ['/aircondion.jfif']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'House Finishes',
      description: 'Quality interior and exterior finishing work including painting, tiling, and decorative elements.',
      images: ['/housefinishes.webp']
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: 'Construction',
      description: 'Complete construction services from foundation to completion for residential and commercial projects.',
      images: ['/background.webp']
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: 'Renovations & Maintenance',
      description: 'Professional renovation services and ongoing maintenance to keep your property in perfect condition.',
      images: ['/construction.webp']
    }
  ];

  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-600">What we do</p>
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-950 lg:text-5xl">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
            We provide comprehensive technical services across Uganda, delivering quality solutions 
            for all your residential and commercial needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className={`relative overflow-hidden ${service.images.length > 1 ? 'grid grid-cols-2 gap-1' : ''}`}>
                {service.images.map((image, imageIndex) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${service.title}${service.images.length > 1 ? ` - image ${imageIndex + 1}` : ''}`}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
              
              <div className="p-6">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 rounded-xl bg-blue-50 p-3 text-blue-900 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-slate-900">{service.title}</h3>
                </div>
                
                <p className="text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
                
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-600 transition-colors hover:text-orange-700">
                  Ask us about this service <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
