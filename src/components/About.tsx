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
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="space-y-9">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-600">About our company</p>
              <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-950 lg:text-5xl">
                About <span className="text-orange-500">Geer Technical</span>
              </h2>
              <p className="mb-6 text-lg leading-8 text-slate-600">
                At Geer Technical Services,we are dedicated to providing top Quality plumbing and
                technical services throughtout Uganda and across borders.With our Expertise and 
                commitment to exceptional customer service,we aim to be the go-to technical company
                for residential,commercial,and industrial clients.
              </p>
              <p className="leading-7 text-slate-600">
                Our team of certified professionals combines years of experience with the latest 
                technology and techniques to ensure every project meets the highest standards. 
                From small residential repairs to large commercial installations, we pride ourselves 
                on excellence and customer satisfaction.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl border border-slate-100 bg-slate-50 p-6 sm:p-7">
              <h3 className="text-xl font-bold text-slate-900">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  'Licensed and insured professionals',
                  'Quality materials and guaranteed workmanship',
                  'Competitive pricing with transparent quotes',
                  'Emergency services available 24/7',
                  'Serving all regions across Uganda'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 flex-shrink-0 rounded-full bg-orange-500"></div>
                    <span className="text-sm font-medium text-slate-700 sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right content - Image and stats */}
          <div className="space-y-8">
            <div className="relative pb-5 pl-5">
              <div className="absolute inset-0 rounded-2xl bg-orange-100"></div>
              <img 
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" 
                alt="Professional team at work"
                className="relative h-[360px] w-full rounded-2xl object-cover shadow-xl sm:h-[420px]"
              />
              <div className="absolute -bottom-1 left-0 rounded-xl bg-orange-500 p-5 text-white shadow-xl shadow-orange-900/20">
                <div className="text-3xl font-extrabold">10+</div>
                <div className="text-sm font-medium text-orange-100">Years of Excellence</div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5">
              {stats.map((stat, index) => (
                <div key={index} className="rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6">
                  <div className="mb-3 flex justify-center text-blue-800">
                    {stat.icon}
                  </div>
                  <div className="mb-1 text-3xl font-extrabold tracking-tight text-slate-950">{stat.number}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
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