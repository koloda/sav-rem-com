
import { useState } from 'react';
import { Search } from 'lucide-react';
import LightboxModal from './LightboxModal';
import { getPortfolioContent } from "../utils/contentLoader";

const PortfolioSection = () => {
  const portfolioContent = getPortfolioContent();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const portfolioImages = portfolioContent.projects.map(project => project.imageUrl);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolioImages.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + portfolioImages.length) % portfolioImages.length);
  };

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-dark">{portfolioContent.title}</h2>
          <div className="w-20 h-1 bg-company-yellow mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            {portfolioContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioContent.projects.map((project, index) => (
            <div 
              key={project.id} 
              className="portfolio-item rounded-lg shadow-sm overflow-hidden cursor-pointer aspect-[4/3]"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="overlay">
                <div className="text-white p-2 rounded-full bg-company-yellow">
                  <Search className="text-company-dark" size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <LightboxModal
          images={portfolioImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={goToNextImage}
          onPrev={goToPrevImage}
        />
      )}
    </section>
  );
};

export default PortfolioSection;
