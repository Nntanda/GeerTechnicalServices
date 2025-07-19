import React from 'react';
import { Users, Award, MapPin, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '500+', label: 'Projects Completed' },
    { icon: <Award className="w-8 h-8" />, number: '15+', label: 'Years Experience' },
    { icon: <MapPin className="w-8 h-8" />, number: '50+', label: 'Cities Served' },
    { icon: <Clock className="w-8 h-8" />, number: '24/7', label: 'Emergency Service' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-orange-500">Geer Technical</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Established as one of Uganda's leading technical services provider, Geer Technical Services 
                Limited has been delivering exceptional quality and reliability across all sectors 
                of construction and technical installations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of certified professionals combines years of experience with the latest 
                technology and techniques to ensure every project meets the highest standards. 
                From small residential repairs to large commercial installations, we pride ourselves 
                on excellence and customer satisfaction.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  'Licensed and insured professionals',
                  'Quality materials and guaranteed workmanship',
                  'Competitive pricing with transparent quotes',
                  'Emergency services available 24/7',
                  'Serving all regions across Uganda'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right content - Image and stats */}
          <div className="space-y-8">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" 
                alt="Professional team at work"
                className="w-full rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-orange-100">Years of Excellence</div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-blue-800 mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;