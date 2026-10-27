import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, service, message } = formData;

    const whatsappMessage = `
Hi there!Welcome to GEER TECH services.We deal in plumbing
irrigation and drainage,solar and electrical installations,air conditioning,
construction and house finishes,How may we help you today?,

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Service Needed: ${service}
Message: ${message}
    `;

    const whatsappNumber = '256755593320';
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-20 text-white sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-300">We're ready to help</p>
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Get In <span className="text-orange-400">Touch</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-blue-100">
            Ready to start your project? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="rounded-xl bg-orange-500 p-3 shadow-lg shadow-orange-950/20">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Phone Numbers</h4>
                    <a href="tel:+256755593320" className="block text-blue-100 transition hover:text-white">+256 755 593 320</a>
                    <a href="tel:+256787758585" className="block text-blue-100 transition hover:text-white">+256 787 758 585</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="rounded-xl bg-orange-500 p-3 shadow-lg shadow-orange-950/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Email</h4>
                    <a href="mailto:geertechnicalservices@gmail.com" className="break-all text-blue-100 transition hover:text-white">geertechnicalservices@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="rounded-xl bg-orange-500 p-3 shadow-lg shadow-orange-950/20">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-blue-100">Main Street East</p>
                    <p className="text-blue-100">Jinja City, Uganda</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="rounded-xl bg-orange-500 p-3 shadow-lg shadow-orange-950/20">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Working Hours</h4>
                    <p className="text-blue-100">Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-blue-100">Sat: 9:00 AM - 4:00 PM</p>
                    <p className="text-blue-100">Emergency: 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-blue-950/50 p-6">
              <h4 className="mb-3 text-xl font-bold">Emergency Services</h4>
              <p className="text-blue-100 mb-4">
                We provide 24/7 emergency services for urgent plumbing, electrical, and other critical issues.
              </p>
              <a 
                href="https://wa.me/256755593320?text=Hello%20Geer%20Technical%20Services,%20I%20need%20emergency%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl bg-green-500 px-6 py-3 font-bold text-white transition-colors hover:bg-green-600"
              >
                Contact via WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl shadow-blue-950/20 sm:p-8">
            <h3 className="mb-2 text-2xl font-extrabold">Send Us a Message</h3>
            <p className="mb-6 text-sm text-slate-500">Share a few details and we’ll help you get started.</p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm font-semibold text-slate-700">
                    First Name *
                  </label>
                  <input 
                    name="firstName"
                    id="firstName"
                    type="text" 
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-sm font-semibold text-slate-700">
                    Last Name *
                  </label>
                  <input 
                    name="lastName"
                    id="lastName"
                    type="text" 
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                  Email *
                </label>
                <input 
                  name="email"
                  id="email"
                  type="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone Number
                </label>
                <input 
                  name="phone"
                  id="phone"
                  type="tel" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                  placeholder="+256 700 000 000"
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-semibold text-slate-700">
                  Service Needed
                </label>
                <select 
                  name="service"
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                >
                  <option value="">Select a service</option>
                  <option>Plumbing</option>
                  <option>Irrigation & Drainage</option>
                  <option>Solar Water Systems</option>
                  <option>Electrical Installation</option>
                  <option>Air Conditioning</option>
                  <option>House Finishes</option>
                  <option>Construction</option>
                  <option>Renovations & Maintenance</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
                  Message *
                </label>
                <textarea 
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-green-900/20 transition hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                <span>Send to WhatsApp</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="lg:col-span-2 mt-16">
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-blue-950/20">
            <div className="bg-blue-950 p-6 text-white">
              <h3 className="mb-2 text-2xl font-bold">Find Us</h3>
              <p className="text-blue-100">Visit our office in Jinja City for consultations and project discussions</p>
            </div>
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7573!2d33.2043!3d0.4244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMjUnMjcuOCJOIDMzwrAxMicxNS41IkU!5e0!3m2!1sen!2sug!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Geer Technical Services Location - Main Street East, Jinja City"
              ></iframe>
            </div>
            <div className="bg-slate-50 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Office Address</h4>
                  <p className="text-gray-600">Main Street East, Jinja City, Uganda</p>
                </div>
                <a
                  href="https://www.google.com/maps/search/Main+Street+East,+Jinja+City,+Uganda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-blue-950 px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-orange-600"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
