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
      image: '/OIP.webp'
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Irrigation & Drainage',
      description: 'Complete irrigation systems and drainage solutions for gardens, farms, and commercial landscapes.',
      image: '/irrigation.webp'
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: 'Solar Water Systems',
      description: 'Eco-friendly solar water heating systems for sustainable and cost-effective hot water solutions.',
      image: '/solarWater.webp'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Electrical Installations',
      description: 'Safe and reliable electrical work including wiring, lighting, and power system installations.',
      image: '/Electricalinstall.webp'
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'Air Conditioning',
      description: 'HVAC installation, repair, and maintenance for optimal indoor climate control.',
      image: '/aircondion.jfif'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'House Finishes',
      description: 'Quality interior and exterior finishing work including painting, tiling, and decorative elements.',
      image: '/housefinishes.webp'
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: 'Construction',
      description: 'Complete construction services from foundation to completion for residential and commercial projects.',
      image: '/construction.webp'
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: 'Renovations & Maintenance',
      description: 'Professional renovation services and ongoing maintenance to keep your property in perfect condition.',
      image: '/construction.webp'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive technical services across Uganda, delivering quality solutions 
            for all your residential and commercial needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-800 p-3 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <button className="mt-4 text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
