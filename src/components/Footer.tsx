import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Wrench, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="relative">
                  <div className="bg-blue-800 p-2 rounded-lg">
                    <Wrench className="w-5 h-5 text-white" />
                  </div>
                    <p className="text-gray-300">Main Street East</p>
                    <p className="text-gray-300">Jinja City, Uganda</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Geer<span className="text-orange-500">Technical</span>
                  </h3>
                  <p className="text-gray-400 text-sm">Services Limited</p>
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Uganda's premier technical services company, delivering quality solutions 
              for all your construction and maintenance needs.
            </p>


          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Plumbing Services',
                'Irrigation & Drainage',
                'Solar Water Systems',
                'Electrical Installations',
                'Air Conditioning',
                'House Finishes',
                'Construction',
                'Renovations & Maintenance'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                'About Us',
                'Our Services',
                'Contact Us',
                'Emergency Services',
                'Get Quote',
                
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Clive Road,Jinja East</p>
                  <p className="text-gray-300">Jinja , Uganda</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+256 755 593 320 </p>
                  <p className="text-gray-300">+256 787 758 585</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">geertechnicalservices@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-orange-500 rounded-lg">
              <h5 className="font-semibold mb-1">24/7 Emergency</h5>
              <p className="text-sm text-orange-100">Call us anytime for urgent repairs</p>
              <p className="text-sm text-orange-100">On our contacts or contact us Via whatsapp</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Geer Technical Services Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Designed By
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Ntanda Nasser 
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                0765802925
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;