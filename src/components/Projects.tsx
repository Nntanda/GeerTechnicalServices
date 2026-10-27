import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      image: '/image1.jpeg',
      title: 'Residential Constrution Finishes',
      category: 'Construction',
      description: 'House Finishes for a modern residential property.'
    },
    {
      id: 2,
      image: '/image2.jpeg',
      title: 'Drainage and Plumbing',
      category: 'Plumbing',
      description: 'Professional Drainage and Plumbing for commercial building and residentials'
    },
    {
      id: 3,
      image: '/image3.jpeg',
      title: 'Drainage System',
      category: 'Drainage',
      description: 'Eco-friendly Drainage system installation for Residential houses'
    },
    {
      id: 4,
      image: '/image4.jpeg',
      title: 'Plumbing',
      category: 'Plumbing',
      description: 'Advanced plumbing system for residentials.'
    },
    {
      id: 5,
      image: '/image5.jpeg',
      title: 'Drainage system installation',
      category: 'Drainage',
      description: 'Eco-friendly Drainage system installation for Residential houses'
    },
    {
      id: 6,
      image: '/image6.jpeg',
      title: 'House Finishing Work',
      category: 'Finishes',
      description: 'Quality interior and exterior finishing with attention to detail.'
    },
    {
      id: 7,
      image: '/image7.jpeg',
      title: 'House Finishing Work',
      category: 'Finishes',
      description:'Quality interior and exterior finishing with attention to detail.'
    },

    {
      id: 9,
      image: '/image9.jpeg',
      title: 'Construction site',
      category: 'Construction',
      description: 'Complete construction project from foundation to completion.'
    },
    {
      id: 10,
      image: '/electric1.jpeg',
      title: 'Electrical Works',
      category: 'Electrical',
      description: 'Electrical installation and appliance wiring work.'
    },
    {
      id: 11,
      image: '/electric2.jpeg',
      title: 'Water Heater Electrical Works',
      category: 'Electrical',
      description: 'Water heater electrical controls and installation.'
    },
    {
      id: 12,
      image: `/construction/${encodeURIComponent('WhatsApp Image 2026-10-27 at 10.46.44.jpeg')}`,
      title: 'Residential Building Construction',
      category: 'Construction',
      description: 'Brickwork and structural construction on a residential building.'
    },
    {
      id: 13,
      image: `/construction/${encodeURIComponent('WhatsApp Image 2026-10-27 at 10.46.46 (1).jpeg')}`,
      title: 'Residential Construction Progress',
      category: 'Construction',
      description: 'A view of the ongoing masonry and structural work.'
    },
    {
      id: 14,
      image: `/construction/${encodeURIComponent('WhatsApp Image 2026-10-27 at 10.46.46.jpeg')}`,
      title: 'Building Structural Works',
      category: 'Construction',
      description: 'Structural support and masonry work during construction.'
    },
    {
      id: 15,
      image: `/Drainage/${encodeURIComponent('WhatsApp Image 2026-10-27 at 10.50.04.jpeg')}`,
      title: 'Sanitation Facility Installation',
      category: 'Drainage',
      description: 'Sanitation facility and plumbing installation.'
    },
    {
      id: 16,
      image: `/Drainage/${encodeURIComponent('WhatsApp Image 2026-10-27 at 10.50.05 (1).jpeg')}`,
      title: 'Sanitation Site Plan',
      category: 'Drainage',
      description: 'Planned layout for sanitation facilities and drainage connections.'
    },
    {
      id: 17,
      image: `/Drainage/${encodeURIComponent('WhatsApp Image 2026-10-27 at 10.50.05 (2).jpeg')}`,
      title: 'Building Drainage Installation',
      category: 'Drainage',
      description: 'External drainage pipework installation for a building.'
    },
    {
      id: 18,
      image: `/Drainage/${encodeURIComponent('WhatsApp Image 2026-10-27 at 10.50.05.jpeg')}`,
      title: 'Drainage Pipework',
      category: 'Drainage',
      description: 'Ground drainage pipework being installed on site.'
    },
    {
      id: 19,
      image: `/rain_harvest/${encodeURIComponent('WhatsApp Image 2026-10-27 at 10.54.49.jpeg')}`,
      title: 'Rainwater Harvesting - Gutter Installation',
      category: 'Rainwater Harvesting',
      description: 'Installing roof gutters to collect rainwater for storage.'
    },
    {
      id: 20,
      image: `/rain_harvest/${encodeURIComponent('WhatsApp Image 2026-10-27 at 10.54.50 (1).jpeg')}`,
      title: 'Rainwater Harvesting - Community Installation',
      category: 'Rainwater Harvesting',
      description: 'Community and project teams working on the rainwater harvesting installation.'
    },
    {
      id: 21,
      image: `/rain_harvest/${encodeURIComponent('WhatsApp Image 2026-10-27 at 10.54.50 (2).jpeg')}`,
      title: 'Rainwater Harvesting - Storage Tank',
      category: 'Rainwater Harvesting',
      description: 'A rainwater storage tank prepared for installation.'
    },
    {
      id: 22,
      image: `/rain_harvest/${encodeURIComponent('WhatsApp Image 2026-10-27 at 10.54.50 (3).jpeg')}`,
      title: 'Rainwater Harvesting - Roof Connections',
      category: 'Rainwater Harvesting',
      description: 'Connecting roof drainage to the rainwater collection system.'
    },
    {
      id: 23,
      image: `/rain_harvest/${encodeURIComponent('WhatsApp Image 2026-10-27 at 10.54.50.jpeg')}`,
      title: 'Rainwater Harvesting - Tank Setup',
      category: 'Rainwater Harvesting',
      description: 'Rainwater collection tank and materials on site.'
    },
    {
      id: 24,
      image: `/rain_harvest/${encodeURIComponent('WhatsApp Image 2026-10-27 at 10.54.51 (1).jpeg')}`,
      title: 'Rainwater Harvesting - Plumbing Works',
      category: 'Rainwater Harvesting',
      description: 'Plumbing work connecting the rainwater storage system.'
    },
    {
      id: 25,
      image: `/rain_harvest/${encodeURIComponent('WhatsApp Image 2026-10-27 at 10.54.51 (2).jpeg')}`,
      title: 'Rainwater Harvesting - Gutter and Downpipe',
      category: 'Rainwater Harvesting',
      description: 'Roof gutter and downpipe routing for rainwater collection.'
    },
    {
      id: 26,
      image: `/rain_harvest/${encodeURIComponent('WhatsApp Image 2026-10-27 at 10.54.51.jpeg')}`,
      title: 'Rainwater Harvesting - Downpipe Installation',
      category: 'Rainwater Harvesting',
      description: 'Installing the pipework that carries rainwater from the roof.'
    },
    {
      id: 27,
      image: `/irrigation/${encodeURIComponent('WhatsApp Image 2026-10-27 at 10.58.33 (1).jpeg')}`,
      title: 'Lawn Sprinkler Irrigation',
      category: 'Irrigation',
      description: 'Sprinkler system watering a landscaped lawn and garden.'
    },
    {
      id: 28,
      image: `/irrigation/${encodeURIComponent('WhatsApp Image 2026-10-27 at 10.58.33.jpeg')}`,
      title: 'Landscape Irrigation Project',
      category: 'Irrigation',
      description: 'Landscaped grounds with irrigation and water management.'
    },
    {
      id: 29,
      image: `/irrigation/${encodeURIComponent('WhatsApp Image 2026-10-27 at 10.58.34.jpeg')}`,
      title: 'Drip Irrigation Installation',
      category: 'Irrigation',
      description: 'Drip irrigation lines supplying water to roadside planting.'
    },
    {
      id: 30,
      image: `/poultry/${encodeURIComponent('WhatsApp Image 2026-10-27 at 11.01.49 (1).jpeg')}`,
      title: 'Poultry Water System Installation',
      category: 'Poultry Plumbing',
      description: 'Installing water tanks and plumbing components for a poultry house.'
    },
    {
      id: 31,
      image: `/poultry/${encodeURIComponent('WhatsApp Image 2026-10-27 at 11.01.49.jpeg')}`,
      title: 'Elevated Poultry Water Tank',
      category: 'Poultry Plumbing',
      description: 'Elevated water tank and connected pipework for poultry water supply.'
    },
    {
      id: 32,
      image: `/poultry/${encodeURIComponent('WhatsApp Image 2026-10-27 at 11.01.50 (1).jpeg')}`,
      title: 'Poultry House Water Lines',
      category: 'Poultry Plumbing',
      description: 'Water distribution lines installed through a poultry house.'
    },
    {
      id: 33,
      image: `/poultry/${encodeURIComponent('WhatsApp Image 2026-10-27 at 11.01.50.jpeg')}`,
      title: 'Poultry Farm Water Storage',
      category: 'Poultry Plumbing',
      description: 'Water storage and supply infrastructure serving a poultry farm.'
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredProjects.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredProjects.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="projects" className="bg-white py-20 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-600">Our portfolio</p>
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-950 lg:text-5xl">
            Our <span className="text-orange-500">Projects</span>
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-slate-600">
            Explore our portfolio of completed projects across Uganda and outside . From residential to commercial, 
            we deliver excellence in every project we undertake.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-950 text-white shadow-lg shadow-blue-950/15'
                    : 'bg-slate-100 text-slate-600 hover:bg-orange-50 hover:text-orange-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-blue-950 shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-orange-600">
                  {project.title}
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-500 transition-colors bg-black/50 rounded-full p-2"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-500 transition-colors bg-black/50 rounded-full p-2"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <img
                src={filteredProjects[selectedImage].image}
                alt={filteredProjects[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 rounded-b-lg">
                <h3 className="text-2xl font-semibold mb-2">
                  {filteredProjects[selectedImage].title}
                </h3>
                <p className="text-gray-200">
                  {filteredProjects[selectedImage].description}
                </p>
                <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mt-2">
                  {filteredProjects[selectedImage].category}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="rounded-3xl bg-gradient-to-br from-blue-950 to-blue-800 p-8 text-white shadow-xl sm:p-12">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-300">Let's build something great</p>
            <h3 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Ready to Start Your Project?</h3>
            <p className="mx-auto mb-6 max-w-2xl text-lg leading-8 text-blue-100">
              Join our satisfied clients and experience the quality that sets us apart. 
              Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
              >
                Get Free Quote by contacting Us
              </a>
              <a
                href="https://wa.me/256755593320?text=Hello%20Geer%20Technical%20Services,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
              >
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;