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
      title: 'Irrigation System Setup',
      category: 'Irrigation',
      description: 'Advanced irrigation system for agricultural and landscaping needs.'
    },
    {
      id: 5,
      image: '/image5.jpeg',
      title: 'Air Conditioning Installation',
      category: 'HVAC',
      description: 'Professional HVAC system installation for optimal climate control.'
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
      title: 'Construction Project',
      category: 'Construction',
      description: 'Complete construction project from foundation to completion.'
    },
    {
      id: 8,
      image: '/image8.jpeg',
      title: 'Renovation & Maintenance',
      category: 'Renovation',
      description: 'Professional renovation and maintenance services.'
    },
    {
      id: 9,
      image: '/image9.jpeg',
      title: 'Drainage System',
      category: 'Drainage',
      description: 'Efficient drainage system installation and maintenance.'
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
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our portfolio of completed projects across Uganda. From residential to commercial, 
            we deliver excellence in every project we undertake.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
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
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              Join our satisfied clients and experience the quality that sets us apart. 
              Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
              >
                Get Free Quote
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